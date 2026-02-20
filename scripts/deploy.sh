#!/bin/bash
set -e

ENVIRONMENT=${1:-dev}          # dev | test | prod
PROJECT_NAME=${2:-twin}

echo "🚀 Deploying ${PROJECT_NAME} to ${ENVIRONMENT}..."

# 1. Build Lambda package
cd "$(dirname "$0")/.."        # project root
echo "📦 Building Lambda package..."
(cd backend && uv run deploy.py)

# 2. Terraform workspace & apply
cd terraform
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=${DEFAULT_AWS_REGION:-us-east-1}
terraform init -input=false \
  -backend-config="bucket=twin-terraform-state-${AWS_ACCOUNT_ID}" \
  -backend-config="key=${ENVIRONMENT}/terraform.tfstate" \
  -backend-config="region=${AWS_REGION}" \
  -backend-config="dynamodb_table=twin-terraform-locks" \
  -backend-config="encrypt=true"

if ! terraform workspace list | grep -q "$ENVIRONMENT"; then
  terraform workspace new "$ENVIRONMENT"
else
  terraform workspace select "$ENVIRONMENT"
fi

# Common Terraform variables
TF_COMMON_VARS=(
  -var="project_name=$PROJECT_NAME"
  -var="environment=$ENVIRONMENT"
  -var="app_api_key=${APP_API_KEY:-}"
)

# Use prod.tfvars for production environment
if [ "$ENVIRONMENT" = "prod" ]; then
  TF_APPLY_CMD=(terraform apply -var-file=prod.tfvars "${TF_COMMON_VARS[@]}" -auto-approve)

  # --- Phase 1: Create ACM certificate first (needs DNS validation) ---
  echo "🔐 Phase 1: Creating ACM certificate..."
  terraform apply -var-file=prod.tfvars "${TF_COMMON_VARS[@]}" \
    -target=aws_acm_certificate.site -auto-approve

  # Check if cert is already validated
  CERT_ARN=$(terraform output -raw -json namecheap_acm_validation_records 2>/dev/null || echo "[]")
  if [ "$CERT_ARN" != "[]" ]; then
    echo ""
    echo "════════════════════════════════════════════════════════════════"
    echo "🌐 DNS RECORDS TO ADD IN NAMECHEAP (Advanced DNS):"
    echo "════════════════════════════════════════════════════════════════"
    terraform output -json namecheap_acm_validation_records | python3 -c "
import json, sys
records = json.load(sys.stdin)
for r in records:
    print(f\"  Type: {r['type']}  |  Host: {r['host']}  |  Value: {r['value']}\")
"
    echo "════════════════════════════════════════════════════════════════"
    echo ""
  fi

  # Wait for ACM cert to be validated (up to 10 minutes)
  echo "⏳ Waiting for ACM certificate validation (add DNS records in Namecheap now)..."
  ACM_ARN=$(aws acm list-certificates --region us-east-1 \
    --query "CertificateSummaryList[?DomainName=='raoulelysee.com'].CertificateArn | [0]" \
    --output text 2>/dev/null || echo "")

  if [ -n "$ACM_ARN" ] && [ "$ACM_ARN" != "None" ]; then
    echo "   Certificate ARN: $ACM_ARN"
    echo "   Polling every 30s for up to 10 minutes..."
    ATTEMPTS=0
    MAX_ATTEMPTS=20
    while [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; do
      STATUS=$(aws acm describe-certificate --region us-east-1 \
        --certificate-arn "$ACM_ARN" \
        --query "Certificate.Status" --output text)
      echo "   Attempt $((ATTEMPTS+1))/$MAX_ATTEMPTS: Status = $STATUS"
      if [ "$STATUS" = "ISSUED" ]; then
        echo "✅ Certificate validated!"
        break
      fi
      ATTEMPTS=$((ATTEMPTS+1))
      sleep 30
    done

    if [ "$STATUS" != "ISSUED" ]; then
      echo ""
      echo "⚠️  Certificate not yet validated after 10 minutes."
      echo "   1. Add the DNS records above in Namecheap Advanced DNS"
      echo "   2. Wait ~5-15 min for validation"
      echo "   3. Re-run: ./scripts/deploy.sh prod"
      echo ""
      echo "   The ACM certificate has been created and is waiting for DNS validation."
      echo "   No other resources were deployed. Re-run once validated."
      exit 1
    fi
  fi

  # --- Phase 2: Full apply with validated certificate ---
  echo "🎯 Phase 2: Full Terraform apply with custom domain..."
  "${TF_APPLY_CMD[@]}"
else
  terraform apply "${TF_COMMON_VARS[@]}" -auto-approve
fi

API_URL=$(terraform output -raw api_gateway_url)
FRONTEND_BUCKET=$(terraform output -raw s3_frontend_bucket)
CUSTOM_URL=$(terraform output -raw custom_domain_url 2>/dev/null || true)

# 3. Build + deploy frontend
cd ../frontend

# Create production environment file with API URL and API Key
echo "📝 Setting environment for production..."
cat > .env.production <<EOF
NEXT_PUBLIC_API_URL=$API_URL
NEXT_PUBLIC_API_KEY=${APP_API_KEY:-}
EOF

npm install
npm run build
aws s3 sync ./out "s3://$FRONTEND_BUCKET/" --delete
cd ..

# 4. Print CloudFront site records for Namecheap (prod only)
if [ "$ENVIRONMENT" = "prod" ]; then
  echo ""
  echo "════════════════════════════════════════════════════════════════"
  echo "🌐 SITE RECORDS TO ADD IN NAMECHEAP (to point domain to CloudFront):"
  echo "════════════════════════════════════════════════════════════════"
  terraform -chdir=terraform output -json namecheap_site_records | python3 -c "
import json, sys
records = json.load(sys.stdin)
for r in records:
    print(f\"  Type: {r['type']}  |  Host: {r['host']}  |  Value: {r['value']}\")
"
  echo "════════════════════════════════════════════════════════════════"
fi

# 5. Final messages
echo -e "\n✅ Deployment complete!"
echo "🌐 CloudFront URL : $(terraform -chdir=terraform output -raw cloudfront_url)"
if [ -n "$CUSTOM_URL" ]; then
  echo "🔗 Custom domain  : $CUSTOM_URL"
fi
echo "📡 API Gateway    : $API_URL"

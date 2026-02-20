output "api_gateway_url" {
    description = "URL of the API Gateway"
    value       = aws_apigatewayv2_api.main.api_endpoint
  }
  
  output "cloudfront_url" {
    description = "URL of the CloudFront distribution"
    value       = "https://${aws_cloudfront_distribution.main.domain_name}"
  }
  
  output "s3_frontend_bucket" {
    description = "Name of the S3 bucket for frontend"
    value       = aws_s3_bucket.frontend.id
  }
  
  output "s3_memory_bucket" {
    description = "Name of the S3 bucket for memory storage"
    value       = aws_s3_bucket.memory.id
  }
  
  output "lambda_function_name" {
    description = "Name of the Lambda function"
    value       = aws_lambda_function.api.function_name
  }
  
  output "custom_domain_url" {
    description = "Root URL of the production site"
    value       = var.use_custom_domain ? "https://${var.root_domain}" : ""
  }

  # ── Namecheap DNS records (add these manually) ──────────────────────────

  output "namecheap_acm_validation_records" {
    description = "CNAME records to add in Namecheap Advanced DNS for ACM certificate validation"
    value = var.use_custom_domain ? [
      for dvo in aws_acm_certificate.site[0].domain_validation_options : {
        host  = replace(dvo.resource_record_name, ".${var.root_domain}.", "")
        type  = dvo.resource_record_type
        value = dvo.resource_record_value
      }
    ] : []
  }

  output "namecheap_site_records" {
    description = "CNAME records to add in Namecheap Advanced DNS to point domain to CloudFront"
    value = var.use_custom_domain ? [
      {
        host  = "@"
        type  = "ALIAS"
        value = aws_cloudfront_distribution.main.domain_name
      },
      {
        host  = "www"
        type  = "CNAME"
        value = aws_cloudfront_distribution.main.domain_name
      }
    ] : []
  }
import Navbar from '@/components/Navbar';
import Twin from '@/components/twin';
import {
  Shield,
  Brain,
  Code2,
  Cpu,
  Scale,
  ArrowDown,
  Mail,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const expertiseAreas = [
  {
    icon: Shield,
    title: 'Security Architecture & IAM',
    description:
      'Enterprise IAM/CIAM strategy, Zero Trust implementation, privileged access controls, and threat modeling (STRIDE/MITRE ATT&CK). Secure design from architecture phase through production.',
    tags: ['Zero Trust', 'IAM / CIAM', 'STRIDE', 'Threat Modeling', 'MITRE ATT&CK'],
  },
  {
    icon: Scale,
    title: 'Governance, Risk & Compliance',
    description:
      'Nearly 10 years advising financial institutions as 1st and 2nd line of defense. NIST-based program design, risk quantification for investment decisions, regulatory compliance, and executive security advisory.',
    tags: ['NIST', 'GRC', 'Risk Analysis', 'Compliance', 'Executive Advisory'],
  },
  {
    icon: Brain,
    title: 'AI & Agentic Engineering',
    description:
      'Production multi-agent systems using OpenAI Agent SDK, CrewAI, LangGraph, and AutoGen. Hands-on experience with 40+ LLMs — open source (Ollama) and cloud. Vector databases, Graph RAG (Neo4j + Qdrant), and MCP integrations.',
    tags: ['Graph RAG', 'Vector DB', 'Multi-Agent', '40+ LLMs', 'MCP'],
  },
  {
    icon: Code2,
    title: 'DevSecOps & Application Security',
    description:
      'Secure CI/CD pipelines (Azure DevOps), OWASP Top 10 remediation, vulnerability management with risk-based prioritization. 10+ years of software development across web (React, Next.js), mobile (Flutter), and automation (Python).',
    tags: ['OWASP', 'DevSecOps', 'Python', 'React / Next.js', 'Flutter'],
  },
  {
    icon: Cpu,
    title: 'Cloud Architecture & MLOps',
    description:
      'End-to-end AI deployment on AWS (CloudFront, Lambda, Bedrock), Microsoft Azure (Container Apps), Cloudflare Pages, and Vercel. Infrastructure as Code with Terraform and GitHub Actions CI/CD.',
    tags: ['AWS', 'Azure', 'Cloudflare Pages', 'Terraform', 'GitHub Actions'],
  },
];

const projects = [
  {
    title: 'AI Digital Twin',
    description:
      'Personal AI representative on a fully serverless AWS architecture: CloudFront, API Gateway, S3, Lambda, and Amazon Bedrock for LLM inference. Provisioned with Terraform and automated through GitHub Actions CI/CD.',
    tags: ['AWS Bedrock', 'Lambda', 'Terraform', 'Next.js', 'GitHub Actions'],
    badge: 'Live',
  },
  {
    title: 'Legal Brain — Graph RAG',
    description:
      'AI legal assistant trained on Quebec and Canadian law using Graph RAG: a Neo4j knowledge graph combined with a Qdrant vector database for semantic retrieval. Delivers precise article-level citations. Targeting LegalTech commercialization.',
    tags: ['Graph RAG', 'Neo4j', 'Qdrant', 'LangGraph', 'Canadian Law'],
    badge: 'In Development',
  },
  {
    title: 'CanGuard Gateway',
    description:
      'Data sovereignty solution for Quebec organizations (health, finance, government) exposed to the US CLOUD Act and Loi 25. Encryption gateway with agentic AI for anomaly detection and compliance automation via Microsoft Graph API.',
    tags: ['Data Sovereignty', 'Agentic AI', 'Loi 25', 'Encryption', 'Graph API'],
    badge: 'Commercial',
  },
  {
    title: 'Voice AI & Edge Lab',
    description:
      'Production voice cloning app deployed on Hugging Face. Separately: on-device inference experiments with a Raspberry Pi 5 and AI Hat+2 for real-time computer vision and a Pi Dog robot — stress-testing open source models at the edge.',
    tags: ['Voice Cloning', 'Raspberry Pi 5', 'AI Hat+2', 'Edge AI', 'Hugging Face'],
    badge: 'Research',
  },
  {
    title: 'Agentic Systems Portfolio',
    description:
      'Engineering across all major agentic frameworks: OpenAI Agent SDK, CrewAI, LangGraph, AutoGen, and MCP (40+ tool integrations). Includes deep research agents, SDR sales agents, simulated dev teams via Docker, and a financial analysis floor.',
    tags: ['OpenAI SDK', 'CrewAI', 'LangGraph', 'AutoGen', 'MCP'],
    badge: 'Research',
  },
];

const badgeStyle: Record<string, string> = {
  Live: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20',
  'In Development': 'bg-amber-500/15 text-amber-400 border border-amber-500/20',
  Commercial: 'bg-blue-500/15 text-blue-400 border border-blue-500/20',
  Research: 'bg-zinc-700/50 text-zinc-400 border border-zinc-600/30',
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.015) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 text-xs font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Building Sovereign AI Architectures &nbsp;·&nbsp; Montréal, QC
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
              Raoul Elysée
            </h1>

            {/* Title */}
            <p className="text-lg md:text-xl text-emerald-400 font-medium mb-6">
              Senior Cybersecurity Architect&nbsp;&nbsp;·&nbsp;&nbsp;IAM &amp; AI Security Specialist
            </p>

            {/* Description */}
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              I design secure and scalable AI-driven architectures for enterprise production environments — bridging identity management, threat modeling, cloud security, and artificial intelligence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#digital-twin"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors duration-200"
              >
                Talk to My Digital Twin
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800/60 hover:bg-zinc-700/60 text-white font-medium rounded-xl border border-zinc-700/50 transition-colors duration-200"
              >
                View Projects
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="mt-20 flex justify-center">
              <a href="#about" className="text-zinc-600 hover:text-zinc-400 transition-colors animate-bounce">
                <ArrowDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────────── */}
      <section id="about" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">About</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Who I Am</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 items-start">
              {/* Bio */}
              <div className="md:col-span-2 space-y-4 text-zinc-300 text-base leading-relaxed">
                <p>
                  I am a senior cybersecurity professional with{' '}
                  <strong className="text-white">20 years of IT experience</strong>, including nearly 10
                  years in information security. I specialize in designing and implementing scalable
                  security capabilities for financial institutions and regulated environments.
                </p>
                <p>
                  My approach combines strategic vision, operational execution, and architecture-level
                  thinking. I have advised executive committees on security maturity, led GRC programs
                  across the 1st and 2nd lines of defense, and driven cloud security transformations.
                </p>
                <p>
                  More recently I have developed deep expertise in{' '}
                  <strong className="text-white">agentic AI engineering</strong> — building multi-agent
                  systems and deploying LLM-powered solutions in production on AWS, while applying my
                  security principles (guardrails, memory management, least privilege) to every AI
                  architecture I design.
                </p>
                <p>
                  I am currently completing a{' '}
                  <strong className="text-white">
                    Bachelor&apos;s in Cybersecurity at Polytechnique Montréal
                  </strong>{' '}
                  (evenings), reinforcing my technical and academic foundation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                {[
                  { value: '20+', label: 'Years in IT' },
                  { value: '10+', label: 'Years in Cybersecurity' },
                  { value: '40+', label: 'LLMs Tested (open source + cloud)' },
                  { value: '2027', label: 'BSc Cybersecurity (in progress)' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="p-4 bg-zinc-800/40 border border-zinc-700/40 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                    <div className="text-xs text-zinc-400 mt-0.5 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ─────────────────────────────────────────────────────────── */}
      <section id="expertise" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Core Competencies</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {expertiseAreas.map(area => (
                <div
                  key={area.title}
                  className="p-6 bg-zinc-800/30 border border-zinc-700/40 rounded-2xl hover:border-zinc-600/60 transition-colors duration-200"
                >
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                    <area.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{area.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-zinc-700/50 text-zinc-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────────── */}
      <section id="projects" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                Projects
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Selected Work</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {projects.map(project => (
                <div
                  key={project.title}
                  className="p-6 bg-zinc-800/30 border border-zinc-700/40 rounded-2xl hover:border-zinc-600/60 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-white font-semibold text-base">{project.title}</h3>
                    <span className={`shrink-0 px-2 py-0.5 rounded-md text-xs font-medium ${badgeStyle[project.badge]}`}>
                      {project.badge}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-zinc-700/50 text-zinc-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
              &ldquo;Security is not a control function.{' '}
              <span className="text-emerald-400">It is a business enabler.</span>&rdquo;
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed">
              &ldquo;Artificial Intelligence is not a replacement.{' '}
              <span className="text-emerald-400">It is a force multiplier.</span>&rdquo;
            </p>
            <p className="text-xl md:text-2xl font-light text-zinc-300 leading-relaxed">
              &ldquo;<span className="text-emerald-400">Identity is the new perimeter.</span>&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── DIGITAL TWIN ──────────────────────────────────────────────────────── */}
      <section id="digital-twin" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                AI-Powered
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Talk to My Digital Twin
              </h2>
              <p className="text-zinc-400 text-base max-w-xl mx-auto">
                This AI representative can discuss my experience, projects, architecture decisions, and
                expertise — in English or French — as if you were speaking with me directly.
              </p>
            </div>

            <div className="h-[580px]">
              <Twin />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="relative py-24 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-zinc-400 text-base mb-10 max-w-md mx-auto">
              Interested in discussing security architecture, AI-driven security transformation, or
              leadership opportunities? I would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:raoulelysee@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-zinc-800/60 hover:bg-zinc-700/60 text-white font-medium rounded-xl border border-zinc-700/50 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                raoulelysee@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/raoul-elysee-636ab867"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-zinc-800/60 hover:bg-zinc-700/60 text-white font-medium rounded-xl border border-zinc-700/50 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer className="relative py-8 border-t border-zinc-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
            <span>&copy; 2025 Raoul Elysée. All rights reserved.</span>
            <span>Cybersecurity Architect&nbsp;·&nbsp;AI Specialist&nbsp;·&nbsp;Montréal, QC</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

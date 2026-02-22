export type Lang = 'en' | 'fr';
export type BadgeKey = 'Live' | 'In Development' | 'Commercial' | 'Research' | 'Enterprise';

export interface ExpertiseArea {
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  badge: BadgeKey;
}

export interface Translations {
  nav: {
    about: string;
    expertise: string;
    projects: string;
    digitalTwin: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    label: string;
    heading: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    stats: { value: string; label: string }[];
  };
  expertise: {
    label: string;
    heading: string;
    areas: ExpertiseArea[];
  };
  projects: {
    label: string;
    heading: string;
    items: Project[];
  };
  badgeLabels: Record<BadgeKey, string>;
  philosophy: {
    q1: string;
    q1em: string;
    q2: string;
    q2em: string;
    q3em: string;
  };
  digitalTwin: {
    badge: string;
    heading: string;
    description: string;
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    linkedin: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

const en: Translations = {
  nav: {
    about: 'About',
    expertise: 'Expertise',
    projects: 'Projects',
    digitalTwin: 'Digital Twin',
    contact: 'Contact',
    cta: "Let's Talk",
  },
  hero: {
    badge: 'Building Sovereign AI Architectures',
    subtitle: 'Security & AI Transformation Expert\u00a0\u00a0·\u00a0\u00a0Regulated Financial Industries',
    description:
      'Systemic architect bridging emerging AI technologies with regulatory compliance and enterprise risk reduction — aligning security capabilities with the governance frameworks, fiduciary responsibilities, and strategic objectives of regulated financial and insurance institutions.',
    ctaPrimary: 'Talk to My Digital Twin',
    ctaSecondary: 'View Projects',
  },
  about: {
    label: 'About',
    heading: 'Who I Am',
    p1: 'I am a senior cybersecurity professional with 20 years of IT experience, including 10 years as an IT security coordinator and 6 years as a regulatory compliance consultant in pension and insurance sectors. My career began with a college diploma in business administration, followed by studies in computerized management and a university certificate in software development — years spent building web and mobile products with startup teams before pivoting fully into security and governance.',
    p2: 'My approach bridges strategic advisory and operational execution. I have collaborated with internal audit teams, enterprise architects, domain architects, and executive committees — advancing security maturity, leading GRC programs, and translating regulatory requirements into concrete architecture decisions, with deep understanding of the fiduciary responsibilities and systemic risks of regulated financial institutions. This executive mindset also manifests in my 10+ year tenure as president of a co-ownership corporation — leading recruitment, RFP management, stakeholder assemblies, member communications, and board-level governance decisions.',
    p3: 'More recently I have developed deep expertise in agentic AI engineering — building multi-agent systems and deploying LLM-powered solutions in production across AWS, Azure, GCP, Vercel, and private VPS environments, while applying security principles (guardrails, memory management, least privilege) to every AI architecture I design. I also maintain personal AI infrastructures connected to a broad toolset to amplify creativity, accelerate ideation, and explore how AI can genuinely augment human and production capabilities.',
    p4: "I am currently completing a Bachelor's degree by accumulation in Cybersecurity at Polytechnique Montréal (evenings). Outside of work and studies, I spend time with my family, follow finance, economics, and current events closely, train at the gym, and enjoy cycling in the summer and hiking through the forest.",
    stats: [
      { value: '20+', label: 'Years in IT' },
      { value: '10+', label: 'Years in Cybersecurity & Compliance' },
      { value: '40+', label: 'LLMs Tested (open source + cloud)' },
      { value: '2027', label: 'BSc Cybersecurity (in progress)' },
    ],
  },
  expertise: {
    label: 'Expertise',
    heading: 'Core Competencies',
    areas: [
      {
        title: 'Security Architecture & IAM',
        description:
          'Enterprise IAM/CIAM strategy, Zero Trust implementation, privileged access controls, and threat modeling (STRIDE/MITRE ATT&CK). Secure design from architecture phase through production.',
        tags: ['Zero Trust', 'IAM / CIAM', 'STRIDE', 'Threat Modeling', 'MITRE ATT&CK'],
      },
      {
        title: 'Governance, Risk & Compliance',
        description:
          '6 years as regulatory compliance consultant in pension and insurance sectors at Canada Life and London Life, holding roles across both the 1st and 2nd lines of defense. Provided strategic risk advisory and recommendations to executive leadership on regulatory requirements and enterprise risk exposure. Delivered continuous improvement programs and operational guides with associated controls, KPIs, and KCIs to track compliance maturity in highly regulated environments.',
        tags: ['GRC', 'Regulatory Compliance', 'Risk Advisory', 'Executive Advisory', 'Compliance Maturity'],
      },
      {
        title: 'AI & Agentic Engineering',
        description:
          'Production multi-agent systems using OpenAI Agent SDK, CrewAI, LangGraph, and AutoGen. Hands-on experience with 40+ LLMs — open source (Ollama) and cloud. Vector databases, Graph RAG (Neo4j + Qdrant), and MCP integrations.',
        tags: ['Graph RAG', 'Vector DB', 'Multi-Agent', '40+ LLMs', 'MCP'],
      },
      {
        title: 'DevSecOps & Application Security',
        description:
          'Secure CI/CD pipelines (Azure DevOps), OWASP Top 10 remediation, vulnerability management with risk-based prioritization. 10+ years of software development across web (React, Next.js), mobile (Flutter), and automation (Python).',
        tags: ['OWASP', 'DevSecOps', 'Python', 'React / Next.js', 'Flutter'],
      },
      {
        title: 'Cloud Architecture & MLOps',
        description:
          'End-to-end AI deployment on AWS, Azure, GCP, Vercel, and private VPS environments — including self-hosted open-source vector databases and RAG systems for data sovereignty use cases. Infrastructure as Code with Terraform and GitHub Actions CI/CD.',
        tags: ['AWS / Azure / GCP', 'Private VPS', 'Data Sovereignty', 'Terraform', 'GitHub Actions'],
      },
    ],
  },
  projects: {
    label: 'Projects',
    heading: 'Selected Work',
    items: [
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
        title: 'Business & Enterprise Architect – Security Governance',
        description:
          'Business and enterprise architecture roles within the governance function of a major financial institution. Strategic advisory to executive committees on security investment prioritization aligned with enterprise risk reduction. Validated project relevance and funding continuity through structured value and risk posture impact analyses. Directed the project selection process to ensure alignment between technological capabilities and the institution\'s business ambitions.',
        tags: ['Business Architecture', 'Enterprise Architecture', 'Strategic Advisory', 'Executive Committees', 'Portfolio Governance'],
        badge: 'Enterprise',
      },
      {
        title: 'Security & Systemic Risk Governance Program',
        description:
          'Strategic direction of GRC and IAM governance in regulated financial environments, under NIST, CIS, and TOGAF frameworks. Governed complex stakeholder ecosystems — from board-level oversight to cross-functional technical teams. Operationalized security through vulnerability management programs and DevSecOps pipelines (SCA, SAST, DAST). Designed IAM processes, assessed organizational maturity, and authored security guides and RFP security requirements.',
        tags: ['NIST / CIS / TOGAF', 'Systemic Risk Governance', 'Stakeholder Management', 'GRC & IAM', 'DevSecOps'],
        badge: 'Enterprise',
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
    ],
  },
  badgeLabels: {
    Live: 'Live',
    'In Development': 'In Development',
    Commercial: 'Commercial',
    Research: 'Research',
    Enterprise: 'Enterprise',
  },
  philosophy: {
    q1: 'Security is not a control function.',
    q1em: 'It is a business enabler.',
    q2: 'Artificial Intelligence is not a replacement.',
    q2em: 'It is a force multiplier.',
    q3em: 'Identity is the new perimeter.',
  },
  digitalTwin: {
    badge: 'AI-Powered',
    heading: 'Talk to My Digital Twin',
    description:
      'This AI representative can discuss my experience, projects, architecture decisions, and expertise — in English or French — as if you were speaking with me directly.',
  },
  contact: {
    label: 'Contact',
    heading: "Let's Connect",
    description:
      'Interested in discussing security architecture, AI-driven security transformation, or leadership opportunities? I would love to hear from you.',
    linkedin: 'LinkedIn Profile',
  },
  footer: {
    rights: '© 2025 Raoul Elysée. All rights reserved.',
    tagline: 'Cybersecurity Architect\u00a0·\u00a0AI Specialist\u00a0·\u00a0Montréal, QC',
  },
};

const fr: Translations = {
  nav: {
    about: 'À propos',
    expertise: 'Expertise',
    projects: 'Projets',
    digitalTwin: 'Jumeau Numérique',
    contact: 'Contact',
    cta: 'Contactez-moi',
  },
  hero: {
    badge: 'Conception d\u2019architectures IA souveraines',
    subtitle: 'Expert en Transformation Sécurité & IA\u00a0\u00a0·\u00a0\u00a0Industries Financières Régulées',
    description:
      'Architecte systémique alignant les technologies IA émergentes sur la conformité réglementaire et la réduction du risque d\u2019entreprise — harmonisant les capacités de sécurité avec les cadres de gouvernance, la responsabilité fiduciaire et les objectifs stratégiques des institutions financières et d\u2019assurance régulées.',
    ctaPrimary: 'Parler à mon Jumeau Numérique',
    ctaSecondary: 'Voir les projets',
  },
  about: {
    label: 'À propos',
    heading: 'Qui je suis',
    p1: 'Je suis un professionnel senior en cybersécurité avec 20 ans d\u2019expérience en TI, dont 10 ans comme coordonnateur de sécurité informatique et 6 ans comme consultant en conformité réglementaire dans les secteurs des régimes de retraite et de l\u2019assurance. Mon parcours a débuté par un DEC en techniques de gestion, suivi d\u2019études en gestion informatisée et d\u2019un certificat universitaire en développement logiciel — des années consacrées à bâtir des produits web et mobiles au sein d\u2019équipes startup, avant de me concentrer pleinement sur la sécurité et la gouvernance.',
    p2: 'Mon approche conjugue conseil stratégique et exécution opérationnelle. J\u2019ai collaboré avec des équipes d\u2019audit interne, des architectes d\u2019entreprise, des architectes de domaine et des comités exécutifs — pour faire progresser la maturité en sécurité, piloter des programmes GRC et traduire les exigences réglementaires en décisions d\u2019architecture concrètes, avec une compréhension approfondie des responsabilités fiduciaires et des risques systémiques des institutions financières régulées. Cette posture exécutive se reflète également dans ma présidence d\u2019une copropriété depuis plus de 10 ans — recrutement, appels d\u2019offre, animation d\u2019assemblées, communication aux membres et décisions de gouvernance au niveau du conseil d\u2019administration.',
    p3: 'Plus récemment, j\u2019ai développé une expertise approfondie en ingénierie de l\u2019IA agentique — en construisant des systèmes multi-agents et en déployant des solutions LLM en production sur AWS, Azure, GCP, Vercel et des environnements VPS privés, tout en appliquant mes principes de sécurité (guardrails, gestion de la mémoire, moindre privilège) à chaque architecture IA que je conçois. Je maintiens également des infrastructures IA personnelles connectées à un large écosystème d\u2019outils, pour amplifier ma créativité, accélérer la concrétisation de mes idées et explorer comment l\u2019IA peut réellement augmenter les capacités humaines et de production.',
    p4: 'Je complète actuellement un baccalauréat par cumul en cybersécurité à Polytechnique Montréal (cours du soir). En dehors du travail et des études, je passe du temps avec ma famille, je m\u2019intéresse beaucoup à la finance, l\u2019économie et l\u2019actualité, je m\u2019entraîne au gym et j\u2019aime faire du vélo l\u2019été et marcher en forêt.',
    stats: [
      { value: '20+', label: 'Ans en TI' },
      { value: '10+', label: 'Ans en Cybersécurité' },
      { value: '40+', label: 'LLMs testés (open source + cloud)' },
      { value: '2027', label: 'Bac Cybersécurité (en cours)' },
    ],
  },
  expertise: {
    label: 'Expertise',
    heading: 'Compétences clés',
    areas: [
      {
        title: 'Architecture Sécurité & IAM',
        description:
          'Stratégie IAM/CIAM entreprise, implémentation Zero Trust, contrôles d\u2019accès privilégiés et modélisation des menaces (STRIDE/MITRE ATT&CK). Conception sécurisée depuis la phase d\u2019architecture jusqu\u2019en production.',
        tags: ['Zero Trust', 'IAM / CIAM', 'STRIDE', 'Threat Modeling', 'MITRE ATT&CK'],
      },
      {
        title: 'Gouvernance, Risque & Conformité',
        description:
          '6 ans comme consultant en conformité réglementaire dans les secteurs des régimes de retraite et de l\u2019assurance chez Canada Vie et London Life, occupant des rôles en 1re et 2e ligne de défense. Conseils stratégiques aux dirigeants exécutifs sur les exigences réglementaires et l\u2019exposition au risque d\u2019entreprise. Programmes d\u2019amélioration continue et guides opérationnels avec contrôles associés, KPIs et KCIs pour suivre la maturité de conformité en environnements hautement régulés.',
        tags: ['GRC', 'Conformité réglementaire', 'Conseil en risque', 'Conseil exécutif', 'Maturité de conformité'],
      },
      {
        title: 'IA & Ingénierie Agentique',
        description:
          'Systèmes multi-agents en production avec OpenAI Agent SDK, CrewAI, LangGraph et AutoGen. Expérience avec plus de 40 LLMs — open source (Ollama) et cloud. Bases de données vectorielles, Graph RAG (Neo4j + Qdrant) et intégrations MCP.',
        tags: ['Graph RAG', 'Base vectorielle', 'Multi-Agent', '40+ LLMs', 'MCP'],
      },
      {
        title: 'DevSecOps & Sécurité Applicative',
        description:
          'Pipelines CI/CD sécurisés (Azure DevOps), remédiation OWASP Top 10, gestion des vulnérabilités avec priorisation par le risque. Plus de 10 ans de développement logiciel : web (React, Next.js), mobile (Flutter) et automatisation (Python).',
        tags: ['OWASP', 'DevSecOps', 'Python', 'React / Next.js', 'Flutter'],
      },
      {
        title: 'Architecture Cloud & MLOps',
        description:
          'Déploiement IA de bout en bout sur AWS (CloudFront, Lambda, Bedrock), Microsoft Azure (Container Apps), Cloudflare Pages et Vercel. Infrastructure as Code avec Terraform et CI/CD via GitHub Actions.',
        tags: ['AWS', 'Azure', 'Cloudflare Pages', 'Terraform', 'GitHub Actions'],
      },
    ],
  },
  projects: {
    label: 'Projets',
    heading: 'Réalisations',
    items: [
      {
        title: 'Jumeau Numérique IA',
        description:
          'Représentant IA personnel sur une architecture AWS entièrement serverless : CloudFront, API Gateway, S3, Lambda et Amazon Bedrock pour l\u2019inférence LLM. Provisionné avec Terraform et automatisé via GitHub Actions CI/CD.',
        tags: ['AWS Bedrock', 'Lambda', 'Terraform', 'Next.js', 'GitHub Actions'],
        badge: 'Live',
      },
      {
        title: 'Legal Brain — Graph RAG',
        description:
          'Assistant juridique IA entraîné sur le droit québécois et canadien via Graph RAG : un graphe de connaissances Neo4j combiné à une base vectorielle Qdrant pour la récupération sémantique. Fournit des citations précises au niveau des articles. Ciblant une commercialisation LegalTech.',
        tags: ['Graph RAG', 'Neo4j', 'Qdrant', 'LangGraph', 'Droit canadien'],
        badge: 'In Development',
      },
      {
        title: 'Architecte d\u2019affaires & d\u2019entreprise \u2013 Gouvernance Sécurité',
        description:
          'Rôles d\u2019architecture d\u2019affaires et d\u2019entreprise au sein de la fonction gouvernance d\u2019une grande institution financière. Conseil stratégique aux comités exécutifs sur la priorisation des investissements en sécurité, alignée sur la réduction du risque d\u2019entreprise. Validation de la pertinence et de la continuité du financement des projets au travers d\u2019analyses de valeur et d\u2019impact sur la posture de risque. Pilotage du processus de sélection pour garantir l\u2019alignement entre capacités technologiques et ambitions d\u2019affaires.',
        tags: ['Architecture d\u2019affaires', 'Architecture d\u2019entreprise', 'Conseil stratégique', 'Comités exécutifs', 'Gouvernance de portefeuille'],
        badge: 'Enterprise',
      },
      {
        title: 'Programme de Gouvernance Sécurité en Entreprise',
        description:
          'Direction stratégique de la gouvernance GRC et GIA, incluant la définition de politiques, de normes et de cadres de contrôle basés sur NIST, CIS et TOGAF. Opérationnalisation de la sécurité par la mise en place de programmes de gestion des vulnérabilités et la sécurisation des pipelines DevSecOps (SCA, SAST, DAST). Conception de processus GIA et évaluation de la maturité organisationnelle. Rédaction de guides de sécurité et de requis pour appels d\u2019offres.',
        tags: ['NIST / CIS / TOGAF', 'Gouvernance GRC & GIA', 'DevSecOps', 'Gestion des vulnérabilités', 'Politiques & Normes'],
        badge: 'Enterprise',
      },
      {
        title: 'IA Vocale & Laboratoire Edge',
        description:
          'Application de clonage vocal en production déployée sur Hugging Face. Parallèlement : expériences d\u2019inférence sur appareil avec un Raspberry Pi 5 et AI Hat+2 pour la vision en temps réel et un robot Pi Dog — tests intensifs de modèles open source en conditions edge.',
        tags: ['Clonage vocal', 'Raspberry Pi 5', 'AI Hat+2', 'Edge AI', 'Hugging Face'],
        badge: 'Research',
      },
      {
        title: 'Portfolio Systèmes Agentiques',
        description:
          'Ingénierie sur tous les principaux frameworks agentiques : OpenAI Agent SDK, CrewAI, LangGraph, AutoGen et MCP (40+ intégrations d\u2019outils). Comprend des agents de recherche, agents SDR commerciaux, équipes de développement simulées via Docker et un plancher d\u2019analyse financière.',
        tags: ['OpenAI SDK', 'CrewAI', 'LangGraph', 'AutoGen', 'MCP'],
        badge: 'Research',
      },
    ],
  },
  badgeLabels: {
    Live: 'En ligne',
    'In Development': 'En développement',
    Commercial: 'Commercial',
    Research: 'Recherche',
    Enterprise: 'Entreprise',
  },
  philosophy: {
    q1: 'La sécurité n\u2019est pas une fonction de contrôle.',
    q1em: 'C\u2019est un catalyseur de performance.',
    q2: 'L\u2019intelligence artificielle n\u2019est pas un remplacement.',
    q2em: 'C\u2019est un multiplicateur de force.',
    q3em: 'L\u2019identité est le nouveau périmètre.',
  },
  digitalTwin: {
    badge: 'Propulsé par l\u2019IA',
    heading: 'Parler à mon Jumeau Numérique',
    description:
      'Ce représentant IA peut discuter de mon expérience, mes projets, mes décisions d\u2019architecture et mon expertise — en anglais ou en français — comme si vous parliez directement avec moi.',
  },
  contact: {
    label: 'Contact',
    heading: 'Connectons-nous',
    description:
      'Vous souhaitez discuter d\u2019architecture sécurité, de transformation IA ou d\u2019opportunités de leadership ? Je serais ravi d\u2019échanger.',
    linkedin: 'Profil LinkedIn',
  },
  footer: {
    rights: '© 2025 Raoul Elysée. Tous droits réservés.',
    tagline: 'Architecte Cybersécurité\u00a0·\u00a0Spécialiste IA\u00a0·\u00a0Montréal, QC',
  },
};

const translations: Record<Lang, Translations> = { en, fr };
export default translations;

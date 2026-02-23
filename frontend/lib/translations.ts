export type Lang = 'en' | 'fr';
export type BadgeKey = 'Live' | 'In Development' | 'Commercial' | 'Research' | 'Enterprise';
export type EducationStatus = 'completed' | 'in_progress';

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  status: EducationStatus;
}

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
    education: string;
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
  education: {
    label: string;
    heading: string;
    statusLabels: { completed: string; in_progress: string };
    items: EducationItem[];
  };
  differentiators: {
    label: string;
    heading: string;
    items: {
      title: string;
      description: string;
      points: string[];
    }[];
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

const en: Translations = {
  nav: {
    about: 'About',
    education: 'Education',
    expertise: 'Expertise',
    projects: 'Projects',
    digitalTwin: 'Digital Twin',
    contact: 'Contact',
    cta: "Let's Talk",
  },
  hero: {
    badge: 'Enterprise Security & AI Architecture',
    subtitle: 'Enterprise Security & AI Architect\u00a0\u00a0·\u00a0\u00a0Regulated Industries',
    description:
      'Bridging AI innovation, cybersecurity architecture, and regulatory governance for complex, regulated enterprises — aligning technical execution with risk reduction, compliance requirements, and strategic business objectives.',
    ctaPrimary: 'Talk to My Digital Twin',
    ctaSecondary: 'View Projects',
  },
  about: {
    label: 'About',
    heading: 'Who I Am',
    p1: "I am a cybersecurity and AI architect with over 20 years of IT experience. Nearly 19 years were spent within the Great-West Lifeco group — across London Life and Canada Life — where I progressed through claims and insurance operations, then over a decade as IT Security Coordinator, and finally as a regulatory compliance consultant. This breadth of roles within regulated financial institutions — across multiple functions and lines of defense — gives me a genuine understanding of the business and fiduciary stakes behind every system I protect. My career began with a college diploma in business administration at Collège Marie-Victorin and a university certificate in software development at UQAM — years also spent building web and mobile products with startup teams.",
    p2: 'My expertise sits at the intersection of cybersecurity architecture, regulatory compliance, governance and risk management, AI systems, and operational security leadership — combining deep technical execution with regulatory awareness and board-level governance exposure. I have collaborated with internal audit teams, enterprise architects, domain architects, and executive committees — advancing security maturity, leading GRC programs, and translating regulatory requirements into concrete architecture decisions. This executive mindset extends to my 10+ year tenure as president of a co-ownership corporation — leading recruitment, RFP management, stakeholder assemblies, member communications, and board-level governance decisions.',
    p3: 'More recently I have developed deep expertise in agentic AI engineering — building multi-agent systems and deploying LLM-powered solutions in production across AWS, Azure, GCP, Vercel, and private VPS environments, while applying security principles (guardrails, memory management, least privilege) to every AI architecture I design. I also maintain personal AI infrastructures connected to a broad toolset to amplify creativity, accelerate ideation, and explore how AI can genuinely augment human and production capabilities.',
    p4: "I am currently completing a Bachelor's degree by accumulation in Cybersecurity at Polytechnique Montréal (evenings). Outside of work and studies, I spend time with my family, follow finance, economics, and current events closely, train at the gym, and enjoy cycling in the summer and hiking through the forest.",
    stats: [
      { value: '19', label: 'Years at Great-West Lifeco' },
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
          '6 years as regulatory compliance consultant in pension and insurance sectors at Canada Life and London Life, across both 1st and 2nd lines of defense. Delivered strategic risk advisory on a broad regulatory landscape — PIPEDA, Loi 25, Insurance Act, Loi RCR, CCQ, PCI DSS, NIST, and ISO 27001 — and enterprise risk exposure. Led stakeholder awareness initiatives and collaborated with business units to translate complex compliance requirements into operational practices — driving maturity through continuous improvement programs, KPIs, and KCIs.',
        tags: ['PIPEDA / Loi 25 / PCI DSS', 'Insurance Act / Loi RCR / CCQ', 'NIST / ISO 27001', 'Stakeholder Awareness', 'GRC'],
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
          'Secure CI/CD pipelines integrating SCA, SAST, and DAST (Azure DevOps). OWASP Top 10 remediation, vulnerability management using Nessus, Burp Suite, and DefectDojo, and SSDLC implementation. Security automation with Python and PowerShell. 10+ years of development across web (React, Next.js), mobile (Flutter), and security tooling.',
        tags: ['OWASP', 'DevSecOps', 'SSDLC', 'Nessus / Burp Suite', 'Splunk / Sentinel'],
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
        title: 'Principal Cybersecurity Advisor — Regulated Healthcare',
        description:
          'Current mandate as principal cybersecurity advisor in a regulated healthcare organization. Leading vulnerability management programs and coordinating penetration testing. Conducting threat modeling and risk assessments. Implementing DevSecOps pipelines with SCA, SAST, and DAST tooling. Driving security automation through Power Apps, Python, and PowerShell. Authoring security guides and defining security requirements for RFPs.',
        tags: ['Vulnerability Management', 'Threat Modeling', 'DevSecOps', 'PowerShell / Python', 'Power Apps'],
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
        title: 'Security & IAM Governance — Expert Mandate',
        description:
          'Expert governance mandate within the IAM function of a major financial institution. Defined IAM policies, standards, and governance frameworks aligned with enterprise risk objectives. Assessed organizational maturity and directed external security consultants. Previously held a principal IT analyst and security SME role in an enterprise architecture context — delivering structured security analyses and pragmatic, framework-aligned recommendations (NIST, CIS, TOGAF) to architecture teams and executive decision-makers.',
        tags: ['IAM Governance', 'Maturity Assessment', 'Policy & Standards', 'NIST / CIS / TOGAF', 'External Consultant Direction'],
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
    q1: 'Security is not a control layer.',
    q1em: 'It is a risk-aligned business enabler.',
    q2: 'AI is not innovation by default.',
    q2em: 'It must be governed, secured, and operationalized responsibly.',
    q3em: 'Architecture must integrate business objectives, regulatory exposure, and governance accountability.',
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
  education: {
    label: 'Education',
    heading: 'Academic Background',
    statusLabels: { completed: 'Completed', in_progress: 'In Progress' },
    items: [
      {
        period: '2026 – 2027',
        degree: 'Certificate — Cybersecurity Incident Management & Response',
        institution: 'Polytechnique Montréal',
        status: 'in_progress',
      },
      {
        period: '2024 – 2025',
        degree: 'Certificate — Cybersecurity Analysis & Operations',
        institution: 'Polytechnique Montréal',
        status: 'completed',
      },
      {
        period: '2022 – 2023',
        degree: 'Certificate — Cybersecurity Architecture & Management',
        institution: 'Polytechnique Montréal',
        status: 'completed',
      },
      {
        period: '2012 – 2015',
        degree: 'Certificate — Software Development (Computer Science)',
        institution: 'UQAM',
        status: 'completed',
      },
      {
        period: '1998 – 2001',
        degree: 'College Diploma (DEC) — Business Administration',
        institution: 'Collège Marie-Victorin',
        status: 'completed',
      },
    ],
  },
  differentiators: {
    label: 'Strategic Edge',
    heading: 'Why This Profile Is Different',
    items: [
      {
        title: 'Regulated Industry Authority',
        description:
          'Nearly 19 years embedded in regulated financial institutions — across pension, insurance and compliance — provide a ground-level understanding of regulatory mechanics, fiduciary risk, and audit processes that most architects lack.',
        points: [
          '6 years pension & insurance compliance consulting (1st & 2nd line of defense)',
          'IT Security Coordination within a regulated enterprise environment',
          'Claims and risk operations experience',
          'Deep familiarity with PIPEDA, Loi 25, Insurance Act, Loi RCR, CCQ, PCI DSS',
        ],
      },
      {
        title: 'Cross-Functional Executive Interface',
        description:
          'Proven ability to operate across all organizational layers — from development and architecture teams to audit committees and executive boards — translating risk into business language and business intent into architecture.',
        points: [
          'Collaboration with internal audit, IT compliance, and enterprise architects',
          'Stakeholder awareness programs and business unit engagement',
          'Risk governance alignment across technical, compliance, and executive functions',
          '10+ years board-level governance as co-ownership president',
        ],
      },
      {
        title: 'Applied AI & Security R&D',
        description:
          'Every recommendation is grounded in hands-on experimentation. A private AI and security lab running production-grade deployments, continuous tooling validation, and applied vulnerability research.',
        points: [
          'Private VPS with self-hosted AI infrastructure',
          'Graph RAG with Neo4j + Qdrant in production',
          'Security tooling validation and exploit research',
          '40+ LLMs tested — open source and cloud',
        ],
      },
    ],
  },
  footer: {
    rights: '© 2025 Raoul Elysée. All rights reserved.',
    tagline: 'Cybersecurity Architect\u00a0·\u00a0AI Specialist\u00a0·\u00a0Montréal, QC',
  },
};

const fr: Translations = {
  nav: {
    about: 'À propos',
    education: 'Formation',
    expertise: 'Expertise',
    projects: 'Projets',
    digitalTwin: 'Jumeau Numérique',
    contact: 'Contact',
    cta: 'Contactez-moi',
  },
  hero: {
    badge: 'Architecture Sécurité & IA d\u2019Entreprise',
    subtitle: 'Architecte Sécurité & IA d\u2019Entreprise\u00a0\u00a0·\u00a0\u00a0Industries Régulées',
    description:
      'Conception d\u2019architectures IA sécurisées, conformes et scalables, alignées sur le risque d\u2019affaires, les contraintes réglementaires et les réalités opérationnelles — alliant exécution technique approfondie, conscience réglementaire et exposition à la gouvernance de niveau exécutif.',
    ctaPrimary: 'Parler à mon Jumeau Numérique',
    ctaSecondary: 'Voir les projets',
  },
  about: {
    label: 'À propos',
    heading: 'Qui je suis',
    p1: 'Je suis un architecte en cybersécurité et IA avec plus de 20 ans d\u2019expérience en TI. Près de 19 ans ont été consacrés au sein du groupe Great-West Lifeco — entre London Life et Canada Vie — où j\u2019ai évolué à travers des fonctions en réclamations et opérations d\u2019assurance, puis plus d\u2019une décennie comme coordonnateur de sécurité informatique, et enfin comme consultant en conformité réglementaire. Cette profondeur d\u2019expérience à travers plusieurs fonctions et lignes de défense d\u2019une même institution financière régulée me permet de protéger les infrastructures technologiques en comprenant véritablement les enjeux d\u2019affaires et fiduciaires derrière chaque système. Mon parcours académique a débuté par un DEC en techniques de gestion au Collège Marie-Victorin, suivi d\u2019un certificat en développement logiciel à l\u2019UQAM — des années également consacrées à bâtir des produits web et mobiles avec des équipes startup.',
    p2: 'Mon expertise se situe à l\u2019intersection de l\u2019architecture cybersécurité, de la conformité réglementaire, de la gouvernance et gestion du risque, des systèmes IA et du leadership en sécurité opérationnelle — alliant exécution technique approfondie, conscience réglementaire et exposition à la gouvernance de niveau exécutif. J\u2019ai collaboré avec des équipes d\u2019audit interne, des architectes d\u2019entreprise, des architectes de domaine et des comités exécutifs — pour faire progresser la maturité en sécurité, piloter des programmes GRC et traduire les exigences réglementaires en décisions d\u2019architecture concrètes. Cette posture exécutive se reflète également dans ma présidence d\u2019une copropriété depuis plus de 10 ans — recrutement, appels d\u2019offre, animation d\u2019assemblées, communication aux membres et décisions de gouvernance au niveau du conseil d\u2019administration.',
    p3: 'Plus récemment, j\u2019ai développé une expertise approfondie en ingénierie de l\u2019IA agentique — en construisant des systèmes multi-agents et en déployant des solutions LLM en production sur AWS, Azure, GCP, Vercel et des environnements VPS privés, tout en appliquant mes principes de sécurité (guardrails, gestion de la mémoire, moindre privilège) à chaque architecture IA que je conçois. Je maintiens également des infrastructures IA personnelles connectées à un large écosystème d\u2019outils, pour amplifier ma créativité, accélérer la concrétisation de mes idées et explorer comment l\u2019IA peut réellement augmenter les capacités humaines et de production.',
    p4: 'Je complète actuellement un baccalauréat par cumul en cybersécurité à Polytechnique Montréal (cours du soir). En dehors du travail et des études, je passe du temps avec ma famille, je m\u2019intéresse beaucoup à la finance, l\u2019économie et l\u2019actualité, je m\u2019entraîne au gym et j\u2019aime faire du vélo l\u2019été et marcher en forêt.',
    stats: [
      { value: '19', label: 'Ans chez Great-West Lifeco' },
      { value: '10+', label: 'Ans en Sécurité de l\u2019information & Conformité' },
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
          '6 ans comme consultant en conformité réglementaire dans les secteurs des régimes de retraite et de l\u2019assurance chez Canada Vie et London Life, en 1re et 2e ligne de défense. Conseil stratégique sur un large paysage réglementaire — PIPEDA, Loi 25, Loi sur les assurances, Loi RCR, CCQ, PCI DSS, NIST, ISO 27001 — et sur l\u2019exposition au risque d\u2019entreprise. Pilotage d\u2019initiatives de sensibilisation des parties prenantes et collaboration avec les unités d\u2019affaires pour traduire les exigences de conformité en pratiques opérationnelles concrètes — renforçant la maturité par des programmes d\u2019amélioration continue, KPIs et KCIs.',
        tags: ['PIPEDA / Loi 25 / PCI DSS', 'Loi sur les assurances / Loi RCR / CCQ', 'NIST / ISO 27001', 'Sensibilisation parties prenantes', 'GRC'],
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
          'Pipelines CI/CD sécurisés intégrant SCA, SAST et DAST (Azure DevOps). Remédiation OWASP Top 10, gestion des vulnérabilités avec Nessus, Burp Suite et DefectDojo, et implémentation du SSDLC. Automatisation sécurité avec Python et PowerShell. Plus de 10 ans de développement web (React, Next.js), mobile (Flutter) et outillage sécurité.',
        tags: ['OWASP', 'DevSecOps', 'SSDLC', 'Nessus / Burp Suite', 'Splunk / Sentinel'],
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
        title: 'Conseiller Principal en Cybersécurité — Secteur Santé Réglementé',
        description:
          'Mandat actuel de conseiller principal en cybersécurité au sein d\u2019une organisation de santé réglementée. Pilotage de programmes de gestion des vulnérabilités et coordination des tests d\u2019intrusion. Modélisation des menaces et évaluations des risques. Mise en place de pipelines DevSecOps avec outillage SCA, SAST et DAST. Automatisation de la sécurité via Power Apps, Python et PowerShell. Rédaction de guides de sécurité et définition des exigences sécurité pour les appels d\u2019offres.',
        tags: ['Gestion des vulnérabilités', 'Threat Modeling', 'DevSecOps', 'PowerShell / Python', 'Power Apps'],
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
        title: 'Gouvernance Sécurité & GIA — Mandat Expert',
        description:
          'Mandat d\u2019expert en gouvernance au sein de la fonction GIA d\u2019une grande institution financière. Définition de politiques, normes et cadres de gouvernance GIA alignés sur les objectifs de risque d\u2019entreprise. Évaluation de la maturité organisationnelle et direction de consultants externes en sécurité. Précédemment, rôle d\u2019analyste TI principal et expert en sécurité en contexte d\u2019architecture d\u2019entreprise — livrant des analyses structurées et des recommandations pragmatiques alignées sur les cadres NIST, CIS, TOGAF aux équipes d\u2019architecture et aux décideurs exécutifs.',
        tags: ['Gouvernance GIA', 'Évaluation de maturité', 'Politiques & Normes', 'NIST / CIS / TOGAF', 'Direction de consultants'],
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
    q1: 'La sécurité n\u2019est pas une couche de contrôle.',
    q1em: 'C\u2019est un catalyseur de valeur aligné sur le risque.',
    q2: 'L\u2019IA n\u2019est pas l\u2019innovation par défaut.',
    q2em: 'Elle doit être gouvernée, sécurisée et opérationnalisée de façon responsable.',
    q3em: 'L\u2019architecture doit intégrer les objectifs d\u2019affaires, l\u2019exposition réglementaire et la responsabilité de gouvernance.',
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
  education: {
    label: 'Formation',
    heading: 'Parcours Académique',
    statusLabels: { completed: 'Complété', in_progress: 'En cours' },
    items: [
      {
        period: '2026 – 2027',
        degree: 'Certificat — Gestion et Réponse aux Cyberincidents',
        institution: 'Polytechnique Montréal',
        status: 'in_progress',
      },
      {
        period: '2024 – 2025',
        degree: 'Certificat — Analyse et Cybersécurité opérationnelle',
        institution: 'Polytechnique Montréal',
        status: 'completed',
      },
      {
        period: '2022 – 2023',
        degree: 'Certificat — Architecture et Gestion de la Cybersécurité',
        institution: 'Polytechnique Montréal',
        status: 'completed',
      },
      {
        period: '2012 – 2015',
        degree: 'Certificat — Informatique Développement logiciel',
        institution: 'UQAM',
        status: 'completed',
      },
      {
        period: '1998 – 2001',
        degree: 'DEC — Techniques de gestion',
        institution: 'Collège Marie-Victorin',
        status: 'completed',
      },
    ],
  },
  differentiators: {
    label: 'Valeur Ajoutée',
    heading: 'Ce Qui Différencie Ce Profil',
    items: [
      {
        title: 'Autorité en Milieu Régulé',
        description:
          'Près de 19 ans au sein d\u2019institutions financières régulées — retraite, assurance et conformité — confèrent une compréhension de terrain des mécanismes réglementaires, du risque fiduciaire et des processus d\u2019audit que peu d\u2019architectes possèdent.',
        points: [
          '6 ans de conseil en conformité réglementaire retraite & assurance (1re et 2e ligne)',
          'Coordonnateur sécurité TI en environnement d\u2019entreprise réglementé',
          'Expérience en réclamations et opérations risque',
          'Maîtrise de PIPEDA, Loi 25, Loi sur les assurances, Loi RCR, CCQ, PCI DSS',
        ],
      },
      {
        title: 'Interface Transversale & Exécutive',
        description:
          'Capacité démontrée à opérer à tous les niveaux organisationnels — des équipes de développement et d\u2019architecture aux comités d\u2019audit et aux conseils exécutifs — en traduisant le risque en langage d\u2019affaires et les objectifs d\u2019affaires en décisions d\u2019architecture.',
        points: [
          'Collaboration avec audit interne, conformité TI et architectes d\u2019entreprise',
          'Programmes de sensibilisation des parties prenantes et engagement des unités d\u2019affaires',
          'Alignement de la gouvernance du risque entre fonctions techniques, conformité et exécutives',
          'Plus de 10 ans de gouvernance au niveau du conseil d\u2019administration',
        ],
      },
      {
        title: 'R&D IA & Sécurité Appliquée',
        description:
          'Chaque recommandation repose sur une expérimentation concrète. Un laboratoire IA et sécurité privé opérant des déploiements en production, une validation continue des outils et une recherche appliquée sur les vulnérabilités.',
        points: [
          'VPS privé avec infrastructure IA auto-hébergée',
          'Graph RAG avec Neo4j + Qdrant en production',
          'Validation d\u2019outillage sécurité et recherche sur les exploits',
          '40+ LLMs testés — open source et cloud',
        ],
      },
    ],
  },
  footer: {
    rights: '© 2025 Raoul Elysée. Tous droits réservés.',
    tagline: 'Architecte Cybersécurité\u00a0·\u00a0Spécialiste IA\u00a0·\u00a0Montréal, QC',
  },
};

const translations: Record<Lang, Translations> = { en, fr };
export default translations;

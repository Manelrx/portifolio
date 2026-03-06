// /src/data/portfolioData.js
// Portfolio data — Infrastructure & Security Specialist
// Bilingual: PT / EN

const data = {
  // ═══════════════════════════════════════════
  // INFORMAÇÕES PESSOAIS (language-independent)
  // ═══════════════════════════════════════════
  name: "Emanuel Araújo",
  githubUrl: "https://github.com/Manelrx",
  linkedinUrl: "https://www.linkedin.com/in/emanuelmaraujo/",
  profileImage: "minha_imagem_de_apresentacao.png",

  // ═══════════════════════════════════════════
  // ÁREAS DE ESPECIALIZAÇÃO
  // ═══════════════════════════════════════════
  expertiseAreas: {
    pt: [
      {
        title: "Infraestrutura de TI",
        description: "Sustentação e evolução de ambientes tecnológicos corporativos, garantindo disponibilidade, performance e escalabilidade dos serviços críticos.",
        icon: "Server",
      },
      {
        title: "Segurança da Informação",
        description: "Implementação de controles de segurança, monitoramento de ameaças e fortalecimento contínuo da postura de segurança organizacional.",
        icon: "Shield",
      },
      {
        title: "Governança de TI",
        description: "Estruturação de processos e controles para conformidade regulatória, alinhados às exigências do setor financeiro.",
        icon: "Scale",
      },
      {
        title: "Gestão de Ativos de TI",
        description: "Inventário, padronização e controle do ciclo de vida do parque tecnológico com ferramentas de ITAM e CMDB.",
        icon: "Monitor",
      },
      {
        title: "Automação de Processos",
        description: "Scripts e fluxos automatizados que eliminam tarefas manuais, aumentam eficiência e reduzem erros operacionais.",
        icon: "Cog",
      },
      {
        title: "Gestão de Riscos",
        description: "Mapeamento de vulnerabilidades e implementação de controles preventivos e corretivos para mitigação de riscos operacionais.",
        icon: "AlertTriangle",
      },
      {
        title: "Business Intelligence",
        description: "Dashboards e análise de métricas operacionais para apoio à tomada de decisão estratégica baseada em dados.",
        icon: "BarChart3",
      },
      {
        title: "Operações & Suporte",
        description: "Suporte técnico multinível, diagnóstico de incidentes complexos e manutenção de operações de TI corporativas.",
        icon: "Headphones",
      },
    ],
    en: [
      {
        title: "IT Infrastructure",
        description: "Sustaining and evolving corporate technology environments, ensuring availability, performance, and scalability of critical services.",
        icon: "Server",
      },
      {
        title: "Information Security",
        description: "Implementing security controls, monitoring threats, and continuously strengthening the organization's security posture.",
        icon: "Shield",
      },
      {
        title: "IT Governance",
        description: "Structuring processes and controls for regulatory compliance, aligned with financial sector requirements.",
        icon: "Scale",
      },
      {
        title: "IT Asset Management",
        description: "Inventory, standardization, and lifecycle control of the technology park using ITAM and CMDB tools.",
        icon: "Monitor",
      },
      {
        title: "Process Automation",
        description: "Automated scripts and workflows that eliminate manual tasks, increase efficiency, and reduce operational errors.",
        icon: "Cog",
      },
      {
        title: "Risk Management",
        description: "Vulnerability mapping and implementation of preventive and corrective controls for operational risk mitigation.",
        icon: "AlertTriangle",
      },
      {
        title: "Business Intelligence",
        description: "Dashboards and operational metrics analysis to support data-driven strategic decision-making.",
        icon: "BarChart3",
      },
      {
        title: "Operations & Support",
        description: "Multi-level technical support, complex incident diagnosis, and maintenance of corporate IT operations.",
        icon: "Headphones",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // SEGURANÇA DA INFORMAÇÃO
  // ═══════════════════════════════════════════
  securityInfo: {
    pt: {
      intro: "Implementação e sustentação de controles de segurança com foco no fortalecimento da postura de segurança e na redução da superfície de ataque.",
      categories: [
        {
          title: "Monitoramento & Detecção",
          items: [
            "Monitoramento contínuo de eventos de segurança em endpoints e infraestrutura",
            "Análise de logs e correlação de indicadores de comprometimento",
            "Identificação proativa de comportamentos anômalos e ameaças emergentes",
          ],
        },
        {
          title: "Resposta & Remediação",
          items: [
            "Resposta estruturada a incidentes com investigação e planos de contenção",
            "Gestão de vulnerabilidades com priorização baseada em risco",
            "Aplicação coordenada de patches em sistemas operacionais e aplicações críticas",
          ],
        },
        {
          title: "Hardening & Proteção",
          items: [
            "Hardening de endpoints e servidores conforme baselines de segurança",
            "Implementação e gestão de soluções EDR para proteção avançada",
            "Criptografia de dispositivos e controles contra vazamento de dados (DLP)",
          ],
        },
        {
          title: "Identidade & Acesso",
          items: [
            "Controle de privilégios e gestão do ciclo de vida de acessos (IAM)",
            "Implementação de MFA em sistemas e aplicações críticas",
            "Revisões periódicas de acessos e segregação de funções",
          ],
        },
      ],
    },
    en: {
      intro: "Implementation and maintenance of security controls focused on strengthening the security posture and reducing the attack surface.",
      categories: [
        {
          title: "Monitoring & Detection",
          items: [
            "Continuous monitoring of security events on endpoints and infrastructure",
            "Log analysis and correlation of indicators of compromise",
            "Proactive identification of anomalous behavior and emerging threats",
          ],
        },
        {
          title: "Response & Remediation",
          items: [
            "Structured incident response with investigation and containment plans",
            "Vulnerability management with risk-based prioritization",
            "Coordinated patch management on operating systems and critical applications",
          ],
        },
        {
          title: "Hardening & Protection",
          items: [
            "Endpoint and server hardening according to security baselines",
            "Implementation and management of EDR solutions for advanced protection",
            "Device encryption and data loss prevention (DLP) controls",
          ],
        },
        {
          title: "Identity & Access",
          items: [
            "Privilege control and access lifecycle management (IAM)",
            "MFA implementation on critical systems and applications",
            "Periodic access reviews and segregation of duties",
          ],
        },
      ],
    },
  },

  // ═══════════════════════════════════════════
  // GOVERNANÇA DE TI E COMPLIANCE
  // ═══════════════════════════════════════════
  governance: {
    pt: {
      intro: "Atividades de governança e aderência regulatória com foco em documentação de controles e suporte a auditorias do setor financeiro.",
      items: [
        "Documentação de controles de TI e procedimentos operacionais padronizados",
        "Implementação de boas práticas alinhadas a frameworks como ISO 27001 e NIST",
        "Apoio à gestão de riscos tecnológicos e mapeamento de controles internos",
        "Organização e manutenção de evidências de conformidade operacional",
        "Suporte técnico a auditorias internas e externas de TI",
        "Implementação de planos de ação decorrentes de auditorias regulatórias",
      ],
    },
    en: {
      intro: "Governance and regulatory compliance activities focused on control documentation and support for financial sector audits.",
      items: [
        "IT control documentation and standardized operational procedures",
        "Implementation of best practices aligned with frameworks like ISO 27001 and NIST",
        "Support for technology risk management and internal control mapping",
        "Organization and maintenance of operational compliance evidence",
        "Technical support for internal and external IT audits",
        "Implementation of action plans resulting from regulatory audits",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // GESTÃO DE RISCOS E CONTROLES
  // ═══════════════════════════════════════════
  riskManagement: {
    pt: {
      intro: "Gestão de riscos tecnológicos como pilar fundamental para o aumento da maturidade operacional de TI.",
      items: [
        "Avaliação e tratamento sistemático de riscos tecnológicos",
        "Controles preventivos implementados para mitigação de riscos operacionais",
        "Controles corretivos e compensatórios para tratamento de gaps identificados",
        "Mapeamento contínuo de vulnerabilidades operacionais e técnicas",
        "Documentação estruturada de evidências de segurança",
        "Elaboração de matrizes de risco e indicadores de exposição",
      ],
    },
    en: {
      intro: "Technology risk management as a fundamental pillar for increasing IT operational maturity.",
      items: [
        "Systematic assessment and treatment of technology risks",
        "Preventive controls implemented for operational risk mitigation",
        "Corrective and compensating controls for addressing identified gaps",
        "Continuous mapping of operational and technical vulnerabilities",
        "Structured documentation of security evidence",
        "Risk matrix development and exposure indicators",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // INFRAESTRUTURA E SERVIÇOS
  // ═══════════════════════════════════════════
  infrastructure: {
    pt: {
      intro: "Sustentação e evolução da infraestrutura tecnológica, garantindo disponibilidade e performance dos serviços críticos do negócio.",
      items: [
        "Gestão de serviços internos com foco em disponibilidade e SLA",
        "Implantação de aplicações corporativas em ambiente de produção",
        "Containerização de serviços com Docker para padronização e portabilidade",
        "Proxy reverso com Nginx e certificados SSL/TLS para publicação segura",
        "Monitoramento proativo de recursos e capacidade da infraestrutura",
        "Gestão da disponibilidade com indicadores de uptime e performance",
      ],
    },
    en: {
      intro: "Sustaining and evolving the technology infrastructure, ensuring availability and performance of critical business services.",
      items: [
        "Internal service management focused on availability and SLA",
        "Deployment of corporate applications in production environments",
        "Service containerization with Docker for standardization and portability",
        "Reverse proxy with Nginx and SSL/TLS certificates for secure publishing",
        "Proactive monitoring of infrastructure resources and capacity",
        "Availability management with uptime and performance indicators",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // CONTINUIDADE DE NEGÓCIOS
  // ═══════════════════════════════════════════
  businessContinuity: {
    pt: {
      intro: "Práticas de resiliência operacional para recuperação rápida de serviços críticos em cenários de falha.",
      items: [
        "Rotinas automatizadas de backup com verificação de integridade",
        "Testes periódicos de restauração para validação de efetividade",
        "Apoio ao planejamento de recuperação de desastres (DRP)",
        "Apoio à elaboração e manutenção do plano de continuidade de negócios (BCP)",
      ],
    },
    en: {
      intro: "Operational resilience practices for rapid recovery of critical services in failure scenarios.",
      items: [
        "Automated backup routines with integrity verification",
        "Periodic restoration tests for effectiveness validation",
        "Support for disaster recovery planning (DRP)",
        "Support for business continuity plan (BCP) development and maintenance",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // GESTÃO DE ATIVOS DE TI
  // ═══════════════════════════════════════════
  assetManagement: {
    pt: {
      intro: "Gestão e rastreabilidade do parque tecnológico com controle efetivo sobre todos os ativos de TI.",
      items: [
        "Inventário completo de hardware e software corporativo",
        "Padronização de configurações e imagens de ativos tecnológicos",
        "Controle de ciclo de vida — da aquisição ao descarte seguro",
        "Organização e manutenção de CMDB (Configuration Management Database)",
        "Ferramentas de ITAM para gestão centralizada de ativos",
      ],
    },
    en: {
      intro: "Technology park management and traceability with effective control over all IT assets.",
      items: [
        "Complete hardware and software corporate inventory",
        "Standardization of technology asset configurations and images",
        "Lifecycle control — from acquisition to secure disposal",
        "Organization and maintenance of CMDB (Configuration Management Database)",
        "ITAM tools for centralized asset management",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // GESTÃO DE CONTRATOS DE TECNOLOGIA
  // ═══════════════════════════════════════════
  contractManagement: {
    pt: {
      intro: "Participação na gestão de contratos de tecnologia, contribuindo para decisões estratégicas de aquisição e renovação.",
      items: [
        "Acompanhamento de contratos de software, licenciamento e serviços de TI",
        "Controle de licenças e gestão de compliance de software",
        "Avaliação técnica de fornecedores e soluções tecnológicas",
        "Análise de aderência das soluções às necessidades operacionais",
      ],
    },
    en: {
      intro: "Participation in technology contract management, contributing to strategic acquisition and renewal decisions.",
      items: [
        "Tracking software contracts, licensing, and IT services",
        "License control and software compliance management",
        "Technical evaluation of vendors and technology solutions",
        "Analysis of solution alignment with operational needs",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // AUTOMAÇÃO DE PROCESSOS
  // ═══════════════════════════════════════════
  automation: {
    pt: {
      intro: "Automação de tarefas operacionais para eliminação de atividades manuais e ganhos mensuráveis de produtividade.",
      items: [
        "Scripts em Python para automação de rotinas operacionais",
        "Fluxos automatizados com Power Automate para processos internos",
        "Integrações entre sistemas corporativos para fluxo automatizado de dados",
        "Rotinas automatizadas de verificação e monitoramento de serviços",
      ],
    },
    en: {
      intro: "Operational task automation to eliminate manual activities and achieve measurable productivity gains.",
      items: [
        "Python scripts for operational routine automation",
        "Automated workflows with Power Automate for internal processes",
        "Corporate system integrations for automated data flow",
        "Automated service verification and monitoring routines",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // BUSINESS INTELLIGENCE
  // ═══════════════════════════════════════════
  businessIntelligence: {
    pt: {
      intro: "Análise de dados operacionais e criação de dashboards para transformar dados em inteligência estratégica.",
      items: [
        "Estruturação e modelagem de dados para análise operacional",
        "Dashboards interativos para visualização de indicadores-chave",
        "Análise de métricas operacionais e identificação de tendências",
        "Dados como apoio à tomada de decisão estratégica e tática",
      ],
    },
    en: {
      intro: "Operational data analysis and dashboard creation to transform data into strategic intelligence.",
      items: [
        "Data structuring and modeling for operational analysis",
        "Interactive dashboards for key indicator visualization",
        "Operational metrics analysis and trend identification",
        "Data as support for strategic and tactical decision-making",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // PROJETOS E LABORATÓRIO TECNOLÓGICO
  // ═══════════════════════════════════════════
  techLab: {
    pt: {
      intro: "Implantação de ferramentas modernas para elevar a maturidade da gestão de tecnologia na organização.",
      projects: [
        {
          name: "Snipe-IT",
          description: "Plataforma de gestão de ativos de TI (ITAM) para controle completo do parque tecnológico, incluindo inventário de hardware, software e acessórios.",
          status: "Implantado",
        },
        {
          name: "Netbox",
          description: "Documentação de infraestrutura de rede e IPAM (IP Address Management), proporcionando visibilidade completa da topologia e endereçamento.",
          status: "Implantado",
        },
        {
          name: "Vaultwarden",
          description: "Gestão segura de senhas corporativas com armazenamento criptografado e compartilhamento controlado de credenciais entre equipes.",
          status: "Implantado",
        },
        {
          name: "Eramba",
          description: "Plataforma de GRC (Governance, Risk & Compliance) para gestão estruturada de riscos, conformidade regulatória e controles internos de TI.",
          status: "Em implantação",
        },
      ],
    },
    en: {
      intro: "Deployment of modern tools to elevate technology management maturity within the organization.",
      projects: [
        {
          name: "Snipe-IT",
          description: "IT asset management (ITAM) platform for complete technology park control, including hardware, software, and accessories inventory.",
          status: "Deployed",
        },
        {
          name: "Netbox",
          description: "Network infrastructure documentation and IPAM (IP Address Management), providing complete visibility of topology and addressing.",
          status: "Deployed",
        },
        {
          name: "Vaultwarden",
          description: "Secure corporate password management with encrypted storage and controlled credential sharing across teams.",
          status: "Deployed",
        },
        {
          name: "Eramba",
          description: "GRC (Governance, Risk & Compliance) platform for structured risk management, regulatory compliance, and internal IT controls.",
          status: "In deployment",
        },
      ],
    },
  },

  // ═══════════════════════════════════════════
  // STACK TECNOLÓGICA
  // ═══════════════════════════════════════════
  techStack: {
    pt: [
      { name: "Docker", category: "Infraestrutura" },
      { name: "Linux", category: "Infraestrutura" },
      { name: "Nginx Proxy Manager", category: "Infraestrutura" },
      { name: "Fortinet", category: "Segurança" },
      { name: "Acronis", category: "Segurança" },
      { name: "Microsoft 365", category: "Produtividade" },
      { name: "Power Automate", category: "Automação" },
      { name: "Python", category: "Desenvolvimento" },
      { name: "Active Directory", category: "Infraestrutura" },
      { name: "Windows Server", category: "Infraestrutura" },
    ],
    en: [
      { name: "Docker", category: "Infrastructure" },
      { name: "Linux", category: "Infrastructure" },
      { name: "Nginx Proxy Manager", category: "Infrastructure" },
      { name: "Fortinet", category: "Security" },
      { name: "Acronis", category: "Security" },
      { name: "Microsoft 365", category: "Productivity" },
      { name: "Power Automate", category: "Automation" },
      { name: "Python", category: "Development" },
      { name: "Active Directory", category: "Infrastructure" },
      { name: "Windows Server", category: "Infrastructure" },
    ],
  },

  // ═══════════════════════════════════════════
  // OPERAÇÕES E SUPORTE TÉCNICO
  // ═══════════════════════════════════════════
  operations: {
    pt: {
      intro: "Experiência sólida em suporte técnico e operação de TI, garantindo continuidade dos serviços com resolução eficiente de incidentes.",
      items: [
        "Suporte técnico Nível 1 e Nível 2 — presencial e remoto",
        "Diagnóstico aprofundado de incidentes e análise de causa raiz",
        "Resolução de problemas complexos envolvendo infraestrutura, rede e aplicações",
        "Suporte especializado a redes corporativas: cabeamento, switches e access points",
        "Manutenção preventiva e corretiva de equipamentos corporativos",
      ],
    },
    en: {
      intro: "Solid experience in technical support and IT operations, ensuring service continuity with efficient incident resolution.",
      items: [
        "Level 1 and Level 2 technical support — on-site and remote",
        "In-depth incident diagnosis and root cause analysis",
        "Complex problem resolution involving infrastructure, network, and applications",
        "Specialized support for corporate networks: cabling, switches, and access points",
        "Preventive and corrective maintenance of corporate equipment",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // PROJETOS PESSOAIS
  // ═══════════════════════════════════════════
  personalProjects: {
    pt: [
      {
        name: "RiftScore",
        url: "https://riftscore.com.br",
        description: "Plataforma de análise de desempenho em jogos competitivos. Desenvolvimento full-stack com processamento de dados de APIs externas — da concepção à publicação, de forma independente.",
      },
    ],
    en: [
      {
        name: "RiftScore",
        url: "https://riftscore.com.br",
        description: "Competitive gaming performance analysis platform. Full-stack development with external API data processing — from concept to publication, independently.",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // FORMAÇÃO ACADÊMICA
  // ═══════════════════════════════════════════
  graduation: {
    pt: [
      {
        degree: "Pós-graduação em Segurança da Informação",
        institution: "Faculdade Focus",
        period: "Conclusão em Jun/2025",
        description: "Aprofundamento em segurança da informação com foco em gestão de riscos, compliance e proteção de dados.",
        responsibilities: [
          "Normas e regulamentações: ISO 27001, LGPD e frameworks de segurança",
          "Projetos práticos de análise de riscos e auditorias de segurança",
          "Técnicas de resposta a incidentes e gestão de crises",
          "Simulações de incidentes e testes de segurança em laboratório",
        ],
      },
      {
        degree: "Graduação em Ciência da Computação",
        institution: "Universidade Paulista (UNIP)",
        period: "Concluído em 2023",
        description: "Formação sólida em ciência da computação com foco em desenvolvimento de software, redes e segurança da informação.",
        responsibilities: [
          "Projetos acadêmicos em múltiplas linguagens de programação",
          "Configuração de redes e segurança em laboratório",
          "Conceitos de criptografia, autenticação e controle de acesso",
          "Networking com profissionais da área de tecnologia",
        ],
      },
    ],
    en: [
      {
        degree: "Postgraduate in Information Security",
        institution: "Faculdade Focus",
        period: "Completion in Jun/2025",
        description: "Advanced studies in information security focused on risk management, compliance, and data protection.",
        responsibilities: [
          "Standards and regulations: ISO 27001, LGPD, and security frameworks",
          "Hands-on risk analysis and security audit projects",
          "Incident response techniques and crisis management",
          "Incident simulations and security testing in lab environments",
        ],
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: "Universidade Paulista (UNIP)",
        period: "Completed in 2023",
        description: "Solid foundation in computer science focused on software development, networking, and information security.",
        responsibilities: [
          "Academic projects in multiple programming languages",
          "Network configuration and security in lab environments",
          "Cryptography, authentication, and access control concepts",
          "Networking with technology professionals",
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════
  // EXPERIÊNCIA PROFISSIONAL
  // ═══════════════════════════════════════════
  experience: {
    pt: [
      {
        role: "Assistente de Informática",
        company: "Sicoob Credfaz",
        period: "Nov/2021 - Atual",
        description: "Responsável técnico pela operação e segurança da infraestrutura de TI. Atuação abrangente em sustentação de infraestrutura, segurança, governança, gestão de riscos, automação e suporte a auditorias regulatórias.",
        responsibilities: [
          "Sustentação e evolução da infraestrutura tecnológica da cooperativa",
          "Implementação e manutenção de controles de segurança da informação",
          "Suporte técnico a auditorias internas e externas de TI",
          "Gestão de riscos operacionais de TI e implementação de controles",
          "Automação de processos com Python e Power Automate",
          "Gestão de ativos tecnológicos e controle de ciclo de vida",
          "Implantação de Snipe-IT, Netbox, Vaultwarden e Eramba para maturidade de TI",
        ],
      },
      {
        role: "Auxiliar Administrativo",
        company: "Sicoob Credfaz",
        period: "Jan/2020 - Out/2021",
        description: "Atendimento ao cliente com suporte técnico, apoio na organização de processos internos e elaboração de documentos.",
      },
    ],
    en: [
      {
        role: "IT Specialist",
        company: "Sicoob Credfaz",
        period: "Nov/2021 - Present",
        description: "Technical lead for IT infrastructure operations and security. Broad scope covering infrastructure support, security, governance, risk management, automation, and regulatory audit support.",
        responsibilities: [
          "Sustaining and evolving the cooperative's technology infrastructure",
          "Implementing and maintaining information security controls",
          "Technical support for internal and external IT audits",
          "IT operational risk management and control implementation",
          "Process automation with Python and Power Automate",
          "Technology asset management and lifecycle control",
          "Deployment of Snipe-IT, Netbox, Vaultwarden, and Eramba for IT maturity",
        ],
      },
      {
        role: "Administrative Assistant",
        company: "Sicoob Credfaz",
        period: "Jan/2020 - Oct/2021",
        description: "Customer service with technical support, assistance in organizing internal processes, and document preparation.",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // HABILIDADES
  // ═══════════════════════════════════════════
  skills: {
    pt: {
      technical: [
        "Gestão de Vulnerabilidades", "Resposta a Incidentes", "Análise de Logs", "SIEM", "EDR", "Firewall (Fortinet)", "IAM", "Pentesting (Conceitos)", "Security Hardening",
        "Protocolos TCP/IP", "Segmentação de Rede", "Configuração Roteadores/Switches (Cisco)", "VPNs", "MPLS",
        "Windows Server", "Linux (Ubuntu, Kali)",
        "Nessus", "Nmap", "OwaspZap", "Wireshark", "Metasploit", "Active Directory", "Wazuh", "Graylog", "Kaspersky",
        "Python (Scripting)", "PHP (Scripting)", "Bash",
      ],
      soft: [
        "Comunicação Efetiva", "Resolução de Problemas", "Proatividade", "Trabalho em Equipe", "Adaptabilidade", "Aprendizado Contínuo", "Conscientização em Segurança", "Organização",
        "ISO 27001/27002", "NIST Cybersecurity Framework", "Owasp Top 10",
      ],
    },
    en: {
      technical: [
        "Vulnerability Management", "Incident Response", "Log Analysis", "SIEM", "EDR", "Firewall (Fortinet)", "IAM", "Pentesting (Concepts)", "Security Hardening",
        "TCP/IP Protocols", "Network Segmentation", "Router/Switch Configuration (Cisco)", "VPNs", "MPLS",
        "Windows Server", "Linux (Ubuntu, Kali)",
        "Nessus", "Nmap", "OwaspZap", "Wireshark", "Metasploit", "Active Directory", "Wazuh", "Graylog", "Kaspersky",
        "Python (Scripting)", "PHP (Scripting)", "Bash",
      ],
      soft: [
        "Effective Communication", "Problem Solving", "Proactivity", "Teamwork", "Adaptability", "Continuous Learning", "Security Awareness", "Organization",
        "ISO 27001/27002", "NIST Cybersecurity Framework", "Owasp Top 10",
      ],
    },
  },

  // ═══════════════════════════════════════════
  // IDIOMAS
  // ═══════════════════════════════════════════
  languages: {
    pt: [
      { language: "Português", level: "Nativo" },
      { language: "Inglês", level: "B1/B2 (Intermediário)" },
    ],
    en: [
      { language: "Portuguese", level: "Native" },
      { language: "English", level: "B1/B2 (Intermediate)" },
    ],
  },

  // ═══════════════════════════════════════════
  // EDUCAÇÃO (compact)
  // ═══════════════════════════════════════════
  education: {
    pt: [
      {
        degree: "Pós-graduação em Segurança da Informação",
        institution: "Faculdade Focus",
        period: "Conclusão em Jun/2025",
      },
      {
        degree: "Graduação Ciência da Computação",
        institution: "UNIP",
        period: "Concluído em 2023",
      },
    ],
    en: [
      {
        degree: "Postgraduate in Information Security",
        institution: "Faculdade Focus",
        period: "Completion in Jun/2025",
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: "UNIP",
        period: "Completed in 2023",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // CURSOS
  // ═══════════════════════════════════════════
  courses: {
    pt: [
      {
        name: "Formação Hackers do Bem - Fundamental",
        institution: "RNP/SENAC/Softex",
        year: "2024",
        description: "Módulo Fundamental do programa Hackers do Bem (96h). Concluído em Dez/2024.",
        image: "certificates/hackers_do_bem_fundamento.png",
        link: "#"
      },
      {
        name: "Formação Hackers do Bem - Básico",
        institution: "RNP/SENAC/Softex",
        year: "2024",
        description: "Módulo Básico do programa Hackers do Bem (64h). Concluído em Ago/2024.",
        image: "certificates/hackers_do_bem_basico.png",
        link: "#"
      },
      {
        name: "Formação Hackers do Bem - Nivelamento",
        institution: "RNP/SENAC/Softex",
        year: "2024",
        description: "Módulo de Nivelamento do programa Hackers do Bem (80h). Concluído em Jun/2024.",
        image: "certificates/hackers_do_bem_nivelamento.png",
        link: "#"
      },
      {
        name: "CCNA: Introduction to Networks",
        institution: "SENAI-SC/CDI (Cisco Networking Academy)",
        year: "2024",
        description: "Curso introdutório sobre redes de computadores (80h). Concluído em Dez/2024.",
        image: "certificates/ccna_modulo1.jpg",
        link: "https://www.credly.com/badges/59101be6-3e45-4d6e-a48f-358d95ffd538/public_url"
      },
      {
        name: "Endpoint Security",
        institution: "Cisco Networking Academy",
        year: "2024",
        description: "Curso sobre segurança de endpoints (60h). Concluído em Nov/2024.",
        image: "certificates/Endpoint_security.png",
        link: "https://www.credly.com/badges/e4039c04-39c5-47dd-a1fb-47d77e7961ec/public_url"
      },
      {
        name: "Resiliência Cibernética e Privacidade de Dados",
        institution: "CNAC",
        year: "2024",
        description: "Treinamento sobre resiliência cibernética, privacidade de dados e frameworks (16h). Concluído em Nov/2024.",
        image: "certificates/Certificado Resiliencia Cibernetica e Privacidade de Dados.png",
        link: "#"
      },
      {
        name: "Santander Bootcamp Cibersegurança #2",
        institution: "DIO / Santander",
        year: "2025",
        description: "Bootcamp focado em cibersegurança (28h). Concluído em Jan/2025.",
        image: "certificates/Santander BootCamp Cibersguranca.png",
        link: "#"
      },
      {
        name: "Student SOC Program Foundations training",
        institution: "Microsoft",
        year: "2025",
        description: "Treinamento fundamental do programa Student SOC da Microsoft. Concluído em Abr/2025.",
        image: "certificates/Student SOC Program Foundations training.png",
        link: "#"
      },
      {
        name: "Python do Iniciante ao Avançado",
        institution: "Udemy",
        year: "2023",
        description: "Curso abrangente de Python (120h). Concluído em Dez/2023.",
        image: null,
        link: "#"
      },
    ],
    en: [
      {
        name: "Hackers do Bem Training - Fundamentals",
        institution: "RNP/SENAC/Softex",
        year: "2024",
        description: "Fundamentals module of the Hackers do Bem program (96h). Completed Dec/2024.",
        image: "certificates/hackers_do_bem_fundamento.png",
        link: "#"
      },
      {
        name: "Hackers do Bem Training - Basics",
        institution: "RNP/SENAC/Softex",
        year: "2024",
        description: "Basics module of the Hackers do Bem program (64h). Completed Aug/2024.",
        image: "certificates/hackers_do_bem_basico.png",
        link: "#"
      },
      {
        name: "Hackers do Bem Training - Leveling",
        institution: "RNP/SENAC/Softex",
        year: "2024",
        description: "Leveling module of the Hackers do Bem program (80h). Completed Jun/2024.",
        image: "certificates/hackers_do_bem_nivelamento.png",
        link: "#"
      },
      {
        name: "CCNA: Introduction to Networks",
        institution: "SENAI-SC/CDI (Cisco Networking Academy)",
        year: "2024",
        description: "Introductory course on computer networks (80h). Completed Dec/2024.",
        image: "certificates/ccna_modulo1.jpg",
        link: "https://www.credly.com/badges/59101be6-3e45-4d6e-a48f-358d95ffd538/public_url"
      },
      {
        name: "Endpoint Security",
        institution: "Cisco Networking Academy",
        year: "2024",
        description: "Endpoint security course (60h). Completed Nov/2024.",
        image: "certificates/Endpoint_security.png",
        link: "https://www.credly.com/badges/e4039c04-39c5-47dd-a1fb-47d77e7961ec/public_url"
      },
      {
        name: "Cyber Resilience and Data Privacy",
        institution: "CNAC",
        year: "2024",
        description: "Training on cyber resilience, data privacy, and frameworks (16h). Completed Nov/2024.",
        image: "certificates/Certificado Resiliencia Cibernetica e Privacidade de Dados.png",
        link: "#"
      },
      {
        name: "Santander Cybersecurity Bootcamp #2",
        institution: "DIO / Santander",
        year: "2025",
        description: "Cybersecurity-focused bootcamp (28h). Completed Jan/2025.",
        image: "certificates/Santander BootCamp Cibersguranca.png",
        link: "#"
      },
      {
        name: "Student SOC Program Foundations Training",
        institution: "Microsoft",
        year: "2025",
        description: "Microsoft Student SOC Program foundations training. Completed Apr/2025.",
        image: "certificates/Student SOC Program Foundations training.png",
        link: "#"
      },
      {
        name: "Python from Beginner to Advanced",
        institution: "Udemy",
        year: "2023",
        description: "Comprehensive Python course (120h). Completed Dec/2023.",
        image: null,
        link: "#"
      },
    ],
  },

  // ═══════════════════════════════════════════
  // BADGES (language-independent names, but descriptions translated)
  // ═══════════════════════════════════════════
  badges: {
    pt: [
      {
        name: "CCNA: Introduction to Networks",
        image: "badges/ccna-introduction-to-networks.png",
        url: "https://www.credly.com/badges/59101be6-3e45-4d6e-a48f-358d95ffd538/public_url",
        description: "Badge do curso CCNA: Introduction to Networks da Cisco Networking Academy."
      },
      {
        name: "Endpoint Security",
        image: "badges/endpoint-security.png",
        url: "https://www.credly.com/badges/e4039c04-39c5-47dd-a1fb-47d77e7961ec/public_url",
        description: "Badge do curso Endpoint Security da Cisco Networking Academy."
      },
      {
        name: "Fortinet Certified Fundamentals Cybersecurity",
        image: "badges/fortinet-certified-fundamentals-cybersecurity.png",
        url: "https://www.credly.com/badges/a692655c-e6e6-4f24-90cf-905ea99793b9/public_url",
        description: "Certificação Fortinet Certified Fundamentals Cybersecurity."
      },
      {
        name: "Getting Started in Cybersecurity 2.0",
        image: "badges/getting-started-in-cybersecurity-2-0.png",
        url: "https://www.credly.com/badges/85419a43-27a7-4edf-975e-a8cd91cd1d72/public_url",
        description: "Fortinet NSE: Getting Started in Cybersecurity v2.0."
      },
      {
        name: "Introduction to the Threat Landscape 2.0",
        image: "badges/introduction-to-the-threat-landscape-2-0.png",
        url: "https://www.credly.com/badges/fc4fd540-6521-432b-adce-d1ce2ed870ee/public_url",
        description: "Fortinet NSE: Introduction to the Threat Landscape v2.0."
      },
      {
        name: "ISC2 Candidate",
        image: "badges/isc2-candidate.png",
        url: "https://www.credly.com/badges/d94e4db4-509a-4adb-8b82-5132c9ca4409/public_url",
        description: "Candidato ISC2 — caminho para certificação CISSP."
      },
      {
        name: "Networking Academy Learn-A-Thon 2024",
        image: "badges/networking-academy-learn-a-thon-2024.png",
        url: "https://www.credly.com/badges/68a765a6-449a-40cc-a79d-bab2e626f4d2/public_url",
        description: "Participação no Cisco Networking Academy Learn-A-Thon 2024."
      }
    ],
    en: [
      {
        name: "CCNA: Introduction to Networks",
        image: "badges/ccna-introduction-to-networks.png",
        url: "https://www.credly.com/badges/59101be6-3e45-4d6e-a48f-358d95ffd538/public_url",
        description: "CCNA: Introduction to Networks badge from Cisco Networking Academy."
      },
      {
        name: "Endpoint Security",
        image: "badges/endpoint-security.png",
        url: "https://www.credly.com/badges/e4039c04-39c5-47dd-a1fb-47d77e7961ec/public_url",
        description: "Endpoint Security badge from Cisco Networking Academy."
      },
      {
        name: "Fortinet Certified Fundamentals Cybersecurity",
        image: "badges/fortinet-certified-fundamentals-cybersecurity.png",
        url: "https://www.credly.com/badges/a692655c-e6e6-4f24-90cf-905ea99793b9/public_url",
        description: "Fortinet Certified Fundamentals Cybersecurity certification."
      },
      {
        name: "Getting Started in Cybersecurity 2.0",
        image: "badges/getting-started-in-cybersecurity-2-0.png",
        url: "https://www.credly.com/badges/85419a43-27a7-4edf-975e-a8cd91cd1d72/public_url",
        description: "Fortinet NSE: Getting Started in Cybersecurity v2.0."
      },
      {
        name: "Introduction to the Threat Landscape 2.0",
        image: "badges/introduction-to-the-threat-landscape-2-0.png",
        url: "https://www.credly.com/badges/fc4fd540-6521-432b-adce-d1ce2ed870ee/public_url",
        description: "Fortinet NSE: Introduction to the Threat Landscape v2.0."
      },
      {
        name: "ISC2 Candidate",
        image: "badges/isc2-candidate.png",
        url: "https://www.credly.com/badges/d94e4db4-509a-4adb-8b82-5132c9ca4409/public_url",
        description: "ISC2 Candidate — path to CISSP certification."
      },
      {
        name: "Networking Academy Learn-A-Thon 2024",
        image: "badges/networking-academy-learn-a-thon-2024.png",
        url: "https://www.credly.com/badges/68a765a6-449a-40cc-a79d-bab2e626f4d2/public_url",
        description: "Participation in the Cisco Networking Academy Learn-A-Thon 2024."
      }
    ],
  },

  // ═══════════════════════════════════════════
  // CERTIFICAÇÕES
  // ═══════════════════════════════════════════
  certifications: {
    pt: [
      {
        title: "Fortinet Certified Fundamentals Cybersecurity",
        issuer: "Fortinet",
        date: "Abr/2025 (Válida até Abr/2027)",
        image: "certificates/Fortinet Certified Fundamentals in Cybersecurity.png",
        description: "Certificação que valida conhecimentos fundamentais em cibersegurança e no portfólio de produtos Fortinet.",
        url: "https://training.fortinet.com/admin/tool/certificate/index.php"
      },
    ],
    en: [
      {
        title: "Fortinet Certified Fundamentals Cybersecurity",
        issuer: "Fortinet",
        date: "Apr/2025 (Valid until Apr/2027)",
        image: "certificates/Fortinet Certified Fundamentals in Cybersecurity.png",
        description: "Certification validating fundamental knowledge in cybersecurity and the Fortinet product portfolio.",
        url: "https://training.fortinet.com/admin/tool/certificate/index.php"
      },
    ],
  },
};

// Helper function to get data for current language
export const getPortfolioData = (lang = 'pt') => {
  const l = lang === 'en' ? 'en' : 'pt';
  return {
    // Language-independent fields
    name: data.name,
    githubUrl: data.githubUrl,
    linkedinUrl: data.linkedinUrl,
    profileImage: data.profileImage,
    // Language-dependent fields
    expertiseAreas: data.expertiseAreas[l],
    securityInfo: data.securityInfo[l],
    governance: data.governance[l],
    riskManagement: data.riskManagement[l],
    infrastructure: data.infrastructure[l],
    businessContinuity: data.businessContinuity[l],
    assetManagement: data.assetManagement[l],
    contractManagement: data.contractManagement[l],
    automation: data.automation[l],
    businessIntelligence: data.businessIntelligence[l],
    techLab: data.techLab[l],
    techStack: data.techStack[l],
    operations: data.operations[l],
    personalProjects: data.personalProjects[l],
    graduation: data.graduation[l],
    experience: data.experience[l],
    skills: data.skills[l],
    languages: data.languages[l],
    education: data.education[l],
    courses: data.courses[l],
    badges: data.badges[l],
    certifications: data.certifications[l],
  };
};

// Legacy export for backward compatibility
export const portfolioData = getPortfolioData('pt');

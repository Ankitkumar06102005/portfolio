import { Project, ResearchItem, SkillGroup, Credential } from '../types';

export const PERSONAL_INFO = {
  name: 'Ankit Kumar',
  role: 'AI/ML Engineer · Backend Developer · Student Researcher',
  headline: 'Building practical AI systems, from intelligent retrieval to scalable backend experiences.',
  subheadline:
    'AI/ML engineer and student researcher focused on RAG pipelines, LLM applications, backend systems, and useful intelligent products.',
  location: 'Kanpur, India',
  availability: 'Open to internships, research, and meaningful collaborations',
  education: {
    institution: 'Pranveer Singh Institute of Technology (PSIT), Kanpur',
    degree: 'B.Tech, Computer Science & Engineering (Artificial Intelligence)',
    expectedGraduation: 'Expected May 2028',
  },
  links: {
    github: 'https://github.com/Ankitkumar06102005',
    githubDisplay: 'github.com/Ankitkumar06102005',
    linkedin: 'https://linkedin.com/in/ankit-kumar-84550725b',
    linkedinDisplay: 'linkedin.com/in/ankit-kumar-84550725b',
    leetcode: 'https://leetcode.com/u/ankitkumar0610',
    leetcodeDisplay: 'leetcode.com/u/ankitkumar0610',
    email: 'ankitsushant9415@gmail.com',
  },
  summary:
    "B.Tech CSE (AI) student and Student Research Associate at IIT Kanpur's VR Lab, with hands-on experience in applied AI/ML, RAG pipelines, and backend engineering with FastAPI. Strong grounding in Python, DSA, and OOP through independent projects and a national hackathon.",
  aboutNarrative:
    'Ankit is an AI-focused computer-science student who enjoys turning complex AI capabilities into practical, testable products. His work spans retrieval-augmented systems, multilingual AI flows, semantic search, backend services, and applied machine learning.',
};

export const PROJECTS: Project[] = [
  {
    id: 'junsono-app',
    title: 'Junsono App',
    category: 'AI-Powered Grievance Lodging & Tracking System',
    context: 'Smart India Hackathon',
    role: 'Team Lead (Backend & AI)',
    tech: ['FastAPI', 'PostgreSQL', 'React', 'Gemini 2.5 Flash', 'Sarvam AI', 'pgvector'],
    shortDescription:
      'AI-powered citizen grievance platform featuring multilingual voice intake, automated triaging, pgvector semantic deduplication, and automated department routing.',
    highlights: [
      'Led a 4-person team as backend/AI lead; designed system architecture and pitched the solution, including judge Q&A and technical documentation.',
      'Built automated grievance triaging using Gemini 2.5 Flash for classification and reasoning.',
      'Added multilingual speech-to-text intake using Sarvam AI (saaras:v3).',
      'Implemented duplicate-grievance detection with MiniLM embeddings and pgvector similarity search, plus severity scoring and department auto-routing — key differentiators over existing government portals such as CPGRAMS.',
    ],
    metrics: {
      label: 'Team & Role',
      value: '4-person team lead',
    },
    visualType: 'junsono',
    deepDive: {
      overview:
        'Developed for the Smart India Hackathon to address inefficiencies in public administration systems. Unlike legacy portals like CPGRAMS, Junsono introduces AI-assisted triaging, speech-first regional access, and automated vector deduplication to streamline resolution.',
      architectureNodes: [
        {
          name: 'Sarvam AI (saaras:v3)',
          type: 'Multilingual Voice Intake',
          description: 'Transcribes regional audio complaints into normalized text streams.',
        },
        {
          name: 'MiniLM + pgvector',
          type: 'Semantic Deduplication',
          description: 'Computes dense cosine similarity against existing tickets to identify duplicate submissions.',
        },
        {
          name: 'Gemini 2.5 Flash',
          type: 'Triaging & Reasoning',
          description: 'Extracts department tags, synthesizes facts, and computes urgency/severity scores.',
        },
        {
          name: 'FastAPI + PostgreSQL',
          type: 'Backend Core',
          description: 'High-throughput transactional engine handling routing, auth, audit trails, and status polling.',
        },
      ],
      keyEngineeringAchievements: [
        'Designed complete asynchronous ingestion pipeline separating voice ingestion, embedding indexing, and LLM reasoning.',
        'Integrated pgvector cosine similarity search to flag repeated community grievances before ticket persistence.',
        'Structured real-time routing logic targeting specific administrative departments with severity priority queues.',
      ],
      technicalStackDetails: [
        { category: 'AI & Embeddings', tools: ['Gemini 2.5 Flash', 'Sarvam AI (saaras:v3)', 'MiniLM sentence embeddings', 'pgvector'] },
        { category: 'Backend Engine', tools: ['FastAPI', 'PostgreSQL', 'Uvicorn', 'Pydantic'] },
        { category: 'Frontend & UI', tools: ['React', 'Tailwind CSS', 'Audio Web API'] },
      ],
    },
  },
  {
    id: 'contexta-ai',
    title: 'Contexta AI',
    category: 'Document-Grounded Learning & RAG Platform',
    context: 'Personal Project',
    role: 'AI / Backend Engineering',
    tech: ['React', 'TypeScript', 'FastAPI', 'Python', 'FAISS', 'Gemini API', 'Docker'],
    shortDescription:
      'A document-grounded learning workspace that retrieves evidence from uploaded course material to power contextual Q&A, structured summaries, and quizzes with source references.',
    highlights: [
      'Implemented persistent FAISS vector retrieval with normalized inner-product scoring and Top-K candidate retrieval.',
      'Built evidence-sufficiency checks, citation-aware responses, and an abstention path for questions not supported by uploaded material.',
      'Created a 100-question RAG evaluation and supporting regression, load, resource-soak, and targeted security test suites; documented both strengths and remaining failure modes.',
    ],
    metrics: {
      label: 'Evaluation',
      value: '100-question RAG audit',
    },
    visualType: 'contexta',
    deepDive: {
      overview:
        'Contexta AI turns uploaded learning material into a searchable, evidence-grounded study workspace. Its architecture separates the React interface, FastAPI service layer, Python retrieval components, persistent FAISS indexes, and specialized learning workflows. The evaluation work explicitly tracks retrieval coverage, unsupported answers, false abstentions, citation support, latency, and reliability rather than reporting a single headline score.',
      architectureNodes: [
        {
          name: 'Document Ingestion',
          type: 'Parsing & Chunking',
          description: 'Extracts document text and organizes it into page-aware chunks for downstream retrieval.',
        },
        {
          name: 'FAISS Vector Store',
          type: 'Candidate Retrieval',
          description: 'Uses a persistent vector index and normalized inner-product scoring to rank candidate chunks.',
        },
        {
          name: 'Evidence Gate',
          type: 'Grounding & Abstention',
          description: 'Checks candidate relevance and can decline to answer when the retrieved evidence is insufficient.',
        },
        {
          name: 'Learning Agents',
          type: 'Q&A, Summaries & Quizzes',
          description: 'Routes supported document tasks through specialized workflows and returns source references.',
        },
      ],
      keyEngineeringAchievements: [
        'Separated document ingestion, vector retrieval, evidence filtering, answer generation, and source presentation into testable stages.',
        'Built a canonical 100-question evaluation that includes answerable and unanswerable queries and tracks false abstentions alongside unsupported answers.',
        'Added repeatable regression, load, resource-soak, and targeted security checks while documenting that targeted tests are not a comprehensive security certification.',
      ],
      technicalStackDetails: [
        { category: 'Frontend', tools: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
        { category: 'Backend & Retrieval', tools: ['FastAPI', 'Python', 'FAISS', 'Persistent vector indexes'] },
        { category: 'AI & Evaluation', tools: ['Gemini API', 'Evidence sufficiency checks', 'Citation evaluation', 'RAG benchmarks'] },
      ],
    },
  },
  {
    id: 'resume-iq',
    title: 'ResumeIQ',
    category: 'AI Resume-Matching Engine',
    context: 'Personal Project',
    tech: ['TF-IDF', 'MiniLM', 'XGBoost', 'FastAPI', 'Streamlit'],
    shortDescription:
      'End-to-end candidate-to-job matching engine coupling sparse lexical features (TF-IDF) with dense semantic embeddings (MiniLM) and a trained XGBoost classifier.',
    highlights: [
      'Built an end-to-end resume-to-job matching pipeline combining TF-IDF and MiniLM sentence embeddings with an XGBoost classifier, achieving an F1 score of 0.81.',
      'Deployed the model via a FastAPI backend with a Streamlit front end for interactive scoring.',
    ],
    metrics: {
      label: 'Classifier Score',
      value: '0.81 F1 Score',
    },
    visualType: 'resumeiq',
    deepDive: {
      overview:
        'Traditional keyword matchers suffer from vocabulary mismatch, while pure semantic matchers overlook hard technical requirements. ResumeIQ harmonizes TF-IDF lexical frequency with MiniLM dense sentence embeddings into a unified feature vector fed to an XGBoost model.',
      architectureNodes: [
        {
          name: 'Dual Feature Extractor',
          type: 'Sparse + Dense Representation',
          description: 'Extracts TF-IDF ngram frequencies alongside 384-dimensional MiniLM semantic vectors.',
        },
        {
          name: 'XGBoost Classifier',
          type: 'Supervised Ranking Engine',
          description: 'Predicts resume-to-job qualification fit calibrated to an empirical 0.81 F1 score.',
        },
        {
          name: 'FastAPI Microservice',
          type: 'Model Serving API',
          description: 'Lightweight REST interface exposing inference endpoints for candidate scoring.',
        },
        {
          name: 'Streamlit Interface',
          type: 'Interactive Scoring Dashboard',
          description: 'Allows recruiters to upload resumes, paste job descriptions, and inspect feature importance.',
        },
      ],
      keyEngineeringAchievements: [
        'Conducted feature ablation studies demonstrating that combining TF-IDF and MiniLM significantly outperformed either standalone approach.',
        'Optimized XGBoost hyperparameters (depth, learning rate, regularization) to balance precision and recall at 0.81 F1.',
        'Packaged the complete pipeline into a cleanly decoupled FastAPI backend and Streamlit interface.',
      ],
      technicalStackDetails: [
        { category: 'Machine Learning', tools: ['XGBoost', 'scikit-learn', 'MiniLM SentenceTransformer', 'TF-IDF Vectorizer'] },
        { category: 'Backend & Serving', tools: ['FastAPI', 'Uvicorn', 'Joblib Model Serialization'] },
        { category: 'Client Application', tools: ['Streamlit', 'Interactive Metric Visualizations'] },
      ],
    },
  },
  {
    id: 'legal-lens',
    title: 'LegalLens',
    category: 'NLP Legal Document Parser',
    context: 'Personal Project',
    tech: ['Python', 'NLP', 'Information Extraction'],
    shortDescription:
      'NLP information extraction pipeline designed to ingest dense, unstructured legal contracts and extract structured metadata, entities, and clause boundaries.',
    highlights: [
      'Built an NLP pipeline to parse and extract structured information from legal documents.',
      'Structured legal clauses, entity identification, and contract-to-data normalization.',
    ],
    metrics: {
      label: 'Core Pipeline',
      value: 'Structured NLP Extraction',
    },
    visualType: 'legallens',
    deepDive: {
      overview:
        'Legal contracts are notoriously verbose and resistant to basic keyword search. LegalLens parses complex contractual text, segments legal sections, and transforms raw unstructured clauses into verified structured schemas.',
      architectureNodes: [
        {
          name: 'Document Segmentation',
          type: 'Pre-processing Engine',
          description: 'Normalizes varied PDF/text formatting, removes boilerplate, and parses clause boundaries.',
        },
        {
          name: 'Entity & Clause Extractor',
          type: 'NLP Token Classifier',
          description: 'Identifies contracting parties, effective dates, governing laws, and liability provisions.',
        },
        {
          name: 'Schema Serializer',
          type: 'Data Normalization',
          description: 'Converts unstructured legal syntax into typed JSON structures ready for audit pipelines.',
        },
      ],
      keyEngineeringAchievements: [
        'Engineered rule-based and linguistic patterns to reliably isolate non-standard legal clause headers.',
        'Established typed schema representations enabling instant extraction of party obligations and terms.',
        'Constructed modular Python parser components easily extensible to varied contract formats.',
      ],
      technicalStackDetails: [
        { category: 'NLP & Text Processing', tools: ['Python 3.11', 'Regex / Pattern Mining', 'Tokenization Tools'] },
        { category: 'Data Transformation', tools: ['Structured JSON Schemas', 'Document Cleansing Utilities'] },
      ],
    },
  },
];

export const RESEARCH_EXPERIENCE: ResearchItem = {
  role: 'Student Research Associate',
  lab: 'VR Lab (Phase III)',
  institution: 'IIT Kanpur',
  supervisor: 'Dr. Kantesh Balani',
  period: 'Ongoing',
  description: [
    'Contributing to ongoing lab research as part of a multi-phase research program at a premier technical institute.',
    'Applying core CS and engineering fundamentals to lab research objectives.',
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    iconName: 'Code2',
    skills: ['Python', 'C++'],
    description: 'Primary programming languages for algorithm design, AI pipelines, and systems programming.',
  },
  {
    category: 'AI & Machine Learning',
    iconName: 'Cpu',
    skills: [
      'RAG pipelines',
      'MiniLM embeddings',
      'XGBoost',
      'TF-IDF',
      'LLM APIs (Gemini, Claude)',
      'Prompt engineering',
    ],
    description: 'Applied machine learning, multi-agent LLM systems, dense semantic retrieval, and classical ML classification.',
  },
  {
    category: 'Backend & Data',
    iconName: 'Server',
    skills: ['FastAPI', 'PostgreSQL', 'ChromaDB', 'pgvector', 'Streamlit'],
    description: 'High-performance microservices, vector search indexing, relational schema design, and data interfaces.',
  },
  {
    category: 'CS Fundamentals',
    iconName: 'Binary',
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming'],
    description: 'Deep computational problem solving, data modeling, algorithm complexity analysis, and modular software architecture.',
  },
  {
    category: 'Tools & Workflows',
    iconName: 'GitBranch',
    skills: ['Git', 'GitHub'],
    description: 'Distributed version control, collaborative development, Git workflows, and CI/CD foundations.',
  },
];

export const CREDENTIALS: Credential[] = [
  {
    title: 'Oracle Cloud Infrastructure (OCI) AI Foundations',
    issuer: 'Oracle',
    type: 'certification',
    detail: 'Demonstrated understanding of fundamental AI, machine learning concepts, and cloud AI infrastructure architectures.',
  },
  {
    title: 'Columbia University — Prompt Engineering / AI-ML Coursework',
    issuer: 'Columbia University',
    type: 'coursework',
    detail: 'Rigorous coursework covering modern prompt engineering strategies, LLM interaction paradigms, and machine learning principles.',
  },
  {
    title: 'HackerRank Gold Badges',
    issuer: 'HackerRank',
    type: 'badge',
    detail: 'Awarded Gold Badges across Python, Problem Solving (DSA), and C++, validating algorithmic proficiency and code quality.',
  },
];


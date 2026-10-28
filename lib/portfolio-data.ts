export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'Full-Stack' | 'Data Science & ML' | 'LLMs & GenAI' | 'Agentic AI'
  categoryLabel: string
  oneLiner: string
  problem: string
  targetUsers: string
  keyFeatures: string[]
  technologies: string[]
  primaryImage: string
  secondaryImage?: string
  isConceptIllustration: boolean
  liveDemo?: string
  githubRepo?: string
  status: string
  statusType: 'built' | 'in-progress' | 'training' | 'foundation'
  awards?: string
  limitationsOrNextSteps?: string
  featuredInRecruiter: boolean
}

export interface Achievement {
  id: string
  title: string
  event: string
  organizer: string
  position: string
  description: string
  image: string
  date: string
}

export interface Training {
  name: string
  duration: string
  focus: string
  technologies: string[]
  associatedProjects: string[]
  description: string
}

export interface StoryStage {
  number: string
  title: string
  shortTitle: string
  heading: string
  paragraph: string
  technologies: string[]
  status: string
  statusType: 'built' | 'in-progress' | 'learning' | 'foundation'
  image: string
  isConcept: boolean
  linkedProjectId?: string
  linkedChapterIndex: number
}

export const PROFILE = {
  name: 'Kishore Kumar G',
  title: 'Aspiring AI Engineer & Full-Stack Developer',
  institution: 'Sri Eshwar College of Engineering',
  degree: 'B.Tech Computer Science and Business Systems',
  graduationYear: '2027',
  location: 'Theni, Tamil Nadu, India',
  availability: 'Open to internships and full-time roles',
  portraitImage: '/assets/profile/kishore-portrait.jpg',
  fallbackMonogram: 'KG',
  introduction:
    'I started by learning programming and strengthening my problem-solving skills. I explored C++ to understand lower-level concepts, continued with Python, and solved coding problems consistently. I then moved into full-stack development to build applications that solve real problems. My interest in AI led me through data science, machine learning, LLMs, and RAG. I am now exploring agentic AI and working towards building useful, reliable AI-powered software.',
  storySummary:
    'Problem solving → Programming fundamentals → Full-stack applications → Data science → Machine learning → LLMs and RAG → Agentic AI → AI engineering.',
  contacts: {
    email: 'kishorekumar.devx@gmail.com',
    emailLink: 'mailto:kishorekumar.devx@gmail.com',
    github: 'https://github.com/kishorekumar28114',
    linkedin: 'https://www.linkedin.com/in/kishorekumar-aspirant/',
    resumeDrive: 'https://drive.google.com/drive/folders/1LamRd5qIrcZfxl3Ks0id3wNUlQvIeLZd?usp=sharing',
  },
  metrics: {
    problemsSolved: '540+',
    platforms: 'LeetCode & SkillRack',
    leaderboardTopper: 'Semesters 2, 3 & 4',
    awardsCount: '4 Major Podiums',
  },
}

export const STORY_STAGES: StoryStage[] = [
  {
    number: '01',
    title: 'The Programmer',
    shortTitle: 'Programmer',
    heading: 'Algorithmic Foundations & Core Problem Solving',
    paragraph:
      'I built my analytical thinking by working through algorithms in C++ for memory discipline and lower-level clarity, paired with Java and Python. Solving 540+ coding challenges on LeetCode instilled a disciplined approach to time complexity, spatial trade-offs, and data structures.',
    technologies: ['C++', 'Python', 'Java', 'SQL', 'Data Structures & Algorithms', 'LeetCode (540+)'],
    status: 'Studied Foundations',
    statusType: 'foundation',
    image: '/assets/concepts/concept-programmer.svg',
    isConcept: true,
    linkedChapterIndex: 2,
  },
  {
    number: '02',
    title: 'The Builder',
    shortTitle: 'Builder',
    heading: 'Full-Stack Engineering & Practical Web Products',
    paragraph:
      'Moved from algorithmic puzzles to end-to-end applications that solve tangible problems. Developed Lurnix to bring AR visualisations to school geometry, and engineered Geo-Pulze to manage hostel roll calls using GPS geofencing and camera verification.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
    status: 'Built',
    statusType: 'built',
    image: '/assets/projects/lurnix-1.png',
    isConcept: false,
    linkedProjectId: 'lurnix',
    linkedChapterIndex: 5,
  },
  {
    number: '03',
    title: 'The Data Explorer',
    shortTitle: 'Data Explorer',
    heading: 'Data Science, Feature Engineering & Machine Learning',
    paragraph:
      'Transitioned into data-driven decision making. Evaluated social media engagement metrics to classify high-affinity influencers using Random Forest, and designed regression models to predict student grade trajectories from daily study habits.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Random Forest Classifier & Regressor'],
    status: 'Studied Foundations',
    statusType: 'foundation',
    image: '/assets/concepts/concept-datascience.svg',
    isConcept: true,
    linkedProjectId: 'instagram-data-analysis',
    linkedChapterIndex: 6,
  },
  {
    number: '04',
    title: 'The AI Developer',
    shortTitle: 'AI Developer',
    heading: 'Vector Embeddings, ChromaDB & Retrieval-Augmented Generation',
    paragraph:
      'Explored how language models interact with external knowledge stores. Built a semantic Company Recommendation engine using skills embeddings and cosine similarity, then developed TalentIQ to match applicant résumés with opportunities via conversational RAG.',
    technologies: ['Transformers', 'Vector Embeddings', 'ChromaDB', 'Chunking & Tokenisation', 'Cosine Similarity', 'RAG'],
    status: 'Built',
    statusType: 'built',
    image: '/assets/projects/talent-iq-1.png',
    isConcept: false,
    linkedProjectId: 'talent-iq',
    linkedChapterIndex: 7,
  },
  {
    number: '05',
    title: 'The Agentic AI Engineer in Progress',
    shortTitle: 'Agentic AI',
    heading: 'Multi-Agent Workflows & Meeting Intelligence with LangGraph',
    paragraph:
      'Currently learning and applying multi-agent coordination with LangGraph, asynchronous FastAPI, and pgvector. Developing SynapseAI to transcribe meeting audio, extract actionable tasks, and maintain long-term semantic project memory.',
    technologies: ['LangGraph', 'Multi-Agent Systems', 'FastAPI (Async)', 'pgvector', 'Whisper ASR', 'Tool Calling'],
    status: 'In Progress',
    statusType: 'in-progress',
    image: '/assets/concepts/concept-agentic.svg',
    isConcept: true,
    linkedProjectId: 'synapse-ai',
    linkedChapterIndex: 8,
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'lurnix',
    title: 'Lurnix',
    subtitle: 'AI & Augmented Reality Smart Learning Platform',
    category: 'Full-Stack',
    categoryLabel: 'FULL-STACK · AR EDUCATION',
    oneLiner:
      'A smart learning platform helping school students visualise abstract concepts through interactive 3D exhibits and mobile augmented reality.',
    problem:
      'School students frequently struggle with spatial understanding in geometry and science when taught exclusively through two-dimensional textbook diagrams.',
    targetUsers: 'Middle and high school students, visual learners, and STEM educators.',
    keyFeatures: [
      'Interactive Augmented Reality view bringing 3D geometric polyhedra into physical space via smartphone camera',
      'AI assistant that breaks down geometry theorems and spatial proofs step-by-step',
      'Curated curriculum-aligned exhibits for math, chemistry, and spatial physics',
      'Cross-platform responsive web application with fast WebGL rendering',
    ],
    technologies: ['React', 'Next.js', 'Three.js / WebXR', 'Tailwind CSS', 'Node.js', 'Vercel'],
    primaryImage: '/assets/projects/lurnix-1.png',
    secondaryImage: '/assets/projects/lurnix-ar.jpg',
    isConceptIllustration: false,
    liveDemo: 'https://lurnix-swart.vercel.app/',
    githubRepo: 'https://github.com/kishorekumar28114/Lurnix',
    status: "1st Prize · Genbrainiacs '25 (PSNA) | 2nd Prize · Hack the Cosmos '25 (SRM)",
    statusType: 'built',
    awards: '1st Prize Genbrainiacs 2025, 2nd Prize Hack the Cosmos 2025',
    limitationsOrNextSteps:
      'Currently adding WebXR model hand-tracking and expanding the interactive 3D physics simulation library.',
    featuredInRecruiter: true,
  },
  {
    id: 'geo-pulze',
    title: 'Geo-Pulze',
    subtitle: 'Hostel Attendance System with Geofencing & Camera Verification',
    category: 'Full-Stack',
    categoryLabel: 'FULL-STACK · IOT & SYSTEMS',
    oneLiner:
      'A tamper-resistant hostel attendance management system featuring location-based validation, camera capture, and an administrative dashboard.',
    problem:
      'Manual paper roll calls and proxy sign-ins in residential college hostels cause reporting inaccuracies, delays, and administrative overhead for wardens.',
    targetUsers: 'Hostel wardens, residential campus administrators, and residential college students.',
    keyFeatures: [
      'GPS coordinates verified using the Haversine formula against campus hostel perimeter boundaries (< 50m radius)',
      'Camera-assisted attendance capture preventing proxy check-ins',
      'Administrative analytics portal with daily absence reports, roll-call audit logs, and exportable data',
      'Role-based access control separating warden privileges from student submission portals',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML5 Geolocation API', 'Webcam API', 'JWT'],
    primaryImage: '/assets/projects/geo-pulze-1.png',
    secondaryImage: '/assets/projects/geo-pulze-2.png',
    isConceptIllustration: false,
    liveDemo: 'https://attendance-sigma-green.vercel.app/login',
    githubRepo: 'https://github.com/kishorekumar28114/Attendance',
    status: 'Built & Live Deployment',
    statusType: 'built',
    limitationsOrNextSteps:
      'Next iteration aims to implement offline-first synchronization using IndexedDB for areas with weak cellular coverage.',
    featuredInRecruiter: true,
  },
  {
    id: 'talent-iq',
    title: 'TalentIQ',
    subtitle: 'Conversational Job-Matching Platform with RAG & LangGraph',
    category: 'LLMs & GenAI',
    categoryLabel: 'RAG · LANGGRAPH · GENAI',
    oneLiner:
      'An intelligent recruiting assistant that extracts skills from candidate résumés and matches them to job opportunities via conversational RAG.',
    problem:
      'Job seekers waste hours scrolling through generic listings, while recruiters struggle to evaluate how non-standard résumés map to role requirements.',
    targetUsers: 'Job seekers exploring tailored career opportunities and talent acquisition specialists.',
    keyFeatures: [
      'Document chunking and tokenization of PDF and text résumés',
      'Dense vector embedding generation indexed inside ChromaDB',
      'Cosine similarity ranking matching candidate experience against role requirements',
      'LangGraph-guided conversational assistant for interactive career exploration',
    ],
    technologies: ['Next.js', 'LangGraph', 'Python / FastAPI', 'ChromaDB', 'OpenAI API', 'Tailwind CSS'],
    primaryImage: '/assets/projects/talent-iq-1.png',
    secondaryImage: '/assets/projects/talent-iq-2.png',
    isConceptIllustration: false,
    liveDemo: 'https://talent-iq-seven-beta.vercel.app/',
    githubRepo: 'https://github.com/kishorekumar28114/TalentIQ',
    status: 'Built & Deployed Demo',
    statusType: 'built',
    limitationsOrNextSteps:
      'Planning to add hybrid retrieval (BM25 keyword search + dense vector embeddings) for improved acronym detection.',
    featuredInRecruiter: true,
  },
  {
    id: 'synapse-ai',
    title: 'SynapseAI',
    subtitle: 'Meeting & Project Intelligence Multi-Agent Platform',
    category: 'Agentic AI',
    categoryLabel: 'AGENTIC AI · IN PROGRESS',
    oneLiner:
      'An asynchronous AI platform designed to transcribe meeting audio, extract action items, maintain project memory, and execute automated workflow tools.',
    problem:
      'Valuable decisions and action items discussed in team meetings are frequently lost across disconnected notes, slack messages, and issue trackers.',
    targetUsers: 'Software engineering leads, product managers, and remote engineering teams.',
    keyFeatures: [
      'Audio ingestion and transcription pipeline powered by Whisper ASR',
      'LangGraph supervisor agent coordinating specialized sub-agents for summaries, tasks, and follow-ups',
      'Semantic long-term memory indexed in PostgreSQL with the pgvector extension',
      'Tool-calling integration planned for calendar updates and issue tracker generation',
    ],
    technologies: ['LangGraph', 'FastAPI (Asynchronous)', 'PostgreSQL', 'pgvector', 'Whisper ASR', 'Docker'],
    primaryImage: '/assets/concepts/concept-agentic.svg',
    isConceptIllustration: true,
    githubRepo: 'https://github.com/kishorekumar28114/SynapseAI',
    status: 'IN PROGRESS · Core modules in active development',
    statusType: 'in-progress',
    limitationsOrNextSteps:
      'Active learning milestone: focusing on stabilizing supervisor state transitions and refining error recovery boundaries in LangGraph.',
    featuredInRecruiter: true,
  },
  {
    id: 'codesensei',
    title: 'CodeSensei',
    subtitle: 'Code Complexity Analyzer & AI Engineering Assistant',
    category: 'Full-Stack',
    categoryLabel: 'CODE INTELLIGENCE',
    oneLiner:
      'A code analysis tool and AI assistant designed to inspect algorithm complexity, highlight efficiency bottlenecks, and explain refactoring choices.',
    problem:
      'Students and engineers preparing for technical interviews often write brute-force solutions without understanding Big-O space and time nuances.',
    targetUsers: 'Computer science students, competitive programmers, and technical interview candidates.',
    keyFeatures: [
      'Static code inspection and cyclomatic complexity estimation',
      'AI assistant providing step-by-step Big-O time and space analysis',
      'Algorithmic refactoring hints comparing iterative vs recursive trade-offs',
      'Syntax-highlighted code editor interface with instant evaluation',
    ],
    technologies: ['React', 'Next.js', 'Python / AST Parser', 'Tailwind CSS', 'Vercel'],
    primaryImage: '/assets/concepts/concept-codesensei.svg',
    isConceptIllustration: true,
    liveDemo: 'https://code-sensai.vercel.app/login',
    githubRepo: 'https://github.com/kishorekumar28114/CodeSensai',
    status: 'Built & Live Demo Available (Concept Architecture Illustrated)',
    statusType: 'built',
    limitationsOrNextSteps:
      'Expanding AST parsing support from Python and JavaScript to native C++ AST introspection.',
    featuredInRecruiter: false,
  },
  {
    id: 'content-planner',
    title: 'Content Planner',
    subtitle: 'Creator Workflow & Publication Scheduling Platform',
    category: 'Full-Stack',
    categoryLabel: 'NEXT.JS · TRAINING BUILD',
    oneLiner:
      'A content planning application that helps digital creators organize publishing pipelines, track channel drafts, and maintain a consistent schedule.',
    problem:
      'Creators posting across multiple channels experience burnout and schedule inconsistency without a centralized editorial calendar.',
    targetUsers: 'Technical writers, content creators, and independent developers.',
    keyFeatures: [
      'Interactive weekly and monthly publication calendar view',
      'Channel tagging (YouTube, LinkedIn, GitHub, Tech Blogs) with status badges',
      'Local state persistence ensuring fast edits and offline draft safety',
      'Draft pipeline tracking from ideation to review and published status',
    ],
    technologies: ['Next.js', 'React', 'Modern JavaScript', 'Tailwind CSS', 'LocalStorage API'],
    primaryImage: '/assets/concepts/concept-contentplanner.svg',
    isConceptIllustration: true,
    liveDemo: 'https://content-planner-creators.vercel.app/',
    githubRepo: 'https://github.com/kishorekumar28114/content-planner-creators',
    status: 'Built during 15-day CodeHub Nexus training',
    statusType: 'built',
    limitationsOrNextSteps:
      'Plan to add Google Calendar OAuth synchronization and automated webhook notifications.',
    featuredInRecruiter: false,
  },
  {
    id: 'instagram-data-analysis',
    title: 'Instagram Data Analysis',
    subtitle: 'Influencer Engagement Signals & Classification Engine',
    category: 'Data Science & ML',
    categoryLabel: 'DATA SCIENCE',
    oneLiner:
      'Data exploration project examining likes, comments, impressions, and media types to classify suitable influencers for targeted brand promotion.',
    problem:
      'Brands struggle to identify high-converting micro-influencers when relying solely on vanity follower metrics rather than true engagement signals.',
    targetUsers: 'Marketing analysts, brand strategists, and data science students.',
    keyFeatures: [
      'Exploratory data analysis using Pandas and NumPy across engagement metrics',
      'Visual correlation heatmaps and scatter matrices built with Matplotlib and Seaborn',
      'Random Forest Classifier categorizing influencer accounts into high, mid, and low conversion tiers',
      'Feature importance analysis identifying comment-to-save ratio as the strongest predictor',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Random Forest Classifier'],
    primaryImage: '/assets/concepts/concept-datascience.svg',
    isConceptIllustration: true,
    githubRepo: 'https://github.com/kishorekumar28114/Data-Science',
    status: 'Completed during Acemigrade training',
    statusType: 'foundation',
    limitationsOrNextSteps:
      'Conducted on historical batch datasets; next phase would incorporate live Instagram Graph API telemetry.',
    featuredInRecruiter: false,
  },
  {
    id: 'student-performance-analyzer',
    title: 'Student Performance Analyzer',
    subtitle: 'Grade Prediction & Study Habit Regression Modeling',
    category: 'Data Science & ML',
    categoryLabel: 'MACHINE LEARNING',
    oneLiner:
      'Machine learning model evaluating daily study duration, attendance records, and formative assessments to predict student examination outcomes.',
    problem:
      'Educators often discover student learning difficulties too late in the academic semester to implement effective interventions.',
    targetUsers: 'Academic advisors, course tutors, and educational researchers.',
    keyFeatures: [
      'Data preprocessing pipeline handling missing data and feature normalization',
      'Linear and Random Forest Regression comparison for continuous grade prediction',
      'Hyperparameter tuning achieving high R² explanatory score',
      'Decision threshold identification pinpointing critical attendance and study thresholds',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Random Forest Regressor'],
    primaryImage: '/assets/concepts/concept-ml.svg',
    isConceptIllustration: true,
    githubRepo: 'https://github.com/kishorekumar28114/ML-Project',
    status: 'Completed during Acemigrade training',
    statusType: 'foundation',
    limitationsOrNextSteps:
      'Model currently assumes homogeneous curriculum difficulty; could be augmented with subject-weighted normalization.',
    featuredInRecruiter: false,
  },
  {
    id: 'company-recommendation-system',
    title: 'Company Recommendation System',
    subtitle: 'Skill-Based Semantic Embeddings & Similarity Retrieval',
    category: 'LLMs & GenAI',
    categoryLabel: 'EMBEDDINGS · RETRIEVAL',
    oneLiner:
      'A semantic retrieval model that projects candidate technical skills into vector space to recommend the top three matched companies; foundational precursor to TalentIQ.',
    problem:
      'Traditional boolean keyword filters overlook candidates with equivalent skillsets described using alternative industry terminologies.',
    targetUsers: 'Early-career engineers and recruitment platform developers.',
    keyFeatures: [
      'Text chunking and skill tokenization preserving domain terminology',
      'Dense vector embeddings generated via Transformer models',
      'ChromaDB vector store indexing for fast nearest-neighbor lookups',
      'Cosine similarity ranking delivering top three matching companies with match rationale',
    ],
    technologies: ['Transformers', 'Vector Embeddings', 'ChromaDB', 'Tokenization', 'Chunking', 'Cosine Similarity'],
    primaryImage: '/assets/concepts/concept-companyrec.svg',
    isConceptIllustration: true,
    status: 'Conceptual Workflow & Acemigrade Research Foundation',
    statusType: 'foundation',
    limitationsOrNextSteps:
      'Served as the proven architectural prototype directly integrated into the production TalentIQ conversational platform.',
    featuredInRecruiter: false,
  },
  {
    id: 'better-tomorrow-blog',
    title: 'Better Tomorrow Blog Application',
    subtitle: 'Full-Stack MERN Architecture Training Project',
    category: 'Full-Stack',
    categoryLabel: 'MERN · TRAINING PROJECT',
    oneLiner:
      'A blog web application built during a 15-day MERN stack programme, featuring MongoDB schemas, Express REST endpoints, and React state management.',
    problem:
      'Understanding how independent frontend and backend services coordinate authentication, state, and database transactions in modern web applications.',
    targetUsers: 'Personal learning milestone.',
    keyFeatures: [
      'MongoDB schemas for users, article drafts, and publication dates',
      'Node.js and Express RESTful API with route handlers for CRUD actions',
      'JWT token-based user authentication and route protection',
      'React frontend interface for article authoring and rendering',
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'REST API'],
    primaryImage: '/assets/concepts/concept-bettertomorrow.svg',
    isConceptIllustration: true,
    status: 'INCOMPLETE TRAINING PROJECT · Maintained as an honest learning milestone',
    statusType: 'training',
    limitationsOrNextSteps:
      'Core backend CRUD completed; UI was kept minimal as focus shifted towards advanced Next.js and AI systems.',
    featuredInRecruiter: false,
  },
]

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'sicpc-2026',
    title: 'Third Prize — SICPC 2026',
    event: 'South India Competitive Programming Contest 2026',
    organizer: 'SICPC Committee',
    position: '3rd Prize (Team Achievement)',
    description:
      'Competed as a team against top collegiate programming teams across South India, solving complex algorithmic, combinatorial, and dynamic programming challenges under strict time constraints.',
    image: '/assets/achievements/sicpc-achievement.jpg',
    date: '2026',
  },
  {
    id: 'skillrack-topper',
    title: 'Leaderboard Topper — Semesters 2, 3 & 4',
    event: 'Institutional Competitive Coding Program',
    organizer: 'Sri Eshwar College of Engineering / SkillRack',
    position: 'College Leaderboard Topper',
    description:
      'Ranked consistently at the top of the college leaderboard across Semesters 2, 3, and 4, solving hundreds of algorithmic programming problems in C++, Python, and Data Structures.',
    image: '/assets/achievements/skillrack-achievement.jpg',
    date: 'Semesters 2, 3 & 4',
  },
  {
    id: 'genbrainiacs-2025',
    title: "First Prize — Genbrainiacs '25",
    event: "Genbrainiacs '25 State-Level Technical Symposium",
    organizer: 'PSNA College of Engineering and Technology',
    position: '1st Prize (Lurnix)',
    description:
      'Awarded first place for presenting Lurnix, demonstrating how augmented reality exhibits combined with AI assistance create compelling learning experiences for school students.',
    image: '/assets/achievements/genbrainiacs-achievement.jpg',
    date: '2025',
  },
  {
    id: 'hack-the-cosmos-2025',
    title: "Second Prize — Hack the Cosmos '25",
    event: "Hack the Cosmos '25 National Hackathon",
    organizer: 'SRM Institute of Science and Technology',
    position: '2nd Prize (Lurnix)',
    description:
      'Secured second prize in a highly competitive 24-hour national hackathon for Lurnix, highlighted for its practical implementation of WebXR in education and smooth user experience.',
    image: '/assets/achievements/hack-the-cosmos-achievement.png',
    date: '2025',
  },
]

export const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    description: 'Core languages with deep daily comfort in C++ and Python',
    skills: [
      { name: 'C++', level: 'Most Comfortable · Competitive Programming & Memory Concepts' },
      { name: 'Python', level: 'Most Comfortable · Data Science, Fast prototyping & AI pipelines' },
      { name: 'Java', level: 'Object-Oriented Design & Problem Solving' },
      { name: 'JavaScript / TypeScript', level: 'Modern Frontend & Asynchronous Execution' },
    ],
  },
  {
    category: 'Problem Solving & CS Foundations',
    description: 'Disciplined algorithmic practice and data management',
    skills: [
      { name: 'Data Structures & Algorithms', level: '540+ LeetCode problems solved; Trees, Graphs, DP' },
      { name: 'SQL & Relational Queries', level: 'Complex Joins, Aggregations, Schema Normalization' },
      { name: 'Competitive Coding', level: 'SkillRack Leaderboard Topper (Semesters 2, 3 & 4)' },
    ],
  },
  {
    category: 'Full-Stack Web Development',
    description: 'Production web applications, component architecture & APIs',
    skills: [
      { name: 'React & Next.js', level: 'App Router, Server Components, State & Hooks' },
      { name: 'Node.js & Express', level: 'REST APIs, Middleware, JWT Authentication' },
      { name: 'Tailwind CSS', level: 'Responsive Editorial Layouts & Micro-interactions' },
      { name: 'MongoDB & PostgreSQL', level: 'NoSQL & Relational Persistence Layers' },
    ],
  },
  {
    category: 'Data Science & Machine Learning',
    description: 'Feature engineering, tabular analysis & supervised learning',
    skills: [
      { name: 'Pandas & NumPy', level: 'Data manipulation, vectorized operations & cleaning' },
      { name: 'Matplotlib & Seaborn', level: 'Exploratory data visualization & correlation matrices' },
      { name: 'Random Forest Classifiers', level: 'Ensemble classification for engagement tiers' },
      { name: 'Random Forest Regression', level: 'Continuous numerical prediction for student grades' },
    ],
  },
  {
    category: 'LLMs, Embeddings & RAG',
    description: 'Semantic vector search and augmented generation',
    skills: [
      { name: 'Transformers & Tokenization', level: 'Chunking strategies, token windows, embeddings' },
      { name: 'ChromaDB & Vector Stores', level: 'HNSW indexing & similarity retrieval' },
      { name: 'Cosine Similarity', level: 'High-dimensional distance ranking for matching' },
      { name: 'RAG Architectures', level: 'Grounding conversational models in private context' },
    ],
  },
  {
    category: 'Agentic AI & Backend Engineering',
    description: 'Active learning & in-progress development areas',
    skills: [
      { name: 'LangGraph Workflows', level: 'Multi-agent supervisor graphs & cyclic state execution' },
      { name: 'FastAPI (Asynchronous)', level: 'Async endpoints for low-latency streaming' },
      { name: 'pgvector (PostgreSQL)', level: 'Vector similarity search inside relational databases' },
      { name: 'System Design', level: 'HLD studied theoretically & applied; LLD is in active development' },
    ],
  },
]

export const TRAININGS: Training[] = [
  {
    name: 'CodeHub Nexus',
    duration: '15 Days Intensive',
    focus: 'Next.js, Modern JavaScript & Full-Stack Development',
    technologies: ['Next.js', 'React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vercel'],
    associatedProjects: ['Content Planner'],
    description:
      'Immersive training on modern frontend architecture, client-side routing, state management, and component lifecycle in Next.js.',
  },
  {
    name: 'Better Tomorrow',
    duration: '15 Days Intensive',
    focus: 'MERN Stack Web Development',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
    associatedProjects: ['Better Tomorrow Blog Application'],
    description:
      'Full-stack immersion covering database schema design, RESTful API design with Express, and connecting React frontends with token authentication.',
  },
  {
    name: 'Acemigrade',
    duration: '1 Month Specialized Program',
    focus: 'AI, Machine Learning, Data Science & LLM Foundations',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Transformers', 'ChromaDB'],
    associatedProjects: [
      'Instagram Data Analysis',
      'Student Performance Analyzer',
      'Company Recommendation System',
    ],
    description:
      'Rigorous project-based curriculum traversing data science pipelines, supervised ML models, and foundational vector search using ChromaDB and embeddings.',
  },
]

export const EDUCATION = {
  degree: 'B.Tech in Computer Science and Business Systems',
  institution: 'Sri Eshwar College of Engineering',
  affiliation: 'Affiliated to Anna University / Accredited Autonomous Institution',
  expectedGraduation: '2027',
  focusAreas:
    'Core Computer Science, Data Structures & Algorithms, Database Management Systems, Machine Learning, Business Systems & System Architecture.',
}

export const CHAPTERS = [
  { id: 'cover', number: '00', title: 'Cover', label: 'Cover', pageIndex: 0 },
  { id: 'contents', number: '01', title: 'Table of Contents', label: 'Index', pageIndex: 1 },
  { id: 'intro', number: '02', title: 'The Story & Introduction', label: 'Story', pageIndex: 2 },
  { id: 'programmer', number: '03', title: 'The Programmer & Problem Solving', label: 'Code', pageIndex: 3 },
  { id: 'skills', number: '04', title: 'Skills & Working Toolkit', label: 'Toolkit', pageIndex: 4 },
  { id: 'awards', number: '05', title: 'Awards & Achievements', label: 'Awards', pageIndex: 5 },
  { id: 'fullstack', number: '06', title: 'Full-Stack Applications', label: 'Web Apps', pageIndex: 6 },
  { id: 'datascience', number: '07', title: 'Data Science & Machine Learning', label: 'Data & ML', pageIndex: 7 },
  { id: 'rag', number: '08', title: 'LLMs, GenAI & RAG', label: 'RAG & AI', pageIndex: 8 },
  { id: 'agentic', number: '09', title: 'Agentic AI & SynapseAI', label: 'Agents', pageIndex: 9 },
  { id: 'systems', number: '10', title: 'System Design Notebook', label: 'Systems', pageIndex: 10 },
  { id: 'training', number: '11', title: 'Training & Education', label: 'Learning', pageIndex: 11 },
  { id: 'contact', number: '12', title: 'Contact & Résumé', label: 'Contact', pageIndex: 12 },
  { id: 'colophon', number: '13', title: 'Colophon & Back Cover', label: 'Colophon', pageIndex: 13 },
]


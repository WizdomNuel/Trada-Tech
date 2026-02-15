import React from 'react';
import { NavItem, SolutionPillar, CaseStudy, Project, ServiceOption, ProcessStep, FAQItem, TechCategory, TeamMember, CoreValue } from './types';
import {
  Layout,
  Database,
  Globe,
  Smartphone,
  Cpu,
  BarChart3,
  Network,
  Factory,
  Building2,
  ShoppingBag,
  Search,
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  Users,
  Lightbulb,
  Zap,
  Server,
  Cloud
} from 'lucide-react';

export const COMPANY_NAME = "TRADA Technologies";
export const TAGLINE = "The Smart Business Integrator";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'Our Story', path: '/about' },
      { label: 'Philosophy', path: '/philosophy' },
      { label: 'Success Stories', path: '/stories' }
    ]
  },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export const CONSULTING_SERVICES: ServiceOption[] = [
  { id: 'bpoa', label: 'Business Process Optimization' },
  { id: 'custom_soft', label: 'Custom Software Development' },
  { id: 'data_analytics', label: 'Data Analytics & Reporting' },
  { id: 'automation', label: 'Workflow Automation' },
  { id: 'integration', label: 'Systems Integration' },
  { id: 'training', label: 'Staff Digital Training' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Diagnostic Audit",
    description: "We don't start with code. We start with your reality. We map your current workflows, identify bottlenecks, and understand the human context of your operations.",
    icon: "Search"
  },
  {
    id: 2,
    title: "Strategic Blueprint",
    description: "We design a solution architecture that bridges the gap between where you are and where you need to be. This includes technology selection, process redesign, and change management planning.",
    icon: "PenTool"
  },
  {
    id: 3,
    title: "Agile Development",
    description: "We build your solution in iterative sprints. You get visibility early and often, ensuring the final product matches your evolving needs, not just the initial spec.",
    icon: "Code2"
  },
  {
    id: 4,
    title: "Integration & Training",
    description: "Deployment is just the beginning. We integrate the new tools into your daily routine and provide hands-on training to ensure your team actually uses them.",
    icon: "Rocket"
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Clarity First",
    description: "We believe complexity is the enemy of execution. We strive to make systems simple, understandable, and transparent.",
    icon: "Lightbulb"
  },
  {
    title: "Contextual Relevance",
    description: "We don't copy-paste solutions from Silicon Valley. We build for the infrastructure, culture, and connectivity realities of Africa.",
    icon: "Globe"
  },
  {
    title: "Reliability Over Hype",
    description: "We prefer boring, stable technology that works 100% of the time over flashy trends that break when you need them most.",
    icon: "ShieldCheck"
  },
  {
    title: "Human-Centricity",
    description: "Software is used by people. We design with empathy for the end-user, whether they are a CEO or a field agent.",
    icon: "Users"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you build custom software or use existing tools?",
    answer: "We do both. Our 'Integration First' approach means we look for reliable existing tools (like ERPs or CRMs) that can be connected to solve your problem. If a specific tool doesn't exist, we build custom software tailored exactly to your unique workflow."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timeline depends on scope. A Process Optimization audit might take 2 weeks, while a full Enterprise Platform build could take 3-6 months. We work in 2-week sprints, so you'll see progress and validatable output regularly throughout the engagement."
  },
  {
    question: "Do you support legacy systems?",
    answer: "Yes. We specialize in modernization. We can build 'middleware' layers that allow your old mainframes or databases to talk to modern web and mobile apps, extending the life of your initial investments."
  },
  {
    question: "What happens after the project is launched?",
    answer: "We offer Service Level Agreements (SLAs) for ongoing maintenance, server monitoring, and feature updates. We act as your external technical partner, ensuring your digital infrastructure remains healthy."
  }
];

export const TECH_STACK: TechCategory[] = [
  {
    category: "Frontend & Mobile",
    items: ["React.js", "Next.js", "TypeScript", "Flutter", "React Native", "Tailwind CSS"],
    icon: "Smartphone"
  },
  {
    category: "Backend & API",
    items: ["Node.js", "Python (Django/FastAPI)", "Go", "GraphQL", "REST", "gRPC"],
    icon: "Server"
  },
  {
    category: "Data & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Google Cloud", "Docker/Kubernetes"],
    icon: "Database"
  },
  {
    category: "Emerging Tech",
    items: ["TensorFlow", "OpenAI API", "WebRTC", "Socket.io", "Blockchain Identity"],
    icon: "Cpu"
  }
];

import FounderImage from './assets/myimage.png';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ben-Anthony Ifechukwu N.O.",
    role: "Founder & Lead Systems Architect",
    bio: "A visionary technologist with over a decade of experience in building digital infrastructure. Ben-Anthony combines deep technical expertise with a pragmatic understanding of African business operations. He founded TRADA to close the gap between potential and execution.",
    image: FounderImage
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "National Trade Registry",
    client: "Federal Commerce Association",
    description: "A centralized database verifying over 50,000 businesses across 6 states.",
    status: "completed",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Data", "Web Platform", "Identity"],
    longDescription: "The National Trade Registry serves as the single source of truth for business verification within the federal commerce ecosystem. By moving from paper-based records to a secure, cloud-based registry, we enabled real-time verification for banks, investors, and trade partners.",
    challenge: "Existing records were fragmented across 6 different state chapters with no synchronization, leading to a 3-week delay in verification requests.",
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    testimonial: {
      quote: "TRADA didn't just build a database; they built trust. Our verification time went from weeks to seconds.",
      author: "Dr. A. Ibrahim",
      role: "Director of Commerce"
    }
  },
  {
    id: 2,
    title: "Agro-Logistics ERP",
    client: "GreenHarvest Ltd",
    description: "End-to-end supply chain tracking from farm to factory gate.",
    status: "completed",
    image: "https://images.unsplash.com/photo-1625246333195-58197bd4758d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile App", "Offline-First", "ERP"],
    longDescription: "A robust mobile and web ERP designed for low-bandwidth rural environments. This system tracks produce from the moment it is harvested, weighing it digitally and syncing data when connectivity is restored.",
    challenge: "High pilferage rates and dispute levels between farmers and logistics drivers due to manual weighing and paper receipts.",
    techStack: ["Flutter", "Firebase", "Google Cloud Functions", "IoT Integration"],
    testimonial: {
      quote: "We finally have visibility over our entire supply chain. The offline capability was a game changer for our field agents.",
      author: "Sarah N.",
      role: "Operations Lead"
    }
  },
  {
    id: 3,
    title: "Fintech Core Integration",
    client: "PayEasy Nigeria",
    description: "Middleware architecture connecting legacy banking systems to modern APIs.",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Backend", "Security", "Finance"],
    longDescription: "Developing the secure middleware layer that allows PayEasy's modern wallet infrastructure to talk to traditional banking mainframes (CBS). Focus on ISO 8583 standards and high-concurrency transaction processing.",
    challenge: "Legacy bank systems were timing out during peak transaction hours, causing failed transfers and user churn.",
    techStack: ["Java Spring Boot", "Kafka", "Kubernetes", "AWS Lambda"],
  },
  {
    id: 4,
    title: "Smart Campus Initiative",
    client: "Regional University",
    description: "Digitizing student records, hostel allocation, and fee payments.",
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    tags: ["Education", "Cloud Infrastructure"],
    longDescription: "A comprehensive digital transformation project for a university with 15,000+ students. The system handles admissions, course registration, hostel balloting, and result processing.",
    challenge: "Manual file handling resulted in lost transcripts and a chaotic hostel allocation process every semester.",
    techStack: ["Next.js", "Supabase", "Python/Django", "Stripe API"]
  },
  {
    id: 5,
    title: "AI Market Predictor",
    client: "Investment Consult",
    description: "Predictive analytics tool for informal market price fluctuations.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "Machine Learning", "Big Data"],
    longDescription: "An experimental project aimed at aggregating informal market data to predict price spikes in essential commodities. Using crowd-sourced data points and historical trends.",
    challenge: "Formal economic indicators often fail to capture the reality of the informal African market sector.",
    techStack: ["Python", "TensorFlow", "FastAPI", "React Native"]
  },
  {
    id: 6,
    title: "Tele-Health Rural Access",
    client: "Health NGO",
    description: "Low-bandwidth video consultation platform for remote clinics.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Healthcare", "Video Streaming", "Mobile"],
    longDescription: "Building a specialized video conferencing tool optimized for 2G/3G networks, allowing doctors in cities to diagnose patients in rural primary healthcare centers.",
    challenge: "Standard video tools (Zoom/Teams) fail in remote areas with high latency and packet loss.",
    techStack: ["WebRTC", "Socket.io", "React", "Node.js"]
  }
];

export const SOLUTIONS: SolutionPillar[] = [
  {
    id: 1,
    title: "Business Process Optimization (BPOA)",
    shortDescription: "Before technology, there must be clarity.",
    fullDescription: "TRADA works with founder-led and growing businesses to redesign internal workflows, strengthen controls, and introduce accountability structures. We map the chaos, remove the friction, and create a playbook for your operations.",
    levels: [
      "Operational Clarity Engagement",
      "Control & Discipline Framework",
      "Scale-Ready Transformation"
    ],
    icon: "Layout"
  },
  {
    id: 2,
    title: "Integrated Management Systems",
    shortDescription: "Unified platforms for operations, inventory, and finance.",
    fullDescription: "We design unified platforms that bring operations, inventory, finance, compliance, and reporting into one connected environment. Stop jumping between five different spreadsheets and three different apps.",
    levels: [
      "Core Operations Systems",
      "Operations + Financial Integration",
      "Enterprise-Ready Modular Platforms"
    ],
    icon: "Database"
  },
  {
    id: 3,
    title: "Digital Directories & Verification",
    shortDescription: "Building institution-backed business ecosystems.",
    fullDescription: "Platforms serving chambers, associations, and sectors to increase visibility, trust, and trade through verified data. We build the digital infrastructure that validates identity and competence in the market.",
    levels: [
      "Verified Business Registry Platforms",
      "Trade & Marketplace Directories",
      "Sector-Wide Digital Ecosystems"
    ],
    icon: "Globe"
  },
  {
    id: 4,
    title: "Software & App Development",
    shortDescription: "Custom web and mobile applications.",
    fullDescription: "We design and deploy custom web and mobile applications tailored to operational realities, designed for gradual adoption. We prioritize offline-first architecture for regions with unstable internet.",
    levels: [
      "MVP Builds",
      "Custom Business Applications",
      "Scalable Multi-User Platforms"
    ],
    icon: "Smartphone"
  },
  {
    id: 5,
    title: "Automation & AI Systems",
    shortDescription: "Reducing friction and increasing accuracy.",
    fullDescription: "Automation applied deliberately. We treat AI as a support layer, not a replacement for sound processes. We automate repetitive data entry, reconciliation, and reporting tasks.",
    levels: [
      "Workflow Automation",
      "AI-Assisted Matching & Verification",
      "Intelligent Analytics Layers"
    ],
    icon: "Cpu"
  },
  {
    id: 6,
    title: "Data & Analytics Infrastructure",
    shortDescription: "Converting data into structured intelligence.",
    fullDescription: "TRADA converts operational data into structured intelligence for management, advocacy, and investment readiness. We turn your raw records into dashboards that tell the truth about your business.",
    levels: [
      "Executive Dashboards",
      "Institutional & Sector Analytics",
      "Policy & Investor Reporting"
    ],
    icon: "BarChart3"
  },
  {
    id: 7,
    title: "Systems Integration & Advisory",
    shortDescription: "Connecting tools into a unified ecosystem.",
    fullDescription: "Connecting existing tools, databases, and workflows. Ensuring continuity, scalability, and institutional-grade resilience. We act as your fractional CTO, guiding your technical decisions.",
    levels: [
      "Systems Audit & Cleanup",
      "API & Data Integration",
      "Technical Stewardship"
    ],
    icon: "Network"
  }
];

export const CONTACT_INFO = {
  founder: "Ben-Anthony Ifechukwu N.O.",
  email: "tradalimited@gmail.com",
  phone: "+234 707 289 8618",
  location: "Nigeria"
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "The Production Pivot",
    clientType: "Regional Manufacturing Plant",
    industry: "Manufacturing",
    challenge: "A mid-sized manufacturer was tracking raw materials, production output, and finished goods using a mix of WhatsApp messages and paper slips. This led to frequent stockouts, pilferage, and an inability to calculate true unit costs.",
    solution: "TRADA deployed a custom Inventory & Production Management System tailored to their floor operations. We replaced text-based reporting with simple mobile entry points for supervisors and a central dashboard for management.",
    results: [
      "Eliminated stockouts within 3 months",
      "Reduced operational pilferage by 22%",
      "Automated weekly production efficiency reports"
    ],
    keyMetric: "22% Cost Savings",
    icon: "Factory",
    metricsData: [
      { label: "Pilferage Reduction", value: 22, displayValue: "22%" },
      { label: "Stockout Reduction", value: 100, displayValue: "100%" },
      { label: "Reporting Speed", value: 85, displayValue: "Instant" }
    ]
  },
  {
    id: 2,
    title: "Digitizing Institutional Trust",
    clientType: "State Chamber of Commerce",
    industry: "Trade & Commerce",
    challenge: "The Chamber struggled to maintain an up-to-date database of its 2,000+ members. Data was scattered across spreadsheets, making it difficult to verify membership status for partners or banks, reducing the value of membership.",
    solution: "We built a Verified Business Registry Platform. Members could update their own profiles, while the Chamber retained approval rights. The system generated digital verification certificates accessible via QR code.",
    results: [
      "1,500+ members verified and onboarded in 6 months",
      "Reduced administrative data entry time by 70%",
      "Enabled direct API integration with partner banks"
    ],
    keyMetric: "1.5k+ Verified Members",
    icon: "Building2",
    metricsData: [
      { label: "Admin Time Saved", value: 70, displayValue: "70%" },
      { label: "Member Onboarding", value: 75, displayValue: "1.5k+" },
      { label: "Verification Speed", value: 95, displayValue: "< 24hrs" }
    ]
  },
  {
    id: 3,
    title: "Retail Without Leaks",
    clientType: "Multi-Location Retail Chain",
    industry: "Retail",
    challenge: "A fast-growing retail business with 4 locations was entirely dependent on the founder's physical presence. Cash handling was opaque, and inter-branch transfers were often unrecorded, stalling expansion.",
    solution: "We implemented a Business Process Optimization (BPOA) framework followed by a centralized POS and Stock Control System. We established strict approval matrices for stock transfers and daily automated reconciliation.",
    results: [
      "Founder successfully stepped back from daily operations",
      "Opened 2 new branches within the following year",
      "Achieved 99% inventory accuracy across locations"
    ],
    keyMetric: "2 New Branches Opened",
    icon: "ShoppingBag",
    metricsData: [
      { label: "Inventory Accuracy", value: 99, displayValue: "99%" },
      { label: "Branch Growth", value: 50, displayValue: "+50%" },
      { label: "Founder Freedom", value: 90, displayValue: "High" }
    ]
  }
];
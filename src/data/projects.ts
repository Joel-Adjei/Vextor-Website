export interface ProjectMedia {
  type: "image" | "video"
  url: string
  thumbnailUrl?: string
  caption: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  year: string
  status: "Live" | "Completed" | "In Progress"
  metrics: { label: string; value: string }[]
  challenge: string
  solution: string
  outcome: string
  techStack: string[]
  color: string
  media?: ProjectMedia[]
}

export const projects: Project[] = [
  {
    id: "platform-core",
    title: "Platform Core",
    tagline: "High-throughput event-driven microservices platform",
    description:
      "Redesigned a monolithic e-commerce backend into a cloud-native microservices architecture capable of handling 500K concurrent users.",
    longDescription:
      "A Fortune 500 retailer needed to modernize a decade-old monolith that was buckling under seasonal traffic spikes. We designed and delivered a full event-driven microservices platform, migrating 40+ services with zero customer downtime.",
    category: "Backend Engineering",
    tags: ["Microservices", "AWS", "Kubernetes", "Kafka"],
    year: "2024",
    status: "Live",
    metrics: [
      { label: "Concurrent Users", value: "500K" },
      { label: "Latency Reduction", value: "78%" },
      { label: "Uptime", value: "99.99%" },
      { label: "Deployment Frequency", value: "12×/day" },
    ],
    challenge:
      "The existing monolith could not scale horizontally. Black Friday traffic spikes caused 4-6 hours of downtime annually, costing millions in lost revenue. Deployment cycles took 3 weeks.",
    solution:
      "We implemented a strangler-fig migration pattern, incrementally extracting bounded contexts into independently deployable services. Event sourcing with Kafka ensured consistency across domains, while Kubernetes auto-scaling absorbed traffic spikes.",
    outcome:
      "Zero downtime for the first Black Friday post-migration. Deployment cycles collapsed from 3 weeks to same-day. Infrastructure costs dropped 34% through right-sizing.",
    techStack: ["Node.js", "Kafka", "Kubernetes", "AWS EKS", "PostgreSQL", "Redis", "Terraform", "GitHub Actions"],
    color: "#acc8a2",
    media: [
      {
        type: "image",
        url: "/images/screenshots/platform_core.png",
        caption: "Microservices cluster network topology map showing active service communication, routing protocols, and health statuses."
      },
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-matrix-style-green-code-running-on-screen-32692-large.mp4",
        caption: "Live logging terminal output demonstrating request rates, packet delivery times, and automated Kubernetes replica scaling."
      }
    ],
  },
  {
    id: "analytics-engine",
    title: "Analytics Engine",
    tagline: "Real-time data pipeline processing 2B events per day",
    description:
      "Built a real-time analytics platform from scratch that ingests, processes, and visualizes billions of events daily for a SaaS product.",
    longDescription:
      "A fast-growing SaaS company needed to give customers real-time visibility into their data. Their existing batch-processing solution had 6-hour delays and was hitting scalability walls with 2B+ daily events.",
    category: "Data Engineering",
    tags: ["Data Pipeline", "Streaming", "React", "Python"],
    year: "2024",
    status: "Live",
    metrics: [
      { label: "Events / Day", value: "2B+" },
      { label: "Processing Latency", value: "<200ms" },
      { label: "Dashboard Load", value: "0.8s" },
      { label: "Data Freshness", value: "Real-time" },
    ],
    challenge:
      "Batch ETL pipelines introduced 6-hour data delays, making the product uncompetitive. The existing warehouse couldn't handle the ingestion rate, and the frontend charting library collapsed above 100K data points.",
    solution:
      "Designed a Lambda Architecture with a Kafka + Flink streaming layer for real-time results and a Spark batch layer for historical accuracy. Built a custom React charting layer using WebGL for sub-second rendering of millions of points.",
    outcome:
      "Real-time data freshness unlocked a new enterprise tier, adding $2.4M ARR in the first quarter. Customer churn dropped 18% due to the improved product experience.",
    techStack: ["Python", "Apache Flink", "Kafka", "Apache Spark", "ClickHouse", "React", "TypeScript", "AWS"],
    color: "#7fb89a",
    media: [
      {
        type: "image",
        url: "/images/screenshots/analytics_engine.png",
        caption: "Real-time analytics engine interface displaying data ingestion rates, active connections, and latency trends in a responsive chart."
      },
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-computer-keyboard-in-the-dark-44247-large.mp4",
        caption: "Demonstration of live data query writing and rendering of millions of data points with sub-second response times."
      }
    ],
  },
  {
    id: "devsec-pipeline",
    title: "DevSecOps Pipeline",
    tagline: "Automated security scanning across 120+ repositories",
    description:
      "Designed and implemented a fully automated DevSecOps pipeline embedding security at every stage of the CI/CD process.",
    longDescription:
      "A fintech company needed to achieve SOC 2 Type II compliance while maintaining rapid deployment velocity. Manual security reviews were creating bottlenecks and vulnerabilities were slipping to production.",
    category: "Security & DevOps",
    tags: ["DevSecOps", "CI/CD", "Security", "Compliance"],
    year: "2023",
    status: "Completed",
    metrics: [
      { label: "Repositories Covered", value: "120+" },
      { label: "Vulnerability Detection", value: "↑340%" },
      { label: "Mean Time to Remediate", value: "↓65%" },
      { label: "Compliance Score", value: "SOC 2 Type II" },
    ],
    challenge:
      "120+ repositories had inconsistent security tooling. Manual code reviews for security were a 2-week bottleneck. Production incidents due to security vulnerabilities averaged 3 per quarter.",
    solution:
      "Implemented a centralized GitHub Actions pipeline template with SAST, DAST, dependency scanning, container scanning, and infrastructure-as-code analysis. Built a custom dashboard aggregating findings across all repos.",
    outcome:
      "SOC 2 Type II audit passed first attempt. Zero security-related production incidents in 12 months post-implementation. Developer productivity improved — security reviews now automated and near-instant.",
    techStack: ["GitHub Actions", "Semgrep", "Trivy", "Snyk", "Terraform", "AWS Security Hub", "Python", "Go"],
    color: "#8fb5a8",
    media: [
      {
        type: "image",
        url: "/images/screenshots/devsecops_pipeline.png",
        caption: "Centralized DevSecOps dashboard aggregating vulnerability statuses, secret leaks alerts, and compliance check-list ratings."
      },
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-39906-large.mp4",
        caption: "Walkthrough of automated vulnerability scans and pull request blocking upon detection of high-severity dependencies."
      }
    ],
  },
  {
    id: "saas-platform",
    title: "SaaS Platform",
    tagline: "Multi-tenant SaaS built from zero to 10K customers",
    description:
      "Full-stack SaaS platform built from concept to production — authentication, billing, team management, and a rich feature set.",
    longDescription:
      "A startup came to us with a validated idea but no engineering team. We designed and built the entire technical foundation: infrastructure, backend, frontend, and the core product — shipping the MVP in 8 weeks.",
    category: "Full-Stack Development",
    tags: ["Full-Stack", "SaaS", "React", "Node.js"],
    year: "2023",
    status: "Live",
    metrics: [
      { label: "MVP Timeline", value: "8 weeks" },
      { label: "Active Customers", value: "10K+" },
      { label: "Monthly Uptime", value: "99.97%" },
      { label: "NPS Score", value: "72" },
    ],
    challenge:
      "No technical co-founder, a tight runway, and a competitor already in market. The MVP needed to be shippable in 8 weeks without cutting corners on architecture — the platform needed to scale.",
    solution:
      "Chose a lean but scalable stack: Next.js frontend, Node.js API, PostgreSQL with row-level security for multi-tenancy, Stripe for billing, and Vercel + Supabase for zero-ops infrastructure. Feature flags allowed incremental rollout.",
    outcome:
      "MVP launched in 8 weeks. First paying customer on day 1. Grew to 10K customers in 14 months with no infrastructure rework. The company raised a $4M seed round on the back of the product.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Stripe", "Vercel", "Tailwind CSS"],
    color: "#acc8a2",
    media: [
      {
        type: "image",
        url: "/images/screenshots/saas_platform.png",
        caption: "Multi-tenant SaaS dashboard featuring user activity grids, subscription statuses, billing pipelines, and granular authorization controls."
      },
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-keyboard-with-neon-lights-48762-large.mp4",
        caption: "Interactive onboarding workflow showcase, including user organization creation and database isolation configuration."
      }
    ],
  },
  {
    id: "mobile-fintech",
    title: "Mobile Fintech App",
    tagline: "Cross-platform payments app with 4.9 App Store rating",
    description:
      "Consumer-facing fintech app with real-time payments, spending analytics, and budgeting tools — built for iOS and Android.",
    longDescription:
      "A fintech startup needed to compete with neobanks by offering a premium mobile experience. They had a web product but no mobile presence, and competitors were moving fast.",
    category: "Mobile Development",
    tags: ["React Native", "Fintech", "Payments", "Mobile"],
    year: "2023",
    status: "Live",
    metrics: [
      { label: "App Store Rating", value: "4.9" },
      { label: "Daily Active Users", value: "85K" },
      { label: "Transaction Success", value: "99.8%" },
      { label: "Load Time", value: "< 1.2s" },
    ],
    challenge:
      "Building a financial app on mobile requires navigating strict App Store review guidelines, PCI DSS compliance, biometric authentication, and near-zero tolerance for bugs or downtime.",
    solution:
      "Built with React Native for a single codebase across iOS and Android. Integrated Plaid for bank connections, implemented end-to-end encryption for all financial data, and built a custom gesture-based UI for payments.",
    outcome:
      "4.9 stars from 12K+ ratings. Featured on the App Store front page. Processed $8M in its first month. Zero PCI compliance incidents.",
    techStack: ["React Native", "TypeScript", "Node.js", "Plaid API", "Stripe", "PostgreSQL", "AWS", "Redis"],
    color: "#7fb89a",
    media: [
      {
        type: "image",
        url: "/images/screenshots/mobile_fintech.png",
        caption: "Fintech mobile interface depicting transaction summaries, spending category breakdowns, and physical card controls."
      },
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-keyboard-with-neon-lights-48762-large.mp4",
        caption: "Demo of instant peer-to-peer money transfers using biometric verification and gesture-based confirmations."
      }
    ],
  },
  {
    id: "ai-search",
    title: "AI Search Platform",
    tagline: "Semantic search across 50M documents in < 300ms",
    description:
      "Intelligent semantic search platform replacing keyword search across a massive enterprise document corpus.",
    longDescription:
      "A legal tech company needed to help lawyers find relevant case law and documents across 50 million items. Keyword search had too much noise; they needed intent-aware semantic retrieval.",
    category: "AI / ML Engineering",
    tags: ["AI", "Search", "Vector DB", "Python"],
    year: "2024",
    status: "Live",
    metrics: [
      { label: "Documents Indexed", value: "50M" },
      { label: "Search Latency", value: "< 300ms" },
      { label: "Relevance Improvement", value: "+420%" },
      { label: "Lawyer Productivity", value: "+35%" },
    ],
    challenge:
      "50 million legal documents with complex terminology, citations, and nuanced concepts. Keyword search returned too much noise. Lawyers were spending 4-6 hours per research task.",
    solution:
      "Built a dual-encoder retrieval system using fine-tuned legal language models. Embedded all documents into a Pinecone vector store. Implemented hybrid search combining BM25 keyword ranking with semantic re-ranking.",
    outcome:
      "Search quality scores improved 420%. Average legal research time fell from 4 hours to under 40 minutes. The client reported the platform as their primary competitive differentiator.",
    techStack: ["Python", "PyTorch", "Pinecone", "FastAPI", "OpenAI", "PostgreSQL", "Elasticsearch", "AWS"],
    color: "#8fb5a8",
    media: [
      {
        type: "image",
        url: "/images/screenshots/ai_search.png",
        caption: "AI semantic search control panel demonstrating vector distance clustering, search relevancy tuning, and hybrid ranking comparisons."
      },
      {
        type: "video",
        url: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-computer-39906-large.mp4",
        caption: "Semantic query execution showing natural language comprehension, citation extraction, and sub-300ms vector index retrieval."
      }
    ],
  },
]


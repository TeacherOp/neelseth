import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    title: "ReplyDaddy",
    description: "AI-powered Reddit marketing tool. Built solo with AI assistance. $6k revenue in first 70 days. Currently growing at ~15% MoM. Proof that AI-assisted development works.",
    tech: ["Claude API", "Supabase", "Flask", "React"],
    link: "https://replydaddy.com",
    featured: true,
    logo: "/replydaddylogo.png",
    banner: "/replydaddybanner.png"
  },
  {
    title: "TeacherOp",
    description: "Platform for teachers to run online classes. Built during COVID when teachers needed one tool instead of five. Still active with regular users. My first product that people actually paid for.",
    tech: ["React", "Node.js", "WebRTC"],
    link: "https://teacherop.com",
    featured: true,
    logo: "/teacheroplogo.png",
    banner: "/teacheropbanner.png"
  },
  {
    title: "bot9.ai",
    description: "AI chatbot builder for customer support. Led product and growth. Got press in TechCrunch and Insider. Taught me how to work with LLMs before ChatGPT made it mainstream.",
    tech: ["AI/ML", "NLP", "Product Management"],
    link: "https://bot9.ai",
    featured: true,
    banner: "/bot9.jpeg"
  },
  {
    title: "Shipstation.ai",
    description: "AI website builder. Reached 1,700+ users. Validated demand for no-code AI tools, but didn't nail retention. Learned a lot about AI UX and user expectations.",
    tech: ["Claude", "OpenAI", "Next.js"],
    link: "https://firstsite.app/",
    featured: true,
    logo: "/shipstationlogo.svg",
    banner: "/shipstationbanner.jpg"
  },
  {
    title: "NoobBook",
    description: "Educational NotebookLM clone built to teach AI/LLM integration patterns. Covers RAG pipelines, agentic loops, multi-modal AI (vision, audio, TTS), embeddings, and prompt engineering. Used in my GrowthX teaching sessions.",
    tech: ["Claude", "OpenAI", "Pinecone", "ElevenLabs", "Flask", "React"],
    link: "https://github.com/TeacherOp/growthx_1/tree/main/Fundamentals_level_5/Localmind",
    featured: true,
    banner: "/noobbook.png"
  },
  {
    title: "Dukaan Enterprise",
    description: "Led product for Dukaan's B2B offering. Scaled from 0 to 10,000+ paying merchants in 7 months. Experimentation, onboarding optimization, and pricing strategy.",
    tech: ["Product Management", "Growth", "Data Analysis"],
    link: "https://mydukaan.io",
    featured: false,
    banner: "/dukaan-banner.png"
  },
  {
    title: "Rollout.site",
    description: "Another AI website builder experiment. Faster than Shipstation but suffered from same retention issues. Sometimes you need multiple attempts to figure out what's wrong.",
    tech: ["Claude AI", "Next.js"],
    link: "https://rollout.site",
    featured: false,
    banner: "/rollout.jpeg"
  },
  {
    title: "Delta Exchange Tools",
    description: "Built internal tools for PM productivity and an AI trading bot. Client project. Worked, but not something I'd build for myself.",
    tech: ["Python", "APIs", "Automation"],
    link: "https://www.delta.exchange/",
    featured: false,
    banner: "/deltaexchangebanner.png"
  },
  {
    title: "Trekkit",
    description: "E-commerce for outdoor gear. Early project. Taught me the basics of building for transactions and inventory management.",
    tech: ["Shopify", "React", "Node.js"],
    link: "https://trekkit.in/",
    featured: false,
    banner: "/trekkitbanner.png"
  }
]

export const projectsFooter = "Not every project was a home run. But every project taught me something I use today."

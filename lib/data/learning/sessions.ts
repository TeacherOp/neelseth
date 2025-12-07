import type { LearnSession } from '@/lib/types'

export const learnSessions: LearnSession[] = [
  {
    id: 1,
    title: "Session 1: API Fundamentals & Business Applications",
    description: "Master the foundations of AI tool development with hands-on API implementation, moving from basic calls to production-ready solutions that solve real business problems.",
    date: "November 2025",
    status: "completed",
    videoUrl: "https://www.youtube.com/embed/jsdKgmU3DJA?si=4lH5YyKMz46LYBtS",
    githubUrl: "https://github.com/TeacherOp/growthx_1?tab=readme-ov-file#a-practical-guide-to-building-ai-tools--agents--for-non-developers-",
    topics: [
      "Basic API interactions with Claude's API",
      "System prompts and temperature control",
      "Structured output formatting",
      "Real-world skill assessment agent",
      "Web search integration"
    ],
    technologies: ["Python", "Anthropic API", "JSON", "CSV Processing"],
    duration: "2 hours"
  },
  {
    id: 2,
    title: "Session 2: Chat Applications & Advanced Agents",
    description: "Build sophisticated chat applications with persistent context, multi-agent architectures, and production-ready features including real-time updates and specialized sub-agents.",
    date: "November 2025",
    status: "completed",
    videoUrl: "https://www.youtube.com/embed/RgykmlWXzns?si=3ygKhSsZs2peFbKM",
    githubUrl: "https://github.com/TeacherOp/growthx_1?tab=readme-ov-file#session-2---chat-applications-and-advanced-agent-implementations-",
    topics: [
      "Conversation context management",
      "Persistent chat with save/resume",
      "Multi-agent architecture",
      "Blog automation with web research",
      "Presentation builder system"
    ],
    technologies: ["Flask", "SSE", "PowerPoint API", "Tool Chaining"],
    duration: "2.5 hours"
  },
  {
    id: 3,
    title: "Session 3: Building NoobBook - A NotebookLM Clone",
    description: "Build a complete NotebookLM clone from scratch. Covers RAG pipelines, multi-modal AI (vision, audio, TTS), embeddings with Pinecone, agentic studio generation, and full-stack AI application architecture.",
    date: "November 2025",
    status: "completed",
    videoUrl: "https://www.youtube.com/embed/VYQoKKJO-3o",
    githubUrl: "https://github.com/TeacherOp/growthx_1/tree/main/Fundamentals_level_5/Localmind",
    topics: [
      "RAG pipeline with embeddings and citations",
      "Multi-modal AI (vision, audio, text-to-speech)",
      "Agentic loops and studio generation",
      "Vector database integration (Pinecone)",
      "Full-stack AI application architecture"
    ],
    technologies: ["Claude", "OpenAI", "Pinecone", "ElevenLabs", "Flask", "React"],
    duration: "3 hours"
  }
]

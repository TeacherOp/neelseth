export interface Experience {
  id: number
  company: string
  companyUrl?: string | null
  logo?: string | null
  position: string
  type: string
  duration: string
  location: string
  description: string
  skills?: string[]
  achievements?: string[]
  projects?: string[]
  current?: boolean
  parentCompany?: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
  featured?: boolean
  logo?: string
  banner?: string
}

export interface Education {
  institution: string
  degree: string
  field: string
  duration: string
  url: string
  logo: string
}

export interface OpenSourceRepo {
  title: string
  description: string
  stars: number
  forks: number
  language: string
  topics: string[]
  link: string
  featured?: boolean
}

export interface Blog {
  title: string
  slug: string
  description: string
  date: string
  readTime: string
  link: string
  platform: string
  featured?: boolean
  content?: string
  tags?: string[]
}

export interface LearnSession {
  id: number
  title: string
  description: string
  date?: string
  status: 'completed' | 'upcoming'
  videoUrl?: string
  githubUrl?: string
  notesUrl?: string
  topics: string[]
  technologies: string[]
  duration?: string
}

export interface Testimonial {
  id: number
  name: string
  designation: string
  company?: string
  content: string
  linkedinUrl: string
  avatar?: string
  sessionId?: number
  rating: number
  date: string
}
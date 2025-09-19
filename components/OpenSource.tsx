"use client"

import { motion } from "framer-motion"
import { opensource } from "@/lib/data"
import { Star, GitFork, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Open Source</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contributing to the developer community with open-source projects and tools
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {opensource.map((repo, index) => (
              <motion.div
                key={repo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Github className="w-6 h-6 text-muted-foreground" />
                    <h3 className="text-xl font-bold">{repo.title}</h3>
                  </div>
                  {repo.featured && (
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-4">{repo.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <div className={`w-3 h-3 rounded-full ${
                      repo.language === 'Python' ? 'bg-blue-500' :
                      repo.language === 'TypeScript' ? 'bg-blue-600' :
                      repo.language === 'JavaScript' ? 'bg-yellow-400' :
                      'bg-gray-400'
                    }`} />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs bg-secondary rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <Link
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Repository
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
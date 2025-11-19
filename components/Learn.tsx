"use client"

import { motion } from "framer-motion"
import { learnSessions } from "@/lib/data"
import { Calendar, Clock, Github, BookOpen, Play, Users, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Learn() {
  return (
    <section id="learn" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-3">Learn how to build AI tools & Agents</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join my comprehensive workshop series on building AI tools and agents - designed specifically for non-developers.
              Learn practical skills to leverage AI in your business and projects.
            </p>
          </div>

          {/* Sessions Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {learnSessions.map((session, index) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Video or Coming Soon Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                  {session.videoUrl ? (
                    <iframe
                      src={session.videoUrl}
                      title={session.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                      <Play className="w-12 h-12 mb-3 text-muted-foreground" />
                      <p className="text-lg font-semibold mb-1">Coming Soon</p>
                      <p className="text-sm text-muted-foreground">{session.date}</p>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs rounded ${
                      session.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {session.status === 'completed' ? 'Available' : 'Upcoming'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {session.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                    {session.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {session.date}
                      </span>
                    )}
                    {session.duration && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {session.duration}
                      </span>
                    )}
                  </div>

                  {/* Topics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {session.topics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                          <span className="text-primary mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                      {session.topics.length > 3 && (
                        <li className="text-xs text-muted-foreground">
                          <span className="text-primary">•</span> +{session.topics.length - 3} more...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {session.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs bg-secondary rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {session.status === 'completed' && (
                    <div className="flex gap-2">
                      {session.githubUrl && (
                        <Link
                          href={session.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </Link>
                      )}
                      {session.notesUrl && (
                        <Link
                          href={session.notesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border rounded hover:bg-secondary transition-colors text-sm"
                        >
                          <BookOpen className="w-4 h-4" />
                          Notes
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Repository Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border rounded-lg p-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <Github className="w-8 h-8 text-primary mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Course Repository</h3>
                <p className="text-muted-foreground mb-4">
                  All course materials, code samples, and practice exercises are available on GitHub.
                  Follow along with hands-on examples and build your own AI tools.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://github.com/TeacherOp/growthx_1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Full Repository
                  </Link>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    150+ People learning
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">What You&apos;ll Learn</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Build AI agents without prior coding experience</li>
                  <li>• Integrate APIs and manage conversation context</li>
                  <li>• Create production-ready AI applications</li>
                  <li>• Implement multi-agent architectures</li>
                </ul>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Who This Is For</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Product managers wanting to build prototypes</li>
                  <li>• Business professionals automating workflows</li>
                  <li>• Entrepreneurs building AI-powered products</li>
                  <li>• Anyone curious about practical AI development</li>
                </ul>
              </div>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}
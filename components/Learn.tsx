"use client"

import { motion } from "framer-motion"
import { Github, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { teachingStory, teachingStats } from "@/lib/data/learning/teaching-story"
import { learnSessions } from "@/lib/data"

export default function Learn() {
  const completedSessions = learnSessions.filter(s => s.status === 'completed')

  return (
    <section id="learn" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Origin Story */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Learn how to build AI tools & Agents
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              I didn&apos;t plan to teach. I just shared how I was building with AI-and it turned into a free course.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border-2 p-8 mb-8"
            >
              <div className="prose prose-sm max-w-none">
                {teachingStory.origin.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                    {paragraph.split('**').map((text, j) =>
                      j % 2 === 1 ? <strong key={j} className="font-semibold text-foreground">{text}</strong> : text
                    )}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {teachingStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-muted/30 border-2 p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-sm font-semibold mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
              {teachingStory.whatYouLearn.title}
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              {teachingStory.whatYouLearn.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {teachingStory.whatYouLearn.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border-2 p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Available Sessions */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Available Sessions
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Full recordings and code samples-completely free
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {completedSessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border-2 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                    {session.videoUrl && (
                      <iframe
                        src={session.videoUrl}
                        title={session.title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{session.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {session.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">
                        Topics covered:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {session.topics.slice(0, 3).map((topic, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-secondary/60"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={session.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Github className="w-4 h-4" />
                      View Code & Materials
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 border-2 border-primary/20 p-8 text-center"
          >
            <Github className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {teachingStory.format.title}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              {teachingStory.format.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto text-left">
              {teachingStory.format.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary">{detail.split(' ')[0]}</span>
                  <span className="text-muted-foreground">{detail.substring(detail.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={teachingStory.cta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 border-2 border-primary"
              >
                <Github className="w-5 h-5" />
                {teachingStory.cta.primary}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

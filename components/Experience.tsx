"use client"

import { motion } from "framer-motion"
import { experiences } from "@/lib/data"
import { Calendar, MapPin, Building2 } from "lucide-react"
import Image from "next/image"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-12 ml-16"
              >
                <div className="absolute -left-8 w-4 h-4 bg-primary rounded-full" />

                <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        {(exp as any).logo ? (
                          <Image
                            src={(exp as any).logo}
                            alt={exp.company}
                            width={48}
                            height={48}
                            className="rounded-lg bg-white p-1"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          {(exp as any).companyUrl ? (
                            <a
                              href={(exp as any).companyUrl}
                              target="_blank"
                              {...(exp.company === "ReplyDaddy" || exp.company === "Teacherop" || exp.company === "Shipstation.ai"
                                ? {}
                                : { rel: "noopener noreferrer" })}
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <span className="font-medium">{exp.company}</span>
                          )}
                          {exp.current && (
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {exp.achievements && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}

                  {exp.projects && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  )}

                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-secondary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
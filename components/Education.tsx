"use client"

import { motion } from "framer-motion"
import { education } from "@/lib/data"
import { GraduationCap, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Education() {
  return (
    <section id="education" className="py-12 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Education</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border-2 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  {edu.logo ? (
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      width={48}
                      height={48}
                      className="bg-white p-1 border border-border"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-border">
                      <GraduationCap className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-bold mb-2">
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {edu.institution}
                  </a>
                </h3>

                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {edu.degree}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {edu.field}
                </p>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
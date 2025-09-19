"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { ExternalLink, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                  {project.banner ? (
                    <Image
                      src={project.banner}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code2 className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    {project.logo && (
                      <Image
                        src={project.logo}
                        alt={project.title}
                        width={32}
                        height={32}
                        className="rounded bg-white p-0.5"
                      />
                    )}
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-secondary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      {...(project.title === "ReplyDaddy" || project.title === "Teacherop" || project.title === "Shipstation.ai"
                        ? {}
                        : { rel: "noopener noreferrer" })}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </Link>
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
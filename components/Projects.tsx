"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects, projectsFooter } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Things I&apos;ve Built
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Products, tools, and experiments. Some succeeded, some didn&apos;t. All taught me something.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-lg text-muted-foreground italic mt-12"
          >
            {projectsFooter}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
    >
      <div className="relative h-40 bg-gradient-to-br from-primary/10 to-secondary/10">
        {project.banner ? (
          <Image
            src={project.banner}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Code2 className="w-10 h-10 text-muted-foreground" />
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          {project.logo && (
            <Image
              src={project.logo}
              alt={project.title}
              width={28}
              height={28}
              className="rounded bg-white p-0.5 shrink-0"
            />
          )}
          <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h4>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 3).map((tech: string, i: number) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs bg-secondary/60 rounded"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-0.5 text-xs text-muted-foreground">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Project
          </Link>
        )}
      </div>
    </motion.div>
  )
}

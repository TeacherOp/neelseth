"use client"

import { motion } from "framer-motion"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown, Building2 } from "lucide-react"
import Image from "next/image"
import { experiences } from "@/lib/data"

// Calculate date range for each parent company
function getParentCompanyDateRange(parentCompany: string): string {
  const groupExperiences = experiences.filter(exp => exp.parentCompany === parentCompany)
  if (groupExperiences.length === 0) return ""

  // Get all durations and find the earliest start and latest end
  const durations = groupExperiences.map(exp => exp.duration)

  // Extract start dates (first part before " - ")
  const startDates = durations.map(d => d.split(" - ")[0])
  // Extract end dates (second part after " - ")
  const endDates = durations.map(d => d.split(" - ")[1] || d.split(" - ")[0])

  // Check if any experience is current (has "Present")
  const hasCurrent = endDates.some(d => d === "Present")

  // Get the earliest start (last in array since experiences are in reverse chronological order)
  const earliestStart = startDates[startDates.length - 1]
  // Get the latest end (first in array, or "Present" if any is current)
  const latestEnd = hasCurrent ? "Present" : endDates[0]

  return `${earliestStart} - ${latestEnd}`
}

export default function Experience() {
  // Track which parent companies we've already shown headers for
  const shownParentCompanies = new Set<string>()

  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The jobs, startups, and experiments that shaped how I think about building products
          </p>

          <Accordion.Root
            type="single"
            collapsible
            className="space-y-4"
          >
            {experiences.map((exp, index) => {
              // Check if we need to show a parent company header
              const showParentHeader = exp.parentCompany && !shownParentCompanies.has(exp.parentCompany)
              if (exp.parentCompany) {
                shownParentCompanies.add(exp.parentCompany)
              }

              return (
                <div key={exp.id}>
                  {showParentHeader && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{exp.parentCompany}</span>
                        <span className="text-xs text-muted-foreground">{getParentCompanyDateRange(exp.parentCompany!)}</span>
                      </div>
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Accordion.Item
                      value={`exp-${exp.id}`}
                      className="bg-card border rounded-lg overflow-hidden"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="group flex items-start justify-between w-full px-6 py-5 text-left hover:bg-muted/50 transition-colors">
                          <div className="flex gap-4 flex-1">
                            <div className="flex-shrink-0">
                              {exp.logo ? (
                                <Image
                                  src={exp.logo}
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
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                                  {exp.duration}
                                </span>
                                {exp.current && (
                                  <span className="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                                    Current
                                  </span>
                                )}
                              </div>
                              <h3 className="text-lg font-bold leading-tight">
                                {exp.position}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                {exp.companyUrl ? (
                                  <a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {exp.company}
                                  </a>
                                ) : (
                                  <span className="font-medium">{exp.company}</span>
                                )}
                                <span className="text-muted-foreground/50">|</span>
                                <span className="text-xs">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="pl-2">{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.projects && exp.projects.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-foreground mb-2">Projects</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {exp.projects.map((project, i) => (
                                  <li key={i} className="pl-2">{project}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.skills && exp.skills.length > 0 && (
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
                      </Accordion.Content>
                    </Accordion.Item>
                  </motion.div>
                </div>
              )
            })}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  )
}

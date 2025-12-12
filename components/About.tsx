"use client"

import { motion } from "framer-motion"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { aboutTimeline, aboutFooter } from "@/lib/data/about"

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            How I Got Here
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The non-linear story of learning to build products that work
          </p>

          <Accordion.Root
            type="single"
            collapsible
            className="space-y-4"
          >
            {aboutTimeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Accordion.Item
                  value={`item-${item.id}`}
                  className="bg-card border-2 overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex items-start justify-between w-full px-6 py-5 text-left hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="mb-3">
                          <span className="inline-block text-xs font-mono text-primary bg-primary/10 px-2 py-1 mb-2 border border-primary/20">
                            {item.period}
                          </span>
                          <h3 className="text-lg font-bold leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                    <div className="px-6 pb-6 pt-2">
                      <div className="prose prose-sm max-w-none leading-relaxed space-y-4">
                        {item.content.split('\n\n').map((block, i) => {
                          // Check if it's a heading (starts with **)
                          if (block.startsWith('**') && block.includes(':**')) {
                            const headingText = block.replace(/\*\*/g, '')
                            return (
                              <h4 key={i} className="text-base font-bold text-foreground mt-6 first:mt-0">
                                {headingText}
                              </h4>
                            )
                          }

                          // Check if it's a list (lines starting with -)
                          if (block.includes('\n-')) {
                            const items = block.split('\n').filter(line => line.trim().startsWith('-'))
                            return (
                              <ul key={i} className="list-disc list-inside space-y-2 text-muted-foreground">
                                {items.map((item, j) => (
                                  <li key={j} className="pl-2">
                                    {item.replace(/^-\s*/, '').split(/(\*\*.*?\*\*)/).map((part, k) =>
                                      part.startsWith('**') && part.endsWith('**') ? (
                                        <strong key={k} className="font-semibold text-foreground">
                                          {part.slice(2, -2)}
                                        </strong>
                                      ) : (
                                        <span key={k}>{part}</span>
                                      )
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )
                          }

                          // Regular paragraph with bold text support
                          return (
                            <p key={i} className="text-muted-foreground">
                              {block.split(/(\*\*.*?\*\*)/).map((part, j) =>
                                part.startsWith('**') && part.endsWith('**') ? (
                                  <strong key={j} className="font-semibold text-foreground">
                                    {part.slice(2, -2)}
                                  </strong>
                                ) : (
                                  <span key={j}>{part}</span>
                                )
                              )}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-lg text-muted-foreground italic mt-12"
          >
            {aboutFooter}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

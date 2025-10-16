"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { Code2, Brain, Package, TrendingUp } from "lucide-react"

export default function Skills() {
  const categories = [
    { title: "Learning how to code, While Vibe Coding", icon: Code2, skills: skills.technical },
    { title: "Using llms", icon: Brain, skills: skills.ai },
    { title: "Product Management", icon: Package, skills: skills.product },
    { title: "Business & Growth", icon: TrendingUp, skills: skills.business }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-secondary rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Target, Scissors, DollarSign, Zap } from "lucide-react"
import { capabilities, whatIDoFooter } from "@/lib/data/capabilities"

const iconMap = {
  "target": Target,
  "scissors": Scissors,
  "dollar-sign": DollarSign,
  "zap": Zap
}

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            What I Actually Do
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Four areas where I spend my time solving problems
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {capabilities.map((capability, index) => {
              const Icon = iconMap[capability.icon as keyof typeof iconMap]

              return (
                <motion.div
                  key={capability.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border-2 p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 shrink-0 border border-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-lg text-muted-foreground italic"
          >
            {whatIDoFooter}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

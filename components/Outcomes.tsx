"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, ShoppingCart, Newspaper, TrendingUp } from "lucide-react"
import { outcomes, outcomesFooter } from "@/lib/data/outcomes"

const iconMap = {
  "users": Users,
  "dollar-sign": DollarSign,
  "shopping-cart": ShoppingCart,
  "newspaper": Newspaper,
  "trending-up": TrendingUp
}

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Proof, Not Promises
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Numbers that show what I've actually built and scaled
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {outcomes.map((outcome, index) => {
              const Icon = iconMap[outcome.icon as keyof typeof iconMap]

              return (
                <motion.div
                  key={outcome.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {outcome.metric}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-3">
                    {outcome.label}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {outcome.context}
                  </p>
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
            {outcomesFooter}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

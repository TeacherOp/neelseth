"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, ShoppingCart, Newspaper, TrendingUp, BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"
import { outcomes, outcomesFooter } from "@/lib/data/outcomes"

const iconMap = {
  "users": Users,
  "dollar-sign": DollarSign,
  "shopping-cart": ShoppingCart,
  "newspaper": Newspaper,
  "trending-up": TrendingUp,
  "book-open": BookOpen
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
            Numbers that show what I&apos;ve actually built and scaled
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {outcomes.map((outcome, index) => {
              const Icon = iconMap[outcome.icon as keyof typeof iconMap]
              const hasLink = 'link' in outcome && outcome.link

              const CardContent = (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 border border-primary/20">
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
                  {hasLink && (
                    <div className="mt-4 flex items-center justify-center gap-1 text-xs text-primary">
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  )}
                </>
              )

              return (
                <motion.div
                  key={outcome.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border-2 p-6 text-center hover:shadow-lg transition-all"
                >
                  {hasLink ? (
                    <Link
                      href={outcome.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {CardContent}
                    </Link>
                  ) : (
                    CardContent
                  )}
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

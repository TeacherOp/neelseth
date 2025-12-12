"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { personalInfo } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            Let&apos;s Connect
          </h2>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border-2 p-8 text-center"
            >
              <p className="text-lg text-muted-foreground mb-8">
                I&apos;m always open to discussing new opportunities, collaborations,
                or just having a great conversation about technology and
                innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href={personalInfo.calendlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border-2 border-primary"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </Link>

                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors border-2 border-border"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Link>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                  Find me on
                </h3>
                <div className="flex gap-4 justify-center">
                  <Link
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-secondary/80 transition-colors border-2 border-border"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-secondary/80 transition-colors border-2 border-border"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href={personalInfo.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary hover:bg-secondary/80 transition-colors border-2 border-border"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
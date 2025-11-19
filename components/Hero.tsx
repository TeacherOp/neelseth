"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, MapPin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { personalInfo } from "@/lib/data"

export default function Hero() {
  return (
    <section className="h-[70vh] flex items-center justify-center px-6 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="mb-4 flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src="/neelprofileimage.jpeg"
              alt="Neel Seth"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary/20 shadow-xl"
              priority
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-3">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-3">
            {personalInfo.title}
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-4 text-muted-foreground">
            {personalInfo.bio}
          </p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </span>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href={personalInfo.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"

export default function Navigation() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#opensource", label: "Open Source" },
    { href: "#blogs", label: "Blogs" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          NS
        </Link>
        <div className="hidden md:flex gap-8">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href={personalInfo.calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Book a Call
        </Link>
      </div>
    </motion.nav>
  )
}
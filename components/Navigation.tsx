"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "#what-i-do", label: "What I Do" },
    { href: "#outcomes", label: "Proof" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#learn", label: "Learn" },
    { href: "#education", label: "Education" },
    { href: "#opensource", label: "Open Source" },
    { href: "#blogs", label: "Blogs" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "My Story" },
    { href: "#contact", label: "Contact" }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            NS
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA */}
          <Link
            href={personalInfo.calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border-2 border-primary"
          >
            Book a Call
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-secondary transition-colors border-2 border-border"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
            style={{ top: "68px" }}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-lg font-medium py-2 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={personalInfo.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center border-2 border-primary"
                onClick={closeMobileMenu}
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
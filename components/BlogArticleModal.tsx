"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, BookOpen } from "lucide-react"
import type { Blog } from "@/lib/types"

interface BlogArticleModalProps {
  blog: Blog | null
  isOpen: boolean
  onClose: () => void
}

// Helper function to render text with bold formatting and links
const renderTextWithFormatting = (text: string) => {
  const parts: (string | JSX.Element)[] = []
  let currentIndex = 0
  let key = 0

  // Combined regex for bold text and URLs
  const combinedRegex = /(\*\*(.+?)\*\*)|(https?:\/\/[^\s]+)/g
  let match

  while ((match = combinedRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      parts.push(text.substring(currentIndex, match.index))
    }

    // Check if it's bold text
    if (match[1]) {
      parts.push(<strong key={`bold-${key++}`}>{match[2]}</strong>)
    }
    // Check if it's a URL
    else if (match[3]) {
      parts.push(
        <a
          key={`link-${key++}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {match[3]}
        </a>
      )
    }

    currentIndex = match.index + match[0].length
  }

  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex))
  }

  // If no formatting found, return original text
  return parts.length > 0 ? parts : text
}

export default function BlogArticleModal({ blog, isOpen, onClose }: BlogArticleModalProps) {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!blog) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-background border rounded-lg shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b px-6 py-4 flex items-start justify-between">
                <div className="flex-1 pr-8">
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 rounded-full font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    {blog.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {blog.platform}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-140px)] px-6 py-6">
                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-ul:my-4 prose-li:my-2 prose-a:text-blue-600 prose-a:underline">
                  {blog.content?.split('\n').map((line, index) => {
                    const trimmed = line.trim()

                    // Handle markdown H1 headings (# Heading)
                    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
                      return (
                        <h1 key={index} className="text-3xl font-bold mt-8 mb-6">
                          {trimmed.substring(2)}
                        </h1>
                      )
                    }

                    // Handle markdown H2 headings (## Heading)
                    if (trimmed.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
                          {trimmed.substring(3)}
                        </h2>
                      )
                    }

                    // Handle markdown H3 headings (### Heading)
                    if (trimmed.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                          {trimmed.substring(4)}
                        </h3>
                      )
                    }

                    // Handle "Part X:" style headings (common in SEO article)
                    if (trimmed.match(/^Part \d+:/)) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
                          {trimmed}
                        </h2>
                      )
                    }

                    // Handle section headings (short lines that look like titles)
                    if (
                      trimmed.length > 10 &&
                      trimmed.length < 100 &&
                      !trimmed.endsWith('.') &&
                      !trimmed.endsWith(',') &&
                      !trimmed.endsWith(':') &&
                      !trimmed.includes('http') &&
                      !trimmed.startsWith('-') &&
                      (trimmed === trimmed.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') ||
                       /^[A-Z]/.test(trimmed))
                    ) {
                      const allLines = blog.content?.split('\n') || []
                      const nextLine = allLines[index + 1]?.trim()
                      if (nextLine && (nextLine.charAt(0) === nextLine.charAt(0).toLowerCase() || nextLine.length > 50)) {
                        return (
                          <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                            {trimmed}
                          </h3>
                        )
                      }
                    }

                    // Handle horizontal rules (---)
                    if (trimmed === '---') {
                      return <hr key={index} className="my-8 border-border" />
                    }

                    // Handle bullet points (- item)
                    if (trimmed.startsWith('- ')) {
                      return (
                        <li key={index} className="ml-6 mb-2 list-disc">
                          {renderTextWithFormatting(trimmed.substring(2))}
                        </li>
                      )
                    }

                    // Handle empty lines
                    if (trimmed === '') {
                      return <div key={index} className="h-2" />
                    }

                    // Regular paragraphs with bold text support
                    return (
                      <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                        {renderTextWithFormatting(line)}
                      </p>
                    )
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t px-6 py-4">
                <button
                  onClick={onClose}
                  className="w-full md:w-auto px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Close Article
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

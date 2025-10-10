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
                <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-ul:my-4 prose-li:my-2">
                  {blog.content?.split('\n').map((paragraph, index) => {
                    // Handle headings
                    if (paragraph.startsWith('Part ') || paragraph.startsWith('The ') && paragraph.length < 100) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
                          {paragraph}
                        </h2>
                      )
                    }

                    // Handle subheadings (lines that end with ':' and are short)
                    if (paragraph.endsWith(':') && paragraph.length < 80 && !paragraph.includes('http')) {
                      return (
                        <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                          {paragraph}
                        </h3>
                      )
                    }

                    // Handle empty lines
                    if (paragraph.trim() === '') {
                      return <div key={index} className="h-2" />
                    }

                    // Regular paragraphs
                    return (
                      <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                        {paragraph}
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

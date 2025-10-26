"use client"

import { motion } from "framer-motion"
import { blogs } from "@/lib/data"
import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Writings & Thoughts</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Sharing insights on technology, entrepreneurship, and product development
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                  {blog.featured && (
                    <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded">
                      Featured
                    </span>
                  )}
                </div>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {blog.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blog.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {blog.platform}
                    </span>
                  </div>

                  {blog.link !== "#" ? (
                    <Link
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read More
                    </Link>
                  ) : (
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <BookOpen className="w-4 h-4" />
                      Read Article
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
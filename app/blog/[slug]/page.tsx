import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Calendar, Clock, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { blogs } from '@/lib/data'
import type { ReactElement } from 'react'

// Helper function to render text with bold formatting and links
const renderTextWithFormatting = (text: string) => {
  const parts: (string | ReactElement)[] = []
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
      parts.push(<strong key={`bold-${key++}`} className="font-bold">{match[2]}</strong>)
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

  return parts.length > 0 ? parts : text
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${blog.title} | Neel Seth`,
    description: blog.description,
    keywords: blog.tags?.join(', '),
    authors: [{ name: 'Neel Seth' }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: 'article',
      publishedTime: blog.date,
      authors: ['Neel Seth'],
      tags: blog.tags,
      url: `https://neelseth.com/blog/${blog.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      creator: '@NeelSeth7',
    },
    alternates: {
      canonical: `https://neelseth.com/blog/${blog.slug}`,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog || !blog.content) {
    notFound()
  }

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.description,
    author: {
      '@type': 'Person',
      name: 'Neel Seth',
      url: 'https://neelseth.com',
    },
    datePublished: blog.date,
    publisher: {
      '@type': 'Person',
      name: 'Neel Seth',
    },
    keywords: blog.tags?.join(', '),
    articleSection: blog.platform,
    wordCount: blog.content.split(' ').length,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/#blogs"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>

          {/* Header */}
          <header className="mb-12">
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {blog.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-b py-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(blog.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {blog.platform}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-ul:my-4 prose-li:my-2 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800">
            {blog.content.split('\n').map((line, index) => {
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
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
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
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {trimmed}
                  </h2>
                )
              }

              // Handle section headings (short lines that look like titles)
              // e.g., "The 80/20 Foundation of SEO", "Essential Structure Requirements"
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
                // Check if next line is likely content (starts with lowercase or is a description)
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

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t">
            <Link
              href="/#blogs"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </footer>
        </div>
      </article>
    </>
  )
}

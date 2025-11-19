"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/lib/data"
import { Quote, Star, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function Testimonials() {
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonials)
  const [selectedSession, setSelectedSession] = useState<'all' | 1 | 2>('all')
  const [sortBy, setSortBy] = useState<'latest' | 'rating' | 'hasReview'>('latest')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Calculate aggregate rating
  const aggregateRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  const ratingCounts = testimonials.reduce((acc, t) => {
    acc[t.rating] = (acc[t.rating] || 0) + 1
    return acc
  }, {} as Record<number, number>)

  // Filter and sort testimonials
  useEffect(() => {
    let filtered = [...testimonials]

    // Filter by session
    if (selectedSession !== 'all') {
      filtered = filtered.filter(t => t.sessionId === selectedSession)
    }

    // Sort testimonials
    filtered.sort((a, b) => {
      if (sortBy === 'latest') {
        // Convert date strings to comparable values
        const dateOrder: Record<string, number> = {
          '2 days ago': 0,
          'Nov 18': 1,
          'Nov 17': 2,
          'Nov 16': 3,
          'Nov 6': 4,
          'Nov 5': 5,
          'Nov 3': 6,
          'Nov 2': 7
        }
        return (dateOrder[a.date] || 999) - (dateOrder[b.date] || 999)
      } else if (sortBy === 'rating') {
        // Sort by rating (highest first), then by whether they have content
        if (b.rating !== a.rating) return b.rating - a.rating
        if (a.content && !b.content) return -1
        if (!a.content && b.content) return 1
        return 0
      } else if (sortBy === 'hasReview') {
        // Sort by those with reviews first
        if (a.content && !b.content) return -1
        if (!a.content && b.content) return 1
        // Then by rating
        return b.rating - a.rating
      }
      return 0
    })

    setFilteredTestimonials(filtered)
  }, [selectedSession, sortBy])

  // Check scroll buttons visibility
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      return () => container.removeEventListener('scroll', checkScrollButtons)
    }
  }, [filteredTestimonials])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-12 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-3">What Participants Say</h2>

          {/* Aggregate Rating */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-3xl font-bold">{aggregateRating.toFixed(1)}</span>
              <div className="flex gap-0.5">
                {renderStars(Math.round(aggregateRating))}
              </div>
              <span className="text-muted-foreground">({testimonials.length} reviews)</span>
            </div>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              {[5, 4, 3].map(rating => (
                <span key={rating}>
                  {rating}★: {ratingCounts[rating] || 0}
                </span>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <select
                value={selectedSession}
                onChange={(e) => setSelectedSession(e.target.value === 'all' ? 'all' : Number(e.target.value) as 1 | 2)}
                className="px-3 py-1.5 rounded-lg border bg-background text-sm"
              >
                <option value="all">All Sessions ({testimonials.length})</option>
                <option value="1">Session 1 ({testimonials.filter(t => t.sessionId === 1).length})</option>
                <option value="2">Session 2 ({testimonials.filter(t => t.sessionId === 2).length})</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-3 py-1.5 rounded-lg border bg-background text-sm"
              >
                <option value="latest">Latest First</option>
                <option value="rating">Highest Rating</option>
                <option value="hasReview">With Reviews</option>
              </select>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            {/* Scroll Buttons */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/90 shadow-lg hover:bg-background transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/90 shadow-lg hover:bg-background transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Reviews Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.05, 0.3) }}
                  className="flex-shrink-0 w-80 bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow relative"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />

                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <Image
                      src={testimonial.avatar || "/reviewers_images/fallback.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/reviewers_images/fallback.svg"
                      }}
                    />
                    <div className="flex-1">
                      {testimonial.linkedinUrl ? (
                        <Link
                          href={testimonial.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-primary transition-colors line-clamp-1"
                        >
                          {testimonial.name}
                        </Link>
                      ) : (
                        <p className="font-semibold line-clamp-1">{testimonial.name}</p>
                      )}
                      {testimonial.designation && (
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {testimonial.designation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Rating and Date */}
                  <div className="flex justify-between items-center mb-3">
                    {renderStars(testimonial.rating)}
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>

                  {/* Review Content */}
                  {testimonial.content ? (
                    <p className="text-sm text-muted-foreground italic line-clamp-6">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground/50 italic">
                      No written review
                    </p>
                  )}

                  {/* Session Badge */}
                  <div className="mt-4 pt-3 border-t">
                    <span className="text-xs text-muted-foreground">
                      Session {testimonial.sessionId} participant
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{testimonials.length}</p>
              <p className="text-sm text-muted-foreground">Total Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">
                {testimonials.filter(t => t.content).length}
              </p>
              <p className="text-sm text-muted-foreground">Written Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">
                {testimonials.filter(t => t.rating === 5).length}
              </p>
              <p className="text-sm text-muted-foreground">5-Star Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{aggregateRating.toFixed(1)}/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
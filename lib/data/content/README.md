# Content Management Guide

This directory contains all portfolio content including blog posts, articles, and other written content.

## Adding a New Blog Post

Follow these steps to add a new blog post to your portfolio:

### 1. Create the Markdown File

Create a new `.md` file in `blogs/` directory with your blog slug as the filename:

```bash
lib/data/content/blogs/your-blog-slug.md
```

Write your blog content in markdown format in this file.

### 2. Create the TypeScript File

Create a corresponding `.ts` file in the same directory:

```bash
lib/data/content/blogs/your-blog-slug.ts
```

Use this template (inline the markdown content as a template string):

```typescript
import type { Blog } from '@/lib/types'

export const yourBlogName: Blog = {
  title: "Your Blog Title",
  slug: "your-blog-slug",
  description: "A short description of your blog post",
  date: "2025-01-15",  // Format: YYYY-MM-DD
  readTime: "5 min read",
  link: "#",  // Use "#" for internal blogs, or external URL
  platform: "Personal Blog",  // or "LinkedIn", "Medium", etc.
  featured: true,  // or false
  content: `Your markdown content goes here...

You can write multiple paragraphs.

## Use markdown headings

And all other markdown syntax.`
}
```

**Note:** The markdown content is inlined as a template string to support client-side components. The `.md` file is kept for easier editing.

### 3. Update the Index File

Open `lib/data/content/index.ts` and:

1. Import your new blog:
```typescript
import { yourBlogName } from './blogs/your-blog-slug'
```

2. Add it to the blogs array:
```typescript
export const blogs = [
  realCostOfSEO,
  endOfUI,
  yourBlogName  // Add your new blog here
]
```

### 4. Done!

Your new blog will automatically appear on the website. No component changes needed!

---

## File Structure

```
lib/data/content/
├── README.md                              # This file
├── index.ts                               # Aggregates all blogs
└── blogs/                                 # Blog posts directory
    ├── real-cost-of-seo-2025.md          # Blog markdown content
    ├── real-cost-of-seo-2025.ts          # Blog metadata
    ├── end-of-ui-llm-interfaces.md       # Blog markdown content
    ├── end-of-ui-llm-interfaces.ts       # Blog metadata
    ├── your-blog-slug.md                 # Your new blog content
    └── your-blog-slug.ts                 # Your new blog metadata
```

---

## Tips

- **Slug naming**: Use lowercase with hyphens (e.g., `my-awesome-post`)
- **Featured blogs**: Set `featured: true` to highlight on homepage
- **External links**: If your blog is published elsewhere (LinkedIn, Medium), provide the full URL in `link`
- **Date format**: Always use `YYYY-MM-DD` format for consistency
- **Tags** (optional): Add a `tags` array to categorize your posts:
  ```typescript
  tags: ["SEO", "Marketing", "Growth"]
  ```

---

## Future Content Types

This structure can easily be extended for:
- Case studies
- Tutorials
- Product reviews
- Video transcripts
- Learning materials

Just create new subdirectories under `content/` and follow the same pattern!

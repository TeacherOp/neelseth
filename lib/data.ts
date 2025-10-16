import type { Experience, Project, Education, OpenSourceRepo, Blog } from './types'

export const personalInfo = {
  name: "Neel Seth",
  title: "Product Developer",
  email: "neelseth48@gmail.com",
  location: "Bengaluru, Karnataka, India",
  bio: "Serial entrepreneur and product leader with expertise in AI-powered platforms, SaaS, and e-commerce. Building innovative solutions that scale from 0 to millions of users.",
  socials: {
    github: "https://github.com/TeacherOp",
    linkedin: "https://www.linkedin.com/in/neel-seth-323827138/",
    x: "https://x.com/NeelSeth7"
  },
  calendlyLink: "https://calendly.com/neelseth48/30-min-meeting"
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "ReplyDaddy",
    companyUrl: "https://replydaddy.com",
    logo: "/replydaddylogo.png",
    position: "Founder",
    type: "Full-time",
    duration: "Aug 2025 - Present",
    location: "Bengaluru, Karnataka, India · Remote",
    description: "Building a co-pilot for reddit marketers, with an AI powered lead scoring engine, which finds relevant posts and comments to engage with, helps draft comments based on user persona, factual work history, brand data and tone.",
    skills: ["LLM", "Anthropic Claude", "Supabase", "Flask", "React.js", "Product Development"],
    current: true
  },
  {
    id: 2,
    company: "Teacherop",
    companyUrl: "https://teacherop.com",
    logo: "/teacheroplogo.png",
    position: "Founder",
    type: "Full-time",
    duration: "Jul 2024 - Present",
    location: "Bengaluru, Karnataka, India",
    description: "Building a different kind of online learning platform where the core function is to help figure out the actual concepts that you don't know and need to learn to achieve any given goal, focusing on STEM subjects.",
    current: true
  },
  {
    id: 3,
    company: "Freelance",
    companyUrl: null,
    logo: "/freelancelogo.png",
    position: "Product Developer & Consultant",
    type: "Part-time",
    duration: "Jun 2024 - Present",
    location: "Bengaluru, Karnataka, India · Remote",
    description: "Freelancing as a Product developer & Product Consultant",
    projects: [
      "Wallscope App - Developed platform for automatic wall structure mapping and design",
      "Trekkit - Reworked and designed complete Shopify store",
      "Delta Exchange - Built AI-powered support bot for trading with Freshdesk integration",
      "Delta Exchange - Building productivity tool for product managers with natural language queries"
    ],
    current: true
  },
  {
    id: 4,
    company: "Shipstation.ai",
    companyUrl: "https://firstsite.app/",
    logo: "/shipstationlogo.svg",
    position: "Co-Founder",
    type: "Self-employed",
    duration: "Jan 2024 - Present",
    location: "Bengaluru, Karnataka, India",
    description: "Conceptualized and built AI-powered platform that automates end-to-end process of designing, coding, deploying, and hosting personal portfolios and websites. Onboarded 1700+ users.",
    achievements: [
      "Leveraged cutting-edge AI: Anthropic, Tavily, and OpenAI",
      "1700+ users onboarded"
    ],
    current: true
  },
  {
    id: 5,
    company: "Dukaan",
    companyUrl: "https://mydukaan.io",
    logo: "/dukaanlogo.png",
    position: "Product Lead (Founders Office)",
    type: "Full-time",
    duration: "Nov 2022 - May 2024",
    location: "Bangalore Urban, Karnataka, India",
    description: "Spearheaded development of Enterprise vertical for mydukaan.io, onboarding large-scale merchants. Led team of 3 Product Managers, scaled B2B customer base from 0 to 10,000+ paying clients.",
    achievements: [
      "Onboarded TheWholeTruthFoods, HealthXP, Govo.Life",
      "Scaled from 0 to 10,000+ B2B clients",
      "Led team of 3 Product Managers"
    ]
  },
  {
    id: 6,
    company: "Dukaan",
    companyUrl: "https://mydukaan.io",
    logo: "/dukaanlogo.png",
    position: "Product Manager (Founders Office)",
    type: "Full-time",
    duration: "Apr 2022 - Nov 2022",
    location: "Bengaluru, Karnataka, India",
    description: "Directed development of core e-commerce verticals: cataloging, payments, post-order functions, and retention strategies. Delivered 200+ product functionalities while integrating with 50+ third-party tools.",
    achievements: [
      "200+ product functionalities delivered",
      "50+ third-party integrations"
    ]
  },
  {
    id: 7,
    company: "Dukaan",
    companyUrl: "https://mydukaan.io",
    logo: "/dukaanlogo.png",
    position: "Associate Product Manager (Founders Office)",
    type: "Full-time",
    duration: "Nov 2020 - Apr 2022",
    location: "Bengaluru, Karnataka, India",
    description: "One of the first employees, contributing to core structure of sales, marketing, and support functions. Laid foundation for 5-year product roadmap focusing on last-mile deliveries and payments for 1M+ B2B merchants."
  },
  {
    id: 8,
    company: "Sunderlands - Tiles & Stones",
    companyUrl: "https://sunderlands.com/",
    logo: "/sunderlandslogo.png",
    position: "Digital Marketing Specialist",
    type: "Full-time",
    duration: "Jul 2020 - Dec 2020",
    location: "United States",
    description: "Automated demo scheduling for interior design products through Shopify integrations. Led creation of marketing-focused landing pages driving growth via Pinterest, Facebook, and Google."
  },
  {
    id: 9,
    company: "Tastewright Hospitality Pvt Ltd",
    companyUrl: null,
    logo: "/tastewrightlogo.jpg",
    position: "Founder",
    type: "Full-time",
    duration: "Nov 2019 - Nov 2020",
    location: "Bengaluru, Karnataka, India",
    description: "Launched successful dark kitchen optimized for 24-hour usage with consistent 4.9/5 ratings across Swiggy and Zomato. Served over 20,000 customers before COVID-19 impact.",
    achievements: [
      "4.9/5 rating on delivery platforms",
      "20,000+ customers served"
    ]
  },
  {
    id: 10,
    company: "ShakesBierre Brewpub & Kitchen",
    companyUrl: "https://www.shakesbierre.com/",
    logo: "/shakesbierrelogo.png",
    position: "Digital Marketing Manager & Partnerships",
    type: "Full-time",
    duration: "Feb 2019 - Nov 2020",
    location: "Bengaluru, Karnataka, India",
    description: "Digitally promoted hospitality, partnering with Manchester United Football Club for official screenings. Automated corporate event bookings and lead generation through AI chatbots."
  },
  {
    id: 11,
    company: "OYO",
    companyUrl: "https://www.oyorooms.com/",
    logo: "/oyologo.png",
    position: "Demand Manager",
    type: "Full-time",
    duration: "Feb 2018 - Mar 2019",
    location: "Bengaluru, Karnataka, India",
    description: "Successfully sold OYO's B2B software to corporate clients, onboarding over 50 companies including Pfizer and Purvankara Real Estate."
  },
  {
    id: 12,
    company: "UPVOLT SOLAR",
    companyUrl: null,
    logo: null,
    position: "Founder",
    type: "Full-time",
    duration: "Jul 2017 - Dec 2017",
    location: "Rajasthan, India",
    description: "Founded renewable energy project management company, successfully installed 240 KW of residential rooftop solar projects."
  }
]

export const projects: Project[] = [
  {
    title: "ReplyDaddy",
    description: "AI-powered Reddit marketing co-pilot with lead scoring engine",
    tech: ["LLM", "Claude", "Supabase", "Flask", "React"],
    link: "https://replydaddy.com",
    featured: true,
    logo: "/replydaddylogo.png",
    banner: "/replydaddybanner.png"
  },
  {
    title: "Teacherop",
    description: "Adaptive learning platform for STEM subjects",
    tech: ["React", "Node.js", "AI/ML"],
    link: "https://teacherop.com",
    featured: true,
    logo: "/teacheroplogo.png",
    banner: "/teacheropbanner.png"
  },
  {
    title: "Shipstation.ai",
    description: "AI website builder - 1700+ users",
    tech: ["Anthropic", "OpenAI", "Next.js", "Vercel"],
    link: "https://firstsite.app/",
    featured: true,
    logo: "/shipstationlogo.svg",
    banner: "/shipstationbanner.jpg"
  },
  {
    title: "Delta Exchange Tools",
    description: "AI trading bot & PM productivity suite",
    tech: ["Python", "Freshdesk API", "Mixpanel"],
    link: "https://www.delta.exchange/",
    featured: false,
    banner: "/deltaexchangebanner.png"
  },
  {
    title: "Trekkit",
    description: "E-commerce platform for outdoor gear",
    tech: ["Shopify", "React", "Node.js"],
    link: "https://trekkit.in/",
    featured: false,
    banner: "/trekkitbanner.png"
  }
]

export const education: Education[] = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    duration: "2015 - 2019",
    url: "https://www.srmist.edu.in/",
    logo: "/srmlogo.webp"
  },
  {
    institution: "GrowthX",
    degree: "Growth Program",
    field: "Product Management & Growth",
    duration: "2021",
    url: "https://growthx.club/",
    logo: "/growthxlogo.jpeg"
  },
  {
    institution: "JPH School",
    degree: "High School",
    field: "Science",
    duration: "2013 - 2015",
    url: "https://jphschool.com/",
    logo: "/jpschoollogo.png"
  }
]

export const skills = {
  technical: [
    "React.js", "Python", "Flask", "Supabase", "PostgreSQL", "Tavily", "Coolify", "Agent Frameworks"
  ],
  ai: [
    "LLM", "Anthropic Claude", "OpenAI GPT", "Prompt Engineering",
    "AI Integration"
  ],
  product: [
    "Product Strategy", "User Research", "A/B Testing",
    "Analytics", "Roadmap Planning", "Agile/Scrum"
  ],
  business: [
    "SaaS", "B2B Sales", "Growth Marketing", "Strategic Partnerships",
    "Team Leadership", "Fundraising"
  ]
}

export const opensource: OpenSourceRepo[] = [
  {
    title: "Shipstation AI",
    description: "AI-powered personal portfolio website builder. Generate and manage your portfolio with natural language using Anthropic AI, React, and Node.js",
    stars: 88,
    forks: 57,
    language: "JavaScript",
    topics: ["ai", "portfolio", "website-builder", "anthropic-ai", "react", "nodejs"],
    link: "https://github.com/daytimedrinkingclub/shipstation",
    featured: true
  },
  {
    title: "NewsTracker",
    description: "Unbiased AI-powered news tracker using Tavily and Anthropic. Tracks topics, analyzes sentiment, fact-checks information, and generates comprehensive summaries",
    stars: 0,
    forks: 0,
    language: "Python",
    topics: ["ai", "news", "tavily", "anthropic-claude", "fact-checking", "sentiment-analysis"],
    link: "https://github.com/daytimedrinkingclub/newstracker",
    featured: true
  },
  {
    title: "PPT Daddy",
    description: "AI-powered presentation generator using Anthropic Claude. Creates beautiful HTML slides and exports to PPTX format with custom branding support",
    stars: 0,
    forks: 0,
    language: "Python",
    topics: ["ai", "presentations", "powerpoint", "anthropic-claude", "automation", "pptx"],
    link: "https://github.com/TeacherOp/pptdaddy",
    featured: true
  },
  {
    title: "BlogBuilder",
    description: "An automated blog generation tool that creates SEO-optimized content",
    stars: 12,
    forks: 3,
    language: "Python",
    topics: ["automation", "blog", "content-generation", "seo"],
    link: "https://github.com/TeacherOp/blogbuilder",
    featured: true
  }
]

export const blogs: Blog[] = [
  {
    title: "The Real Cost of SEO: A Practical Guide to Ranking in 2025",
    description: "Everything you need to know about SEO, backed by real data and actual costs. A comprehensive breakdown of strategies, budgets, and realistic timelines.",
    date: "2025-02-15",
    readTime: "12 min read",
    link: "#",
    platform: "Personal Blog",
    featured: true,
    content: `SEO boils down to a simple truth: you either spend significant time or significant money. There's no middle ground that works. This guide breaks down exactly what each path costs and what you can realistically expect.

The 80/20 Foundation of SEO
Before diving into tactics, understand this fundamental split:
20% On-Site SEO: Everything on your website (content, structure, technical optimization)
80% Off-Site SEO: Everything outside your website (primarily backlinks and authority signals)
Most businesses obsess over the 20% while ignoring the 80%. That's why they fail.

Part 1: Technical SEO Basics (The 20%)
Essential Structure Requirements
Every page needs:
Title tags: 50-60 characters
Meta descriptions: 150-160 characters
H1 tag: One per page, includes primary keyword
H2/H3 tags: Multiple, using keyword variations
Content length: Minimum 3,000 words for competitive keywords

Free Tool for Instant SEO Audit
Use the Detailed SEO Extension for Chrome. This free tool instantly shows:
Title and meta description length issues
Heading structure problems
Missing alt tags
Competitor SEO analysis
Install it, run it on your site, fix the red flags. This is your week one homework.

URL Structure That Scales
Always use: yourdomain.com/tools/tool-name
Why? Directory submission sites expect this format. When you submit to "Best Free Tools" lists, they can link directly to your tools section. This structure alone can generate 20+ backlinks over time.

Part 2: The Backlink Reality (The 80%)
Current Market Rates for Backlinks
Based on actual quoted prices in 2025:
DR 30-50 sites: $100-200 per link
DR 50-70 sites: $200-300 per link
DR 70-90 sites: $300-400 per link
DR 90+ sites: $1,000+ per link
Reality check: You need 20-30 quality backlinks minimum to compete in most niches. Budget accordingly.

The Directory Submission Strategy
Two options:
DIY Approach:
Time: 30-45 minutes per directory
Directories needed: 220+ for impact
Total time investment: 165+ hours
Service Approach:
Get More Backlinks - $200 ( approx ) for 220+ submissions
Use code "BACKLINKS5" for additional discount
Cost per submission: $0.73
Time saved: 165 hours
The math is clear: unless your time is worth less than $1/hour, use the service.

Part 3: Content Strategy That Actually Works
The 3,000-Word Rule
Forget what you've heard about "quality over quantity." Google wants both. Here's the framework:
Word count by content type:
Product landing pages: 1,500-2,000 words
Blog posts: 3,000+ words
Ultimate guides: 5,000+ words
Comparison pages: 2,500+ words

ICP-Specific Landing Pages
Instead of one generic landing page, create targeted pages:
Example for replydaddy.com:
/reddit-marketing-for-agencies - Focus on team collaboration features
/reddit-marketing-for-ecommerce - Highlight ROI tracking
/reddit-marketing-for-saas - Emphasize user acquisition metrics
Each page targets different keywords and ranks for different searches. Triple your surface area without triple the work.

Part 4: Link Building Strategies Ranked by ROI
Strategy 1: Three-Way Link Exchanges
Cost: Free
Time: 2-3 hours per exchange
Value: $200-400 per link equivalent
How: Partner A links to B, B links to C, C links to A

Strategy 2: Guest Post Arbitrage
Cost: Your time
Hack: Most sites allow 5 links per guest post
Strategy: Give 1 to the host, keep 4 for yourself
ROI: 4 backlinks for the effort of 1 article
How to find opportunities - conduct google search with your niche name + "write for us", example search tech + "write for us" you will find blogs that welcome guest authors

Strategy 3: Free Tool Development
Investment: $500-2,000 for development
Return: 50+ backlinks over 12 months
Examples: Calculators, generators, checkers
Key: Make it genuinely useful

Strategy 4: Product Launch Platforms
Product Hunt: DR 93, requires top 5 finish for dofollow link
Uneed: DR 40+, easier to rank, quality traffic
TinyLaunch: DR 35+, growing platform, less competition
Peerlist: DR 38+, developer-focused community
Strategy: Coordinate launches across all platforms
Potential: 10+ high-quality backlinks from launches

Strategy 5: The Alternative Domain Method
Setup: Register replydaddy.club or replydaddy.io
Use: All outreach and link building emails
Benefit: Protects main domain from spam penalties
Cost: $10-20/year for domain

Part 5: Essential SEO Tools and Actual Costs
The Only Tool You Really Need
Ahrefs - $29/month (Lite plan)
Competitor backlink analysis
Keyword research
Rank tracking
Content gap analysis
Why just Ahrefs? In 2025, you don't need both Ahrefs and SEMrush. Pick one and master it. The $29 Lite plan gives you everything needed to start. Upgrade only when you're making money from SEO.

Free Addition: Detailed SEO Extension - Free
Quick technical checks
Competitor analysis
Real-time optimization
Monthly tool budget: $29 (that's it!)

Part 6: The AI Search Revolution
Optimizing for ChatGPT and Perplexity
New reality in 2025: AI models pull heavily from:
Reddit discussions (highest authority)
Medium articles
GitHub repositories
Stack Overflow answers
Action items:
Build genuine Reddit presence in your niche
Answer questions on Stack Overflow with subtle mentions
Create open-source tools on GitHub (automatic backlinks)
Publish on Medium with strategic keyword placement

Training Data Timing
GPT-4: Training cutoff every 6 months
Perplexity: Real-time web search + training data
Claude: Regular training updates
Strategy: Publish content 2-3 months before anticipated training cutoffs

Part 7: Real Timeline and Expectations
Month 1-3: Foundation Phase
Investment: $500-1,000
Focus: Technical fixes, first 10 blog posts, directory submissions
Expected traffic increase: 0-20%
Backlinks gained: 50-100 (mostly low quality)

Month 4-6: Building Phase
Investment: $1,000-2,000
Focus: Guest posting, first tool launch, link exchanges
Expected traffic increase: 20-50%
Backlinks gained: 20-30 (mixed quality)

Month 7-9: Authority Phase
Investment: $1,500-3,000
Focus: Premium backlinks, ICP landing pages, content velocity
Expected traffic increase: 50-100%
Backlinks gained: 30-50 (higher quality)

Month 10-12: Scale Phase
Investment: $2,000-4,000
Focus: Scaling what works, cutting what doesn't
Expected traffic increase: 100-300%
Backlinks gained: 50-100 (quality mix)

Total Year 1 Investment: $5,000-10,000
Expected Year 1 Result: 300-500% traffic increase

Part 8: The Budget Breakdown
$500/Month Budget (Minimum Viable)
Tools: $29 (Ahrefs Lite)
Content: $300 (3 articles at $100 each)
Backlinks: $171 (Get More Backlinks service with BACKLINKS5 code)

$1,000/Month Budget (Recommended Start)
Tools: $29 (Ahrefs Lite)
Content: $400 (4 articles)
Backlinks: $400 (1-2 quality links)
Directory service: $160 (Get More Backlinks)
Buffer: $11 for testing

$2,500/Month Budget (Growth Mode)
Tools: $99 (Ahrefs Standard upgrade)
Content: $1,000 (10 articles)
Backlinks: $1,000 (3-5 quality links)
Launch campaigns: $200 (coordinating on Uneed, TinyLaunch, Peerlist)
Virtual Assistant: $200 (for outreach)

$5,000/Month Budget (Scale Mode)
Tools: $99 (Ahrefs Standard)
Content: $2,000 (20 articles or 5 ultimate guides)
Backlinks: $2,500 (8-10 premium links)
Outreach specialist: $400

Part 9: Common Mistakes and How to Avoid Them
Mistake 1: Focusing Only on Your Website
Reality: 80% of SEO is off-site
Fix: Allocate 80% of budget to backlinks and outreach

Mistake 2: Buying Cheap Backlinks
Reality: 100 bad links < 1 good link
Fix: Quality over quantity, always

Mistake 3: Ignoring Technical SEO
Reality: Perfect content with bad technical SEO won't rank
Fix: Install Detailed SEO Extension and fix issues weekly

Mistake 4: Not Tracking ROI
Reality: You're probably wasting 50% of your budget
Fix: Track every backlink's impact, cut what doesn't work

Mistake 5: Overspending on Tools
Reality: You don't need 5 SEO tools starting out
Fix: Start with Ahrefs Lite at $29/month, upgrade when profitable

Part 10: The Decision Framework
Choose the Money Path If:
You have $1,000+/month to invest
You need results in 6-12 months
Your time is better spent on product/sales
You can sustain investment for 12+ months

Choose the Time Path If:
You have 20+ hours/week available
You're willing to wait 12-18 months for results
You enjoy writing and relationship building
You have more time than money

Choose the Smart Path (Recommended):
Start with $500/month budget
Invest 10 hours/week
Use services for repetitive tasks (Get More Backlinks)
Do creative work yourself
Scale budget as revenue grows

The Action Plan: Start This Week
Day 1-2: Audit and Fix
Install Detailed SEO Extension
Run audit on every page
Fix all title and meta description issues
Ensure proper H1/H2/H3 structure

Day 3-4: Competitive Intelligence
Sign up for Ahrefs Lite ($29/month)
Analyze top 3 competitors' backlinks
Find their top performing content
Identify gaps you can exploit

Day 5-7: Launch Foundation
Order Get More Backlinks service (use code BACKLINKS5)
Write your first 3,000-word article
Set up alternative domain for outreach
Plan your first launch on Uneed

Week 2: Build Momentum
Submit to TinyLaunch
Create Peerlist profile and submit
Write 2 more articles
Start first guest post outreach

Month 2 and Beyond:
Maintain velocity: 1 quality article per week minimum
Launch on one platform monthly
Track everything in Ahrefs
Reinvest profits into more content and links

The 2025 Reality Check
The SEO landscape in 2025 has both good and bad news:
Good News:
AI tools make content creation faster
More platforms for launches (Uneed, TinyLaunch, Peerlist)
Better tools at lower prices (Ahrefs Lite at $29)

Bad News:
Competition is fiercer
Backlink prices keep rising
Google updates are more frequent

The Opportunity: Most businesses still won't commit. They'll try SEO for 2-3 months, see no results, and quit. If you commit for 12 months with even a $500/month budget, you'll outrank 90% of your competition.

The Bottom Line
SEO in 2025 requires either:
$1,000-3,000/month for 12 months (money path)
20-30 hours/week for 18 months (time path)
$500/month + 10 hours/week for 12 months (smart path)

Start with these essentials:
Ahrefs Lite - $29/month
Get More Backlinks - discount code BACKLINKS5
Detailed SEO Extension - Free

Launch on these platforms:
Uneed
TinyLaunch
Peerlist

Your competitors are already investing either time or money. The question isn't whether to do SEO—it's whether you'll do it smart or do it hard.

Choose smart. Start today.

Remember: In 2025, SEO isn't optional. It's the price of being discoverable online.`
  },
  {
    title: "The End of UI: Why We Won't Need Traditional Interfaces Anymore",
    description: "Understanding why UI was a workaround for technological limitations and how LLMs are making traditional interfaces obsolete.",
    date: "2024-01-15",
    readTime: "5 min read",
    link: "#",
    platform: "Personal Blog",
    featured: true,
    content: `Let's understand the history of why UI was ever needed?
Think about the first computers - massive machines that only understood punch cards with holes in specific patterns. If you wanted to calculate something, you couldn't just ask it. You had to translate your question into a pattern of holes that the machine could read. This was our first "interface" - a translation layer between what humans wanted and what machines could understand.
Moving forward, we got calculators with simple lights that would blink to show results, then digital calculators with tiny screens (they still exist today). This is where things got interesting - you had buttons to press, a screen to see numbers, and a simple system in the background doing the math. But here's the key: you still had to "speak the machine's language" by pressing specific buttons in a specific order.
As computers got more powerful, they could do amazing things - but they were still incredibly picky. They needed data in exact formats, perfect spelling, specific commands. So we built more and more complex interfaces - keyboards, mice, screens, dashboards, apps - all to help humans translate their thoughts into something machines could process. Every button, every menu, every form field was basically a translator.
Example - imagine you want to know how many people used your app last week. Today, you open a dashboard, click date filters, select "last 7 days", choose the right graph type, maybe even write SQL queries. All this complexity exists for one reason: your computer needs you to be extremely specific about what you want.
But here's where everything changes...
With LLMs, you can literally just ask: "hey, how many people used my app last week?" and get an answer. No buttons, no filters, no SQL. The AI understands your messy, human way of talking. It can even talk back to you, clarify what you meant, or suggest related things you might want to know.
So why do we still need all these dashboards? Why am I clicking through menus when I could just have a conversation? The truth is, UI existed because of a technological limitation - machines couldn't understand humans naturally. That limitation is disappearing.
We're not going to need traditional interfaces anymore. Instead of clicking through screens, we'll just talk. Instead of learning how to use software, software will learn how to understand us. The dashboard will become a conversation. The app will become a voice.
The only exception? Entertainment - games, movies, visual experiences where the interface IS the experience. But for everything else? The age of clicking, tapping, and navigating through screens is coming to an end.
UI was never the goal. It was a workaround. And now, we don't need that workaround anymore.`
  }
]
import type { Experience, Project, Education, OpenSourceRepo, Blog, LearnSession, Testimonial } from './types'

export const personalInfo = {
  name: "Neel Seth",
  title: "Product Developer",
  email: "neelseth48@gmail.com",
  location: "Bengaluru, Karnataka, India",
  bio: "Serial entrepreneur and product leader with expertise in AI-powered platforms, SaaS, and e-commerce. Building innovative solutions that scale from 0 to millions of users.",
  socials: {
    github: "https://github.com/TeacherOp",
    linkedin: "https://www.linkedin.com/in/neel-seth-323827138/",
    x: "https://x.com/neelseth"
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
  },
  {
    title: "Bot9.ai",
    description: "AI chatbot builder automating 90% of customer support & sales",
    tech: ["AI/ML", "Multi-channel", "150+ Languages", "No-code"],
    link: "https://bot9.ai",
    featured: false,
    banner: "/bot9.jpeg"
  },
  {
    title: "Rollout.site",
    description: "AI-powered website builder - idea to live site in 3 minutes",
    tech: ["Claude AI", "Next.js", "No-code", "Multi-language"],
    link: "https://rollout.site",
    featured: false,
    banner: "/rollout.jpeg"
  },
  {
    title: "Teacherop(Neel) Free AI Course Powered by GrowthX",
    description: "Free comprehensive course teaching non-developers how to build AI tools with Claude's API - from beginner to advanced",
    tech: ["Python", "Claude API", "Free Learning Resource", "AI Education"],
    link: "https://github.com/TeacherOp/growthx_1",
    featured: true,
    banner: "/growthx-banner.png"
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
  },
  {
    title: "Teacherop(Neel) Free AI Course Powered by GrowthX",
    description: "Free comprehensive course teaching non-developers how to build AI tools with Claude's API - from beginner to advanced with practical examples",
    stars: 3,
    forks: 0,
    language: "Python",
    topics: ["ai", "claude-api", "anthropic", "education", "free-course", "beginner-friendly", "ai-agents"],
    link: "https://github.com/TeacherOp/growthx_1",
    featured: true
  }
]

export const blogs: Blog[] = [
  // {
  //   title: "The Big Shift: Why Gold Still Beats Crypto for Real People",
  //   slug: "gold-vs-crypto-2025",
  //   description: "A simple explainer for families, savers, and anyone watching the world change. Personal analysis on why gold remains superior to crypto as a store of value.",
  //   date: "2025-10-27",
  //   readTime: "15 min read",
  //   link: "#",
  //   platform: "Personal Blog",
  //   featured: true,
  //   tags: ["Hot take", "Personal views"],
  //   content: `# The Big Shift: Why Gold Still Beats Crypto for Real People

  // **A simple explainer for families, savers, and anyone watching the world change**

  // **Disclaimer: Not financial advice. Personal analysis.**

  // Here is my first AI slop post - Read the raw chat and thoughts with AI, here is the exported chat with GPT-5 and web research: https://chatgpt.com/share/68fe5c0a-68d8-8010-99ee-d36d67cdf49a

  // It took me 20 minutes to research and structure my thoughts, to write this, as i love following global politics and have been following since last 10–12 years.

  // **THIS IS NOT FINANCIAL ADVICE, JUST MY PERSONAL ANALYSIS AND WHAT I FEEL WILL HAPPEN**

  // Tell me how is my AI slop?

  // ---

  // ## Assumption (This is important / this assumption is based on my own personal beliefs, trends and news i consume)

  // - Over the next 2–15 years, the global money system will change.
  // - Central banks are buying record amounts of gold, India has started accepting silver for loans, and crypto - once meant to be "people's money" - is now dominated by large institutions and governments.
  // - This isn't about hype. It's about trust, and where everyday people can safely store value when paper promises stop working.

  // ---

  // ## 0) The foundation  -  what Bitcoin is really backed by

  // Before arguing whether gold or crypto is better, let's ask the first, most important question: **What gives Bitcoin its value in the real world?**

  // If you think about it, Bitcoin isn't backed by any tangible commodity or government. To get Bitcoin, someone must first exchange fiat money - usually U.S. dollars or USDT (a dollar-pegged stablecoin) - to buy it.

  // That means Bitcoin's entire price system is denominated and settled in dollars, not independent of it.

  // If the flow of new dollars (or dollar-backed tokens) stopped tomorrow, Bitcoin wouldn't "collapse" because of code - it would collapse because no one would be willing to trade real-world value for it.

  // Mining rewards or blockchain confirmations don't feed families. Only someone's willingness to give you goods, services, or fiat for your Bitcoin does.

  // So, functionally:
  // - Bitcoin is priced in dollars, not in energy.
  // - It's purchased with dollars, not mined into existence from nothing.
  // - And it's stored on platforms that settle trades in dollars.

  // Now here's the irony: the U.S. dollar itself is no longer backed by gold (since 1971). It's backed by government debt and trust - and that trust is weakening, with U.S. debt now past $38 trillion.

  // So when policymakers push "crypto-backed finance," they're essentially backing digital assets with a devaluing paper promise.

  // It's like building a glass house on a wooden foundation that's already on fire.

  // The West calls this "innovation," but in truth, it's a strategy to reinflate confidence in the dollar system by wrapping it in new digital packaging.

  // Meanwhile, the East (BRICS+) sees the game clearly. India, China, Russia, and others are accumulating gold and silver, experimenting with metal-backed digital currencies, and setting up trade mechanisms that don't depend on the dollar.

  // India even formalized silver loans - a small but symbolic step toward metal-based finance.

  // So if global trade moves to gold-backed settlement systems, not crypto-backed-by-dollars, the West's "digital dollar dream" becomes a self-defeating loop.

  // The East will only accept a store of value that's real, measurable, and apolitical - not one built on an IOU chain of derivatives.

  // In simple terms:
  // Bitcoin is "digital gold" only until you realize you still need dollars to buy it, banks to store it, and regulators to approve it.

  // Gold, on the other hand, needs none of them.

  // ---

  // ## 1) What gives money its value

  // Money only has value when people believe it does.

  // Gold and silver keep trust because they're scarce, physical, and can't be printed by politicians or central banks.

  // Paper money is only as strong as the promise behind it. When debt, politics, or inflation weaken that promise, people rush back to real assets.

  // Central banks themselves bought a net 244 tonnes of gold in Q1 2025, marking three straight years of record buying.

  // Think of it like this: movie tickets are valuable only while the cinema is open. If the projector breaks or the owner runs away, you're just holding colorful paper.

  // ---

  // ## 2) What's happening in the East (India, China, BRICS)

  // While Western economies debate digital money, the East is quietly loading vaults with metals:
  // - India's RBI gold holdings now exceed 880 tonnes, with gold making up roughly 15% of reserves.
  // - China's central bank added gold for four straight quarters in 2025.
  // - Russia, Brazil, and South Africa also maintain large gold holdings.
  // - And India's RBI now allows silver as collateral for loans  -  borrowers can pledge silver ornaments or coins for credit.

  // That's a quiet revolution: precious metals are becoming part of normal finance again.

  // Imagine: your grandmother's silver bangles can now help fund a business loan  -  that's how real the shift is.

  // ---

  // ## 3) Crypto's reality check (who owns what and who controls it)

  // ### A) Ownership: not so decentralized

  // The myth says "everyone can own Bitcoin equally."
  // Reality: it's heavily concentrated.

  // - The top 0.03% of wallets (about 17,000 addresses) control over 60% of all Bitcoin.
  // - Only 1–1.5 million people hold more than $100,000 worth of BTC.
  // - Around 56 million people own less than 0.1 BTC  -  roughly under $10,000 each.
  // - The median wallet balance is below 0.01 BTC (~$1,000).

  // (Data: BitInfoCharts, Fool.com, 2025)

  // Bitcoin ownership looks less like a democracy and more like a pyramid  -  a few whales at the top, millions of minnows below.

  // ### B) Control: who holds the keys

  // Crypto is now dominated by institutions and governments, not individuals.

  // - BlackRock's iShares Bitcoin Trust (IBIT) holds 802,000 BTC (≈$89 B).
  // - Fidelity's ETF holds 205,000 BTC.
  // - MicroStrategy (now "Strategy") owns 640,000+ BTC worth $71 B.

  // Governments like the U.S. (207k BTC) and China (194k BTC) also hold billions, mostly seized or confiscated.

  // The U.S. DOJ recovered ransom crypto in the Colonial Pipeline case by seizing a wallet's private key.

  // The Tornado Cash case showed wallets, exchanges, and mixers can be sanctioned or shut down by regulators.

  // So even though crypto was built to be "decentralized," it's now stored in giant vaults and governed by policies - not so different from banks.

  // Analogy: crypto started as a neighborhood market. Now it's a shopping mall owned by three corporations and guarded by government security.

  // ---

  // ## 4) Gold vs. Crypto: Which is truly decentralized?

  // ### Gold and Silver – The People's Asset

  // - Indian families alone hold over 26,000 tonnes of gold  -  more than all central banks combined.
  // - Chinese, Middle Eastern, and Western households together hold even more.
  // - Globally, private citizens own more gold and silver than all ETFs and banks combined.

  // Gold is already naturally decentralized. It's spread across billions of hands, across every continent, no passwords, no custodians, no "internet connection required."

  // ### Bitcoin – The Institution's Asset

  // - Less than 2 million people hold meaningful BTC amounts.
  // - ETFs, corporations, and governments dominate total supply.
  // - Infrastructure like wallets and exchanges can be regulated, frozen, or hacked.

  // Even though Bitcoin is scarce, it's no longer equally distributed.

  // Simple truth:
  // Gold is owned by humanity.
  // Crypto is owned by institutions.

  // ---

  // ## 5) Why metals win as stores of value

  // Gold has survived 5,000 years, through wars, empires, and resets.

  // Bitcoin has survived 15 years  -  impressive, but dependent on internet, power, and laws that can change overnight.

  // If money systems shift toward gold-backed or tokenized-metal trade (as BRICS are testing), people holding physical value will adapt instantly.

  // Picture it:
  // If the internet crashes tomorrow, your gold coin still buys bread.
  // Your crypto wallet just shows an error.

  // ---

  // ## 6) How normal savers (45–55) can de-risk

  // (Not advice, just logic.)

  // - 60% in normal investments you understand (mutual funds, SIPs, productive property).
  // - 20–30% in physical gold/silver, or gold ETFs and sovereign gold bonds.
  // - 10% in liquid reserves (cash or short FDs).

  // Shift gradually  -  move 5–10% every few months.
  // The goal isn't to abandon modern finance. It's to balance paper wealth with real wealth.

  // Analogy: Don't throw away your smartphone  -  just keep a torch handy in case the lights go out.

  // ---

  // ## 7) The Bigger Picture

  // - Central banks are hoarding gold.
  // - India is monetizing silver through RBI rules.
  // - Bitcoin is centralized inside ETFs and government treasuries.
  // - Authorities can freeze or seize crypto infrastructure.

  // If the next global system trades using gold or tokenized metal, the transition will favor those who already hold tangible value.

  // ---

  // ## 8) In one line

  // Gold doesn't need Wi-Fi, a password, or a regulator's approval.

  // That's what true decentralization looks like.

  // ---

  // ## SOURCES

  // - World Gold Council – Gold Demand Trends Q1 2025: https://gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-q1-2025
  // - Reuters – India Central Bank's Gold Tops $100 B: https://reuters.com/world/india/india-central-banks-gold-pile-tops-100-billion-surging-bullion-prices-2025-10-17/
  // - Upstox – RBI Silver Collateral Rules 2025: https://upstox.com/news/personal-finance/latest-updates/can-you-take-a-loan-with-silver-as-collateral-here-is-what-the-rbi-rules-say/article-183523/
  // - BitInfoCharts – Bitcoin Distribution: https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html
  // - Bitbo.io – Bitcoin Holdings by Country/Company: https://bitbo.io/treasuries/countries/
  // - BlackRock – iShares Bitcoin Trust (IBIT): https://blackrock.com/us/financial-professionals/products/333011/ishares-bitcoin-trust-etf
  // - SEC – Spot Bitcoin ETF Approval Statement (2024): https://sec.gov/newsroom/speeches-statements/gensler-statement-spot-bitcoin-011023
  // - U.S. Department of Justice – Colonial Pipeline Seizure Press Release: https://justice.gov/archives/opa/pr/department-justice-seizes-23-million-cryptocurrency-paid-ransomware-extortionists-darkside
  // - U.S. Treasury – Tornado Cash Delisting 2025: https://home.treasury.gov/news/press-releases/sb0057`
  // },
  {
    title: "The Real Cost of SEO: A Practical Guide to Ranking in 2025",
    slug: "real-cost-of-seo-2025",
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
Use the Detailed SEO Extension (https://detailed.com/extension/) for Chrome. This free tool instantly shows:
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
Get More Backlinks (https://www.getmorebacklinks.org/) - $200 ( approx ) for 220+ submissions
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
Example for ReplyDaddy (https://replydaddy.com):
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
Product Hunt (https://www.producthunt.com/): DR 93, requires top 5 finish for dofollow link
Uneed (https://uneed.best): DR 40+, easier to rank, quality traffic
TinyLaunch (https://www.tinylaunch.com/): DR 35+, growing platform, less competition
Peerlist (https://peerlist.io/): DR 38+, developer-focused community
Strategy: Coordinate launches across all platforms
Potential: 10+ high-quality backlinks from launches

Strategy 5: The Alternative Domain Method
Setup: Register replydaddy.club or replydaddy.io
Use: All outreach and link building emails
Benefit: Protects main domain from spam penalties
Cost: $10-20/year for domain

Part 5: Essential SEO Tools and Actual Costs
The Only Tool You Really Need
Ahrefs (https://ahrefs.com) - $29/month (Lite plan)
Competitor backlink analysis
Keyword research
Rank tracking
Content gap analysis
Why just Ahrefs? In 2025, you don't need both Ahrefs and SEMrush. Pick one and master it. The $29 Lite plan gives you everything needed to start. Upgrade only when you're making money from SEO.

Free Addition: Detailed SEO Extension (https://detailed.com/extension/) - Free
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
Sign up for Ahrefs (https://ahrefs.com) Lite ($29/month)
Analyze top 3 competitors' backlinks
Find their top performing content
Identify gaps you can exploit

Day 5-7: Launch Foundation
Order Get More Backlinks (https://www.getmorebacklinks.org/) service (use code BACKLINKS5)
Write your first 3,000-word article
Set up alternative domain for outreach
Plan your first launch on Uneed (https://uneed.best)

Week 2: Build Momentum
Submit to TinyLaunch (https://www.tinylaunch.com/)
Create Peerlist (https://peerlist.io/) profile and submit
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
Ahrefs (https://ahrefs.com) Lite - $29/month
Get More Backlinks (https://www.getmorebacklinks.org/) - discount code BACKLINKS5
Detailed SEO Extension (https://detailed.com/extension/) - Free

Launch on these platforms:
Uneed (https://uneed.best)
TinyLaunch (https://www.tinylaunch.com/)
Peerlist (https://peerlist.io/)

Your competitors are already investing either time or money. The question isn't whether to do SEO - it's whether you'll do it smart or do it hard.

Choose smart. Start today.

Remember: In 2025, SEO isn't optional. It's the price of being discoverable online.`
  },
  {
    title: "The End of UI: Why We Won't Need Traditional Interfaces Anymore",
    slug: "end-of-ui-llm-interfaces",
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

export const learnSessions: LearnSession[] = [
  {
    id: 1,
    title: "Session 1: API Fundamentals & Business Applications",
    description: "Master the foundations of AI tool development with hands-on API implementation, moving from basic calls to production-ready solutions that solve real business problems.",
    date: "November 2025",
    status: "completed",
    videoUrl: "https://www.youtube.com/embed/jsdKgmU3DJA?si=4lH5YyKMz46LYBtS",
    githubUrl: "https://github.com/TeacherOp/growthx_1?tab=readme-ov-file#a-practical-guide-to-building-ai-tools--agents--for-non-developers-",
    topics: [
      "Basic API interactions with Claude's API",
      "System prompts and temperature control",
      "Structured output formatting",
      "Real-world skill assessment agent",
      "Web search integration"
    ],
    technologies: ["Python", "Anthropic API", "JSON", "CSV Processing"],
    duration: "2 hours"
  },
  {
    id: 2,
    title: "Session 2: Chat Applications & Advanced Agents",
    description: "Build sophisticated chat applications with persistent context, multi-agent architectures, and production-ready features including real-time updates and specialized sub-agents.",
    date: "November 2025",
    status: "completed",
    videoUrl: "https://www.youtube.com/embed/RgykmlWXzns?si=3ygKhSsZs2peFbKM",
    githubUrl: "https://github.com/TeacherOp/growthx_1?tab=readme-ov-file#session-2---chat-applications-and-advanced-agent-implementations-",
    topics: [
      "Conversation context management",
      "Persistent chat with save/resume",
      "Multi-agent architecture",
      "Blog automation with web research",
      "Presentation builder system"
    ],
    technologies: ["Flask", "SSE", "PowerPoint API", "Tool Chaining"],
    duration: "2.5 hours"
  },
  {
    id: 3,
    title: "Session 3: Advanced AI Agent Orchestration",
    description: "Coming soon! Deep dive into production-scale agent systems, including RAG implementation, vector databases, and enterprise deployment strategies.",
    date: "November 30, 2025",
    status: "upcoming",
    topics: [
      "RAG (Retrieval-Augmented Generation)",
      "Vector database integration",
      "Agent orchestration patterns",
      "Production deployment",
      "Performance optimization"
    ],
    technologies: ["LangChain", "Pinecone", "Docker", "Kubernetes"],
    duration: "3 hours"
  }
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Robin Singhvi",
    designation: "Building AI Coworkers @ OneDigital | Founder SmartCue | Enterprise AI",
    content: "Should have better structure Start from the basics Went into nitty gritties before setting right context etc.",
    linkedinUrl: "https://www.linkedin.com/in/robinsinghvi/",
    avatar: "/reviewers_images/robin.jpeg",
    sessionId: 1,
    rating: 3,
    date: "Nov 2"
  },
  {
    id: 2,
    name: "Shharrnam Chhatpar",
    designation: "Co-founder AnalyticsVerse | Enabling Constant Improvement for Dev Teams | Ex-AWS Ex-Arista",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/shharrnam/",
    avatar: "/reviewers_images/shharrnam.jpeg",
    sessionId: 1,
    rating: 4,
    date: "Nov 2"
  },
  {
    id: 3,
    name: "Shiv Pratap Singh",
    designation: "Senior Software Engineer I at QuantamBlack AI by McKinsey | Cloud & AI | ex-WatchGuard Technologies",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/shiv-pratap-singh/",
    avatar: "/reviewers_images/shivpratap.jpeg",
    sessionId: 1,
    rating: 4,
    date: "Nov 2"
  },
  {
    id: 4,
    name: "Moghal Saif Aliullah",
    designation: "AI @ Cereblis | AI Product Manager",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/moghalsaifa/",
    avatar: "/reviewers_images/moghalsaif.jpeg",
    sessionId: 1,
    rating: 4,
    date: "Nov 2"
  },
  {
    id: 5,
    name: "Vikas Wakde",
    designation: "Software Engineer",
    content: "First of all, the session was full packed with full of knowledge, the speaker started with very fundamentals that are not mostly covered when teaching such topic, but after setting up the fundamentals, we went and dived into the code and how the system actually works, the tools, the prompts and what not, but if you ask me what part of the session i enjoyed the most, then if i had to pick one, it would be the part where the speaker showed how the real world startups are using this LLM's to solve the problems at the scale, i am very excited to learn on such topics, hope we get more such sessions.",
    linkedinUrl: "https://www.linkedin.com/in/vikaswakde/",
    avatar: "/reviewers_images/vikaswakde.jpeg",
    sessionId: 1,
    rating: 5,
    date: "Nov 2"
  },
  {
    id: 6,
    name: "Anshul Shivhare",
    designation: "Product & Growth @ Kirana Club",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/anshul-shivhare/",
    avatar: "/reviewers_images/anshul.jpeg",
    sessionId: 1,
    rating: 5,
    date: "Nov 2"
  },
  {
    id: 7,
    name: "Kiran Nair",
    designation: "Building Games x AI",
    content: "Neel clearly had a lot of knowledge to share, but overall the session felt a bit unorganized in terms of flow. it felt both easy and tough to follow, at different points of time. I wasn't sure what to take away from today's session. I am pretty sure if the material was organized and prepared with more time in hand, it would have been way better. I would love to attend a follow up session with the content and flow more organized and easy to follow.",
    linkedinUrl: "https://www.linkedin.com/in/kiran-nair-43524a73/",
    avatar: "/reviewers_images/kiran.jpg",
    sessionId: 1,
    rating: 3,
    date: "Nov 2"
  },
  {
    id: 8,
    name: "Vicky Kathuria",
    designation: "Senior Marketing Advisor Homefeild",
    content: "Idea: Build a small live tool during a meeting — something simple but useful, like a blog topic generator or keyword search helper. Goal: Show how quick and practical tool-building can be in real-time.",
    linkedinUrl: "https://www.linkedin.com/in/vickykathuria/",
    avatar: "/reviewers_images/vicky.jpg",
    sessionId: 1,
    rating: 4,
    date: "Nov 2"
  },
  {
    id: 9,
    name: "Prem Prakash Singh",
    designation: "Senior Analyst - Software Engineer Travelex",
    content: "The session was really helpful. Got to learn more about system prompts, tools and how we can have one tools talking to another. Looking forward to the next session where we can continue on exploring the usecases for automations using AI. Thanks again for sharing the valueable insights on building AI tools.",
    linkedinUrl: "https://www.linkedin.com/in/prem-singh-a0921293/",
    avatar: "/reviewers_images/premprakash.jpeg",
    sessionId: 1,
    rating: 5,
    date: "Nov 2"
  },
  {
    id: 10,
    name: "Viola Lewis",
    designation: "Advanced Analytics and Automation Consultant Dropoff",
    content: "First of all, thank you for taking the time to share your learning. It was a very useful and insightful session. The content was extremely well organized, and I especially appreciated the hands on approach. Personally, I find it much easier to understand code than documentation, so having your examples cover the basics in such depth really helped clarify the finer details of working with LLMs. If I may suggest, it would be great if future sessions could start on time, considering how valuable both the hosts' and participants' time is. Punctuality helps everyone make the most of the learning opportunity. Also, given the richness of the material, it might work even better if the content were split into two 2-hour sessions, spaced about a week apart. This would give participants time to experiment with the initial steps before returning for a more hands-on continuation. I'm looking forward to trying out the code myself. It's truly a time saver when an expert, especially one self trained, takes the time to explain the logic behind their work so clearly. Thank you once again for an excellent and engaging session.",
    linkedinUrl: "https://www.linkedin.com/in/violaflewis/",
    avatar: "/reviewers_images/viola.jpeg",
    sessionId: 1,
    rating: 5,
    date: "Nov 2"
  },
  {
    id: 11,
    name: "Anuj Sharma",
    designation: "Senior Software Engineer DeltaExchange",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/ptmaroct/",
    avatar: "/reviewers_images/anujsharma.jpeg",
    sessionId: 1,
    rating: 5,
    date: "Nov 2"
  },
  {
    id: 12,
    name: "Rishikesh Ranjan",
    designation: "Leading Growth & GTM StreamAlive",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/ranjan-rishikesh/",
    avatar: "/reviewers_images/rishikesh.jpeg",
    sessionId: 1,
    rating: 5,
    date: "Nov 3"
  },
  {
    id: 13,
    name: "Rakesh",
    designation: "Independent Software Consultant",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/iamrakeshkumar/",
    avatar: "/reviewers_images/fallback.svg",
    sessionId: 1,
    rating: 5,
    date: "Nov 3"
  },
  {
    id: 14,
    name: "Naganjan Kumar",
    designation: "Project Management Cordinator Verizon",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/yerram-naganjan/",
    avatar: "/reviewers_images/naganjan.jpeg",
    sessionId: 1,
    rating: 4,
    date: "Nov 3"
  },
  {
    id: 15,
    name: "Udayan Walvekar",
    designation: "Founder & CEO Growthx",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/udayanw/",
    avatar: "/reviewers_images/udayan.png",
    sessionId: 1,
    rating: 5,
    date: "Nov 5"
  },
  {
    id: 16,
    name: "Amit Goyal",
    designation: "",
    content: "",
    linkedinUrl: "",
    avatar: "/reviewers_images/amitgoyal.jpg",
    sessionId: 1,
    rating: 4,
    date: "Nov 5"
  },
  {
    id: 17,
    name: "Manoj Chaudhary",
    designation: "",
    content: "",
    linkedinUrl: "",
    avatar: "/reviewers_images/fallback.svg",
    sessionId: 1,
    rating: 5,
    date: "Nov 6"
  },
  {
    id: 18,
    name: "Amith Sasi",
    designation: "",
    content: "",
    linkedinUrl: "",
    avatar: "/reviewers_images/amithsasi.jpeg",
    sessionId: 1,
    rating: 5,
    date: "Nov 6"
  },
  {
    id: 19,
    name: "Anshul Shivhare",
    designation: "Product & Growth @ Kirana Club",
    content: "Have attended both session. Very helpful.",
    linkedinUrl: "https://www.linkedin.com/in/anshul-shivhare/",
    avatar: "/reviewers_images/anshul.jpeg",
    sessionId: 2,
    rating: 5,
    date: "Nov 16"
  },
  {
    id: 20,
    name: "Vaibhav Bansal",
    designation: "",
    content: "",
    linkedinUrl: "",
    avatar: "/reviewers_images/fallback.svg",
    sessionId: 2,
    rating: 5,
    date: "Nov 16"
  },
  {
    id: 21,
    name: "Udayan Walvekar",
    designation: "Founder & CEO Growthx",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/udayanw/",
    avatar: "/reviewers_images/udayan.png",
    sessionId: 2,
    rating: 5,
    date: "Nov 16"
  },
  {
    id: 22,
    name: "Naganjan Kumar",
    designation: "Project Management Cordinator Verizon",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/yerram-naganjan/",
    avatar: "/reviewers_images/naganjan.jpeg",
    sessionId: 2,
    rating: 4,
    date: "Nov 16"
  },
  {
    id: 23,
    name: "Rishikesh Ranjan",
    designation: "Leading Growth & GTM StreamAlive",
    content: "This was an amazing session, neel. Easy to understand and highly actionable. For the next session I'd love to learn more about langgraph and how to build complex agents and deploy it.",
    linkedinUrl: "https://www.linkedin.com/in/ranjan-rishikesh/",
    avatar: "/reviewers_images/rishikesh.jpeg",
    sessionId: 2,
    rating: 5,
    date: "Nov 16"
  },
  {
    id: 24,
    name: "Akshaya Choudhary",
    designation: "AVP Brand Marketing and communications Upwisery",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/akshaya-choudhary/",
    avatar: "/reviewers_images/akshaya.jpg",
    sessionId: 2,
    rating: 4,
    date: "Nov 16"
  },
  {
    id: 25,
    name: "Rakesh",
    designation: "Independent Software Consultant",
    content: "Neel is great at explaining complex tech jargons in a simple manner that could be understood by anyone, no matter their skill level. Session was full of practical knowledges from his product building experiences and progressed a comfortable manner from easy to complex techniques without making overwhelming everyone. However more hands on coding could be added to make the session more interactive.",
    linkedinUrl: "https://www.linkedin.com/in/iamrakeshkumar/",
    avatar: "/reviewers_images/fallback.svg",
    sessionId: 2,
    rating: 4,
    date: "Nov 16"
  },
  {
    id: 26,
    name: "Sujith Huruli",
    designation: "Program Manager Allo Health",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/drsujithh/",
    avatar: "/reviewers_images/fallback.svg",
    sessionId: 2,
    rating: 5,
    date: "Nov 16"
  },
  {
    id: 27,
    name: "Rahul Thakor",
    designation: "Practice Lear Data Science & Analytics Mindstix Software Labs",
    content: "Neel is amazing. Content was absolutely on point. One of the most important takeaways: He made it super simple to try out a lot of stuff without over-engineering.",
    linkedinUrl: "https://www.linkedin.com/in/rahthakor/",
    avatar: "/reviewers_images/fallback.svg",
    sessionId: 2,
    rating: 5,
    date: "Nov 16"
  },
  {
    id: 28,
    name: "Yatendra Singh Ranawat",
    designation: "Product Manager Iksula",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/yatendra3192/",
    avatar: "/reviewers_images/yatendra.jpeg",
    sessionId: 2,
    rating: 5,
    date: "Nov 16"
  },
  {
    id: 29,
    name: "Shubham Kolkar",
    designation: "Program Associate Salesforce",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/shubham-kolkar/",
    avatar: "/reviewers_images/shubham.jpg",
    sessionId: 2,
    rating: 3,
    date: "Nov 16"
  },
  {
    id: 30,
    name: "Udayan Walvekar",
    designation: "Founder & CEO Growthx",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/udayanw/",
    avatar: "/reviewers_images/udayan.png",
    sessionId: 2,
    rating: 5,
    date: "Nov 17"
  },
  {
    id: 31,
    name: "Viola Lewis",
    designation: "Advanced Analytics and Automation Consultant Dropoff",
    content: "Thank you Neel for the fantastic sessions. We've covered the fundamentals of using LLMs in code quite well so far. It would be great to now see a live demo on how to use prompts (vibe coding) to build an agentic application and take it all the way to production.",
    linkedinUrl: "https://www.linkedin.com/in/violaflewis/",
    avatar: "/reviewers_images/viola.jpeg",
    sessionId: 2,
    rating: 5,
    date: "Nov 17"
  },
  {
    id: 32,
    name: "Prem Akash Chandrasekaran",
    designation: "Growth Consultant",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/premakash/",
    avatar: "/reviewers_images/premakashchand.jpg",
    sessionId: 2,
    rating: 5,
    date: "Nov 17"
  },
  {
    id: 33,
    name: "Savvy Jain",
    designation: "Founder Director CEO Cofiato",
    content: "",
    linkedinUrl: "https://www.linkedin.com/in/savvyjain/",
    avatar: "/reviewers_images/savvy.jpeg",
    sessionId: 2,
    rating: 3,
    date: "Nov 17"
  },
  {
    id: 34,
    name: "Hariharan V",
    designation: "Product Manager Kratos Gaming",
    content: "Went through the 1st Session, what an eye opener. Kudos Man. Thanks for taking these. Wish it were slower, hand-holding with an absolute execution from Level-wise Topic to Prompts Creation to Execution to close every session for an absolute beginner like me but can't ask more. Thanks a lot again.",
    linkedinUrl: "https://www.linkedin.com/in/vhharan1/",
    avatar: "/reviewers_images/hariharan.png",
    sessionId: 2,
    rating: 5,
    date: "Nov 18"
  },
  {
    id: 35,
    name: "Amol A Girhe",
    designation: "Global Solution Architect Informatica",
    content: "Thank you for delivering such a wonderful and insightful session. You covered complex material exceptionally well within the time allotted. The content provided invaluable clarity on the tools, multithreading, and, most importantly, how to best leverage these concepts to solve problems across various verticals. This knowledge is immediately actionable. We genuinely appreciate the effort and expertise you shared and look forward with enthusiasm to your upcoming sessions.",
    linkedinUrl: "https://www.linkedin.com/in/amolagirhe/",
    avatar: "/reviewers_images/anmola.jpeg",
    sessionId: 2,
    rating: 5,
    date: "Nov 17"
  },
  {
    id: 36,
    name: "Amarjeet Sahoo",
    designation: "Lead Product Manager Sequioa",
    content: "Really enjoyed the last Agentic AI session. It was refreshing to see something so practical and grounded instead of the usual toy demos. I'm especially curious to learn more about the real-world optimization ideas you mentioned.",
    linkedinUrl: "https://www.linkedin.com/in/amarjeetsahoo/",
    avatar: "/reviewers_images/amarjeetsahoo.jpg",
    sessionId: 2,
    rating: 5,
    date: "2 days ago"
  }
]
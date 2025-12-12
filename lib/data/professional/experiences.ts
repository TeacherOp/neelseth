import type { Experience } from '@/lib/types'

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
    description: "Building a co-pilot for Reddit marketers. AI-powered lead scoring engine that finds relevant posts and comments to engage with. Helps draft comments based on user persona, factual work history, brand data, and tone. Part of the 'build mode' journey - trying to figure out what SaaS problems to solve, building, testing, iterating. Using AI to build faster and cheaper than traditional development.",
    achievements: [
      "AI-powered lead scoring for Reddit engagement",
      "Context-aware comment drafting (persona, history, brand, tone)",
      "Full-stack: Flask backend, React.js frontend, Supabase DB"
    ],
    skills: ["LLM", "Anthropic Claude", "Supabase", "Flask", "React.js", "Product Development", "Reddit Marketing", "Lead Scoring"],
    current: true,
    parentCompany: "Self-employed"
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
    description: "Building a different kind of online learning platform. Core function: Help figure out the actual concepts you don't know and need to learn to achieve any given goal. Focusing on STEM subjects. Not another course platform - it's about identifying knowledge gaps and creating personalized learning paths. Part of the 'build mode' journey since leaving Dukaan in May 2024.",
    achievements: [
      "Knowledge gap identification system for STEM",
      "Personalized learning path generation",
      "Goal-oriented learning approach"
    ],
    skills: ["EdTech", "Product Development", "STEM Education", "Learning Systems", "AI/LLM"],
    current: true,
    parentCompany: "Self-employed"
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
    description: "Freelancing as a product developer and consultant since leaving Dukaan. Taking on projects while building my own products (Teacherop, ReplyDaddy). Focus: AI-powered tools, Shopify e-commerce, and product development. Using the same AI-assisted development approach I teach - building faster and shipping quicker.",
    projects: [
      "Wallscope App - Developed platform for automatic wall structure mapping and design",
      "Trekkit - Reworked and designed complete Shopify store",
      "Delta Exchange - Built AI-powered support bot for trading with Freshdesk integration",
      "Delta Exchange - Building productivity tool for product managers with natural language queries"
    ],
    achievements: [
      "4 client projects delivered (Wallscope, Trekkit, Delta Exchange x2)",
      "AI support bot with Freshdesk integration for crypto trading platform",
      "Full Shopify store redesign and development"
    ],
    skills: ["Product Development", "AI/LLM", "Shopify", "Freshdesk API", "Consulting", "E-commerce", "Support Automation"],
    current: true,
    parentCompany: "Self-employed"
  },
  {
    id: 4,
    company: "Shipstation.ai",
    companyUrl: "https://firstsite.app/",
    logo: "/shipstationlogo.svg",
    position: "Co-Founder",
    type: "Self-employed",
    duration: "Jan 2024 - Feb 2025",
    location: "Bengaluru, Karnataka, India",
    description: "Co-founded while still at Dukaan (before leaving in May 2024). AI-powered platform that automates the end-to-end process of designing, coding, deploying, and hosting personal portfolios and websites. Users describe what they want, AI generates the complete website. Started as a side project testing AI capabilities for code generation - proved the thesis that you can build products faster with AI.",
    achievements: [
      "1,700+ users onboarded",
      "End-to-end automation: Design → Code → Deploy → Host",
      "Built with Anthropic, Tavily, and OpenAI",
      "Started while at Dukaan, continued post-exit"
    ],
    skills: ["AI/LLM", "Anthropic Claude", "OpenAI", "Tavily", "Code Generation", "Web Development", "Product Development", "Automation"],
    parentCompany: "Self-employed",
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
    description: "Spearheaded Dukaan Enterprise vertical, scaling B2B customer base from 0 to 10,000+ paying clients in 7 months. Led team of 3 Product Managers. Onboarded large-scale merchants like TheWholeTruthFoods, HealthXP, Govo.Life. Led the AI journey at Dukaan: After GPT-3.5 launched (chat format), spent 6 months learning and building AI solutions for support at scale - built chatbot, RAG system with Pinecone embeddings, Freshdesk integration (read/update/create tickets), authentication. Turned this into bot9.ai (separate product) which made international headlines - covered in TechCrunch, Insider, VentureBeat. Left May 2024 to go back to build mode.",
    achievements: [
      "0 to 10,000+ B2B paying clients in 7 months",
      "Onboarded TheWholeTruthFoods, HealthXP, Govo.Life",
      "Led team of 3 Product Managers",
      "Built bot9.ai: RAG system + Pinecone + Freshdesk integration",
      "bot9.ai covered in TechCrunch, Insider, VentureBeat",
      "6 months deep-dive into AI/LLMs (GPT-3.5, agents, RAG)"
    ],
    skills: ["Product Leadership", "Team Management", "B2B SaaS", "Enterprise Sales", "AI/LLM", "RAG Systems", "Pinecone", "Freshdesk API", "Product Strategy"],
    parentCompany: "Dukaan"
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
    description: "Directed development of core e-commerce verticals: cataloging, payments, post-order functions, and retention strategies. Delivered 200+ product functionalities while integrating with 50+ third-party tools. Started building Dukaan Enterprise (B2B vertical) from scratch. Early AI adoption: Implemented GPT-3 for text completion - store owners could auto-generate product meta titles and descriptions for SEO. This was one of the first useful AI implementations for the business.",
    achievements: [
      "200+ product functionalities delivered",
      "50+ third-party integrations",
      "Started Dukaan Enterprise (B2B vertical) from scratch",
      "Early GPT-3 implementation for SEO meta generation"
    ],
    skills: ["Product Management", "E-commerce", "Cataloging Systems", "Payments", "Retention Strategy", "Third-party Integrations", "GPT-3", "SEO"],
    parentCompany: "Dukaan"
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
    description: "Joined as one of the first employees after being Dukaan's first power user (used it for Tastewright/BasBiryani). Had regular feedback calls with Suumit/Subhash (founders) before joining - figured out Suumit was the founder from how he asked questions. First time working on a product with serious scale - thousands of merchants, millions in GMV. Contributed to core structure of sales, marketing, and support functions. Laid foundation for 5-year product roadmap focusing on last-mile deliveries and payments for 1M+ B2B merchants.",
    achievements: [
      "One of the first employees (joined via founder relationship)",
      "Was Dukaan's first power user before joining",
      "Built core sales, marketing, support structure",
      "5-year product roadmap for 1M+ B2B merchants"
    ],
    skills: ["Product Management", "E-commerce", "Sales Operations", "Marketing Operations", "Support Systems", "Product Roadmap", "Startup Operations"],
    parentCompany: "Dukaan"
  },
  {
    id: 9,
    company: "Tastewright Hospitality Pvt Ltd",
    companyUrl: null,
    logo: "/tastewrightlogo.jpg",
    position: "Founder",
    type: "Full-time",
    duration: "Nov 2019 - Sept 2020",
    location: "Bengaluru, Karnataka, India",
    description: "Founded multi-brand dark kitchen in Koramangala (6,500+ competing brands). Designed 5 brands with hyper-focused menus for operational efficiency: BasBiryani (3 types only), TheIndianOmelette, Kukkad, IamFroot, Sliced. Partnered 50-50 with ops partner (₹12L initial investment). Hired Barbeque Nation assistant chef, childhood friend for brand design (TATA/Adobe/TEDx designer for ₹20K). Custom FSSAI-compliant kitchen layout for 6 brands with minimal staff rotation. Solved packaging MOQ problem with modular design (but over-invested ₹5L in inventory for perfection). Cracked Swiggy's ad algo: Started at ₹27/click, negotiated bulk rate to ₹7/click (post-paid, deducted from payouts). Scaled from 1-2 orders/day to 120 orders/day in 3 months. Hit ₹10L monthly revenue by Feb 2020, finally profitable. COVID lockdown (March 21, 2020) caused ad click volume to explode exponentially with no pause mechanism-consumed 140,000 clicks/day with only 2-3 orders, ₹3.5L ad cost wiped out payouts (went negative). Revenue crashed from ₹10L to ₹2.5L over 3 months, no cash flow to buy ads. Became Dukaan's first power user (July 2020), regular feedback calls with founders. Sept 2020: Dukaan raised VC funding, Suumit offered role to build B2B SaaS. Wound down Tastewright (₹17L total loss, ₹12L personal), resigned from Sati Group, joined Dukaan Oct 2020.",
    achievements: [
      "₹10L monthly revenue in 3 months (Nov 2019 - Feb 2020)",
      "120 orders/day peak before COVID (Feb 2020)",
      "4.9/5 rating maintained consistently across Swiggy/Zomato",
      "60%+ 30-day customer retention (Dec 2019)",
      "Negotiated Swiggy ad costs from ₹27/click to ₹7/click (74% reduction)",
      "1,200 clicks/day consumption optimized for lunch/dinner peak hours",
      "10:1 ad conversion rate (10 clicks = 1.5 orders consistently)",
      "Multi-brand kitchen design: 6 brands, minimal staff rotation via limited menus",
      "Solved packaging MOQ: Modular design across brands with custom sleeves",
      "First power user of Dukaan platform (July 2020), led to founder role offer"
    ],
    skills: ["Food & Beverage", "Operations Management", "Brand Strategy", "Kitchen Design", "Supply Chain", "Digital Marketing", "Performance Marketing", "Platform Economics", "Cash Flow Management", "Unit Economics", "FSSAI Compliance"],
    parentCompany: "Founder"
  },
  {
    id: 10,
    company: "ShakesBierre Brewpub & Kitchen",
    companyUrl: "https://www.shakesbierre.com/",
    logo: "/shakesbierrelogo.png",
    position: "Digital Marketing Manager & Partnerships",
    type: "Full-time",
    duration: "Mar 2019 - Oct 2020",
    location: "Bengaluru, Karnataka, India",
    description: "Part of Sati Group under director Swastik Jalan (₹100 crore+ stone export business). Primary focus Mar 2019 - Mar 2020, then shifted to other Sati brands post-COVID lockdown. Hired directly by investor to grow his $1M dream project. Reported directly to investor, not CEO. Started from first principles: distributed ₹15L vouchers to corporate decision-makers, learned and executed digital marketing/SEO (most breweries hire ineffective agencies), ran data-driven Google Search campaigns (₹13/click vs Zomato's ₹36/click). Uncovered attribution fraud by platforms claiming 200 reservations when actual was 150. Gate-crashed DriveU office to build first-ever partnership (free drivers for guests). Partnered with Manchester United for official screenings (1,200+ attendance for Chelsea vs United). Built first rule-based chatbot for reservations. By Oct 2019, scaled from ₹40L to ₹1.2Cr monthly revenue while cutting marketing spend from ₹15L to <₹2L. Revenue went to ₹0 post-March 2020 lockdown. This conflict and lockdown led to founding Tastewright while continuing with Sati Group till Oct 2020.",
    achievements: [
      "3x revenue: ₹40L to ₹1.2Cr/month in 7 months (Mar-Oct 2019)",
      "93% marketing efficiency: Cut spend from ₹15L to <₹2L while scaling revenue",
      "DriveU partnership: 8% of total revenue (₹8-10L/month) from first-ever co-branded campaign",
      "Manchester United official partner (1 year, free): 1,200+ attendance for sponsored Chelsea vs United match",
      "Corporate events: ₹22L single event (GoJek India R&R, 6 hours)",
      "Attribution analysis: Exposed platform fraud (claimed 200 reservations, actual 150)",
      "Google Ads ROI: ₹13/click vs Zomato ₹36/click for 'brewery near me'",
      "SEO backlink from Manchester United website",
      "Built first rule-based chatbot for website reservations",
      "₹15L voucher distribution to corporate decision-makers (B2B lead gen)"
    ],
    skills: ["Growth Marketing", "Digital Marketing", "SEO", "Google Ads", "Partnership Development", "B2B Sales", "Data Analysis", "Attribution Modeling", "Chatbot Development", "Event Marketing", "Stakeholder Management"],
    parentCompany: "Sati Group"
  },
  {
    id: 8,
    company: "Sunderlands - Tiles & Stones",
    companyUrl: "https://sunderlands.com/",
    logo: "/sunderlandslogo.png",
    position: "Digital Marketing Specialist",
    type: "Full-time",
    duration: "Jul 2020 - Oct 2020",
    location: "United States · Remote",
    description: "Part of Sati Group's portfolio. Post-COVID lockdown work when ShakesBierre revenue went to ₹0. Focused on digital growth for Sati Group's US-based natural stone and tile business. Automated demo scheduling for interior design products through Shopify integrations. Led SEO optimization to drive organic traffic. Created marketing-focused landing pages driving growth via Pinterest, Facebook, and Google. Resigned Sept 2020 to join Dukaan.",
    skills: ["Digital Marketing", "SEO", "Shopify", "E-commerce", "Landing Page Optimization", "Pinterest Marketing", "Facebook Ads", "Google Ads"],
    parentCompany: "Sati Group"
  },
  {
    id: 11,
    company: "OYO",
    companyUrl: "https://www.oyorooms.com/",
    logo: "/oyologo.png",
    position: "Demand Manager",
    type: "Full-time",
    duration: "Jan 2018 - Mar 2019",
    location: "Bengaluru, Karnataka, India",
    description: "First job after moving to Bangalore. Chose OYO over Byjus (despite lower pay) for better culture and hospitality focus. Sold 'OYO for Business'-B2B platform replacing traditional travel desks. Companies could register, set price/night limits, employees book directly via app with auto-approval and direct billing (no reimbursement hassle). Managed business accounts, handled escalations, coordinated with ops. Never missed demand goals. Within 6 months, existing accounts were self-sustaining and met targets without needing new sales.",
    achievements: [
      "50+ companies onboarded including Pfizer and Zoetis",
      "100% target achievement rate across entire tenure",
      "Self-sustaining account portfolio within 6 months",
      "Leveraged referrals in pharma (Pfizer/Zoetis) for large corporate accounts, for Bangalore bookings",
      "Managed all Bangalore bookings for pharma sales teams and events"
    ],
    skills: ["B2B Sales", "Account Management", "Corporate Relations", "Hospitality", "Stakeholder Management", "Lead Generation"],
    parentCompany: "OYO"
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
    description: "Founded residential and commercial solar installation company in Rajasthan during the early days of India's solar industry. Built a business model leveraging government subsidies (50-70%) and net metering systems. Created a compelling pitch: 'Pay your 4-year electricity bill today, get no bills for the next 25 years.' Closed 6/6 initial pitches, made ₹350k in 2-3 months with zero capital investment by partnering with installers.",
    achievements: [
      "6/6 sales conversion rate on initial pitches",
      "50kW total capacity across 6 projects",
      "₹350,000 profits in 2-3 months with zero capital",
      "Installed first rooftop solar projects in the city",
      "₹6,000 commission per kW through installer partnerships"
    ],
    skills: ["Sales", "Business Development", "Renewable Energy", "Government Relations", "Project Management"],
    parentCompany: "First Business"
  }
]

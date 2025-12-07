import type { Blog } from '@/lib/types'

export const interestingTimesAhead: Blog = {
  title: "Interesting Times Ahead",
  slug: "interesting-times-ahead",
  description: "Personal analysis on the AI SaaS landscape, vibe coding tools, and why MCP/standards will win. A deep dive into Cursor, Lovable, Replit, and the vanity metrics problem.",
  date: "2025-11-21",
  readTime: "18 min read",
  link: "#",
  platform: "Personal Blog",
  featured: true,
  content: `# Interesting Times Ahead

*Again, the below points are just a personal judgment*

> "All tools and events depicted in this thread are fictitious. Any resemblance to actual tools, raising funds or going out of business, is purely coincidental. T&C apply" xD

## The Question?

**Classic conundrum:**

- There will be a swarm of AI/Agentic Products (we are already witnessing this)
- Each one of them competing for user attention, with similar set of tools, and succumbing to dead ends
- Almost everyone else is predicting this will be typical like the dotcom era

## What I Personally Think:

As soon as "vibe coding" takes a more serious turn where people start using Cursor or Claude Code type tools to vibe code in depth:

- They can build a lot of tools for themselves or internal company use
- It's easier because 70-80% of the code or problems go away when it's for personal or internal use. You don't need a great UI/UX, you don't need secure databases, you don't need payment gateways and management, you don't need CI/CD pipelines, you don't need most of the additional features another tool might be offering
- **Example:** Genspark or some content blog writer - the core logic is mostly 2,000-4,000 lines of code, that's all. The additional 20-30k lines of code comes from all the layers when you want to build a "monetizable" SaaS platform

And yes, since there are many tools:
- The CAC is high - SaaS CAC ratios have deteriorated 22% year-over-year, from $1.32 to $1.61, and typical SaaS CAC now ranges from $200-$600
- Retention is harder
- AI SaaS margins are not like SaaS margins - the LLM cost eats into it a lot
- Unless you have a lot of money to burn, you can't compete (only rarely, with an amazing product and healthy business)
- Rest is all noise which will die down, or get absorbed into larger companies when they release your product as a feature

### The Developer Tools Reality: Cursor is Winning

The data on AI coding assistants is now clear. Cursor reached $100M ARR in just 12 months with 360,000 paying customers, making it the fastest-growing SaaS company ever. Stack Overflow's survey shows 72% of professional developers either use or plan to use an AI assistant. This validates the core thesis: developers ARE building their own tools rather than subscribing to multiple SaaS products.

Cursor has 1.3% market share of global developers with the upside to expand into 27 million more, and importantly, these tools aren't limited by frameworks or platforms. When you want to integrate RevenueCat instead of Stripe, or OneManDB instead of Supabase, Cursor and Claude Code can handle it. They're true "vibe coding" tools with unlimited flexibility.

### Tools Like Replit/Lovable: The Vanity Metrics Problem

So maybe tools like Replit/Lovable will find a place, but when you dig deeper into the actual data, a concerning picture emerges.

**The Explosive Growth Numbers:**

The growth has been unprecedented. Lovable reached $100M ARR in just 8 months with nearly 8 million users and 100,000 new products built daily. Replit grew from $10M to $100M ARR in 5.5 months, achieving 2,500% year-over-year growth. Over half of Fortune 500 companies are using Lovable.

**But Here's Where It Gets Interesting:**

When you look at how these companies present their metrics, there's a pattern of showing growth while dodging the harder questions:

**Example 1: Cumulative "New Paying Customers"**

Lovable's CEO shared a graph showing "New paying customers" with a beautiful exponential curve from January to October. But look closely - this is a *cumulative* chart. By definition, this number can only go up or stay flat, never down. It tells you nothing about:
- How many customers churned in the same period
- What the net customer count actually is
- Whether growth is accelerating or decelerating

If you add 1,000 customers in January and lose 900, then add 1,000 in February and lose 950, this chart shows smooth growth from 1,000 to 2,000 to 3,000 cumulative customers. But your actual business is dying - you're only net +100 then +50, and churn is accelerating.

**Example 2: "Visits to Lovable Apps"**

In September 2025, Lovable shared data showing 115 million total visits to Lovable-built apps over roughly 2 months (June 29 - August 31). On the surface, this looks impressive - that's a lot of visits!

But let's do the math:
- 115 million visits over ~60 days = ~1.9 million visits per day
- At that time, Lovable had roughly 3-8 million users who had created apps
- Let's be generous and say 5 million apps were created
- That's 115 million visits / 5 million apps = 23 visits per app over 2 months
- Or roughly 11-12 visits per app per month

**An app getting 11-12 visits per month is not a business. It's a hobby project that maybe your friends clicked on once.**

When the CEO initially shared that apps built with Lovable received 100 million views over 2 months with around 3 million active users/app creators, the math was even worse: roughly 15-18 views per app per month.

**Why This Matters:**

These aren't just innocent metrics - they're specifically chosen to tell a growth story while hiding the sustainability question. The CEO could easily share:
- Net new customers (new minus churned)
- Cohort retention curves
- What percentage of apps get >1,000 visits per month
- How many apps are still being actively developed 30/60/90 days after creation

But they don't. Instead, we get cumulative charts that can only go up, and aggregate visit numbers that sound big but hide the per-app reality.

**The Critical Data We DO Have:**

Lovable claims 85% Day 30 retention rate, which is better than ChatGPT. However, when asked by journalists, Lovable declined to comment on its churn rate or what percentage of users are on monthly vs. annual subscriptions. Critics compare this to the 2021 speedy grocery delivery craze that saw high customer acquisition but struggled with margins and retention.

**My Analysis of the Three Tracks:**

This visit data strongly suggests the market is splitting into three distinct segments:

1. **Enterprise/Prototyping** - Fortune 500s using these tools for rapid MVPs and internal tools. These apps likely account for the bulk of meaningful visits and actual retention.

2. **Developer Teams** - Product managers and small teams who need to ship fast. Mixed retention depending on use case complexity.

3. **Hobbyist/Idea Guys** - This is likely the majority of the 5+ million apps created. They're getting 10-20 visits per month (mostly from the creator checking their own app), generating no revenue, and will churn within 6-12 months when the novelty wears off and they realize their "startup" got 100 total visits.

**The Production Nuance Problem:**

As these platforms currently cannot build any production-level app, I don't feel this will scale to true businesses any time soon. There are so many nuances to be solved:

- **Example:** You add a subscription service somehow with Stripe by prompting, then users request subscription upgrade option. Now to build that, there is a lot of logic involved: cancelling current subscription on pro-rata basis, creating new subscription with a custom payment with additional money available from current cancelled subscription + new payment. Now you have a product in Stripe which is for a fixed value, so you need to record custom payments against that, create new subscription, update DB and Stripe with the fresh data. And this is just one simple nuance - there are hundreds like this.
- What happens when you encounter a production bug? Do you wait for Lovable/Replit to update their platform before your paying customers' issue gets resolved?
- What if you don't want to use Supabase and want OneManDB or custom Postgres? The platform lock-in becomes a real constraint.
- How do you handle monitoring, debugging, complex migrations, or the hundred other production realities?

**Other use cases are quick landing page development:**
- Works well, but come on, how many landing pages do you need? How many websites?
- Only logical thing being new marketing landing pages for new product, different ICP, maybe unique product pages for ecommerce, etc. This is a decent use case, but still the problem becomes: some website is on Framer, some on WordPress, some on Shopify, some custom - how do you serve the landing pages? Modify/manage DNS by Lovable/Replit or they integrate directly into the tools and generate the code at the server side
- Additional can be email marketing template generation - this is fairly easy, just need the HTML code and paste template ready (but then again ChatGPT and Claude can do this for you)

**So I would personally feel better if Lovable or Replit helps me build personal/small internal SaaS tools:**
- I might pay a $20-50 subscription if I pick a tool off the shelf
- But with Lovable/Replit types I have no limits - I can keep creating new tools for myself whenever needed, so my subscription ROI is kind of justified

**But then again:**
- Once I feel/see that I have way more control with Cursor or Claude Code, why do I need to use Lovable or Replit kind of tools?
- They are limited by their product roadmap and features
- They also can't scale to everything
- The current growth seems to mostly be driven by the wow factor: "OMG so cool, I prompted and here is a website"

**My Prediction:** Lovable/Replit's survival hinges entirely on successfully pivoting from the hobbyist segment (which represents the bulk of their "millions of apps created" but generates apps with <20 visits/month) to enterprise/prototyping before churn catches up.

The fact that Lovable reached $17M ARR with 30,000 paying customers (roughly $567 ARPU) suggests they may already be capturing higher-value customers beyond just hobbyists. But the vanity metrics they choose to share publicly - cumulative customer counts and aggregate app visits - suggest they're not confident about their retention story.

We won't know if this is sustainable until we see:
- Day 180 and Day 365 retention rates (not just Day 30)
- Net customer growth (not cumulative)
- What percentage of apps are actually used beyond month 1
- Cohort analysis showing whether early customers are sticking around

None of which they're sharing.

### Computer Use Agents: A Temporary Workaround

Similar thoughts on computer use agents - I can't wrap my head around this one. **Why do I need to see an AI using my computer? Why?** It opens LinkedIn, logs in, scrolls, starts typing replies to a post.

- Yes, looks cool, but I mean there are APIs available, so why are we even doing this? Eyeballs?
- Only blocker: some APIs require permissions, so it feels like a temporary workaround till the time platforms start opening APIs for AI agents to use directly

### MCP/Standards Will Win: This is Already Happening

This is where my predictions are being validated in real-time. In March 2025, OpenAI officially adopted the Model Context Protocol (MCP), integrating it across its products including ChatGPT desktop, OpenAI's Agents SDK, and the Responses API.

Some estimates suggest 90% of organizations will use MCP by the end of 2025, with the MCP ecosystem projected to grow from $1.2 billion in 2022 to $4.5 billion in 2025. By early 2025, community contributions blew past 1,000 MCP servers, covering popular services from Git and GitHub to Slack, Google Drive, Jira, databases, and more.

The momentum is undeniable:
- Early adopters include Block, Apollo, Zed, Replit, Codeium, and Sourcegraph, who use MCP to let their AI agents access live data and execute real functions
- Anthropic released pre-built MCP servers for popular enterprise systems like Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer
- Major tech companies aren't being left with any choice

**Here's my reasoning:**
- I could use Ahrefs with a computer use agent (which will be slow, extremely expensive, too many issues and errors), but now Ahrefs has an MCP. The same tasks can be done way faster, cheaper
- The only thing is that I don't see that "magic" of some AI mimicking my behavior and browsing the web
- And most companies will not be left with any choice in the longer term to expose APIs/standards for AI agents to interact. If people start using agents to get tasks done, they would prefer Ahrefs over Semrush, or Stripe over Razorpay (as Stripe has MCP, Razorpay maybe not - again, examples)
- The magic/wow factor definitely won't last after most users are over it

**The data proves this:** Standards-based integration is already winning over hacky browser automation. The computer use approach was always a stopgap until proper APIs emerged.

## The Bigger Economic Picture

Let me add some broader context to all of this. In AI companies, the marginal economics are supposed to flip to very high margins if retention holds, but many are struggling with churn. The fundamental challenge is that AI SaaS companies pay other AI companies (like Anthropic or OpenAI) to use their models, which creates a margin squeeze that traditional SaaS never faced.

According to Google's data, AI now generates 41% of all code written globally, with 256 billion lines produced by artificial intelligence in 2024 alone. This transformation is real and happening now. But the question remains: who captures the value?

**Interestingly:** A rigorous METR study found that experienced developers using AI tools like Cursor actually took 19% longer to complete tasks, despite believing they were 20% faster. This suggests the productivity gains aren't uniform - different tools work better for different skill levels and use cases.

## My Final Take

**The AI SaaS space will bifurcate into three distinct winners:**

1. **Developer Productivity Tools** (Cursor, Claude Code) - Serving 27M developers globally who want control and flexibility. Already winning with Cursor's record-breaking growth.

2. **Enterprise Prototyping/Internal Tools** (Lovable, Replit for business use) - IF they can successfully pivot away from hobbyists to sustainable enterprise use cases. The data suggests the majority of their current usage is low-value hobby projects (apps with <20 visits/month), but the high ARPU suggests some enterprise traction. Jury is still out.

3. **API Standards/Protocols** (MCP) - This is the infrastructure layer that will power everything. Already being adopted by all major players.

**What will die:**
- Hobbyist no-code tools that promise everyone can build a business without developers (massive churn coming in 6-12 months when creators realize their apps got 100 total visits and generated $0 revenue)
- Computer use agents for tasks that have proper APIs
- AI SaaS companies that can't achieve healthy unit economics due to LLM costs and high CAC
- Most of the current swarm of similar AI tools that are just features, not products
- Companies that rely on vanity metrics (cumulative customer counts, aggregate visits) instead of real retention and engagement data

**A Note on Metrics and Transparency:**

One thing that's becoming clear in this AI gold rush: **the companies that avoid showing cohort retention, net customer growth, and per-user engagement metrics are the ones you should be most skeptical about.** When a CEO shares a cumulative chart that can only go up, or aggregate visit numbers without per-app breakdown, they're telling you a story they want you to believe, not showing you the business reality.

The democratization of coding is real, but the *monetization* of that democratization is far from proven. We're in the hype cycle right now, and 12-18 months from now, we'll see which companies found sustainable business models versus which ones were just riding the wow factor.

---

**Once again, these are just some personal thoughts backed by the latest data. Feel free to point out any flaws, or how you feel/think differently?**

*Note: I'll be revisiting these predictions in Q2 2026 to see how they held up. The key metrics to watch are: Lovable/Replit's Day 180+ retention rates (not just Day 30), net customer growth (not cumulative), per-app engagement metrics, MCP adoption across enterprise, and whether Cursor maintains its growth trajectory.*

## Sources & References

**AI Coding Tools - Cursor Statistics:**
- https://opsera.ai/blog/cursor-ai-adoption-trends-real-data-from-the-fastest-growing-coding-tool/
- https://www.notoriousplg.ai/p/notorious-how-an-ai-coding-tool-scaled
- https://taptwicedigital.com/stats/cursor
- https://sacra.com/research/cursor-at-100m-arr/
- https://medium.com/@adnanmasood/inside-the-ai-ide-boom-how-cursor-copilot-and-replit-are-redefining-the-craft-of-code-fe0c4e8ac431
- https://medium.com/@takafumi.endo/how-cursor-became-the-fastest-growing-saas-by-empowering-the-rise-of-the-vibe-coder-48ca266e429a
- https://www.artezio.com/pressroom/blog/revolutionizes-architecture-proprietary/
- https://devgraphiq.com/cursor-statistics/

**SaaS CAC & Benchmarks:**
- https://www.saas.wtf/p/2024-customer-acquisition-benchmarks
- https://firstpagesage.com/reports/b2b-saas-customer-acquisition-cost-2024-report/
- https://clickstrike.com/blog/saas-cac/
- https://firstpagesage.com/marketing/average-cac-for-saas-businesses-by-industry-and-customer-type-fc/
- https://www.hubifi.com/blog/customer-acquisition-cost-saas
- https://geneo.app/query-reports/saas-customer-acquisition-cost-benchmark
- https://churnfree.com/blog/average-customer-acquisition-cost-saas/
- https://www.webdew.com/blog/saas-customer-acquisition-cost
- https://blog.getlatka.com/cac-saas-benchmarks/
- https://www.poweredbysearch.com/learn/cac-saas/

**Lovable Statistics & Growth:**
- https://thetwentyminutevc.libsyn.com/20vc-lovable-on-hitting-175m-in-arr-in-3-months-adding-21m-arr-every-week-hitting-85-day-30-retention-better-than-chatgpt-the-story-of-europes-fastest-scaling-company-with-anton-osika
- https://www.thetwentyminutevc.com/anton-osika
- https://lovable.dev/video/anton-osika-co-founder-and-ceo-lovable-hitting-85-day-30-retention-better-than-chatgpt
- https://thegrowthmind.substack.com/p/how-lovable-grew-to-17m-arr-in-3
- https://sifted.eu/articles/ai-bubble-arr-churn
- https://getlago.substack.com/p/lovable-makes-60m-in-6-monthsbut
- https://medium.com/@takafumi.endo/lovable-case-study-how-an-ai-coding-tool-reached-17m-arr-in-90-days-f4816e7b3f2b
- https://techcrunch.com/2025/11/10/lovable-says-its-nearing-8-million-users-as-the-year-old-ai-coding-startup-eyes-more-corporate-employees/
- https://news.aibase.com/news/22684
- https://www.indexbox.io/blog/lovable-ai-coding-platform-nears-8-million-users/

**Replit Statistics:**
- https://www.index.dev/blog/replit-usage-statistics
- https://blog.tooljet.ai/replit-vs-lovable/
- https://replitreview.com/replit-vs-lovable/
- https://www.saastr.com/100mreplit/
- https://www.getmonetizely.com/blogs/the-2025-ai-coding-platform-pricing-showdown

**AI Coding Tools General:**
- https://superframeworks.com/blog/best-ai-coding-tools

**Model Context Protocol (MCP):**
- https://www.anthropic.com/news/model-context-protocol
- https://www.marktechpost.com/2025/08/06/model-context-protocol-mcp-faqs-everything-you-need-to-know-in-2025/
- https://blog.equinix.com/blog/2025/08/06/what-is-the-model-context-protocol-mcp-how-will-it-enable-the-future-of-agentic-ai/
- https://en.wikipedia.org/wiki/Model_Context_Protocol
- https://www.keywordsai.co/blog/introduction-to-mcp
- https://rickxie.cn/blog/MCP/
- https://www.montecarlodata.com/blog-model-context-protocol-mcp
- https://www.pomerium.com/blog/june-2025-mcp-content-round-up
- https://addepto.com/blog/model-context-protocol-mcp-solution-to-ai-integration-bottlenecks/
- https://creoconsulting.com/life-sciences-leaders-get-to-know-ais-model-context-protocol/

**Lovable CEO Twitter Posts:**
- https://x.com/antonosika/status/1977796896291983707
- https://x.com/antonosika/status/1963618122981937466

---

**Note:** Some links may require subscriptions or have paywalls. All data was accessed between November 2024 and November 2025.`
}

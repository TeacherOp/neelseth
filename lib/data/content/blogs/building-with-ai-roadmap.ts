import type { Blog } from '@/lib/types'

export const buildingWithAIRoadmap: Blog = {
  title: "Building with AI: A Practical Roadmap for Builders, PMs, and Founders",
  slug: "building-with-ai-roadmap",
  description: "Understanding inherited decisions, the cost of not knowing what you're building, and a practical roadmap to build with AI tools effectively.",
  date: "2025-12-29",
  readTime: "10 min read",
  link: "#",
  platform: "Personal Blog",
  featured: true,
  content: `# Building with AI
## A Practical Roadmap for Builders, PMs, and Founders

## Part 1: The Cost of Inherited Decisions

Before you pick any tool or platform to build with AI, there is something you need to understand. Every tool you use comes with decisions already made for you. These are inherited decisions. And they have a cost.

### The Problem with Not Knowing What You Are Building

When you use platforms like Lovable, Replit, or other AI builders, they make things look easy. Click a few buttons, describe what you want, and boom, you have an app. But here is the catch: you have no idea what decisions were made for you.

This is fine until it is not.

### The Pizza Analogy

Think about pizza.

You can make pizza at home, or you can order from Dominos. If you know how pizza is made, you can make an informed choice. You understand the effort, the cost, the tradeoffs. You choose Dominos because your time is worth more than making dough from scratch. That is a valid decision.

But what if you have never made pizza? Someone tells you that you can make your own Dominos quality pizza in 20 minutes. Sounds great! You start.

Then reality hits:
- Where do you get the dough? Do you make it or buy it?
- What toppings? How do you layer them?
- Cheese burst? How does that even work?
- Wait, you need a specific oven temperature? Your microwave will not work?

You are stuck. Not because making pizza is impossible, but because you did not understand what was actually involved.

### A Real Example: The Stripe Problem

Imagine you build an app using Lovable. It has a built-in Stripe integration for payments. Everything works great. You launch. People want to pay you.

Then you realize: Stripe is not available in India.

Now what? You have three options:
1. Move your code to GitHub and figure out how to swap payment providers yourself (requires coding knowledge you may not have)
2. Switch to a different platform that supports your preferred payment gateway (but that platform has its own limitations you will now inherit)
3. Wait and hope Lovable adds support for other gateways (while your business sits idle)

None of these are good options. And you are stuck because of a decision you did not even know was being made.

### The Key Insight

**These tools are useful. But they are only useful if you know what they are useful for.**

This is not about tools being bad. Lovable is great. Replit is great. No code builders are great. The problem is using them without understanding what you are giving up and what constraints you are accepting.

---

## Part 2: The Roadmap

So how do you build the understanding you need? Here is the good news: you do not need to become a developer. You just need to understand one fundamental thing.

### The One Thing All AI Tools Have in Common

Every AI tool you use, whether it is Lovable, Replit, Gamma, Genspark, Claude, ChatGPT, or any other, they all do the same thing under the hood.

**They all use the same AI APIs.**

Claude Code uses the Claude API. Lovable uses AI APIs. Gamma uses AI APIs. They are all wrappers. The difference between them is just two things:
1. What data they send to the API
2. How they execute on what comes back

That is it. Once you understand how AI APIs work, you understand how almost all AI tools work. You can evaluate their strengths, their limitations, and their tradeoffs.

### Where to Start

**Start with assisted code tools, not no code builders.**

Tools like Claude Code, ChatGPT with Canvas, or Codex let you build things by prompting. You are not writing code. You are describing what you want. But here is the key difference: you make all the decisions.

There is no platform hiding choices from you. You see every decision point. And when something does not work, you understand why.

### The Learning Project

Pick something simple that you already understand well:
- Your own personal website
- A presentation for a topic you know
- An analysis of data you work with (like Facebook ads)

Yes, Lovable might actually be the better tool for a personal website. That is not the point. The point is learning.

When you build it yourself using an assisted code tool, you will see:
- What decisions need to be made
- What tradeoffs exist
- What the actual building blocks are

Then when you use Lovable or any other platform later, you will recognize what is happening. You will know what the tool is doing for you and what it is deciding for you.

### The Only Real Barrier

**The only barrier to using assisted code tools is the fear of an IDE.**

An IDE is just a text editor where you write prompts. That is it. It looks scary because it has lots of buttons and panels. But you are not using most of them. You are just typing what you want, and the AI builds it.

Claude Code, Codex, Gemini CLI, these tools are incredibly good now. You do not have to write any code. You prompt. The AI writes. You review. You prompt again.

### What Comes After

Once you have this foundation, everything else becomes simple:
- **RAG** (retrieval augmented generation) is just searching documents before prompting
- **Multimodal** is just sending images or audio along with text
- **Streaming** is just getting responses word by word instead of all at once
- **Agents** are just multiple API calls chained together

These are not complex concepts. But you cannot jump ahead to them. You need the foundation first.

---

## The Bottom Line

Before you build with AI:
1. Understand that all AI tools use the same underlying APIs
2. Try assisted code tools first (Claude Code, Codex) to see the decisions being made
3. Build one simple project you understand thoroughly
4. Then choose your tools knowing what you are trading

**Wrappers are not bad. No code tools are not bad. But use them knowing what they are useful for.** That is the difference between building something that works and building something that gets stuck.

---

## Resources

- Full hands on sessions available at [GrowthX Deepdives](https://growthx.club) or [My website](https://neelseth.com)
- Session recordings and notes in the GitHub repository
- Start with the Fundamentals Level 1 folder for API basics

---

*By Neel Seth | [@NeelSeth](https://x.com/neelseth) | [GrowthX](https://growthx.club)*`
}

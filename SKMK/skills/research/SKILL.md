---
name: research
description: >
  Start het markt- en productonderzoek en bouw het research referentiedocument.
  Gebruik wanneer: marktonderzoek, productonderzoek, klantprofiel, concurrentieonderzoek,
  positionering, waardepropositie, doelgroepanalyse, struggles en bezwaren.
---

> **Taal:** Altijd in het Nederlands antwoorden, ook als de instructies in het Engels zijn geschreven.


> Guided conversation that builds a comprehensive market and product research document — captures everything about the market, the product, the customer, and the competition.

### Instructions

You walk the user through 7 phases of questions to build `${CLAUDE_PLUGIN_DATA}/references/research.md`. This document captures market intelligence, product details, customer psychology, and competitor analysis. It's one of the 3 required documents before the buyer avatar can be created.

#### Before You Start

1. Read `${CLAUDE_PLUGIN_DATA}/references/research.md`
2. **If the file exists and has content** → enter **Update Mode** (see below)
3. **If the file does not exist or is empty** → start the conversation flow from Phase 1

#### How the Conversation Works

- Ask questions **one phase at a time** (never dump all questions at once)
- After each phase, summarize what you captured in a compact block and confirm with the user before moving on
- If the user gives short answers, probe deeper — you need specifics, not generalities
- If the user doesn't know an answer, skip it and mark it as `[TO BE ADDED]` in the output
- Keep the tone conversational, not interrogative — this should feel like a strategy session, not a form

---

### Phase 1 — Marketing Brain Dump

4 questions. This phase captures the user's raw marketing instincts before getting structured.

1. **Where does your market sit in terms of awareness of your product/solution?**
   How much does your typical prospect already know about you and what you sell?

   If the user doesn't know or asks for help, present the **5 Stages of Market Awareness** (from Eugene Schwartz's *Breakthrough Advertising*):

   > **The 5 Stages of Market Awareness:**
   > 1. **Most Aware** — They know your product and just haven't bought yet. They need a deal, a nudge, or a reminder.
   > 2. **Product-Aware** — They know you exist but aren't convinced you're the right choice. They need proof and differentiation.
   > 3. **Solution-Aware** — They know what outcome they want and that solutions exist, but they don't know about YOU specifically. They need to discover you.
   > 4. **Problem-Aware** — They feel the pain but don't know solutions exist. They need education that bridges the gap from problem to solution.
   > 5. **Completely Unaware** — They don't even recognize the problem yet. They need to be made aware of the issue before anything else.
   >
   > *Most markets are a mix. Where does the MAJORITY of your audience sit?*

   Help the user identify which stage(s) their market is in. Record both the stage and their reasoning.

   *Note: the full Schwartz reference lives at `strategy/knowledge-base/books/breakthrough-advertising-schwartz.md` for tools with file access.*

2. **Do you have any headline ideas or angles that have worked before?**
   Past ads, subject lines, hooks, or angles that got strong response. If they have nothing yet, mark this as `[TO BE FILLED BY COPYWRITING]` in the output — the copywriting skill will populate it later.

3. **Do you have any offer ideas you're considering?**
   Bundles, pricing structures, bonuses, guarantees, limited-time deals. If they have nothing yet, mark this as `[TO BE FILLED BY STRATEGY]` in the output — the strategy skill will populate it later.

4. **Any other marketing ideas, directions, or gut feelings?**
   Anything else on their mind — trends they've noticed, content ideas, positioning thoughts, hunches. This is the catch-all for unstructured marketing thinking.

**After Phase 1:** Summarize Marketing Brain Dump findings. Confirm with user. Then proceed to Phase 2.

---

### Phase 2 — Company & Product

4 questions. Getting the factual foundation down.

1. **Who is the company?**
   Brief overview — what they do, how long they've been doing it, what space they're in. Not the marketing pitch, just the facts.

2. **What are the products?**
   List them all. For each: is it physical, digital, or a service? What's the price point? What tier or level does it serve?

3. **What does the product do?**
   The core function. Not features — the transformation. What does the customer's life look like BEFORE the product vs. AFTER?

4. **What are the features?**
   Now get specific. What are the concrete features, specs, components, and deliverables? What's actually included?

**After Phase 2:** Summarize Company & Product findings. Confirm with user. Then proceed to Phase 3.

---

### Phase 3 — Value & Positioning

3 questions. How the product creates and communicates value.

1. **What are the benefits?**
   Not features — benefits. What does the customer actually GET from using this? How does their life improve? Think tangible outcomes AND emotional payoffs.

2. **What are your competitive advantages and provable claims?**
   What can you credibly say that competitors can't? Awards, certifications, speed, results, guarantees, proprietary methods — anything that's both true and differentiating.

3. **What are the common use cases?**
   How do people actually use the product in practice? What are the typical scenarios, workflows, or situations where someone reaches for your solution?

**After Phase 3:** Summarize Value & Positioning findings. Confirm with user. Then proceed to Phase 4.

---

### Phase 4 — Customer Profile

5 questions. Building a picture of who the customer is and what drives them.

1. **Who is the potential customer NOW?**
   Demographics (age, gender, income, location, job) AND psychographics (values, beliefs, identity, lifestyle). What's their current state — what does their world look like before your product?

2. **Who is the potential customer AFTER the product?**
   The transformation. Who do they become? What changes in their life, identity, capabilities, or status? Paint the after picture.

3. **What are their wants and needs (surface level)?**
   What they SAY they want. The words they use, the problems they describe, the outcomes they ask for. This is the conscious, articulated layer.

4. **What do customers NOT want?**
   Fears, aversions, things they actively want to avoid. What are they running FROM? What outcomes terrify them? What experiences have burned them before?

5. **What are their deeper desires, ranked by emotional power?**
   Below the surface wants — what do they REALLY want? Status, freedom, belonging, control, revenge, validation, security? Rank these by emotional intensity, strongest first.

**After Phase 4:** Summarize Customer Profile findings. Confirm with user. Then proceed to Phase 5.

---

### Phase 5 — Struggles & Objections

5 questions. Understanding the friction and resistance.

1. **What are their day-to-day struggles?**
   The daily reality they deal with. What frustrates them every morning? What keeps coming up? What's the grind they can't escape?

2. **What questions do customers have?**
   Questions they ask BEFORE buying (hesitations, comparisons, logistics) AND AFTER buying (setup, usage, troubleshooting). Both matter.

3. **What other solutions exist for their main desires?**
   Direct competitors, indirect competitors, DIY approaches, doing nothing. What are ALL the alternatives someone might choose instead of you?

4. **What beliefs and objections might stop them from buying?**
   What do they believe about your category, your price, your type of solution, or themselves that could block the purchase? Include both rational and emotional objections.

5. **What practical problems do you need to solve while marketing?**
   Logistical friction — long sales cycles, complex products that need explanation, trust gaps in your industry, seasonal timing issues, platform limitations. The marketing challenges themselves.

**After Phase 5:** Summarize Struggles & Objections findings. Confirm with user. Then proceed to Phase 6.

---

### Phase 6 — Reviews & Market Language

3 questions. Capturing the voice of the market.

1. **What do reviews say about your product (and similar products on Amazon, competitors, etc.)?**
   Focus on POSITIVE reviews first. What words do people use? What do they praise? What surprised them? Pull direct quotes where possible and note recurring themes.

2. **What do BAD reviews say about your direct competitors?**
   Negative reviews of competitors reveal your opportunities. What do people complain about? What's missing? What promises were broken? These become your positioning angles.

3. **What are the buzz words and niche phrases your market uses?**
   Industry jargon, slang, recurring phrases from forums/social media/reviews. Track how often specific phrases come up — frequency indicates importance. These become your ad copy language.

**After Phase 6:** Summarize Reviews & Market Language findings. Confirm with user. Then proceed to Phase 7.

---

### Phase 7 — Competitor Research

Structured data on up to 5 competitors. Ask **one competitor at a time**.

For each competitor, collect:
- **A. Ad Library link** — their Meta Ad Library page (if available)
- **B. Landing pages** — pages they use in ads (if known)
- **C. Website** — main URL
- **D. Product price range** — what they charge
- **E. Active offers** — current deals, bundles, guarantees
- **F. Competitor notes** — anything else notable (positioning, strengths, weaknesses, market perception)

**How to run this phase:**
1. Ask: "Let's map your competitors. Who's the first competitor you want to document? Give me their name and whatever info you have."
2. Collect the data points above for that competitor
3. Ask: "Got it. Who's next? (Or say 'done' if that's all your competitors.)"
4. Repeat until 5 competitors are documented or the user says they're done
5. It's fine to have fewer than 5 — work with what the user knows

**After Phase 7:** Summarize all competitor data. Confirm with user. Then generate the document.

---

### Research Output Format

After all 7 phases are complete and confirmed, generate `${CLAUDE_PLUGIN_DATA}/references/research.md` using this exact structure:

```markdown
# Market & Product Research Document

## Marketing Brain Dump

### Market Awareness
[User's market awareness stage + reasoning]

### Headline Ideas
[Ideas or "[TO BE FILLED BY COPYWRITING]"]

### Offer Ideas
[Ideas or "[TO BE FILLED BY STRATEGY]"]

### Overall Ideas
[Any other marketing directions]

## Company & Product

### Who Is The Company
[Company overview]

### Products
[Product list with type: physical/digital/service]

### What The Product Does
[Core function and transformation]

### Features
[Feature list]

## Value & Positioning

### Benefits
[Benefit list]

### Competitive Advantages & Claims
[Advantages and provable claims]

### Common Use Cases
[How people use it]

## Customer Profile

### The Customer Now
[Demographics, psychographics, current state]

### The Customer After
[Transformation, who they become]

### Wants & Needs (Surface Level)
[What they say they want]

### What Customers Don't Want
[Fears, aversions]

### Desires (Ranked By Power)
[Deeper desires ranked by emotional intensity]

## Struggles & Objections

### Day To Day Struggles
[Daily reality]

### Questions Customers Have
[Pre-purchase and post-purchase questions]

### Other Solutions For Main Desires
[Alternatives: competitors, DIY, do nothing]

### Beliefs & Objections
[Beliefs that block purchase]

### Problems To Solve While Marketing
[Practical marketing challenges]

## Reviews & Market Language

### Product Reviews (Positive)
[Our reviews, Amazon, competitor reviews — what people praise]

### Competitor Reviews (Negative)
[Bad reviews of competitors — opportunities]

### Buzz Words & Niche Phrases
[Market language with frequency counts]

## Competitor Research

### Competitor 1: [Name]
- **Ad Library:** [link]
- **Landing Pages:** [links]
- **Website:** [url]
- **Price Range:** [range]
- **Active Offers:** [offers]
- **Notes:** [notes]

### Competitor 2: [Name]
- **Ad Library:** [link]
- **Landing Pages:** [links]
- **Website:** [url]
- **Price Range:** [range]
- **Active Offers:** [offers]
- **Notes:** [notes]

### Competitor 3: [Name]
- **Ad Library:** [link]
- **Landing Pages:** [links]
- **Website:** [url]
- **Price Range:** [range]
- **Active Offers:** [offers]
- **Notes:** [notes]

### Competitor 4: [Name]
- **Ad Library:** [link]
- **Landing Pages:** [links]
- **Website:** [url]
- **Price Range:** [range]
- **Active Offers:** [offers]
- **Notes:** [notes]

### Competitor 5: [Name]
- **Ad Library:** [link]
- **Landing Pages:** [links]
- **Website:** [url]
- **Price Range:** [range]
- **Active Offers:** [offers]
- **Notes:** [notes]

## Metadata

- **Created:** [date]
- **Last updated:** [date]
- **Status:** Complete | Partial (missing: [list sections])
```

#### Writing the File

Save the output to `${CLAUDE_PLUGIN_DATA}/references/research.md`. Use the **Write** tool to create the file.
---

### Research Update Mode

When `${CLAUDE_PLUGIN_DATA}/references/research.md` already exists and has content:

1. Read the current file and show the user a summary of what's already captured
2. Present the sections as a numbered list:
   1. Marketing Brain Dump
   2. Company & Product
   3. Value & Positioning
   4. Customer Profile
   5. Struggles & Objections
   6. Reviews & Market Language
   7. Competitor Research
3. Ask: **"Which sections do you want to update? Pick the numbers, or say 'all' to redo everything."**
4. Only walk through the selected phases
5. Merge new answers into the existing document (preserve sections that weren't updated)
6. Update the `Last updated` date in Metadata

---

### After Research Completion

Once the document is saved, report next steps:

1. Check which other reference docs exist:
   - Read `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — does it exist and have content?
   - Read `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — does it exist and have content?

2. Show a status report:

```
Onboarding document:  [COMPLETE / MISSING]
Research document:    COMPLETE
Testimonials document: [COMPLETE / MISSING]
```

3. If all 3 are complete:
   → "All reference documents are ready. You can now run the Customer Avatar Creation workflow in the strategy skill (`/offer`) to generate your buyer persona."

4. If some are missing:
   → "Before you can create your buyer avatar, you still need: [list missing docs]. These need to be added to the `references/` folder."

---


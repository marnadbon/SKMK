---
name: onboarding
description: >
  Bouw de referentiedocumenten die alle andere skills nodig hebben.
  Gebruik wanneer je wilt onboarden, bedrijfskennis vastleggen,
  marktonderzoek doen, klantgetuigenissen verzamelen of merkstem definiëren.
  Activeer ook wanneer iemand zegt: ik wil beginnen, stel me in, leg mijn bedrijf vast,
  vertel iets over mijn bedrijf, wat is mijn doelgroep, wie zijn mijn klanten,
  wat verkoop ik, hoe klinkt mijn merk, of als er nog geen bedrijfsinfo bekend is.
---

> **Taal:** Altijd in het Nederlands antwoorden, ook als de instructies in het Engels zijn geschreven.


# Onboarding — Gedeelde Bedrijfskennis Store

## Doel

Deze skill is het startpunt van het Skill Pack. Het bouwt de referentiedocumenten die alle andere skills nodig hebben. Zonder deze documenten kunnen de andere skills niet optimaal functioneren.

## Vault Pad

Alle bestanden worden opgeslagen in de gedeelde vault: `${CLAUDE_PLUGIN_DATA}/`

### Bestanden die deze skill aanmaakt

| Bestand | Pad | Aangemaakt door |
|---------|-----|-----------------|
| Onboarding | `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` | `/onboard` |
| Research | `${CLAUDE_PLUGIN_DATA}/references/research.md` | `/research` |
| Testimonials | `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` | `/testimonials` |
| Brand Voice | `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` | `/brand-voice` |

### Buyer Avatar

De **buyer-avatar** wordt NIET door deze skill aangemaakt, maar door de Strateeg (`strategist/`). De Strateeg leest de 3 referentiedocumenten (onboarding, research, testimonials) en genereert daaruit de buyer-avatar op `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`.

## Skills

### `/onboard` — Bedrijfsonboarding

5-fasen gesprek dat `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` bouwt. Behandelt business identity, merkperceptie, marktpatronen, vertrouwenssignalen en het verhaal van de oprichter.

### `/research` — Markt- & Productonderzoek

7-fasen gesprek dat `${CLAUDE_PLUGIN_DATA}/references/research.md` bouwt. Behandelt marketing braindump, bedrijf & product, waarde & positionering, klantprofiel, struggles & bezwaren, reviews & markttaal, en concurrentieonderzoek.

### `/testimonials` — Klantgetuigenissen & Stem van de Markt

4-fasen gesprek dat `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` bouwt. Verzamelt echte klanttaal uit eigen reviews, marketplace reviews, concurrent-sites en online communities.

### `/brand-voice` — Merkstem

Gesprek dat `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` bouwt. Definieert hoe het merk klinkt — toon, taalpatronen, woordenschat, ritme en platformspecifieke aanpassingen. 3 modi: Extract (uit geplakte content), Build (geleide vragen), of Auto-Scrape (van een URL).

## Dependency Rule

De **Customer Avatar Creation** workflow in de Strateeg (`strategist/`) voert een blokkerende prerequisite check uit. Het weigert door te gaan als een van de 3 referentiedocumenten (onboarding, research, testimonials) ontbreekt.

**Brand voice (`${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`) staat NIET in deze prerequisite chain.** Het is een onafhankelijk document dat op elk moment kan worden aangemaakt.

---

# System — Reference Document Builder

> Guided conversations that build the company reference documents every downstream skill depends on. Each flow creates one document in `references/`.

## How This Works

This skill has multiple flows. Each builds a different reference document.

| Flow | Command | Creates | Status |
|---|---|---|---|
| Company Onboarding | `/onboard` | `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` | Active |
| Market & Product Research | `/research` | `${CLAUDE_PLUGIN_DATA}/references/research.md` | Active |
| Customer Testimonials & Voice of Market | `/testimonials` | `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` | Active |
| Brand Voice | `/brand-voice` | `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` | Active |

**If you arrived via a slash command** — the command already specifies which flow. Jump straight to that flow section below.

**If this file was loaded as a system prompt** — ask the user: "Which flow do you want to run?" and list the options above.

---

## Flow 1 — Company Onboarding (/onboard)

> Guided conversation that builds a complete company onboarding document — the foundation for every downstream skill (strategy, copywriting, fb-ads).

### Instructions

You walk the user through 5 phases of questions to build `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`. This document captures who the business is, what it sells, and who runs it. Every other skill depends on this file existing.

#### Before You Start

1. Read `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
2. **If the file exists and has content** → enter **Update Mode** (see below)
3. **If the file does not exist or is empty** → start the conversation flow from Phase 1

#### How the Conversation Works

- Ask questions **one phase at a time** (never dump all questions at once)
- After each phase, summarize what you captured in a compact block and confirm with the user before moving on
- If the user gives short answers, probe deeper — you need specifics, not generalities
- If the user doesn't know an answer, skip it and mark it as `[TO BE ADDED]` in the output
- Keep the tone conversational, not interrogative — this should feel like a strategy session, not a form

---

### Phase 1 — Business Identity

Ask these 3 questions (one at a time or grouped naturally):

1. **What makes your business different?**
   What's the ONE thing you do that competitors don't, can't, or won't? This isn't your slogan — it's the real operational or philosophical difference.

2. **What are the hidden gems in your business?**
   Things you do that customers love but you never talk about in marketing. Behind-the-scenes processes, extra care, unusual methods, proprietary systems.

3. **What's your best-selling product or service?**
   The thing most people buy. Why does it sell best? What problem does it solve? What's the price point and what's included?

**After Phase 1:** Summarize Business Identity findings. Confirm with user. Then proceed to Phase 2.

---

### Phase 2 — Brand & Perception

1. **How do you want people to perceive your brand?**
   Not how they currently see you — how you WANT them to see you. What feelings, associations, and status should your brand evoke?

2. **What stops people from buying?**
   The real objections, not the polite ones. What makes prospects hesitate, delay, or choose a competitor? Include price objections, trust barriers, confusion points.

3. **Who are the influencers or authorities in your space?**
   People your ideal customers follow, trust, or aspire to be like. These could be competitors, thought leaders, podcasters, authors — anyone who shapes your market's worldview.

**After Phase 2:** Summarize Brand & Perception findings. Confirm with user. Then proceed to Phase 3.

---

### Phase 3 — Market Patterns

1. **Are there seasonal patterns or cycles in your business?**
   When do sales peak and dip? Are there industry events, budget cycles, or cultural moments that affect buying behavior? What triggers urgency?

2. **What questions do customers ask most?**
   The top 5-10 questions you hear repeatedly — from prospects before buying AND from customers after buying. These reveal gaps in messaging and opportunities for content.

**After Phase 3:** Summarize Market Patterns findings. Confirm with user. Then proceed to Phase 4.

---

### Phase 4 — Trust Signals & Assets

1. **What claims or guarantees can you credibly make?**
   Results you can promise. Guarantees you offer or could offer. Data points, success rates, timeframes. Be specific — "we help businesses grow" is useless; "87% of clients see ROI in 60 days" is gold.

2. **Do you have a content library, resource hub, or lead magnet?**
   Anything you've published: blog posts, videos, podcasts, PDFs, courses, templates, tools. Include links if available. This maps your existing content assets.

**After Phase 4:** Summarize Trust Signals & Assets findings. Confirm with user. Then proceed to Phase 5.

---

### Phase 5 — The Founder

1. **What's your origin story?**
   How did you get into this business? What was the moment that made you start? What were you doing before? The messy, real version — not the polished LinkedIn bio.

2. **What's a belief you hold that most people in your industry disagree with?**
   Your contrarian take. The thing that makes some people love you and others uncomfortable. This becomes a powerful content and positioning tool.

3. **Where are you active online and what does your content presence look like?**
   Which platforms (YouTube, Instagram, X, LinkedIn, TikTok, podcast, email list)? How often do you post? What format works best for you? What's your audience size on each?

**After Phase 5:** Summarize The Founder findings. Confirm with user. Then generate the document.

---

### Onboarding Output Format

After all 5 phases are complete and confirmed, generate `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` using this exact structure:

```markdown
# Company Onboarding Document

## Business Identity

### Differentiator
[What makes the business different — the real operational/philosophical edge]

### Hidden Gems
[Behind-the-scenes processes, extra care, unusual methods customers love but marketing never mentions]

### Best-Selling Product/Service
[Name, price point, what's included, what problem it solves, why it sells best]

## Brand & Perception

### Desired Perception
[How the brand wants to be seen — feelings, associations, status]

### Purchase Barriers
[Real objections, hesitations, trust barriers, confusion points]

### Influencers & Authorities
[People the target market follows, trusts, or aspires to be — shapes their worldview]

## Market Patterns

### Seasonal Patterns & Cycles
[Sales peaks/dips, industry events, budget cycles, urgency triggers]

### Frequently Asked Questions
[Top questions from prospects and customers — reveals messaging gaps and content opportunities]

## Trust Signals & Assets

### Claims & Guarantees
[Specific results, guarantees, data points, success rates, timeframes]

### Content Library
[Existing content assets — blogs, videos, podcasts, PDFs, courses, tools, with links]

## The Founder

### Origin Story
[How they got into the business, the real moment, what came before]

### Contrarian Beliefs
[Beliefs that go against industry consensus — polarizing positioning angles]

### Content Presence & Platforms
[Active platforms, posting frequency, best formats, audience sizes]

## Metadata

- **Created:** [date]
- **Last updated:** [date]
- **Status:** Complete | Partial (missing: [list sections])
```

#### Writing the File

Save the output to `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`. Use the **Write** tool to create the file.
---

### Onboarding Update Mode

When `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` already exists and has content:

1. Read the current file and show the user a summary of what's already captured
2. Present the sections as a numbered list:
   1. Business Identity
   2. Brand & Perception
   3. Market Patterns
   4. Trust Signals & Assets
   5. The Founder
3. Ask: **"Which sections do you want to update? Pick the numbers, or say 'all' to redo everything."**
4. Only walk through the selected phases
5. Merge new answers into the existing document (preserve sections that weren't updated)
6. Update the `Last updated` date in Metadata

---

### After Onboarding Completion

Once the document is saved, report next steps:

1. Check which other reference docs exist:
   - Read `${CLAUDE_PLUGIN_DATA}/references/research.md` — does it exist and have content?
   - Read `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — does it exist and have content?

2. Show a status report:

```
Onboarding document:  COMPLETE
Research document:    [COMPLETE / MISSING]
Testimonials document: [COMPLETE / MISSING]
```

3. If all 3 are complete:
   → "All reference documents are ready. You can now run the Customer Avatar Creation workflow in the strategy skill (`/offer`) to generate your buyer persona."

4. If some are missing:
   → "Before you can create your buyer avatar, you still need: [list missing docs]. These need to be added to the `references/` folder."

---

## Flow 2 — Market & Product Research (/research)

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

## Flow 3 — Customer Testimonials & Voice of Market (/testimonials)

> Guided conversation that collects real customer language from multiple sources — your own reviews, marketplaces, competitor sites, and online communities. This captures how the customer actually talks so downstream skills can emulate that voice in copy and ads.

### Instructions

You walk the user through 4 phases of questions to build `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`. Each phase covers a different source of customer voice. This is one of the 3 required documents before the buyer avatar can be created.

#### Before You Start

1. Read `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`
2. **If the file exists and has content** → enter **Update Mode** (see below)
3. **If the file does not exist or is empty** → start the conversation flow from Phase 1

#### How the Conversation Works

- Ask questions **one phase at a time** (never dump all questions at once)
- After each phase, summarize what you captured in a compact block and confirm with the user before moving on
- The exact words matter — preserve the customer's original language, don't paraphrase or clean it up
- If the user doesn't have content for a phase, mark it as `[TO BE ADDED]` in the output and move on
- Keep the tone conversational, not interrogative — this should feel like a research session, not a form

---

### Phase 1 — Your Own Reviews & Testimonials

Collect reviews and testimonials the business already has. 3 questions.

1. **Do you have customer testimonials or reviews?**
   Website testimonials, Google reviews, email feedback, case studies, DMs, screenshots. Paste them in — the exact words matter. Don't summarize or clean them up, raw customer language is the goal.

2. **Any standout success stories or transformations?**
   Specific customers who got notable results. What was their before/after? What did they say about it? Names can be anonymized but keep the details and their exact words.

3. **What do customers praise most often?**
   The recurring compliments. What keeps coming up unprompted? What do people mention without being asked?

If the business has no reviews yet → acknowledge this is common for new businesses, mark as `[NO OWN REVIEWS YET]` in the output, and move on to Phase 2.

**After Phase 1:** Summarize Your Own Reviews findings. Confirm with user. Then proceed to Phase 2.

---

### Phase 2 — Marketplace & Review Site Reviews

Reviews from Amazon, Trustpilot, G2, App Store, or any marketplace — for their own product OR similar products in the niche. 2 questions.

Guide the user before asking: tell them to go to Amazon or relevant marketplaces, search for products in their niche, and sort by most helpful reviews. Copy 10-20 reviews per source if possible. These don't have to be reviews of THEIR product — reviews of similar/competing products in the same category work great.

1. **Paste positive reviews from marketplaces for products in your niche.**
   Amazon, Trustpilot, G2, App Store, etc. What do happy customers say? What specific outcomes, features, or experiences do they praise? Paste the actual review text.

2. **Paste negative reviews from the same sources.**
   1-3 star reviews. What do people complain about? What's missing? What disappointed them? These reveal unmet needs and positioning opportunities. Paste the actual review text.

**After Phase 2:** Summarize Marketplace Reviews findings. Confirm with user. Then proceed to Phase 3.

---

### Phase 3 — Competitor Website Reviews

Reviews and testimonials found on competitor websites. 2 questions.

1. **Paste testimonials or reviews from competitor websites.**
   Go to competitor sites, find their testimonials or case studies pages. Copy what their customers say. This reveals what the market values and what language they use. Paste the actual text.

2. **What patterns do you notice across competitor testimonials?**
   Any recurring themes, promises, or outcomes that competitors highlight? What do their customers consistently praise or mention?

**After Phase 3:** Summarize Competitor Testimonials findings. Confirm with user. Then proceed to Phase 4.

---

### Phase 4 — Community Voice (Reddit, X, Forums)

How the market talks about the problem in their own spaces. 3 questions.

1. **Paste relevant Reddit posts, comments, or threads.**
   Search Reddit for subreddits where your market hangs out. What questions do they ask? How do they describe their problems? What language do they use? Paste the actual text with the subreddit name if possible.

2. **Paste relevant posts from X, Facebook groups, or forums.**
   Any social media discussions, tweets, or forum posts where your market talks about the problem your product solves. Paste the actual text.

3. **Any other sources of customer voice?**
   YouTube comments, podcast reviews, Quora answers, community Slack/Discord messages — anything that captures how real people talk about this topic. Paste whatever you have.

**After Phase 4:** Summarize Community Voice findings. Confirm with user. Then generate the document.

---

### Testimonials Output Format

After all 4 phases are complete and confirmed, generate `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` using this exact structure.

**Important:** The "Language Patterns" section at the bottom is AI-generated. After all phases are done, analyze all the collected reviews and testimonials to extract recurring phrases, emotional triggers, and before/after language patterns. This saves the user from having to do that analysis manually.

```markdown
# Customer Testimonials & Voice of Market

## Our Reviews & Testimonials

### Customer Testimonials
[Direct quotes from customers or "[NO OWN REVIEWS YET]"]

### Success Stories
[Notable customer transformations and results]

### Most Common Praise
[Recurring compliments and what customers praise unprompted]

## Marketplace Reviews

### Positive Reviews
[Positive reviews from Amazon, Trustpilot, G2, etc. — with source noted]

### Negative Reviews (Opportunities)
[Negative reviews from marketplaces — reveals unmet needs]

## Competitor Testimonials

### Competitor Website Reviews
[Testimonials and reviews copied from competitor sites]

### Patterns Across Competitors
[Recurring themes, promises, and outcomes competitors highlight]

## Community Voice

### Reddit
[Posts, comments, threads — how the market talks about the problem]

### Social Media & Forums
[X posts, Facebook group discussions, forum threads]

### Other Sources
[YouTube comments, Quora, podcasts, Slack/Discord, etc.]

## Language Patterns

### Key Phrases & Recurring Language
[Phrases that appear across multiple sources — with frequency/source count]

### Emotional Triggers
[The emotional language customers use — frustration, desire, relief, excitement]

### Before/After Language
[How customers describe their situation before vs. after finding a solution]

## Metadata

- **Created:** [date]
- **Last updated:** [date]
- **Status:** Complete | Partial (missing: [list sections])
```

#### Writing the File

Save the output to `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`. Use the **Write** tool to create the file.
---

### Testimonials Update Mode

When `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` already exists and has content:

1. Read the current file and show the user a summary of what's already captured
2. Present the sections as a numbered list:
   1. Our Reviews & Testimonials
   2. Marketplace Reviews
   3. Competitor Testimonials
   4. Community Voice
3. Ask: **"Which sections do you want to update? Pick the numbers, or say 'all' to redo everything."**
4. Only walk through the selected phases
5. Merge new answers into the existing document (preserve sections that weren't updated)
6. Re-generate the Language Patterns section based on all content (updated + preserved)
7. Update the `Last updated` date in Metadata

---

### After Testimonials Completion

Once the document is saved, report next steps:

1. Check which other reference docs exist:
   - Read `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — does it exist and have content?
   - Read `${CLAUDE_PLUGIN_DATA}/references/research.md` — does it exist and have content?

2. Show a status report:

```
Onboarding document:  [COMPLETE / MISSING]
Research document:    [COMPLETE / MISSING]
Testimonials document: COMPLETE
```

3. If all 3 are complete:
   → "All reference documents are ready. You can now run the Customer Avatar Creation workflow in the strategy skill (`/offer`) to generate your buyer persona."

4. If some are missing:
   → "Before you can create your buyer avatar, you still need: [list missing docs]. Run `/onboard` or `/research` to create them."

---

## Flow 4 — Brand Voice (/brand-voice)

> Guided conversation that defines how the brand sounds — tone, language patterns, vocabulary, rhythm, and platform-specific adaptations. This document is consumed directly by all content-producing skills (copywriting, fb-ads, daily email, launch email, social content) to ensure voice-consistent output.

### Instructions

You help the user create `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` through one of 3 modes: extracting voice from existing content, building it through guided questions, or auto-scraping from a URL. The output captures the brand's communication DNA so every downstream skill sounds like the same person wrote it.

**Brand voice is independent from the buyer avatar prerequisite chain.** It can be created at any time — it does not require onboarding, research, or testimonials to exist first, and it is not required for buyer avatar creation.

#### Before You Start

1. Read `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`
2. **If the file exists and has content** → enter **Update Mode** (see below)
3. **If the file does not exist or is empty** → start the conversation flow from the Language Preference step

#### Context Loading (Silent)

Before engaging the user, silently attempt to read:
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/references/research.md`

If either exists, use them to enrich your understanding of the business during the voice extraction process. Do NOT tell the user you're doing this, and do NOT block if they're missing — this is optional enrichment only.

---

### Step 1 — Language Preference

**Always ask this first, before anything else.**

Ask: **"What language should we work in? English, Dutch, or something else?"**

Store the answer. Everything downstream — questions, summaries, sample paragraphs, platform examples, and the final output document — must be in the selected language. The JSON metadata block at the bottom of the output always uses English keys but stores the language value.

---

### Step 2 — Mode Selection

Present the 3 modes and let the user choose:

> **How do you want to define your brand voice?**
>
> 1. **Extract** — Paste existing content (emails, posts, articles, sales pages). I'll analyze your writing and extract your voice patterns.
> 2. **Build** — I'll walk you through a series of questions to construct your voice from scratch.
> 3. **Auto-Scrape** — Give me a URL (your blog, newsletter archive, sales page). I'll fetch the content and analyze your voice from it.
>
> *Pick 1, 2, or 3.*

---

### Mode 1 — Extract

The user pastes existing content. You analyze it.

#### How to Run Extract Mode

1. Ask: **"Paste your content below. The more samples the better — emails, social posts, blog posts, sales pages, newsletters. Paste as many as you have."**

2. Let the user paste content. They may paste multiple times. After each paste, say: **"Got it. Paste more, or say 'done' when you've shared everything."**

3. Once the user says done, analyze all the pasted content for:
   - **Tone** — Where does the voice sit on these spectrums: formal ↔ casual, serious ↔ playful, reserved ↔ bold, polished ↔ raw?
   - **Vocabulary patterns** — Signature words/phrases they use repeatedly. Words they never use. Jargon level. Profanity or edginess level.
   - **Sentence rhythm** — Short punchy sentences vs. long flowing ones? Fragment usage? One-line paragraphs? How do they use punctuation (dashes, ellipses, exclamation marks)?
   - **Formatting habits** — How do they use line breaks, bold, italics, caps, bullet points, emojis? What's the visual rhythm of their writing?
   - **Emotional range** — What emotions show up? How do they express vulnerability, excitement, frustration, humor? What's their default emotional register?
   - **Storytelling patterns** — Do they use personal anecdotes? Metaphors? Data? Dialogue? How do they open and close pieces?

4. Present a **Voice Summary** covering all 6 dimensions above. Use specific examples from their content as evidence for each pattern.

5. Ask: **"Does this capture how you sound? Anything I got wrong or missed?"**

6. Incorporate feedback, then proceed to the **Voice Test Loop** (below).

---

### Mode 2 — Build

Guided questions in 3 phases. Ask one question at a time.

#### Phase A — Voice Foundation

1. **If your brand were a person at a dinner party, how would other guests describe their way of talking?**
   Not what they talk ABOUT — how they talk. Are they the loud storyteller? The calm authority? The irreverent joker? The straight-shooter who says what everyone's thinking?

2. **What 3 words should ALWAYS describe your communication?**
   These are non-negotiable voice traits. Everything you write should feel like these words. (Examples: direct, warm, provocative / calm, authoritative, empathetic / bold, funny, honest)

3. **What 3 words should NEVER describe your communication?**
   The anti-voice. What you want to actively avoid sounding like. (Examples: corporate, preachy, desperate / boring, stiff, salesy / timid, vague, try-hard)

**After Phase A:** Summarize Voice Foundation. Confirm with user. Then proceed to Phase B.

---

#### Phase B — Voice Mechanics

1. **How do you use language? Pick what fits or describe your own.**
   - Simple everyday words vs. sophisticated vocabulary?
   - Industry jargon freely vs. jargon translated or avoided?
   - Profanity/edginess (never / occasionally / frequently)?
   - Contractions (always / sometimes / never)?
   - Sentence length (short and punchy / mixed / long and flowing)?

2. **How do you structure your writing visually?**
   - Short paragraphs (1-2 sentences) vs. longer blocks?
   - Frequent line breaks for emphasis?
   - Bullet points and lists vs. flowing prose?
   - Bold/italics for emphasis?
   - Emojis (never / sparingly / frequently)?

3. **What's your emotional range in business communication?**
   - Do you share personal struggles and vulnerability?
   - Do you use humor? What kind (self-deprecating, observational, dry, absurd)?
   - How do you express excitement (measured / enthusiastic / over-the-top)?
   - How do you handle disagreement or criticism (diplomatic / direct / confrontational)?

**After Phase B:** Summarize Voice Mechanics. Confirm with user. Then proceed to Phase C.

---

#### Phase C — Voice Signature

1. **Do you have any catchphrases, signature expressions, or verbal tics?**
   Things you say repeatedly. Ways you open emails or sign off. Phrases your audience associates with you. (It's okay if you don't have these yet.)

2. **Who are 2-3 public figures or brands whose communication style you admire?**
   Not who you want to copy — whose VIBE resonates with how you want to come across. What specifically do you admire about their voice?

3. **What's the ONE thing that should make your voice instantly recognizable?**
   If someone read a paragraph of your writing with no name attached, what would make them say "that's definitely [you]"? The signature element.

**After Phase C:** Summarize Voice Signature. Confirm with user. Then proceed to the **Voice Test Loop** (below).

---

### Mode 3 — Auto-Scrape

The user provides a URL. You fetch and analyze it.

#### How to Run Auto-Scrape Mode

1. Ask: **"What URL should I analyze? (Blog, newsletter archive, sales page, about page — anything with your writing.)"**

2. Use the **WebFetch** tool to retrieve the content from the URL.

3. If the fetch fails, tell the user and offer to switch to Extract mode (they can paste the content manually).

4. If successful, analyze the fetched content using the same 6 dimensions as Extract mode (tone, vocabulary, rhythm, formatting, emotional range, storytelling patterns).

5. Present the **Voice Summary** with evidence from the fetched content.

6. Ask 2-3 supplementary questions based on what you found. Pick from these based on gaps in the content:
   - "The content I analyzed is fairly [formal/casual/neutral]. Is that representative of how you always sound, or does your voice shift in different contexts?"
   - "I didn't see much [humor/vulnerability/storytelling/etc.] in this content. Is that intentional, or does that side come out in other formats?"
   - "I noticed you [specific pattern]. Is that a deliberate choice?"

7. Incorporate the answers, then proceed to the **Voice Test Loop** (below).

---

### Voice Test Loop

**This replaces the simple "summarize and confirm" of other flows.** The voice test makes confirmation concrete — the user sees their voice in action rather than approving abstract trait descriptions.

#### How the Voice Test Loop Works

1. Generate **3 sample paragraphs** that demonstrate the extracted/built voice:
   - **Casual/Social** — A social media post or casual email. Informal, personality-forward.
   - **Persuasive/Sales** — A short sales pitch or ad copy. Selling something with their voice.
   - **Vulnerable/Personal** — A personal share or story opening. Emotional, authentic.

   Each paragraph should be 3-6 sentences. Use the voice traits, vocabulary, rhythm, and formatting patterns captured so far.

2. Present all 3 and ask: **"Rate each one — does it sound like you? For each, tell me: nailed it, close but [what to adjust], or way off."**

3. Based on feedback:
   - **If all 3 are "nailed it"** → Voice is confirmed. Proceed to Platform Adaptations.
   - **If adjustments needed** → Adjust the voice profile based on feedback, generate 3 NEW samples, and repeat. Maximum 3 iterations — if the user is still unsatisfied after 3 rounds, take their latest feedback, apply it, and proceed.

---

### Platform Adaptations

After the voice is confirmed via the test loop:

1. Ask: **"Which platforms do you actively create content for?"**
   Offer common options: Email, Instagram, Facebook, LinkedIn, X/Twitter, YouTube, TikTok, Blog/Website, Podcast, Other.

2. For each selected platform, generate an adaptation row:
   - **Platform**
   - **Tone Shift** — How the core voice adapts (e.g., "More casual, shorter sentences" or "Same voice, more structured")
   - **Length & Format** — Typical content length and format for that platform
   - **Example** — A 1-2 sentence example showing the voice adapted for that platform

3. Present the adaptation table and ask: **"Does this capture how your voice shifts across platforms? Anything to adjust?"**

4. Incorporate feedback, then proceed.

---

### LinkedIn Deep Dive

**Only run this section if the user selected LinkedIn as one of their platforms in the Platform Adaptations step.** If LinkedIn was not selected, skip entirely and proceed to the Brand Voice Output Format.

#### Aspirational Posts (optioneel maar aanbevolen)
Ask: **"Heb je 3-5 LinkedIn posts van andere creators die je bewondert? Plak ze hieronder. Dit helpt me je LinkedIn-stem te verfijnen. (Overslaan? Zeg 'skip'.)"**

If the user provides posts, analyze:
- Hook stijl en patronen
- Formatting (broetry vs. prose)
- Emotioneel register
- Structuur patronen

Save these posts as part of the LinkedIn Voice Profile output.

#### Content Strategie
Ask these questions one by one:

1. **"Wat is je primaire doel op LinkedIn?"** (leads genereren, thought leadership, community bouwen, anders)
2. **"Wanneer mensen aan [jouw naam] denken op LinkedIn, denken ze aan ___?"**
3. **"Wat zijn je 3-4 kernonderwerpen op LinkedIn?"**
4. **"Beschrijf je audience transformatie:**
   - **VOOR:** Wat gelooft/voelt je ideale lezer VOORDAT ze jouw content lezen?
   - **NA:** Wat gelooft/voelt je ideale lezer NADAT ze jouw content regelmatig hebben gelezen?"
5. **"Wat kun jij zeggen dat de meeste mensen in jouw vakgebied niet kunnen of willen zeggen?"**
6. **"Hoe wil je je content verdelen?"** (bijv. 50% tactisch, 20% verhalen, 15% hot takes, 15% behind-the-scenes)

#### LinkedIn Schrijfvoorkeuren (Quick-Fire)
Quick choices — the user can answer with a word or short sentence:

7. **"Overtuiging:** voorzichtig ('Dit werkte voor mij') of stellig ('Dit werkt. Punt.')?"
8. **"Bewijs:** data en metrics, of verhalen en voorbeelden, of beide?"
9. **"CTA stijl:** direct ('DM me'), zacht ('Benieuwd naar jullie ervaring'), of geen?"
10. **"Lengte voorkeur:** kort (500-700 tekens), lang (800-1200 tekens), of hangt af van onderwerp?"

After all LinkedIn questions are answered, proceed to generate the document.

---

### Brand Voice Output Format

After all steps are complete and confirmed, generate `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` using this exact structure:

```markdown
# Brand Voice Document

## Voice Foundation

### Brand Personality
[Dinner party description — how the brand sounds as a person]

### Always Sound Like
[3 non-negotiable voice traits with explanation of each]

### Never Sound Like
[3 anti-voice traits with explanation of what to avoid]

## Voice Mechanics

### Vocabulary & Language
- **Register:** [Simple/Sophisticated/Mixed]
- **Jargon:** [Freely used / Translated / Avoided]
- **Profanity/Edginess:** [Never / Occasionally / Frequently — with boundaries]
- **Contractions:** [Always / Sometimes / Never]
- **Sentence Length:** [Short & punchy / Mixed / Long & flowing]
- **Signature Words/Phrases:** [List of recurring words and phrases]
- **Words to Avoid:** [Words that don't fit the voice]

### Formatting & Visual Rhythm
- **Paragraph Length:** [1-2 sentences / Mixed / Longer blocks]
- **Line Breaks:** [Frequent for emphasis / Standard / Minimal]
- **Lists & Bullets:** [Frequently / Occasionally / Rarely]
- **Bold/Italics:** [Heavy use / Moderate / Minimal]
- **Emojis:** [Never / Sparingly / Frequently — with examples]
- **Caps for Emphasis:** [Yes/No — with examples]

### Emotional Range
- **Vulnerability:** [How and when personal struggles are shared]
- **Humor:** [Type and frequency — self-deprecating, observational, dry, etc.]
- **Excitement:** [How enthusiasm is expressed — measured, energetic, explosive]
- **Conflict/Disagreement:** [How pushback is delivered — diplomatic, direct, confrontational]
- **Default Register:** [The baseline emotional tone of most communication]

## Voice Signature

### Catchphrases & Verbal Tics
[Signature expressions, opening/closing patterns, recurring phrases]

### Voice Inspirations
[Admired communicators and what specifically resonates about their style]

### Recognition Factor
[The ONE element that makes this voice instantly identifiable]

### Storytelling Style
[How stories are told — anecdotes, metaphors, data, dialogue, structure]

## Platform Adaptations

| Platform | Tone Shift | Length & Format | Example |
|---|---|---|---|
| [Platform 1] | [How voice adapts] | [Typical length/format] | [1-2 sentence example] |
| [Platform 2] | [How voice adapts] | [Typical length/format] | [1-2 sentence example] |
| [Platform 3] | [How voice adapts] | [Typical length/format] | [1-2 sentence example] |

## LinkedIn Voice Profile

> Only include this section if the user selected LinkedIn and completed the LinkedIn Deep Dive.

### Content Strategie
- **Primair doel:** [uit vraag 1]
- **Brand Associatie:** [uit vraag 2]
- **Content Pilaren:** [uit vraag 3]
- **Audience Transformatie:** VAN: [...] NAAR: [...]
- **Unieke Angle:** [uit vraag 5]
- **Content Mix:** [uit vraag 6]

### LinkedIn Schrijfstijl
- **Overtuiging:** [voorzichtig/stellig/mix]
- **Bewijs Stijl:** [data/verhalen/beide]
- **CTA Stijl:** [direct/zacht/geen]
- **Default Lengte:** [kort/lang/flexibel]

### Aspirational Posts
[All posts the user shared, as reference. If skipped, omit this subsection.]

## Voice Test Samples

### Casual/Social
[The confirmed casual sample paragraph]

### Persuasive/Sales
[The confirmed sales sample paragraph]

### Vulnerable/Personal
[The confirmed personal sample paragraph]

## Metadata

- **Language:** [Selected language]
- **Created:** [date]
- **Last updated:** [date]
- **Mode used:** [Extract / Build / Auto-Scrape]
- **Status:** Complete | Partial (missing: [list sections])

---

<!--
```json
{
  "voice": {
    "language": "[selected language]",
    "always": ["[trait 1]", "[trait 2]", "[trait 3]"],
    "never": ["[trait 1]", "[trait 2]", "[trait 3]"],
    "vocabulary": {
      "register": "[simple/sophisticated/mixed]",
      "jargon": "[free/translated/avoided]",
      "profanity": "[never/occasionally/frequently]",
      "contractions": "[always/sometimes/never]",
      "sentence_length": "[short/mixed/long]"
    },
    "formatting": {
      "paragraph_length": "[short/mixed/long]",
      "line_breaks": "[frequent/standard/minimal]",
      "emojis": "[never/sparingly/frequently]"
    },
    "emotional_range": {
      "vulnerability": "[level]",
      "humor": "[type]",
      "default_register": "[description]"
    },
    "signature": {
      "catchphrases": ["[phrase 1]", "[phrase 2]"],
      "recognition_factor": "[description]"
    },
    "platforms": ["[platform 1]", "[platform 2]", "[platform 3]"],
    "linkedin": {
      "goal": "[leads/thought-leadership/community/other]",
      "pillars": ["[pillar 1]", "[pillar 2]", "[pillar 3]"],
      "persuasion": "[cautious/assertive/mix]",
      "evidence": "[data/stories/both]",
      "cta_style": "[direct/soft/none]",
      "default_length": "[short/long/flexible]"
    }
  },
  "metadata": {
    "created": "[date]",
    "updated": "[date]",
    "mode": "[extract/build/auto-scrape]"
  }
}
```
-->
```

#### Writing the File

Save the output to `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`. Use the **Write** tool to create the file.
---

### Brand Voice Update Mode

When `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` already exists and has content:

1. Read the current file and show the user a summary of what's already captured
2. Present the sections as a numbered list:
   1. Voice Foundation
   2. Voice Mechanics
   3. Voice Signature
   4. Platform Adaptations
   5. LinkedIn Voice Profile (if present)
   6. Voice Test Samples
3. Ask: **"Which sections do you want to update? Pick the numbers, or say 'all' to redo everything."**
4. Only walk through the selected sections
5. If Voice Foundation or Voice Mechanics are updated, re-run the **Voice Test Loop** with updated traits before saving
6. Merge new answers into the existing document (preserve sections that weren't updated)
7. Update the `Last updated` date in Metadata
8. Regenerate the JSON block at the bottom to reflect all current values

---

### After Brand Voice Completion

Once the document is saved, report next steps:

1. Check which other reference docs exist:
   - Read `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — does it exist and have content?
   - Read `${CLAUDE_PLUGIN_DATA}/references/research.md` — does it exist and have content?
   - Read `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — does it exist and have content?

2. Show a status report:

```
Brand voice document:  COMPLETE
Onboarding document:   [COMPLETE / MISSING]
Research document:     [COMPLETE / MISSING]
Testimonials document: [COMPLETE / MISSING]
```

3. Explain next steps based on status:
   → "Your brand voice is ready. All content-producing skills (copywriting, fb-ads, daily email, social content) will now use this voice profile."

4. If buyer avatar prerequisites are incomplete:
   → "For the buyer avatar, you still need: [list missing docs from onboarding/research/testimonials]. Run the corresponding commands to create them."

5. If all 4 reference docs are complete:
   → "All reference documents are complete — including brand voice. Content skills have everything they need to produce voice-consistent, customer-targeted output."

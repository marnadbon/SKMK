---
name: onboarding
description: "Start hier — legt alle bedrijfskennis vast die alle andere agents nodig hebben. Gebruik dit altijd wanneer je voor het eerst begint, je bedrijf wilt instellen, wilt vastleggen wat je verkoopt, wilt weten wie je klanten zijn, marktonderzoek wilt doen, klantgetuigenissen wilt verzamelen, of je merkstem wilt definiëren."
---

> **Taal:** Altijd in het Nederlands antwoorden, ook als de instructies in het Engels zijn geschreven.


# Onboarding — Gedeelde Bedrijfskennis Store

## Doel

Deze skill is het startpunt van het Skill Pack. Het bouwt de referentiedocumenten die alle andere skills nodig hebben. Zonder deze documenten kunnen de andere skills niet optimaal functioneren.

## Wanneer te gebruiken
Activeer wanneer iemand zegt: ik wil beginnen, stel me in, leg mijn bedrijf vast, vertel iets over mijn bedrijf, wat is mijn doelgroep, wie zijn mijn klanten, wat verkoop ik, hoe klinkt mijn merk, of als er nog geen bedrijfsinfo bekend is.

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

**After Phase 1:** Summarize Business Identity findings. Confirm with user. **Sla direct op:** append de samenvatting naar `${CLAUDE_PLUGIN_DATA}/references/onboarding-progress.md`. Then proceed to Phase 2.

---

### Phase 2 — Brand & Perception

1. **How do you want people to perceive your brand?**
   Not how they currently see you — how you WANT them to see you. What feelings, associations, and status should your brand evoke?

2. **What stops people from buying?**
   The real objections, not the polite ones. What makes prospects hesitate, delay, or choose a competitor? Include price objections, trust barriers, confusion points.

3. **Who are the influencers or authorities in your space?**
   People your ideal customers follow, trust, or aspire to be like. These could be competitors, thought leaders, podcasters, authors — anyone who shapes your market's worldview.

**After Phase 2:** Summarize Brand & Perception findings. Confirm with user. **Sla direct op:** append de samenvatting naar `${CLAUDE_PLUGIN_DATA}/references/onboarding-progress.md`. Then proceed to Phase 3.

---

### Phase 3 — Market Patterns

1. **Are there seasonal patterns or cycles in your business?**
   When do sales peak and dip? Are there industry events, budget cycles, or cultural moments that affect buying behavior? What triggers urgency?

2. **What questions do customers ask most?**
   The top 5-10 questions you hear repeatedly — from prospects before buying AND from customers after buying. These reveal gaps in messaging and opportunities for content.

**After Phase 3:** Summarize Market Patterns findings. Confirm with user. **Sla direct op:** append de samenvatting naar `${CLAUDE_PLUGIN_DATA}/references/onboarding-progress.md`. Then proceed to Phase 4.

---

### Phase 4 — Trust Signals & Assets

1. **What claims or guarantees can you credibly make?**
   Results you can promise. Guarantees you offer or could offer. Data points, success rates, timeframes. Be specific — "we help businesses grow" is useless; "87% of clients see ROI in 60 days" is gold.

2. **Do you have a content library, resource hub, or lead magnet?**
   Anything you've published: blog posts, videos, podcasts, PDFs, courses, templates, tools. Include links if available. This maps your existing content assets.

**After Phase 4:** Summarize Trust Signals & Assets findings. Confirm with user. **Sla direct op:** append de samenvatting naar `${CLAUDE_PLUGIN_DATA}/references/onboarding-progress.md`. Then proceed to Phase 5.

---

### Phase 5 — The Founder

1. **What's your origin story?**
   How did you get into this business? What was the moment that made you start? What were you doing before? The messy, real version — not the polished LinkedIn bio.

2. **What's a belief you hold that most people in your industry disagree with?**
   Your contrarian take. The thing that makes some people love you and others uncomfortable. This becomes a powerful content and positioning tool.

3. **Where are you active online and what does your content presence look like?**
   Which platforms (YouTube, Instagram, X, LinkedIn, TikTok, podcast, email list)? How often do you post? What format works best for you? What's your audience size on each?

**After Phase 5:** Summarize The Founder findings. Confirm with user. **Sla direct op:** append de samenvatting naar `${CLAUDE_PLUGIN_DATA}/references/onboarding-progress.md`. Dan het volledige document genereren.

---

### Onboarding Output Format

After all 5 phases are complete and confirmed, generate `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`.

Gebruik de opgeslagen samenvatting uit `onboarding-progress.md` als basis. Schrijf een gestructureerd document met secties voor: Business Identity, Brand & Perception, Market Patterns, Trust Signals & Assets, The Founder, en Metadata (aangemaakt op, laatste update, status). Schrijf in volzinnen — niet in bullets. Gebruik de **Write** tool om het bestand op te slaan.
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

Once the document is saved, tell the user:

> "✅ Onboarding opgeslagen. Volgende stap: typ `/research` voor marktonderzoek en `/testimonials` voor klantgetuigenissen. Als alle 3 referentiedocumenten klaar zijn kun je met `/avatar` je buyer avatar aanmaken."

---


## Flow 2 — Market & Product Research (/research)
> Lees `flow-research.md` voor de volledige instructies van deze flow.

## Flow 3 — Customer Testimonials (/testimonials)
> Lees `flow-testimonials.md` voor de volledige instructies van deze flow.

## Flow 4 — Brand Voice (/brand-voice)
> Lees `flow-brandvoice.md` voor de volledige instructies van deze flow.

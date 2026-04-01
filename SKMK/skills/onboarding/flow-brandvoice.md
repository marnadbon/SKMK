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

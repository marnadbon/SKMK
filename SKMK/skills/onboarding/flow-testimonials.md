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


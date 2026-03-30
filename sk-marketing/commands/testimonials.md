---
description: Verzamel klantgetuigenissen en stem van de markt in het testimonials referentiedocument
---

Read the file at `SKILL.md` in the system skill directory and follow its instructions exactly.

The user wants to create or update the customer testimonials & voice of market document. **Run Flow 3 — Customer Testimonials & Voice of Market.**

## Steps

1. Read `SKILL.md` to load the full skill definition
2. Jump to **Flow 3 — Customer Testimonials & Voice of Market (/testimonials)**
3. Follow the prerequisite check: read `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` to determine if this is a new flow or an update
4. If the file exists and has content, enter Update Mode as described in SKILL.md
5. If the file is missing or empty, start the guided conversation from Phase 1
6. Walk through all phases as specified, summarizing between each one
7. Generate the final document and save it to `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`
8. Report next steps (which other reference docs are still needed)

$ARGUMENTS

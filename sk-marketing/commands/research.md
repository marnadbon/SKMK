---
description: Start het markt- en productonderzoek en bouw het research referentiedocument
---

Read the file at `SKILL.md` in the system skill directory and follow its instructions exactly.

The user wants to create or update the market & product research document. **Run Flow 2 — Market & Product Research.**

## Steps

1. Read `SKILL.md` to load the full skill definition
2. Jump to **Flow 2 — Market & Product Research (/research)**
3. Follow the prerequisite check: read `${CLAUDE_PLUGIN_DATA}/references/research.md` to determine if this is a new flow or an update
4. If the file exists and has content, enter Update Mode as described in SKILL.md
5. If the file is missing or empty, start the guided conversation from Phase 1
6. Walk through all phases as specified, summarizing between each one
7. Generate the final document and save it to `${CLAUDE_PLUGIN_DATA}/references/research.md`
8. Report next steps (which other reference docs are still needed)

$ARGUMENTS

---
description: Start de bedrijfsonboarding en bouw het onboarding referentiedocument
---

Read the file at `SKILL.md` in the system skill directory and follow its instructions exactly.

The user wants to create or update the company onboarding document.

## Steps

1. Read `SKILL.md` to load the full onboarding skill definition
2. Follow the prerequisite check: read `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` to determine if this is a new flow or an update
3. If the file exists and has content, enter Update Mode as described in SKILL.md
4. If the file is missing or empty, start the guided conversation from Phase 1
5. Walk through all phases as specified, summarizing between each one
6. Generate the final document and save it to `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
7. Report next steps (which other reference docs are still needed)

$ARGUMENTS

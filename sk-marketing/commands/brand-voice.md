---
description: Definieer de merkstem en bouw het brand voice referentiedocument
---

Read the file at `SKILL.md` in the system skill directory and follow its instructions exactly.

The user wants to create or update the brand voice document. **Run Flow 4 — Brand Voice (/brand-voice).**

## Steps

1. Read `SKILL.md` to load the full skill definition
2. Jump to **Flow 4 — Brand Voice (/brand-voice)**
3. Follow the prerequisite check: read `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` to determine if this is a new flow or an update
4. If the file exists and has content, enter Update Mode as described in SKILL.md
5. If the file is missing or empty, start with the Language Preference question, then Mode Selection
6. Walk through all steps as specified, including the Voice Test Loop and Platform Adaptations
7. Generate the final document and save it to `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`
8. Report next steps (which other reference docs are still needed)

$ARGUMENTS

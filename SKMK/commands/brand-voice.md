---
description: Definieer de merkstem en bouw het brand voice referentiedocument
---

Start de brand voice flow. Gebruik de `onboarding` skill.

Check eerst of `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` bestaat:
- **Bestaat het** → vraag of de gebruiker wil updaten of opnieuw beginnen
- **Bestaat het niet** → start met de taalvoorkeur vraag (NL/EN/mix), daarna modus-selectie (volledig gesprek of snelle upload), loop door alle stappen inclusief Voice Test en Platform Adaptations

Sla het eindresultaat op naar `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`.

$ARGUMENTS

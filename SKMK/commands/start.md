---
description: Start de bedrijfsonboarding en bouw het onboarding referentiedocument
---

Start de bedrijfsonboarding. Gebruik de `onboarding` skill.

Check eerst of `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` bestaat:
- **Bestaat het** → vraag of de gebruiker wil updaten of opnieuw beginnen
- **Bestaat het niet** → start direct met Fase 1 van het 5-fasen onboarding gesprek

Sla na elke fase direct tussenresultaten op naar `${CLAUDE_PLUGIN_DATA}/references/onboarding-progress.md`.
Sla het eindresultaat op naar `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`.

$ARGUMENTS

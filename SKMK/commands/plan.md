---
description: Maak een uitvoeringsplan voor een doel
---

De gebruiker wil een uitvoeringsplan. Gebruik de `01-commander` skill als orchestrator.

Check welke vault-bestanden bestaan:
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/references/research.md`
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`
- `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`

Analyseer het doel van de gebruiker en maak een geordend uitvoeringsplan: welke skill, welk slash command, eventuele afhankelijkheden. Als er ontbrekende onboarding-bestanden zijn, begin het plan daarmee.

$ARGUMENTS

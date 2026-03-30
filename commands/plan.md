---
description: Maak een uitvoeringsplan voor een doel
---

Lees de commander SKILL.md en volg de instructies.

De gebruiker wil een uitvoeringsplan voor een doel. Maak een stap-voor-stap plan met de juiste skills.

## Stappen

1. Lees de commander SKILL.md voor het volledige skill register en routeringsbeslisboom
2. Lees ${CLAUDE_PLUGIN_DATA}/index.md om de huidige vault status te bepalen
3. Check welke referentiedocumenten bestaan in ${CLAUDE_PLUGIN_DATA}/references/
4. Check welke gegenereerde documenten bestaan in ${CLAUDE_PLUGIN_DATA}/generated/
5. Analyseer het doel van de gebruiker
6. Maak een geordend uitvoeringsplan met:
   - Welke skill voor elke stap
   - Welk slash command te gebruiken
   - Eventuele afhankelijkheden (stap X moet klaar zijn voor stap Y)
7. Als de vault niet compleet is, begin het plan met de ontbrekende onboarding stappen

$ARGUMENTS

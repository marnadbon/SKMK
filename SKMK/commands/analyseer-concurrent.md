---
description: Analyseer een concurrent en sla het rapport op in de vault
---

Analyseer de opgegeven concurrent. Gebruik de `researcher` skill.

Stappen:
1. Vraag naar: concurrent naam, website URL, social media (optioneel), focus gebieden
2. Analyseer de website (positionering, aanbieding, prijzen, copy)
3. Zoek klantreviews en sentiment (via last30days als API keys beschikbaar)
4. Identificeer sterke en zwakke punten
5. Sla het rapport op naar `${CLAUDE_PLUGIN_DATA}/competitors/[concurrent-naam].md`

Volg het output format uit SKILL.md.

Gebruik: /analyseer-concurrent [naam of url]

$ARGUMENTS

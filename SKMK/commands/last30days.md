---
description: Voer een social listening scan uit over de afgelopen 30 dagen
---

Voer een social listening scan uit over de afgelopen 30 dagen. Gebruik de `04-researcher` skill.

Stappen:
1. Check `${CLAUDE_PLUGIN_DATA}/.env` voor API keys (OPENAI_API_KEY is verplicht)
2. Als geen API keys → vraag: "Voer je OPENAI_API_KEY in. Sla hem op in ${CLAUDE_PLUGIN_DATA}/.env"
3. Run het last30days script: `python3 last30days/scripts/last30days.py "[onderwerp]" --emit=compact`
4. Analyseer de resultaten
5. Presenteer bevindingen gestructureerd

Opties:
- `--quick` voor snelle scan
- `--deep` voor uitgebreide scan
- `--sources=reddit` of `--sources=x` voor specifieke platforms
- `--include-web` voor web search resultaten

Gebruik: /last30days [onderwerp]

$ARGUMENTS

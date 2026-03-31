---
description: Maak een maandelijkse contentkalender met weekplanningen per platform en content pilaar
---

De gebruiker wil een contentkalender maken. Gebruik de `content-creator` skill.

## Stappen

1. Lees `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` voor toon
3. Lees `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` voor doelgroep
4. Lees `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — voor je verhaal, achtergrond en business context (als aanwezig)
5. Lees `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` — voor producten/aanbod (als aanwezig, vooral bij launch planning)
4. Vraag welke platforms en hoeveel posts per week per platform
5. Vraag de content pilaren (of stel ze voor op basis van de buyer avatar)
6. Maak een maandkalender met:
   - Datum en platform
   - Content type (post, carousel, video, thread)
   - Onderwerp en kernboodschap
   - Content pilaar
7. Sla op in `${CLAUDE_PLUGIN_DATA}/generated/content-kalender.md`

$ARGUMENTS

---
description: Beheer klantenservice inbox - lees emails, maak conceptantwoorden en sla drafts op
---

Gebruik de `customer-service` skill voor de klantenservice workflow.

Interpreteer de input als volgt:
- Geen input → toon de inbox (openstaande emails)
- Een nummer of ID → behandel die specifieke email/thread
- Een zoekterm → zoek in gesprekken
- "setup" → vraag: welk email platform (Gmail/Outlook/anders)? Wat is het email adres? Welke toon gebruik je in antwoorden?
- "auto" → verwerk alle open emails automatisch (drafts)

$ARGUMENTS

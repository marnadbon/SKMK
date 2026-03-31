---
description: Ontwerp een complete guide of PDF met hoofdstukken, werkbladen en templates
---
# Bouw Guide — Ontwerp een Complete Guide of PDF

Bouw een volledige guide: van structuur tot uitgewerkte hoofdstukken, werkbladen, templates en CTA. Ondersteunt lead magnets, standalone guides, authority guides en companion guides.

---

## Stap 1 — Context Laden

Laad ALTIJD deze bestanden:

**Vault (als aanwezig):**
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`

**Knowledge-base:**
- `knowledge-base/guide-systeem.md` — guide typen, structuur, hoofdstuk design, werkbladen
- `knowledge-base/materiaal-verwerking.md` — als er ruwe materialen zijn
- `knowledge-base/product-validatie.md` — voor validatie context

**Eerdere outputs (als aanwezig):**
- Check `outputs/analyses/` — materiaal-analyse beschikbaar?
- Check `outputs/plannen/` — productplan beschikbaar?

**References (als aanwezig):**
- Check `references/` voor voorbeeldguides

Bevestig kort welke bestanden geladen zijn en welke ontbreken.

---

## Stap 2 — Intake

Vraag de gebruiker:

1. **Onderwerp** — waarover gaat de guide?
2. **Guide type:**
   - **Lead magnet** — gratis, 5-15 pagina's, doel: e-mailadressen
   - **Standalone** — betaald (€17-97), 30-80 pagina's, compleet systeem
   - **Authority** — 60-150 pagina's, positionering als expert
   - **Companion** — 10-30 pagina's, bijlage bij cursus/workshop
3. **Doel** — wat moet de lezer kunnen/weten na het lezen?
4. **Doelgroep** — wie leest dit? Kennisniveau? (gebruik buyer-avatar)
5. **Materialen** — zijn er ruwe materialen beschikbaar?
6. **CTA** — wat is de volgende stap voor de lezer? (webinar, cursus, gesprek, niets)
7. **Bij companion:** bij welk product hoort deze guide?

---

## Stap 3 — Structuur Ontwerp ⛔

Ontwerp de guide structuur op basis van het gekozen type.

### Gebruik de juiste structuur uit `guide-systeem.md`:
- Lead magnet → Lead Magnet Structuur
- Standalone → Standalone Guide Structuur
- Authority → Authority Guide Structuur
- Companion → afgeleid van het hoofdproduct

### Structuur Format:
```markdown
## Guide: [Naam]
Type: [lead magnet/standalone/authority/companion]
Geschat aantal pagina's: [X]
Doel: [Wat bereikt de lezer]

### Inhoudsopgave

**Introductie** — [kernvraag of belofte]

**Hoofdstuk 1: [Titel]** (~[X] pagina's)
- Kernvraag: [wat beantwoordt dit hoofdstuk]
- Hoofdstuk patroon: [kort/standaard/diep]
- Werkblad: [ja/nee — beschrijving]

**Hoofdstuk 2: [Titel]** (~[X] pagina's)
- ...

[etc.]

**Samenvatting & Volgende Stappen**

**Appendix: Werkbladen & Templates** (indien van toepassing)

**Over de Auteur + CTA**
```

**⛔ GATE:** Presenteer de structuur aan de gebruiker. Vraag goedkeuring voordat je de hoofdstukken gaat uitwerken. Check:
- Past het aantal hoofdstukken bij het guide type?
- Is de scope realistisch voor het gekozen formaat?
- Mist er een onderwerp?
- Klopt de volgorde?

---

## Stap 4 — Hoofdstuk Uitwerking (Iteratief)

Na goedkeuring, werk elk hoofdstuk uit met het juiste design pattern:

### Kort Hoofdstuk (Lead Magnet)
```markdown
# [Hoofdstuk Titel]

## [Kernvraag als kop]

[Directe oplossing — max 1-2 pagina's]

**Voorbeeld:**
[Concreet voorbeeld]

**Actie:**
[Doe dit nu — specifieke opdracht]
```

### Standaard Hoofdstuk (Standalone)
```markdown
# [Hoofdstuk Titel]

## Waarom Dit Ertoe Doet
[Opening — motivatie en context]

## [Kerninhoud Kop]
[De methode/kennis — met subkoppen voor overzichtelijkheid]

## Voorbeeld
[Case study of praktijktoepassing]

## Veelgemaakte Fouten
[Wat je NIET moet doen]

## Werkblad: [Naam]
[Invulbare template of oefening]

## Key Takeaways
- [Punt 1]
- [Punt 2]
- [Punt 3]
```

### Diep Hoofdstuk (Authority)
```markdown
# [Hoofdstuk Titel]

## [Openingsverhaal of prikkelende stelling]

## Het Probleem
[Uitgebreide context]

## Het Framework
[Originele bijdrage — het hart van het hoofdstuk]

## Bewijs
[Data, case studies, voorbeelden]

## Implementatie
[Hoe toe te passen — stap voor stap]

## Wanneer Dit Niet Werkt
[Edge cases, nuance, eerlijkheid]

## Werkblad: [Naam]
[Toepassing]

## Samenvatting
[Key takeaways + overgang naar volgend hoofdstuk]
```

**Werk per hoofdstuk:** presenteer elk uitgewerkt hoofdstuk aan de gebruiker voordat je doorgaat naar het volgende.

---

## Stap 5 — Werkbladen & Templates

Ontwerp alle werkbladen en templates:

### Per Werkblad:
```markdown
# Werkblad: [Naam]
Hoofdstuk: [X]

## Instructies
[Stap-voor-stap wat de lezer moet doen]

## Voorbeeld (ingevuld)
[Laat zien hoe het eruitziet als het af is]

## Jouw Versie
[Invulvelden met labels en genoeg ruimte]
```

### Template Typen (kies wat past):
- **Invultemplate** — vul de blanks in
- **Checklist** — vink af
- **Scorecard** — beoordeel jezelf
- **Planner** — plan je acties
- **Swipe file** — kopieer en pas aan

---

## Stap 6 — Introductie & Afsluiting

### Introductie (schrijf als LAATSTE — je weet nu wat erin staat):
```markdown
# Introductie

## Voor Wie Is Deze Guide
[Specifieke beschrijving van de lezer en hun situatie]

## Wat Je Gaat Leren
[De transformatiebelofte — concreet]

## Hoe Je Deze Guide Gebruikt
[Leeswijzer: lees van voor naar achter / spring naar wat je nodig hebt / doe de werkbladen]

## Over de Auteur
[Korte bio — waarom deze persoon dit kan leren, 2-3 zinnen]
```

### Afsluiting:
```markdown
# Samenvatting & Volgende Stappen

## Wat Je Geleerd Hebt
[Samenvatting per hoofdstuk — 1 zin elk]

## Jouw Actieplan
[De 3-5 belangrijkste acties, in volgorde]

## Volgende Stap
[CTA — duidelijk en specifiek]
```

---

## Stap 7 — Quality Gate

### Guide Quality Checklist
- [ ] Guide type is bewust gekozen
- [ ] Transformatiebelofte is helder in de intro
- [ ] Elk hoofdstuk volgt het juiste design pattern
- [ ] Minstens 1 werkblad of template per 2 hoofdstukken
- [ ] Voorbeeld(en) in elk hoofdstuk
- [ ] CTA is helder en past bij het guide type
- [ ] Lengte past bij het type
- [ ] Key takeaways aan het einde van elk hoofdstuk (standaard + diep)
- [ ] Inhoudsopgave klopt met de werkelijke structuur
- [ ] Alle werkbladen hebben een ingevuld voorbeeld

### Principes Check
- [ ] Transformatie boven structuur
- [ ] Gebouwd voor de lezer, niet de expert
- [ ] 80% toepasbaar, 20% theorie
- [ ] Quick win vroeg in de guide
- [ ] Één guide = één transformatie

Presenteer de quality gate resultaten. Corrigeer eventuele problemen.

---

## Stap 8 — Lever Op

### 1. Sla de guide op
Sla de complete guide op in `outputs/guides/[guide-naam].md`.

### 2. Schrijf product summary naar vault
Maak of update `${CLAUDE_PLUGIN_DATA}/products/[guide-naam].md`:

```markdown
# [Guide Naam]

## Type
Guide ([lead magnet/standalone/authority/companion])

## Transformatiebelofte
[De belofte]

## Doelgroep
[Specifiek]

## Structuur
- Hoofdstukken: [X]
- Pagina's (geschat): [X]
- Werkbladen: [X]

## Prijsindicatie
[Gratis / €X]

## CTA
[Volgende stap voor de lezer]

## Status
[Ontwerp / In ontwikkeling / Klaar]

## Gebouwd op
[Datum]
```

### 3. Bij companion guide:
Link het aan het hoofdproduct in de vault:
- Update `${CLAUDE_PLUGIN_DATA}/products/[hoofdproduct].md` met een verwijzing naar de companion guide

### 4. Presenteer samenvatting
Geef de gebruiker een overzicht:
- Guide naam en type
- Aantal hoofdstukken en geschatte pagina's
- Werkbladen en templates
- Waar het bestand staat
- Suggesties voor volgende stappen:
  - Lead magnet → landing page via Copywriter, promotie via Ads Specialist
  - Standalone → sales page via Copywriter
  - Authority → content campaign via Content Creator
  - Companion → bundelen met het hoofdproduct

$ARGUMENTS

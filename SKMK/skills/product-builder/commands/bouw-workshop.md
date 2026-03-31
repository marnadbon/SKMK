---
description: Ontwerp een workshop draaiboek met interactie, energiemanagement en deliverables
---
# Bouw Workshop — Ontwerp een Complete Workshop

Ontwerp een workshop: van doel tot draaiboek, met interactiemomenten, energiemanagement, werkbladen en CTA. Ondersteunt masterclass, hands-on, challenge kickoff, en webinar-to-offer.

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
- `knowledge-base/workshop-design.md` — workshop typen, energiecurve, interactie, templates
- `knowledge-base/product-validatie.md` — voor validatie context

**Eerdere outputs (als aanwezig):**
- Check `outputs/plannen/` — productplan beschikbaar?

**References (als aanwezig):**
- Check `references/` voor voorbeeldworkshops

Bevestig kort welke bestanden geladen zijn en welke ontbreken.

---

## Stap 2 — Intake

Vraag de gebruiker:

1. **Onderwerp** — waarover gaat de workshop?
2. **Workshop type:**
   - **Masterclass** — deep dive, expert deelt kennis, beperkte interactie
   - **Hands-on** — deelnemers werken actief mee, hoge interactie
   - **Challenge kickoff** — start van meerdaagse challenge, energie + community
   - **Webinar-to-offer** — gestructureerde verkoop-workshop
3. **Duur** — 60 / 90 / 120 minuten
4. **Doel** — wat moeten deelnemers bereikt/geleerd hebben aan het einde?
5. **Live of opgenomen?** — bepaalt interactie-ontwerp
6. **CTA** — wat is de volgende stap na de workshop? (cursus, gesprek, niets)
7. **Doelgroep** — wie zit er in de zaal? Kennisniveau?

---

## Stap 3 — Workshop Design ⛔

Ontwerp het volledige draaiboek op basis van het gekozen type en duur.

### Gebruik het juiste template uit `workshop-design.md`:
- 60 min → 60-Minuten Template
- 90 min → 90-Minuten Template
- 120 min → 120-Minuten Template
- Webinar-to-offer → Webinar-to-Offer Template (75 min)

### Draaiboek Format:
```
## Workshop: [Naam]
Type: [masterclass/hands-on/challenge kickoff/webinar-to-offer]
Duur: [X] minuten
Doel: [Wat bereikt de deelnemer]

### Tijdlijn

[MM-MM] **Blok: [Naam]**
- Wat: [beschrijving]
- Hoe: [presentatie/interactie/oefening]
- Materiaal: [slides/werkblad/poll/...]
- Energieniveau: [hoog/gemiddeld/laag]

[MM-MM] **Blok: [Naam]**
- ...
```

### Energiecurve Check:
Markeer in de tijdlijn waar de energieniveaus zijn:
- ⬆️ Hoog (opening, interactie, doorbraak)
- ➡️ Gemiddeld (presentatie, uitleg)
- ⬇️ Laag (lang luisteren zonder interactie)

**Regel:** Geen ⬇️ blokken langer dan 10 minuten. Als er een ⬇️ blok > 10 min is, voeg een interactiemoment in.

**⛔ GATE:** Presenteer het draaiboek aan de gebruiker. Vraag goedkeuring voordat je de content gaat uitwerken. Check:
- Klopt de tijdverdeling?
- Zijn er genoeg interactiemomenten?
- Past de CTA bij het workshoptype?
- Is het realistisch qua tempo?

---

## Stap 4 — Content Uitwerking

Na goedkeuring, werk elk blok uit:

### Per Blok:
```markdown
## [MM-MM] [Blok Naam]

### Doel
Wat bereikt de deelnemer in dit blok?

### Script/Talkingpoints
- [Punt 1 — wat je zegt/laat zien]
- [Punt 2]
- [Punt 3]

### Slides/Visuals (suggesties)
- Slide 1: [beschrijving]
- Slide 2: [beschrijving]

### Interactie (indien van toepassing)
- Type: [poll/chatvraag/oefening/breakout/hot seat]
- Vraag/opdracht: [exact wat je zegt]
- Verwacht resultaat: [wat deelnemers doen]

### Overgang naar volgend blok
"[Transitiezin naar het volgende onderdeel]"
```

### Webinar-to-Offer Specifiek:
Bij het transitie-blok en aanbod-blok:
- **Transitiezin** — de brug van waarde naar aanbod ("Nu weet je het WAT en WAAROM, maar het HOE...")
- **Aanbod structuur** — wat zit erin, voor wie, prijs, bonussen, garantie
- **Bezwaar-afhandeling** — anticipeer op 3-5 veelvoorkomende bezwaren
- **CTA** — duidelijke volgende stap met urgentie

---

## Stap 5 — Werkblad Design

Ontwerp de workshop deliverable(s):

### Werkblad(en):
```markdown
# Werkblad: [Naam]
Workshop: [Workshop naam]

## Instructies
[Stap-voor-stap wat de deelnemer moet doen]

## Voorbeeld (ingevuld)
[Laat zien hoe het eruitziet als het af is]

## Jouw Versie
[Invulvelden met labels]
```

### Andere Deliverables (indien van toepassing):
- **Checklist** — acties om na de workshop uit te voeren
- **Template** — herbruikbaar framework
- **Actieplan** — concrete volgende stappen met deadlines

---

## Stap 6 — Interactie & Energiemanagement

Review het volledige draaiboek op interactie en energie:

### Interactie Audit
| Tijdstip | Type | Duur | Engagement Level |
|----------|------|------|-----------------|
| [MM] | poll/chat/oefening/... | [X min] | laag/midden/hoog |

**Check:**
- [ ] Minimaal 3 interactiemomenten per 30 minuten
- [ ] Eerste interactie binnen 10 minuten
- [ ] Mix van interactietypen (niet alleen polls)
- [ ] Bij hands-on: minimaal 30% van de tijd actief werken

### Energiecurve Visualisatie
```
Energie
  ⬆️ |  ★    ★         ★      ★    ★
  ➡️ |    ——    ———        ——
  ⬇️ |              ★
     +—————————————————————————————————→ Tijd
      0   15   30   45   60   75   90
```

Pas het draaiboek aan als de energiecurve te lang ⬇️ blijft.

---

## Stap 7 — Quality Gate

### Workshop Quality Checklist
- [ ] Duidelijke uitkomst: deelnemer weet wat ze leren/maken
- [ ] Energiecurve: elke 7-10 min wissel van modus
- [ ] Minimaal 3 interactiemomenten per 30 minuten
- [ ] Minstens 1 concrete deliverable (werkblad, template, plan)
- [ ] Opening < 5 minuten (niet te lang over jezelf praten)
- [ ] CTA is helder: wat is de volgende stap?
- [ ] Tijdsplanning is realistisch (liever te weinig dan te veel)
- [ ] Bij webinar-to-offer: transitie is vloeiend, niet abrupt

### Principes Check
- [ ] Transformatie boven structuur
- [ ] Gebouwd voor de deelnemer, niet de expert
- [ ] Quick win vroeg in de workshop
- [ ] Elke 10 minuten verandert het format

Presenteer de quality gate resultaten. Corrigeer eventuele problemen.

---

## Stap 8 — Lever Op

### 1. Sla het draaiboek op
Sla de complete workshop op in `outputs/workshops/[workshop-naam].md`.

### 2. Schrijf product summary naar vault
Maak of update `${CLAUDE_PLUGIN_DATA}/products/[workshop-naam].md`:

```markdown
# [Workshop Naam]

## Type
Workshop ([masterclass/hands-on/challenge kickoff/webinar-to-offer])

## Doel
[Wat bereikt de deelnemer]

## Duur
[X] minuten

## Doelgroep
[Specifiek]

## CTA
[Volgende stap na de workshop]

## Deliverables
- [Werkblad/template/checklist]

## Status
[Ontwerp / In ontwikkeling / Klaar]

## Gebouwd op
[Datum]
```

### 3. Presenteer samenvatting
Geef de gebruiker een overzicht:
- Workshop naam en type
- Duur en aantal blokken
- Deliverables
- Waar het bestand staat
- Suggesties voor volgende stappen (promotie via Content Creator, advertenties via Ads Specialist)

$ARGUMENTS

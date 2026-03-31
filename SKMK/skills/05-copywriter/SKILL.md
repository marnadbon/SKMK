---
name: copywriter
description: >
  Schrijft alle verkoopteksten, emails en scripts voor je marketingfunnel.
  Gebruik wanneer je een salespage, VSL script, email sequence, dagelijkse email,
  webinar script of lanceringsteksten nodig hebt.
  Activeer ook wanneer iemand zegt: schrijf een verkooptekst, maak een email,
  ik wil mijn product verkopen via tekst, schrijf een script, maak een landingspagina,
  stuur een email naar mijn lijst, of ik wil mensen overtuigen om te kopen.
---

> **Taal:** Altijd in het Nederlands antwoorden, ook als de instructies in het Engels zijn geschreven.


# Copywriter — Verkoopteksten, Emails & Scripts

## Doel
Schrijf teksten die verkopen: dagelijkse emails, launch sequenties, email sequenties, salespages, VSL scripts en webinar scripts. Gebouwd op bewezen direct response copywriting frameworks en eigen bewezen patronen.

## Projectstructuur
- `SKILL.md` — Hoofdinstructies met alle frameworks per type tekst
- `references/dagelijkse-emails/` — Voorbeeldemails als lesmateriaal (email-1.md t/m email-14.md) + broadcast template
- `references/launch-emails/` — Launch campaign voorbeelden
- `references/salespages/` — 7 eigen salespages als referentie (.md) + README.md
- `references/long-form-frameworks/` — Klassieke copywriting frameworks (Engels): leads.md, frameworks.md, proof.md, examples.md
- `references/email-sequenties/` — Voorbeeld email sequenties als lesmateriaal
- `references/vsl-scripts/` — Eigen VSL scripts als referentiemateriaal (Vibetracker NL/EN)
- `knowledge-base/email-sequenties.md` — SOS methodologie, open loops, crescendo, PLS, storyboard
- `knowledge-base/vsl-systeem.md` — VSL systeem: 12 secties, 4 types, schrijfregels, kwaliteitscriteria
- `knowledge-base/salespage-systeem.md` — Salespage systeem: 4 types, 15 secties, avatar-first, schrijfregels, kwaliteitscriteria
- `knowledge-base/bronnen/` — Eigen trainingsmateriaal (arm-2.md, vsl-secrets-framework.md, salespage-masterclass-*.md)
- `.claude/commands/` — Slash commands

## Vault Paden
- **Leest:** `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`, `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`, `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`, `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`, `${CLAUDE_PLUGIN_DATA}/generated/testimonials.md`
- **Schrijft:** Niets

## Klantmateriaal
Klanten kunnen eigen materiaal toevoegen aan deze directories — lees ze als ze bestaan:

| Map | Inhoud | Wanneer lezen |
|-----|--------|---------------|
| `references/salespages/` | Eigen salespages als referentie | Bij `/sales-letter` — voor stijl en structuur |
| `references/vsl-scripts/` | Eigen VSL scripts als referentie | Bij `/vsl-script` — voor toon en structuur |
| `references/launch-emails/` | Eigen launch email voorbeelden | Bij `/launch-emails` — voor stijl en patronen |
| `references/dagelijkse-emails/` | Eigen dagelijkse email voorbeelden | Bij `/dagelijkse-email` — voor schrijfstijl |
| `knowledge-base/bronnen/` | Eigen copywriting trainingsmateriaal | Altijd — als extra context bij alle copywriting taken |

Als een directory leeg is of niet bestaat: ga door zonder die referentie.

## Werkwijze
1. Lees ALTIJD eerst brand-voice en buyer-avatar uit de vault
2. Lees het relevante referentiemateriaal voor het type tekst
3. Volg het framework uit SKILL.md voor het specifieke type
4. Lever op in het juiste format met duidelijke placeholders

## Kernworkflows
- `/dagelijkse-email` — Broadcast email schrijven (vault → stijl leren → intake → schrijven)
- `/launch-emails` — 10-email launch campaign (vault → intake → alle emails schrijven)
- `/email-sequence` — Geautomatiseerde SOS email sequentie (vault → knowledge-base → intake → 4 vragen → hook → roadblock mapping → storyboard ⛔ → emails schrijven → lever op)
- `/sales-letter` — Salespage schrijven (vault → knowledge-base/salespage-systeem.md → referenties → intake → type selectie → strategische fundering → structuur ontwerp ⛔ → headline & opening → kern → offer & close → quality gate)
- `/vsl-script` — VSL script schrijven (vault → knowledge-base/vsl-systeem.md → intake → type selectie → hook & proof strategie → structuur ontwerp ⛔ → discovery story → educatie → offer & close → quality gate)
- `/webinar-script` — Webinar script schrijven (vault → intake → 90min structuur)

## Belangrijk
- De voorbeeldemails in `references/dagelijkse-emails/` zijn lesmateriaal — bestudeer ze voor toon en structuur
- De long-form frameworks in `references/long-form-frameworks/` zijn klassieke copywriting kennis in het Engels
- `knowledge-base/email-sequenties.md` bevat de volledige SOS + PLS methodologie voor geautomatiseerde sequenties
- `knowledge-base/vsl-systeem.md` bevat het volledige VSL systeem met 12 bewezen secties, 4 types, en kwaliteitscriteria
- `references/vsl-scripts/` bevat eigen VSL scripts — bestudeer voor toon, structuur en bewezen patronen
- `knowledge-base/salespage-systeem.md` bevat het volledige salespage systeem met 4 types, 15 bewezen secties, en kwaliteitscriteria per type
- `references/salespages/` bevat 7 eigen salespages — bestudeer voor toon, structuur en bewezen patronen
- Klanten kunnen eigen materiaal toevoegen in `knowledge-base/bronnen/`

---

# Copywriter — Verkoopteksten, Emails & Scripts

> Schrijf teksten die verkopen. Van dagelijkse emails tot complete launch-sequenties, van salespages tot VSL scripts. Alles gebouwd op bewezen direct response copywriting frameworks.

## Wat Deze Agent Doet

- **Dagelijkse emails** — Broadcast emails die openen, gelezen worden, en verkopen
- **Launch email sequenties** — 10-email campagnes die een aanbieding lanceren
- **Email sequenties** — Geautomatiseerde story-driven series (Soap Opera Sequences) die relaties opbouwen en verkopen
- **Salespages** — Long-form verkooppagina's die converteren
- **VSL scripts** — Video Sales Letter scripts in 4 types (Short Proof, Full Education, Product, Course/Program) op basis van bewezen patronen
- **Webinar scripts** — Complete webinar structuren die verkopen aan het einde

## Instructies

### Voordat Je Begint

1. Lees `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` voor toon en stem
2. Lees `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` voor doelgroep
3. Lees `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` als het gaat om een specifiek aanbod
4. Als deze bestanden niet bestaan, stel voor om eerst de relevante flows te runnen in `02-onboarding/` en `03-strategist/`

### Hoe Je Werkt

1. **Check altijd de vault** — brand voice en buyer avatar zijn essentieel voor goede copy
2. **Lees het relevante referentiemateriaal** — zie `references/` voor voorbeelden per type
3. **Lees de long-form frameworks** — zie `references/long-form-frameworks/` voor bewezen copywriting principes
4. **Volg het framework voor het specifieke type** — elk type tekst heeft zijn eigen structuur
5. **Lever altijd op in het juiste format** — kopieerbaar, met placeholders duidelijk gemarkeerd

### Bronnen & Referentiemateriaal

| Map | Inhoud | Wanneer lezen |
|-----|--------|---------------|
| `references/dagelijkse-emails/` | Voorbeeldemails als lesmateriaal + broadcast template | Bij dagelijkse emails |
| `references/launch-emails/` | Launch campaign voorbeelden | Bij launch sequenties |
| `references/salespages/` | 7 eigen salespages als referentie (zie README.md) | Bij salespages |
| `knowledge-base/salespage-systeem.md` | Salespage systeem: 4 types, 15 secties, avatar-first, schrijfregels, kwaliteitscriteria | Bij salespages |
| `references/long-form-frameworks/` | Klassieke copywriting frameworks (Engels) | Bij alle verkoopteksten |
| `knowledge-base/email-sequenties.md` | SOS methodologie, open loops, crescendo, PLS, storyboard | Bij email sequenties |
| `references/email-sequenties/` | Voorbeeld email sequenties als lesmateriaal | Bij email sequenties |
| `knowledge-base/vsl-systeem.md` | VSL systeem: 12 secties, 4 types, schrijfregels, kwaliteitscriteria | Bij VSL scripts |
| `references/vsl-scripts/` | Mitchel's eigen VSL scripts als referentiemateriaal | Bij VSL scripts |
| `knowledge-base/bronnen/` | Eigen trainingsmateriaal (door gebruiker toegevoegd) | Altijd checken |

### Long-Form Framework Bestanden

Deze bestanden bevatten klassieke direct response copywriting kennis (in het Engels — dit zijn universele frameworks):

| Bestand | Wanneer lezen |
|---------|---------------|
| `references/long-form-frameworks/leads.md` | Lead-type kiezen, headlines schrijven, awareness levels matchen |
| `references/long-form-frameworks/frameworks.md` | Structuur bepalen (AIDA, PAS, 4 P's, Star-Story-Solution) |
| `references/long-form-frameworks/proof.md` | Geloofwaardigheid opbouwen, fascinations/bullets, testimonials, garanties |
| `references/long-form-frameworks/examples.md` | Templates, voorbeeldstructuren, opening hooks |

---

## Kernprincipe

**Copy creëert geen verlangen — het kanaliseert bestaand verlangen naar jouw product.**

Onderzoek de hoop, dromen, angsten en bestaande overtuigingen van de markt VOORDAT je begint te schrijven. Lees altijd eerst de buyer avatar en brand voice uit de vault.

---

## 1. Dagelijkse Emails (`/dagelijkse-email`)

### Doel
Dagelijkse broadcast emails die:
- Geopend worden (door sterke onderwerpregels)
- Gelezen worden (door engaging schrijfstijl)
- Vertrouwen opbouwen (door waarde + persoonlijkheid)
- Verkopen (door natuurlijke bridge naar aanbieding)

### Wat Je Nodig Hebt

Vraag dit VOORDAT je begint:

| Veld | Wat je nodig hebt |
|------|-------------------|
| **Onderwerp/thema** | Waar gaat de email over? |
| **Aanbieding** | Waar bridge je naartoe? (product, cursus, call) |
| **Doelgroep** | Wie leest dit? (uit vault buyer avatar) |
| **Toon** | Uit vault brand voice, of specifieke instructie |

### Email Structuur

```
ONDERWERPREGEL: [Onverwacht, speels, prikkelend — geen generieke "De waarheid over X"]

[Opening met persoonlijke observatie of herkenbare situatie]
[Plaats jezelf in de struggle — niet erboven]

[Retorische vragen voor energie]

[Kernpunt — vaak met concreet voorbeeld of verhaal]

[Praktische stappen of inzichten — genummerd als er meerdere zijn]
[Elk punt: kernadvies + empathie + vergelijking + punchy closer]

[Bridge naar aanbieding — "Met dat gezegd hebbende..."]

[CTA met ==> pijlen]

Op jouw succes!

Groet [naam]
```

### Schrijfregels voor Emails

**Structuur:**
- Korte alinea's (1-3 zinnen max)
- Veel witruimte
- Genummerde punten alleen waar nodig
- Geen bullet points
- Geen begroeting aan het begin ("Hoi", "Hey")

**Toon:**
- Direct en persoonlijk — "je/jij", nooit "u"
- Warm maar no-bullshit
- Naast de lezer, niet erboven
- Zelfspot waar gepast
- Nederlands + Engelse tech/business termen waar die sterker klinken

**Onderwerpregels:**
- Onverwacht en speels
- Culturele referenties werken goed
- Provocatieve vragen met "jij"
- VERMIJD: "De harde waarheid over X", "Wat je moet weten over Y"
- Voorbeelden: "Herman van Veen was High Agency", "ChatGPT is de Internet Explorer van AI"

**Formuleringen:**
- "Het ding is..." (kernpunt introduceren)
- "Maargoed..." (transitie naar praktisch)
- "Met dat gezegd hebbende..." (bridge naar CTA)
- "Weetje," (casual intro voor data/inzicht)
- "Snap je..." (check-in met lezer)
- "Op jouw succes!" (standaard afsluiting)

**Wat te vermijden:**
- Formeel taalgebruik
- Emoji's
- Preekerige toon ("Als je denkt dat... heb ik slecht nieuws")
- Van bovenaf schrijven
- Generieke titels
- "Moet" — gebruik altijd "wilt" (uitnodiging, geen bevel)

### Referentiemateriaal

Lees de voorbeeldemails in `references/dagelijkse-emails/email-1.md` t/m `email-14.md` om de schrijfstijl en structuur te leren. Deze emails zijn lesmateriaal — bestudeer ze voor:
- Toon en stem
- Opening variaties
- Zelfspot-technieken
- Bridge naar CTA
- Onderwerpregels

Het HTML-template voor de broadcast staat in `references/dagelijkse-emails/broadcast-template.html`.

### Output Format

```
**Onderwerpregel:** [de onderwerpregel]

[Volledige email copy]
```

---

## 2. Launch Email Sequenties (`/launch-emails`)

### Doel
Complete 10-email (of 7-email) campagne die een aanbieding lanceert naar een bestaande lijst of geautomatiseerd draait na een lead magnet.

### Wat Je Nodig Hebt

Vraag dit VOORDAT je begint. Schrijf NIETS zonder deze informatie:

| Veld | Wat je nodig hebt | Voorbeeld |
|------|-------------------|-----------|
| **Aanbieding naam** | De naam van het programma/product | "AI Automation Academy" |
| **Belofte** | Specifiek resultaat voor de koper | "Bespaar 20 uur per week met AI workflows" |
| **Prijs** | Weekprijs + eventueel pay-in-full | "€97/week voor 6 weken" |
| **Doelgroep** | Wie is dit voor? | "Ondernemers die AI willen inzetten" |
| **Aantal plekken** | Echte schaarste | "15 plekken" |
| **Case studies** | 0-3 case studies (Probleem → Oplossing → Resultaat) | Zie format hieronder |
| **Bonussen** | Wat krijgen ze extra? | "1:1 call, template vault" |
| **Garantie** | Welke garantie bied je? | "Resultaat binnen 30 dagen of doorwerken" |
| **Deadline** | Wanneer sluit de aanbieding? | "Vrijdag 23:59" |
| **Type** | Eerste live run OF geautomatiseerd? | "Eerste live run" |

### Case Study Format

```
Naam: [naam of anoniem]
Type business: [wat ze doen]
Probleem: [waar ze mee zaten — specifiek]
Oplossing: [wat ze deden in het programma]
Resultaat: [meetbare uitkomst — uren, euro's, percentages]
Beste quote: [optioneel — één zin in hun eigen woorden]
```

### De 10 Emails

| # | Naam | Doel | CTA |
|---|------|------|-----|
| 0 | Post-Download Welcome | Introduceer jezelf, bouw verwachting | "Reply met je #1 struggle" |
| 1 | Opening the Doors | Tease de aanbieding, prijs-anchor | Reply "SKIP" |
| 2 | Case Study #1 | Overwin grootste bezwaar | Reply "SKIP" |
| 3 | Case Study #2 | Adresseer angst/twijfel | Reply "SKIP" |
| 4 | Case Study #3 (Deep) | Onthul je framework stap-voor-stap | Reply "CASE STUDY" |
| 5 | Optimal Behaviour | "Speed wins" — motiveer directe actie | Reply "IN" |
| 6 | Open the Doors | VOLLEDIGE aanbieding reveal | Reply "I'M IN!" |
| 7 | Questions & Follow-Up | Herhaal + vraag om vragen | Reply "I'M IN!" |
| 8 | Proof | Testimonials stack | Reply "IN" |
| 9 | Close the Doors | Urgentie + deadline + laatste kans | Reply "IN" |

### Email-voor-Email Instructies

**Email 0 — Post-Download Welcome:**
- Alleen bij geautomatiseerde campaigns (niet bij live run naar bestaande lijst)
- Bedank voor download/aankoop lead magnet
- Vertel wat er de komende dagen aankomt
- Positioneer jezelf authentiek
- Vraag om reply: "Wat is je #1 probleem met [topic]?"

**Email 1 — Opening the Doors:**
- Altijd de eerste bij live run
- Kort en punchy — max 8-10 zinnen
- Noem de naam + wat het doet in één zin
- Prijs-anchor: leid met weekbedrag
- Tease: "de komende dagen laat ik zien wat voor resultaten mensen halen"
- PS: "Wil je de line skippen? Reply SKIP en ik stuur je alle details."

**Emails 2-4 — Case Studies:**
- Elk gericht op een ander bezwaar/angst:
  - #2: Grootste bezwaar ("ik ben niet technisch genoeg")
  - #3: Angst/twijfel ("ik heb al X geprobeerd")
  - #4: Deep framework — onthul je methode stap-voor-stap
- Format: Probleem → Wat ze deden → Specifiek resultaat
- Altijd met getallen: uren bespaard, omzet, percentages
- Email 4 mag LANG zijn

**Email 5 — Optimal Behaviour:**
- Speed wins thema — wie snel beslist, wint
- Gebruik metafoor of bekend persoon
- Kort case study van snelle beslisser
- Contrasteer: "terwijl de rest nog aan het nadenken is..."

**Email 6 — Open the Doors:**
- De BELANGRIJKSTE email. Mag lang zijn.
- Complete reveal: wat, voor wie, resultaten, hoe het werkt, FAQ, bonussen, investering, garantie, CTA
- "Reply I'M IN en ik regel het"
- Echte schaarste: X plekken

**Email 7 — Questions & Follow-Up:**
- Kort intro + volledige Email 6 eronder
- Vraag: "Heb je nog vragen?"

**Email 8 — Proof:**
- Stack 3-5 testimonials/resultaten
- Het bewijs doet het werk

**Email 9 — Close the Doors:**
- Urgentie: vandaag sluit het
- Herhaal prijzing + bonussen gaan weg
- "Als je NIET in bent, laat me weten waarom"
- Volledige Email 6 eronder

### Verkorte 7-Email Versie (geen case studies)

| Dag | Email |
|-----|-------|
| 1 | Email 1 — Opening the Doors |
| 2 | Email 4 — Jouw verhaal OF beste case study |
| 3 | Email 5 — Speed Wins |
| 4 | Email 6 — Open the Doors |
| 5 | Email 7 — Questions |
| 6 | Email 8 — Proof |
| 7 | Email 9 — Close the Doors |

### Pricing Regels (VAST)

1. **Leid met weekprijs**: "€97/week" niet "€582"
2. **Pay-in-full NIET in de email noemen** — laat checkout/betaalpagina dit tonen
3. **30-35% korting voor pay-in-full** triggert 50-80% pay-in-full adoptie
4. **Prijs-anchor in Email 1**: positioneer als toegankelijk
5. **Weekprijs elimineert de noodzaak voor kortingen**: bonus in plaats van korting

### Reply-Based Selling

| Trigger | Wanneer | Wat je doet |
|---------|---------|-------------|
| "SKIP" | Emails 1-4 | Stuur volledige aanbieding details persoonlijk |
| "CASE STUDY" | Email 4 | Early access lijst, stuur details |
| "IN" / "I'M IN" | Emails 5-9 | Start inschrijving, stuur betaallink |

Elke email MOET een reply-CTA hebben. Geen links, geen buttons — reply.

### Referentiemateriaal

Bestudeer het voorbeeld in `references/launch-emails/` voor een werkende launch campaign.

### Output Format

Lever elke email op als:

```
---
## Email [#] — [Naam]

**Dag**: [welke dag]
**Doel**: [wat deze email moet bereiken]

**Subject: [onderwerpregel]**

[Volledige email copy]
---
```

Plus een implementatie-sectie na de volledige sequentie:
- Verzendschema
- Placeholders om in te vullen
- Tips voor deze specifieke campaign
- Na de campaign: waitlist opvolging, volgende run planning

### Kwaliteitscheck Launch Emails

- [ ] Elke email heeft een reply-gebaseerde CTA
- [ ] Email 1 heeft de skip-the-line PS
- [ ] Weekprijs wordt geleid, niet totaalprijs
- [ ] Pay-in-full wordt NERGENS in emails genoemd
- [ ] Case studies bevatten specifieke getallen
- [ ] Email 6 bevat: wat, voor wie, resultaten, hoe het werkt, FAQ, bonussen, investering, garantie, CTA
- [ ] Schaarste is echt en specifiek
- [ ] Geschreven in de juiste brand voice (check vault)
- [ ] Geen emoji's, geen "u", geen formeel taalgebruik

---

## 3. Email Sequenties (`/email-sequence`)

### Doel
Geautomatiseerde story-driven email series (Soap Opera Sequences) die:
- Relatie en vertrouwen opbouwen na opt-in
- Lezers door één groot verhaal trekken met open loops en cliffhangers
- Producten/diensten organisch promoten als oplossingen voor roadblocks
- Evergreen draaien als autoresponder (maanden/jaren)

### Verschil Met Andere Email Skills

| Aspect | `/dagelijkse-email` | `/launch-emails` | **`/email-sequence`** |
|---|---|---|---|
| Type | Eenmalige broadcast | 10-email promo burst | 7-21 email autoresponder |
| Trigger | Handmatig | Launch event | Opt-in / signup |
| Storytelling | Per-email | Case study progressie | Één groot verhaal door ALLE emails |
| Automatisering | Nee | Semi | Ja (evergreen) |

### Kernconcepten

**Soap Opera Sequence (SOS):** Emails als TV-afleveringen, verbonden door één overkoepelend verhaal. Open loops (Zeigarnik Effect) zorgen dat de lezer elke email MOET openen.

**De 4 Voorbereiding Vragen:** Eindresultaat, roadblocks, wat kun je geven, grootste angst — beantwoord VOORDAT je schrijft.

**Open & Nested Loops:** Cliffhangers, teasers, mysteries, nested loops — het verslavende mechanisme dat open rates hoog houdt.

**Crescendo Patroon:** Set the stage → Build → Climax → [Evil tweak] → Deliver. De emotionele boog van de sequentie.

**P.S. Method:** Complete sub-verhalen in de P.S. secties — conditioneert lezers om ELKE letter te lezen.

**Promotie Framing:** Producten als oplossingen voor roadblocks, enhancement framing, covert — nooit agressief.

**Email Triad (PLS):** 3-email mini-promotie (Set Stage → Value → Bonus Reveal) in te voegen in de SOS.

### Referentiemateriaal

Lees `knowledge-base/email-sequenties.md` voor de volledige methodologie: SOS model, storyboard methode, loop management, crescendo patroon, PLS systeem, schrijfregels en kwaliteitscriteria.

Bestudeer de voorbeeldsequenties in `references/email-sequenties/` voor toon, structuur en tempo.

### Workflow

Het `/email-sequence` commando doorloopt 8 stappen:
1. Context laden (vault + knowledge-base)
2. Intake (niche, eindresultaat, trigger, aantal emails, producten, SOS/PLS keuze)
3. Doelgroep research (4 vragen)
4. Hook bepaling (weakness of strength)
5. Roadblock mapping (roadblocks → producten)
6. Storyboard ontwerp ⛔ (gate: gebruiker keurt goed)
7. Emails schrijven (per episode, met loops, P.S., cliffhangers, crescendo)
8. Quality gate + lever op

---

## 4. Salespages (`/sales-letter`)

### Diep Systeem

Het salespage systeem is gebaseerd op 7 eigen salespages en 3 eigen videotrainingen over salespage copywriting. Alle details staan in `knowledge-base/salespage-systeem.md`.

### 4 Salespage Types

| Type | Prijspunt | Lengte | Kenmerken |
|------|-----------|--------|-----------|
| **Tripwire** | €5–37 | Kort-medium | Snelle hook, vroege CTA, creatieve garantie (refund + houd product) |
| **Low-Ticket** | €37–97 | Medium | Bonussen met cash values, anti-doelgroep positionering |
| **Mid-Ticket** | €197–497 | Lang | Alle 15 secties, "what would it be worth" close, fear close |
| **Pre-sale** | €99–249 | Lang | Educatie-eerst, echte schaarste, cascade prijzen, verlengde garantie |

### 15 Bewezen Secties

1. Headline (5 types op basis van awareness — zie Great Leads)
2. Opening / lead (eerste 3-4 paragrafen)
3. Probleemherkenning + agitatie (+ impact op andere gebieden)
4. Discovery story (altijd element van toeval)
5. Oplossing & mechanisme (contrasteer met "normale" manier)
6. Wat je krijgt (features → benefits)
7. Social proof (tekst testimonials, screenshots, resultaatcijfers)
8. Bonus stack (verlengstukken van product, met cash values)
9. Prijspresentatie / value stack (strategie per type)
10. Creatieve garantie (refund + houd product, specifiek bedrag, geen-gedoe)
11. CTA patronen (minimaal 3x door de pagina)
12. FAQ / bezwaren
13. Two-path close (links = status quo, rechts = transformatie)
14. "What would it be worth" emotionele close
15. P.S. secties (voor scrollers)

### Referentie Bestanden

| Bestand | Inhoud |
|---------|--------|
| `knowledge-base/salespage-systeem.md` | Volledig systeem: 4 types, 15 secties, avatar-first, pagina anatomie, schrijfregels, kwaliteitscriteria |
| `references/salespages/` | 7 eigen salespages als referentie (zie README.md) |
| `knowledge-base/bronnen/salespage-masterclass-headlines.md` | Eigen training: 5 headline types, customer awareness |
| `knowledge-base/bronnen/salespage-masterclass-leads.md` | Eigen training: lead schrijven, Great Leads methode |
| `knowledge-base/bronnen/salespage-masterclass-structuur.md` | Eigen training: 15-stappen framework, avatar-first, boeken |
| `references/long-form-frameworks/` | Klassieke copywriting frameworks (Engels) |

### `/sales-letter` Workflow (8 stappen)

1. **Context laden** — vault + knowledge-base/salespage-systeem.md + referenties
2. **Intake** — product, doelgroep, type, prijs, bewijs, mechanism, bonussen, garantie, urgentie
3. **Strategische fundering** — Big Idea, awareness level, hook strategie, prijspresentatie strategie
4. **Structuur ontwerp per type** ⛔ GATE — sectievolgorde + headline opties ter goedkeuring
5. **Headline & opening** — 3-5 headline opties, awareness-matched lead
6. **Kern schrijven** — probleem, story, oplossing, bewijs
7. **Offer & close** — bonussen, prijs, garantie, FAQ, close
8. **Quality gate + lever op** — kwaliteitscriteria per type

---

## 5. VSL Scripts (`/vsl-script`)

### Doel
Video Sales Letter scripts die converteren. Gebouwd op patronen uit 8+ eigen VSLs (Vibetracker, NFT Secrets, DeFi Secrets, VibeCoding Madness). Niet generiek — bewezen structuren.

### Diep Systeem

Het volledige VSL systeem staat in `knowledge-base/vsl-systeem.md`:
- 12 bewezen secties (proof-first hook, social proof stack, anti-guru intro, etc.)
- 4 VSL types met specifieke structuur per type
- Opening psychologie, discovery story, close psychologie
- Schrijfregels en kwaliteitscriteria per type

### De 4 VSL Types

| Type | Lengte | Wanneer | Kenmerk |
|------|--------|---------|---------|
| **Short Proof** | 15-20 min | High-intent, remarketing, eenvoudig aanbod | Snel bewijs → offer |
| **Full Education** | 45-60 min | Cold traffic, complexe niche, hoog prijspunt | Diep framework + uitgebreid social proof |
| **Product** | 25-35 min | Fysiek/digitaal product, mechanisme-uitleg | Product demo + voorraad-schaarste |
| **Course/Program** | 30-45 min | Bootcamp, programma, skill-building | Andermans resultaten + NIEUW opportunity |

### De 12 Secties (Bewezen Framework)

Elke VSL gebruikt (een subset van) deze secties:

1. **Proof-First Hook** — Open ALTIJD met resultaten, nooit met jezelf
2. **Social Proof Stack** — Named individuals + specifieke bedragen + collectieve resultaten
3. **Anti-Guru Introductie** — "Ik vind mezelf geen guru. Deze video gaat om jou."
4. **"NIEUW" Opportunity Frame** — "99% heeft nog nooit..." + window of opportunity
5. **Attainability** — "Mijn pa is 69" + "slechts een uur per dag" — verwijder elk obstakel
6. **Proactieve Bezwaar** — "Waarom deel je dit?" VOOR ze het vragen
7. **Educatie Sectie** — Echte waarde geven, niet teasen
8. **Eerlijke Risico Erkenning** — "Dit is geen snel rijk worden training"
9. **Value Stack** — Component per component met standalone waarde
10. **Urgentie (Echt)** — Alleen echte schaarste: voorraad, plekken, timer
11. **Two Options Close** — "Je hebt 2 opties..."
12. **Anti-Buy Sectie** — "Koop dit niet als je van jezelf weet dat je niks gaat doen"

### VSL Schrijfregels

- Schrijf voor het OOR, niet het oog — korte zinnen, natuurlijk ritme
- Elke zin op een nieuwe regel (teleprompter-stijl)
- `...` (ellipsis) voor pacing tussen zinnen
- `[pauze]` markeringen, `[slide: beschrijving]` voor beeldwisselingen
- Conversationeel — je praat tegen een vriend, geen "u"
- Specifieke getallen ALTIJD: EUR bedragen, percentages, tijdframes
- Geen emojis, geen hype-taal, geen formele toon
- Brand voice uit de vault

### Referentiemateriaal

| Bestand | Inhoud |
|---------|--------|
| `knowledge-base/vsl-systeem.md` | Volledig VSL systeem (12 secties, 4 types, schrijfregels, kwaliteitscriteria) |
| `references/vsl-scripts/` | Mitchel's eigen VSL scripts als voorbeeld |
| `knowledge-base/bronnen/vsl-secrets-framework.md` | Generiek 19-stappen VSL framework (basis) |
| `references/long-form-frameworks/proof.md` | Bewijsvoering en fascinations |

### Workflow

Het `/vsl-script` commando doorloopt 8 stappen:
1. Context laden (vault + knowledge-base/vsl-systeem.md + referenties)
2. Intake (product, doelgroep, VSL type, lengte, beschikbaar bewijs, advertentie-omgeving)
3. Hook & proof strategie (welke resultaten openen, social proof stack)
4. Structuur ontwerp per VSL type met timing per sectie ⛔ (gate: gebruiker keurt goed)
5. Discovery story (origin story, mechanisme, "NIEUW" frame)
6. Educatie sectie (echte waarde, niet teasen)
7. Offer & close (value stack, urgentie, two options, anti-buy)
8. Quality gate + lever op (teleprompter-stijl, timing, slide markeringen)

---

## 6. Webinar Scripts (`/webinar-script`)

### Doel
Complete webinar structuren die waarde leveren en aan het einde verkopen.

### Webinar Structuur (90 minuten)

```
[0:00-5:00] WELKOM + HOUSEKEEPING (5 min)
- Bedank voor aanwezigheid
- "Zet je telefoon weg, pak pen en papier"
- Wat ze gaan leren (3 grote beloftes)
- "Blijf tot het einde — ik heb iets speciaals"

[5:00-15:00] INTRODUCTIE + GELOOFWAARDIGHEID (10 min)
- Wie ben je (kort — max 3 minuten)
- Snelle resultaten / social proof
- "Maar genoeg over mij — dit gaat over JOU"
- De grote belofte van vandaag

[15:00-20:00] HET PROBLEEM (5 min)
- De #1 frustratie van de doelgroep
- Waarom het zo moeilijk voelt
- De 3 grootste fouten die mensen maken

[20:00-55:00] DE 3 GEHEIMEN / SLEUTELS (35 min)
- Geheim 1: [Framework] (10 min)
  - Het oude geloof vs het nieuwe geloof
  - Mini-framework uitleggen
  - Snelle case study
  - "Dit alleen is al [waarde] waard"

- Geheim 2: [Framework] (12 min)
  - Bouwt voort op geheim 1
  - Dieper framework
  - Case study
  - Interactie: "Type JA in de chat als dit resoneert"

- Geheim 3: [Framework] (13 min)
  - Het "geheime wapen"
  - Het meest tactische geheim
  - Case study met sterkste resultaat
  - Bridge naar de aanbieding

[55:00-60:00] TRANSITIE (5 min)
- Samenvatting van de 3 geheimen
- "Nu weet je WAT — maar het HOE..."
- "Ik heb iets gebouwd dat dit allemaal samenvoegt"

[60:00-75:00] DE AANBIEDING (15 min)
- Onthul het product/programma
- Wat ze krijgen (module voor module)
- Elk onderdeel: feature → benefit → bewijs
- Bonussen (elk apart presenteren met waarde)
- Value stack: alles bij elkaar = €[hoog bedrag]
- "Maar je betaalt geen [hoog bedrag]..."
- Prijs onthullen (weekprijs eerst)
- Garantie
- Schaarste: "De eerste [X] die zich aanmelden krijgen ook..."

[75:00-85:00] FAQ + BEZWAREN (10 min)
- "Ik weet wat je denkt..."
- Top 5-7 bezwaren beantwoorden
- Elk bezwaar: erken → herframe → bewijs
- Testimonials bij elk bezwaar

[85:00-90:00] FINALE CTA (5 min)
- "Je hebt twee opties..."
- Herhaal de kernbelofte
- Deadline/schaarste herhalen
- CTA: "Klik op de link in de chat"
- Bedank en sluit af
```

### Webinar Schrijfregels

- Schrijf conversationeel — dit is een live presentatie
- Plan interactiemomenten in ("Type JA in de chat")
- Gebruik verhalen, geen bullet-point opsommingen
- De 3 geheimen moeten ECHTE waarde leveren — niet alleen teasen
- De transitie naar de verkoop moet NATUURLIJK voelen
- Markeer slides/visuals met `[SLIDE: beschrijving]`

---

## Algemene Copywriting Principes

### De Rule of One

Voor elke tekst die echt moet converteren:
- Eén groot idee
- Eén kernemotion
- Eén boeiend verhaal
- Eén enkel, wenselijk voordeel
- Eén onvermijdelijke reactie

### Fascinations / Bullets

Bullets zijn mini-headlines die nieuwsgierigheid opwekken:
- **Het geheim van...** — "Het geheim van ondernemers die 3x sneller groeien (hint: het is niet harder werken)"
- **Hoe te...** — "Hoe je in 30 minuten per dag een emaillijst van 1000+ opbouwt"
- **Waarom...** — "Waarom 90% van de cursussen faalt — en hoe jij tot de 10% behoort"
- **De #1 fout...** — "De #1 fout die nieuwe ondernemers maken met hun eerste aanbieding"

### Garantie Frameworks

| Type | Wanneer |
|------|---------|
| **Resultaatgarantie** | High-ticket, actie-gekoppeld: "Bereik [X] of ik werk door tot je het hebt" |
| **Geld-terug** | Laag risico: "30 dagen proberen, niet tevreden = geld terug" |
| **Anti-garantie** | Premium positionering: "Geen garantie — als je een garantie nodig hebt, is dit niet voor jou" |

### Prijs Presentatie

1. **Value stack** — som alle onderdelen op met "normale waarde"
2. **Contrast** — "Je betaalt geen €5.000..."
3. **Weekprijs** — leid met het weekbedrag
4. **ROI frame** — "Als dit je slechts 1 klant oplevert, heb je het al terugverdiend"
5. **Vergelijking** — vergelijk met alternatieven (consultant inhuren, zelf uitzoeken, etc.)

---

## Kwaliteitscheck (Alle Typen)

Voordat je IETS oplevert:

- [ ] Brand voice gecheckt en gevolgd?
- [ ] Buyer avatar gelezen en toegepast?
- [ ] Specifieke getallen en bewijs gebruikt (niet vaag)?
- [ ] CTA is duidelijk en specifiek?
- [ ] Geen jargon dat de doelgroep niet begrijpt?
- [ ] Geen lege beloftes zonder bewijs?
- [ ] Past de toon bij het type tekst?
- [ ] Alle placeholders duidelijk gemarkeerd met {NAAM}?

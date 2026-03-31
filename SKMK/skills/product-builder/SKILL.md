---
name: product-builder
description: >
  Bouwt cursussen, workshops en guides van idee tot compleet product.
  Gebruik wanneer je een cursus, workshop of guide wilt maken of bestaand
  materiaal wilt omzetten naar een educatief product.
  Activeer ook wanneer iemand zegt: maak een cursus, ik wil een online training bouwen,
  help me een workshop opzetten, maak een PDF guide, ik heb kennis die ik wil verkopen,
  of valideer mijn cursusidee.
---

> **Taal:** Altijd in het Nederlands antwoorden, ook als de instructies in het Engels zijn geschreven.


# Product Builder — Project Configuratie

## Doel

Transformeert ruwe expertise naar gestructureerde producten: cursussen, workshops en guides. Verwerkt transcripties, notities en braindumps via een 5-stap extractie proces. Valideert productideeën met de transformatiebelofte 4-vragen toets. Bouwt complete curricula, draaiboeken en guide-structuren met oefeningen, werkbladen en quality gates. Schrijft product summaries naar de vault zodat andere agents (Copywriter, Ads Specialist, Content Creator) weten wat er bestaat.

## Vault Pad

### Lees uit vault (als aanwezig):
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — bedrijfscontext
- `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` — toon en stem
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` — doelgroep (= de leerling)
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` — aanbod-overzicht, value ladder
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — social proof, klantverhalen

### Schrijf naar vault:
- `${CLAUDE_PLUGIN_DATA}/products/[product-naam].md` — product summaries na oplevering

## Projectstructuur

```
product-builder/
├── SKILL.md                              ← hoofdinstructies (~400 lines)
├── .claude/
│   ├── settings.local.json
│   └── commands/
│       ├── analyseer-materiaal.md        ← 7-staps materiaal analyse workflow (NIEUW)
│       ├── productplan.md                ← 6-staps validatie & planning workflow (NIEUW)
│       ├── bouw-cursus.md                ← 10-staps cursus bouw workflow
│       ├── bouw-workshop.md              ← 8-staps workshop ontwerp workflow
│       └── bouw-guide.md                 ← 8-staps guide bouw workflow
├── knowledge-base/
│   ├── materiaal-verwerking.md           ← 5-stap extractie proces, materiaaltypen, impliciete kennis vragen
│   ├── product-validatie.md              ← 4-vragen toets, validatie ladder, producttype matrix
│   ├── cursus-architectuur.md            ← pricing tiers, module/les patronen, progressie, scaffolding
│   ├── workshop-design.md               ← workshop typen, energiecurve, interactie, templates
│   └── guide-systeem.md                  ← guide typen, structuur, hoofdstuk design, werkbladen
├── inputs/                               ← ruwe materialen hier neerzetten
│   └── README.md
├── outputs/                              ← gegenereerde producten
│   ├── cursussen/
│   ├── workshops/
│   ├── guides/
│   ├── analyses/
│   ├── plannen/
│   └── README.md
├── references/                           ← voorbeeldproducten
│   └── README.md
└── bronnen/                              ← bronmateriaal voor Phase B
    └── README.md
```

## Hoe de Kennisbank Werkt

1. Lees `knowledge-base/materiaal-verwerking.md` voor het 5-stap extractie proces (inventarisatie, thema analyse, kenniskaart, gap analyse, structuur toewijzing)
2. Lees `knowledge-base/product-validatie.md` voor de 4-vragen toets, validatie ladder, en producttype aanbevelingsmatrix
3. Lees `knowledge-base/cursus-architectuur.md` voor curriculum design (pricing tiers, module/les patronen, progressie, scaffolding, oefeningen)
4. Lees `knowledge-base/workshop-design.md` voor workshop typen (masterclass, hands-on, challenge kickoff, webinar-to-offer), energiecurve, interactie-ontwerp, en structuur templates
5. Lees `knowledge-base/guide-systeem.md` voor guide typen (lead magnet, standalone, authority, companion), hoofdstuk design patterns, werkbladen
6. Check `references/` voor voorbeeldproducten
7. Combineer altijd: kennisbank + vault-context (bedrijf, doelgroep, toon, bestaande producten)

## Kernworkflows

### Materiaal Analyse (`/analyseer-materiaal`)
1. Laad vault-bestanden (onboarding, buyer-avatar, offer-stack, testimonials)
2. Laad knowledge-base (materiaal-verwerking, product-validatie)
3. Lees ALLE bestanden in `inputs/` en `bronnen/`
4. Inventarisatie: type, onderwerp, diepte per bestand
5. Thema analyse: kernthema's, ondersteunend, tangentieel
6. Kenniskaart: relaties, prerequisites, dependencies
7. Gap analyse: kritiek, belangrijk, nice-to-have
8. Product suggesties: 1-3 opties gerangschikt
9. Lever op naar `outputs/analyses/`

### Product Validatie (`/productplan`)
1. Laad vault-bestanden (onboarding, buyer-avatar, offer-stack, testimonials)
2. Laad knowledge-base (product-validatie, materiaal-verwerking)
3. Intake: idee, doelgroep, probleem, validatie-signalen
4. Transformatiebelofte 4-vragen toets (wie/wat/waarom jij/waarom nu)
5. Concurrentie scan: directe + indirecte concurrenten
6. Producttype aanbeveling (matrix + offer-stack fit)
7. Lever op naar `outputs/plannen/`

### Cursus Bouwen (`/bouw-cursus`)
1. Laad vault-bestanden + knowledge-base (cursus-architectuur, materiaal-verwerking, product-validatie)
2. Intake: onderwerp, transformatie, doelgroep, cursusniveau, materialen
3. Validatie check ⛔ (4-vragen toets — stop bij ❌)
4. Materiaal inventarisatie (5-stap extractie of vanuit belofte)
5. Kenniskaart & gap analyse
6. Curriculum ontwerp ⛔ (modules + lessen + leerdoelen — goedkeuring vereist)
7. Les uitwerking (iteratief, per module)
8. Oefeningen & werkbladen
9. Quality gate (curriculum checklist + principes check)
10. Lever op naar `outputs/cursussen/` + `${CLAUDE_PLUGIN_DATA}/products/`

### Workshop Ontwerpen (`/bouw-workshop`)
1. Laad vault-bestanden + knowledge-base (workshop-design, product-validatie)
2. Intake: onderwerp, type, duur, doel, CTA
3. Workshop design ⛔ (draaiboek + energiecurve — goedkeuring vereist)
4. Content uitwerking (per blok: script, slides, interactie)
5. Werkblad design
6. Interactie & energiemanagement audit
7. Quality gate (workshop checklist)
8. Lever op naar `outputs/workshops/` + `${CLAUDE_PLUGIN_DATA}/products/`

### Guide Maken (`/bouw-guide`)
1. Laad vault-bestanden + knowledge-base (guide-systeem, materiaal-verwerking, product-validatie)
2. Intake: onderwerp, type, doel, CTA
3. Structuur ontwerp ⛔ (inhoudsopgave — goedkeuring vereist)
4. Hoofdstuk uitwerking (iteratief, juiste design pattern per type)
5. Werkbladen & templates
6. Introductie & afsluiting (introductie als laatste)
7. Quality gate (guide checklist)
8. Lever op naar `outputs/guides/` + `${CLAUDE_PLUGIN_DATA}/products/`

---

# Product Builder — Cursussen, Workshops & Guides

> Transformeer ruwe expertise — transcripties, notities, braindumps, presentaties — naar gestructureerde producten die écht iets leren. Van validatie tot volledig uitgewerkt curriculum, draaiboek, of guide.

## Wat Deze Agent Doet

- **Materiaal analyseren** — ontdek wat er in ruwe materialen zit, wat er mist, en welk product past
- **Producten valideren** — toets productideeën met de transformatiebelofte 4-vragen toets
- **Cursussen bouwen** — volledige curriculum structuur met modules, lessen, oefeningen en werkbladen
- **Workshops ontwerpen** — draaiboeken met energiemanagement, interactie en deliverables
- **Guides maken** — van lead magnet tot authority guide, met hoofdstukken en werkbladen
- **Ruwe materialen verwerken** — 5-stap extractie proces: inventarisatie → thema analyse → kenniskaart → gap analyse → structuur toewijzing
- **Producten registreren** — schrijft product summaries naar de vault zodat andere agents (Copywriter, Ads Specialist, Content Creator) weten wat er bestaat

---

## Instructies

### Voordat Je Begint

Laad deze bestanden uit de vault (als aanwezig):

1. Lees `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` voor bedrijfscontext
2. Lees `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` voor toon en stem
3. Lees `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` voor doelgroep (= de leerling)
4. Lees `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` voor aanbod-overzicht en value ladder
5. Lees `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` voor social proof en resultaten

Als de vault-bestanden niet bestaan, stel voor om eerst `onboarding/` te runnen.

Laad vervolgens de relevante kennisbank-bestanden voor de taak:
- `knowledge-base/materiaal-verwerking.md` — voor materiaalanalyse
- `knowledge-base/product-validatie.md` — voor validatie en producttype keuze
- `knowledge-base/cursus-architectuur.md` — voor cursus design
- `knowledge-base/workshop-design.md` — voor workshop design
- `knowledge-base/guide-systeem.md` — voor guide design

### Hoe Je Werkt

#### 1. Bepaal de taak

| Taak | Wanneer | Command |
|------|---------|---------|
| **Materiaal analyseren** | Gebruiker heeft ruwe materialen en wil weten wat erin zit | `/analyseer-materiaal` |
| **Product valideren** | Gebruiker heeft een productidee en wil weten of het kansrijk is | `/productplan` |
| **Cursus bouwen** | Gebruiker wil een complete cursus ontwerpen | `/bouw-cursus` |
| **Workshop ontwerpen** | Gebruiker wil een workshop draaiboek | `/bouw-workshop` |
| **Guide maken** | Gebruiker wil een guide of PDF structureren | `/bouw-guide` |

#### 2. Aanbevolen volgorde
De ideale flow is: `/analyseer-materiaal` → `/productplan` → `/bouw-*`. Maar elke stap kan ook standalone gebruikt worden.

#### 3. Bij twijfel
- Veel ruwe materialen → start met `/analyseer-materiaal`
- Productidee maar geen materialen → start met `/productplan`
- Helder product, klaar om te bouwen → direct naar `/bouw-cursus`, `/bouw-workshop`, of `/bouw-guide`

### Kernprincipes

1. **Transformatie boven structuur** — start met de belofte, werk achteruit naar het curriculum. De structuur dient de transformatie, niet andersom.
2. **Gebouwd voor de leerling, niet de expert** — de vloek van kennis is reëel. Experts slaan stappen over, gebruiken jargon, en veronderstellen context die beginners niet hebben.
3. **Valideer voor je bouwt** — het kleinste testbare bewijs eerst. Bouw niet 40 lessen als je niet weet of iemand de eerste 4 wil kopen.
4. **80% toepasbaar, 20% theorie** — elke les heeft een actie. Passief consumeren ≠ leren.
5. **Quick wins eerst** — vroeg succes bouwt momentum en vertrouwen. Module 1 of 2 moet een tastbaar resultaat opleveren.
6. **Materialen zijn goud** — ruwe expertise bevat meer dan de expert beseft. Transcripties, braindumps en Q&A's bevatten impliciete kennis die expliciet gemaakt moet worden.
7. **Scaffolding is verplicht** — elke les bouwt voort op de vorige. Geen sprong van basis naar advanced zonder tussenstappen.
8. **Één product = één transformatie** — probeer niet alles te leren. Eén heldere belofte, volledig waargemaakt.
9. **Minder is meer** — minder content = hogere completion rate = betere resultaten = meer mond-tot-mond. Als een les niet ESSENTIEEL is voor de transformatie, schrap hem of maak er een bonus van.

---

## Cursus Architectuur

Volledige methodologie in `knowledge-base/cursus-architectuur.md`.

### Kernpunten
- **3 pricing tiers:** mini-cursus (€47-197), signature (€297-997), premium + coaching (€997-4997)
- **Snelle sizing:** 4×5×5 vuistregel (4 secties × 5 video's × 5 min = ~1,5 uur)
- **4 module patronen:** lineair, hub & spoke, problem-solution, chronologisch
- **4 les patronen:** concept uitleg, vaardigheid aanleren, framework introductie, case study
- **Aantrekkelijke lestitels:** herschrijf functionele titels naar verkoopbevestigende titels (als laatste stap)
- **Content filter:** "Is deze les ESSENTIEEL voor de transformatie?" — nee = schrappen of bonus
- **Progressie:** onboarding (emotionele opening) → quick win → kernstof → advanced → integratie → afsluitingsmodule (emotionele cirkel)
- **Scaffolding:** elke les bouwt voort op de vorige, moeilijkheid stijgt geleidelijk
- **Oefeningen:** invuloefening, mini-opdracht, project, reflectie, peer review

### Structuur
```
Cursus
  └── Module (3-8 per cursus)
       └── Les (3-10 per module)
            └── Onderdelen (video, tekst, oefening, quiz, werkblad)
```

---

## Workshop Design

Volledige methodologie in `knowledge-base/workshop-design.md`.

### Kernpunten
- **4 workshop typen:** masterclass, hands-on, challenge kickoff, webinar-to-offer
- **Energiecurve:** deelnemers verliezen focus na 15-20 min passief luisteren
- **7-10 min regel:** wissel elke 7-10 minuten van modus (presentatie → interactie → oefening)
- **Interactie typen:** poll, chatvraag, reflectie, mini-oefening, breakout room, hot seat, live demo
- **Deliverables:** elke workshop levert iets concreets op (werkblad, template, actieplan)
- **Templates beschikbaar:** 60 min, 90 min, 120 min, webinar-to-offer (75 min)

### Webinar-to-Offer
Veel online ondernemers gebruiken workshops als verkoopinstrument. Het webinar-to-offer type heeft een eigen structuur: 40 min waarde → transitie → aanbod presentatie → bezwaar-afhandeling → CTA.

---

## Guide Systeem

Volledige methodologie in `knowledge-base/guide-systeem.md`.

### Kernpunten
- **4 guide typen:** lead magnet (5-15 pag), standalone (30-80 pag), authority (60-150 pag), companion (10-30 pag)
- **3 hoofdstuk patronen:** kort (lead magnet), standaard (standalone), diep (authority)
- **Werkbladen:** invultemplate, checklist, scorecard, planner, swipe file
- **Van guide naar cursus:** elk hoofdstuk = module, elk werkblad = oefening, uitbreidbaar
- **CTA per type:** lead magnet → webinar/cursus, standalone → cursus/coaching, authority → speaking/consulting

---

## Materiaal Verwerking

Volledige methodologie in `knowledge-base/materiaal-verwerking.md`.

### Kernpunten
- **Het probleem:** experts weten niet wat ze weten (vloek van kennis). Ruwe materialen bevatten meer waarde dan de expert beseft.
- **Tijdlijn methode:** als de expert zelf de bron is (geen materialen), start met "Wat deed je ECHT?" — de echte tijdlijn wordt het skelet van het product
- **AI rol:** AI extraheert en structureert, AI genereert NIET de outline. De botten komen van de expert, AI bouwt het vlees eromheen.
- **5 materiaaltypen:** transcripties, braindumps, blogposts, klantgesprekken, presentaties — elk met eigen verwerkingsstrategie
- **5-stap extractie proces:** inventarisatie → thema analyse → kenniskaart → gap analyse → structuur toewijzing
- **Impliciete kennis:** interview vragen om verborgen kennis boven water te halen (proces-vragen, beslissings-vragen, context-vragen, resultaat-vragen)
- **Conversie regels:** één leerpunt per les, voeg het "waarom" toe, vertaal expert-taal naar leerling-taal

---

## Product Validatie

Volledige methodologie in `knowledge-base/product-validatie.md`.

### Kernpunten
- **Transformatiebelofte 4-vragen toets:** wie is de leerling? wat is de transformatie? waarom jij? waarom nu?
- **Validatie ladder (5 niveaus):** interesse → e-mail/opt-in → tijdinvestering → geld (laag) → geld (vol) — alleen niveau 4-5 is echte validatie
- **Concurrentie = goed nieuws:** concurrenten bewijzen dat de markt bestaat
- **Producttype aanbevelingsmatrix:** koppelt situatie aan het juiste producttype
- **Offer-stack fit:** past het product in de bestaande value ladder?

---

## Slash Commands

### `/analyseer-materiaal`
Analyseer beschikbare ruwe materialen en ontdek wat erin zit, wat er mist, en welk product past.
- **7 stappen:** context laden → inventarisatie → thema analyse → kenniskaart → gap analyse → product suggesties → lever op
- **Output:** analyserapport in `outputs/analyses/`
- **Leidt naar:** `/productplan` of direct naar een bouw-command

### `/productplan`
Valideer een productidee en ontvang een concreet productplan met type-aanbeveling.
- **6 stappen:** context laden → intake → validatie (4-vragen toets) → concurrentie scan → producttype aanbeveling → lever op
- **Output:** productplan in `outputs/plannen/`
- **Leidt naar:** `/bouw-cursus`, `/bouw-workshop`, of `/bouw-guide`

### `/bouw-cursus`
Ontwerp een complete cursus met modules, lessen, oefeningen en werkbladen.
- **10 stappen:** context laden → intake → validatie check ⛔ → materiaal inventarisatie → kenniskaart & gap analyse → curriculum ontwerp ⛔ → les uitwerking (iteratief) → oefeningen & werkbladen → quality gate → lever op
- **Output:** cursusstructuur in `outputs/cursussen/` + product summary in vault
- **Goedkeuringsgates:** validatie check (stap 3), curriculum goedkeuring (stap 6)

### `/bouw-workshop`
Ontwerp een workshop draaiboek met interactie, energiemanagement en deliverables.
- **8 stappen:** context laden → intake → workshop design ⛔ → content uitwerking → werkblad design → interactie & energiemanagement → quality gate → lever op
- **Output:** draaiboek in `outputs/workshops/` + product summary in vault
- **Goedkeuring:** draaiboek goedkeuring (stap 3)

### `/bouw-guide`
Ontwerp een guide of PDF met hoofdstukken, werkbladen en templates.
- **8 stappen:** context laden → intake → structuur ontwerp ⛔ → hoofdstuk uitwerking (iteratief) → werkbladen & templates → intro & afsluiting → quality gate → lever op
- **Output:** guide in `outputs/guides/` + product summary in vault
- **Goedkeuring:** structuur goedkeuring (stap 3)

---

## Referentie Bestanden

### Knowledge-base

| Bestand | Inhoud |
|---------|--------|
| `knowledge-base/cursus-architectuur.md` | Pricing tiers, module/les patronen, progressie, scaffolding, oefeningen, quality checklist |
| `knowledge-base/workshop-design.md` | Workshop typen, energiecurve, interactie-ontwerp, deliverables, 4 structuur templates |
| `knowledge-base/guide-systeem.md` | Guide typen, structuur per type, hoofdstuk design patterns, werkbladen, guide→cursus pipeline |
| `knowledge-base/materiaal-verwerking.md` | 5-stap extractie proces, materiaaltypen, impliciete kennis vragen, conversie regels |
| `knowledge-base/product-validatie.md` | 4-vragen toets, validatie ladder, concurrentie analyse, producttype matrix, offer-stack fit |

### Vault (gedeeld met andere agents)

| Bestand | Gebruik |
|---------|---------|
| `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` | Bedrijfscontext, naam, niche, positionering |
| `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` | Toon en stem voor productteksten |
| `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` | De leerling — wie is de doelgroep |
| `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` | Bestaande producten en value ladder |
| `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` | Klantverhalen en resultaten (case studies voor in producten) |
| `${CLAUDE_PLUGIN_DATA}/products/` | Product summaries (schrijft deze agent) |

---

## Klantmateriaal (door klant toe te voegen)

Klanten kunnen eigen materiaal toevoegen — lees ze als ze bestaan:

| Map | Inhoud | Wanneer lezen |
|-----|--------|---------------|
| `inputs/` | Ruwe materialen: transcripties, notities, braindumps, bestaande content | Altijd als startpunt bij `/analyseer-materiaal` en productbouw taken |
| `references/` | Voorbeeldproducten: cursusstructuren, workshop scripts, guides | Bij cursus/workshop/guide taken — als kwaliteitsreferentie |
| `bronnen/` | Methodologie-bronnen voor Phase B: YouTube transcripties, cursusnotities | Phase B — om productie-aanpak te verfijnen |
| `outputs/cursussen/` | Gegenereerde cursusstructuren (bestemming) | Schrijf hier naartoe na `/bouw-cursus` |
| `outputs/workshops/` | Gegenereerde workshop draaiboeken (bestemming) | Schrijf hier naartoe na `/bouw-workshop` |
| `outputs/guides/` | Gegenereerde guides (bestemming) | Schrijf hier naartoe na `/bouw-guide` |
| `outputs/analyses/` | Materiaal-analyserapporten (bestemming) | Schrijf hier naartoe na `/analyseer-materiaal` |
| `outputs/plannen/` | Productvalidatie plannen (bestemming) | Schrijf hier naartoe na `/productplan` |

Als een directory leeg is of niet bestaat: ga door zonder die referentie.

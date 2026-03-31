---
description: Analyseer ruwe materialen en ontdek wat erin zit, wat er mist, en welk product past
---
# Analyseer Materiaal — Van Ruwe Expertise naar Productinzicht

Analyseer beschikbare ruwe materialen (transcripties, notities, braindumps) en ontdek wat erin zit, wat er mist, en welk product het beste past.

---

## Stap 1 — Context Laden

Laad ALTIJD deze bestanden:

**Vault (als aanwezig):**
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`

**Knowledge-base:**
- `knowledge-base/materiaal-verwerking.md` — het volledige verwerkingssysteem
- `knowledge-base/product-validatie.md` — producttype aanbevelingsmatrix

**Inputs:**
- Lees ALLE bestanden in `inputs/` — dit zijn de ruwe materialen
- Lees ook `bronnen/` als daar bestanden staan

Bevestig kort welke bestanden geladen zijn en welke ontbreken.

---

## Stap 2 — Inventarisatie

Maak een materiaal-inventaris:

### Per bestand:
| Bestand | Type | Onderwerp(en) | Geschatte diepte | Bruikbaarheid |
|---------|------|---------------|------------------|---------------|
| ... | transcriptie/notitie/blog/... | ... | oppervlakkig/gemiddeld/diep | hoog/gemiddeld/laag |

### Samenvattend:
- **Totaal materialen:** X bestanden
- **Totale omvang:** ~X woorden
- **Materiaaltypen:** transcripties (X), notities (X), etc.
- **Geschatte dekking:** X% van een volledig product kan uit dit materiaal gebouwd worden

---

## Stap 3 — Thema Analyse

Lees door ALLE materialen en tag elk meaningful segment:

### Kernthema's (komen in 3+ materialen voor → worden modules)
| Thema | Frequentie | Diepte | Bronnen |
|-------|------------|--------|---------|
| ... | X keer | diep/gemiddeld/oppervlakkig | bestand1, bestand2 |

### Ondersteunende thema's (1-2 keer → worden lessen)
| Thema | Bron | Potentiële plek |
|-------|------|-----------------|
| ... | ... | les binnen module X |

### Tangentiële thema's (genoemd maar niet uitgewerkt → mogelijk buiten scope)
| Thema | Bron | Advies |
|-------|------|--------|
| ... | ... | opnemen/uitsluiten/apart product |

---

## Stap 4 — Kenniskaart

Bouw een kenniskaart die de relaties tussen thema's toont:

```
[Fundament / Prerequisites]
    ↓
[Kernthema 1] ←→ [Kernthema 2]
    ↓                ↓
[Subthema 1a]   [Subthema 2a]
    ↓
[Kernthema 3 — bouwt voort op 1]
    ↓
[Resultaat / Eindpunt]
```

Beschrijf per thema:
- **Prerequisites:** wat moet iemand al weten?
- **Dependencies:** welke thema's bouwen hierop voort?
- **Entry points:** waar kan een beginner starten?

---

## Stap 5 — Gap Analyse

Vergelijk de kenniskaart met een compleet curriculum:

### Kritieke gaps (product werkt niet zonder)
| Gap | Wat mist | Impact | Oplossing |
|-----|----------|--------|-----------|
| ... | ... | hoog | expert input nodig / kan geresearched worden |

### Belangrijke gaps (kwaliteit lijdt)
| Gap | Wat mist | Impact | Oplossing |
|-----|----------|--------|-----------|
| ... | ... | gemiddeld | ... |

### Nice-to-have gaps
| Gap | Wat mist | Oplossing |
|-----|----------|-----------|
| ... | ... | ... |

---

## Stap 6 — Product Suggesties

Op basis van de analyse, stel 1-3 productopties voor:

### Optie 1 (aanbevolen): [Producttype]
- **Transformatiebelofte:** "Na dit product kun je..."
- **Waarom dit type:** [onderbouwing op basis van materiaal]
- **Geschatte structuur:** X modules / X hoofdstukken / X minuten
- **Materiaal dekking:** X% beschikbaar, X% moet aangevuld
- **Volgende stap:** `/bouw-cursus` of `/bouw-workshop` of `/bouw-guide`

### Optie 2: [Producttype]
- (zelfde format)

### Optie 3 (optioneel): [Producttype]
- (zelfde format)

### Niet aanbevolen
- [Producttype] — waarom niet (te weinig materiaal, verkeerd formaat, etc.)

---

## Stap 7 — Lever Op

Sla het analyserapport op in `outputs/analyses/analyse-[onderwerp].md`.

### Rapport Structuur
```markdown
# Materiaal Analyse: [Onderwerp]
Datum: [datum]

## Inventarisatie
[uit stap 2]

## Kernthema's
[uit stap 3]

## Kenniskaart
[uit stap 4]

## Gap Analyse
[uit stap 5]

## Aanbeveling
[uit stap 6]

## Volgende Stappen
1. [Gaps opvullen / expert input verzamelen]
2. [Productplan maken met /productplan]
3. [Product bouwen met /bouw-cursus of /bouw-workshop of /bouw-guide]
```

Presenteer het rapport aan de gebruiker en vraag of ze door willen naar `/productplan` of direct naar een bouw-command.

$ARGUMENTS

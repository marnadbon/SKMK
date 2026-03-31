---
description: Maak een keyword map met clusters, intent-toewijzing en een pagina-plan
---
Maak een keyword map: zoekwoorden clusteren, intent toewijzen, en een pagina-plan opstellen.

---

## Stap 1 — Context Laden

Lees de volgende bestanden (sla over als ze niet bestaan):

**Vault:**
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`

**Knowledge-base:**
- `knowledge-base/seo-strategie.md`
- `knowledge-base/pseo-2-systeem.md`

Bevestig kort welke bestanden geladen zijn.

---

## Stap 2 — Intake

Vraag de gebruiker:

1. **Wat is de markt/niche?** — beschrijf je bedrijf en branche
2. **Welke producten/diensten?** — wat bied je aan?
3. **Wat is het doel?**
   - Meer lokale klanten?
   - Meer vergelijkingsverkeer?
   - Meer doelgroep-specifiek verkeer?
   - Alles?
4. **Heb je al zoekwoorden?** — zo ja, deel ze. Zo nee, we starten vanuit je diensten.
5. **Concurrenten?** — welke sites ranken al voor deze zoekwoorden?

---

## Stap 3 — Patroon Identificatie

Analyseer welke zoekpatronen bij het bedrijf passen:

| Patroon | Past bij dit bedrijf? | Waarom wel/niet | Geschat potentieel |
|---------|----------------------|-----------------|-------------------|
| [dienst] in [stad] | ? | ... | ... |
| [product] vs [alternatief] | ? | ... | ... |
| [tool] voor [doelgroep] | ? | ... | ... |
| beste [categorie] voor [use case] | ? | ... | ... |

Denk ook aan de **6 content categorieën uit pSEO 2.0** (zie `pseo-2-systeem.md`):
- Resource pagina's (~60% van verkeer) — idea-lijsten, checklists, guides
- Free tools (~15%) — werkende tool-pagina's
- Alternative pagina's (~10%) — "beste [X] alternatieven"
- Guide, template, en vergelijkingspagina's

Bespreek welke patronen en categorieën het meeste opleveren. Niet elk bedrijf heeft alle patronen nodig.

---

## Stap 4 — Keyword Clustering

Cluster alle zoekwoorden per thema en intent:

```
Cluster: [naam]
├── Hoofdzoekwoord: [zoekwoord] (geschat volume, intent)
├── Gerelateerd: [zoekwoord 2]
├── Gerelateerd: [zoekwoord 3]
├── Pagina-type: [template]
└── Prioriteit: [hoog/midden/laag]
```

### Clusterregels:
- **1 cluster = 1 pagina** — voorkom keyword-kannibalisatie
- **Groepeer op intent** — niet alleen op onderwerp
- **Splits als intent verschilt** — "CRM vergelijken" ≠ "CRM kopen"

---

## Stap 5 — Template Toewijzing

Wijs elk cluster toe aan een template:

| Cluster | Hoofdzoekwoord | Intent | Template | URL-patroon |
|---------|---------------|--------|----------|-------------|
| ... | ... | ... | service-locatie | /[dienst]-[stad] |
| ... | ... | ... | vergelijking | /[product]-vs-[alt] |
| ... | ... | ... | use-case | /[tool]-voor-[doel] |
| ... | ... | ... | review | /beste-[cat]-[use] |

---

## Stap 6 — Prioritering

Sorteer clusters op prioriteit:

```
Score = Zoekvolume × Intent-waarde × (1 / Concurrentie)

Intent-waarde:
- Transactioneel = 3
- Commercieel = 2
- Informationeel = 1

Concurrentie:
- Laag = 1
- Midden = 2
- Hoog = 3
```

Lever een geprioriteerde lijst:

| # | Cluster | Zoekwoord | Volume | Intent | Concurrentie | Score | Template |
|---|---------|-----------|--------|--------|-------------|-------|----------|
| 1 | ... | ... | ... | ... | ... | ... | ... |
| 2 | ... | ... | ... | ... | ... | ... | ... |

---

## Stap 7 — Lever Op

Lever het volledige keyword-map pakket:

1. **Keyword map** — alle clusters met zoekwoorden, intent, template, en prioriteit
2. **Pagina-plan** — welke pagina's moeten gemaakt worden, in welke volgorde
3. **Actieplan:**
   - Fase 1: Top 5-10 prioriteit pagina's (quick wins)
   - Fase 2: Medium prioriteit (bulk)
   - Fase 3: Long-tail / lage prioriteit
4. **Volgende stap:** Wil je direct `/genereer-paginas` starten voor de top-prioriteit?

Sla de keyword map op in `outputs/keyword-maps/[niche]-[datum].md`.

$ARGUMENTS

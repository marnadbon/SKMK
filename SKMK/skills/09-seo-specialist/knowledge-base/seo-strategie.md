# SEO Strategie — Keyword Research & Clustering

> Dit bestand bevat de kern SEO-strategie: hoe je zoekwoorden vindt, groepeert, en omzet in een pagina-plan.

---

## 1. Zoekintentie (Search Intent)

<!-- BRON: vul aan uit bronmateriaal — specifieke intent-categorisatie van de gebruiker -->

### De 4 Intenttypes

| Type | Wat de zoeker wil | Voorbeeld | Pagina-type |
|------|-------------------|-----------|-------------|
| **Informationeel** | Iets leren of begrijpen | "wat is SEO" | Blog, gids |
| **Navigatie** | Specifieke site/pagina vinden | "HubSpot login" | Homepage, product |
| **Commercieel** | Vergelijken voor aankoop | "beste CRM software" | Vergelijking, review |
| **Transactioneel** | Direct actie ondernemen | "CRM kopen", "offerte aanvragen" | Landing, pricing |

### Intentherkenning in Zoekwoorden

<!-- BRON: vul aan uit bronmateriaal — hoe de gebruiker intent herkent -->

**Signaalwoorden per intent:**
- Informationeel: wat, hoe, waarom, gids, uitleg, tutorial
- Commercieel: beste, vergelijking, vs, review, top 10, alternatieven
- Transactioneel: kopen, bestellen, offerte, prijs, kosten, aanmelden

---

## 2. Keyword Research Methode

<!-- BRON: vul aan uit bronmateriaal — specifieke research-workflow van de gebruiker -->

### Stap 1: Seed Keywords Verzamelen
- Brainstorm vanuit diensten/producten
- Analyseer concurrenten (welke pagina's ranken zij?)
- Gebruik klantentaal (hoe beschrijven klanten het probleem?)

### Stap 2: Uitbreiden met Patronen
- [dienst] + [locatie] → "boekhouder amsterdam", "boekhouder rotterdam"
- [product] + vs + [alternatief] → "hubspot vs salesforce"
- [tool] + voor + [doelgroep] → "CRM voor ZZP"
- beste + [categorie] + voor + [use case] → "beste boekhoudsoftware voor webshops"

### Stap 3: Volume & Concurrentie Beoordelen

<!-- BRON: vul aan uit bronmateriaal — specifieke criteria voor volume/concurrentie -->

**Basisrichtlijnen:**
- Hoog volume + lage concurrentie = prioriteit
- Long-tail zoekwoorden (3+ woorden) zijn makkelijker te ranken
- Commerciële intent > informationele intent (voor conversie)

---

## 3. Keyword Clustering

<!-- BRON: vul aan uit bronmateriaal — hoe de gebruiker clustert -->

### Clusterprincipes
- **1 cluster = 1 pagina** — nooit meerdere pagina's voor hetzelfde cluster
- **Groepeer op zoekintentie** — niet alleen op onderwerp
- **Hub & spoke** — hoofdpagina + subpagina's per cluster

### Clusterformat

```
Cluster: [naam]
├── Hoofdzoekwoord: [zoekwoord] (volume, intent)
├── Gerelateerd: [zoekwoord 2] (volume)
├── Gerelateerd: [zoekwoord 3] (volume)
├── Pagina-type: [template uit pagina-templates/]
└── Prioriteit: [hoog/midden/laag]
```

---

## 4. Van Clusters naar Pagina-Plan

<!-- BRON: vul aan uit bronmateriaal — hoe de gebruiker van keywords naar pagina's gaat -->

### Toewijzingsmatrix

| Zoekpatroon | Template | Prioriteit |
|-------------|----------|------------|
| [dienst] in [stad] | `service-locatie.md` | Hoog (lokaal) |
| [product] vs [alternatief] | `vergelijking.md` | Hoog (commercieel) |
| [tool] voor [doelgroep] | `use-case.md` | Midden |
| beste [categorie] voor [use case] | `review-aanbeveling.md` | Midden-Hoog |

### Prioriteringsformule

```
Score = Zoekvolume × Intent-waarde × (1 / Concurrentie)

Intent-waarde:
- Transactioneel = 3
- Commercieel = 2
- Informationeel = 1
```

---

## 5. Niche Taxonomie (pSEO 2.0)

De niche taxonomie is het fundament van schema-driven programmatische SEO. Besteed ~60% van je tijd hieraan.

### Wat Is Een Niche Taxonomie?

Gestructureerde context voor elke niche/markt die je bedient. Dit wordt geïnjecteerd in het generatieproces zodat AI niche-specifieke content produceert in plaats van generieke tekst.

### Taxonomie Structuur Per Niche

```json
{
  "slug": "[niche-slug]",
  "name": "[Niche Naam]",
  "context": {
    "audience": "[Wie zoekt hiernaar? Specifieke persona's]",
    "pain_points": "[Top 3-5 problemen van deze doelgroep]",
    "monetization": "[Hoe verdient deze niche geld?]",
    "content_that_works": "[Welke content-formats presteren in deze niche?]",
    "subtopics": ["[subtopic 1]", "[subtopic 2]", "[subtopic 3]"]
  }
}
```

### Taxonomie Bouwen — Stappen

1. **Inventariseer alle niches** — start breed (10-300+)
2. **Per niche: vul de 5 contextvelden in** — wees specifiek, niet generiek
3. **Valideer** — is de context specifiek genoeg om unieke content te produceren?
4. **Test** — genereer 1 pagina per niche, controleer of de output echt verschilt
5. **Itereer** — verfijn op basis van resultaten (feedback loop)

### Voorbeeld: Finance vs Travel

| Veld | Finance Niche | Travel Niche |
|------|--------------|-------------|
| Audience | Startende ondernemers, ZZP'ers | Armchair travelers, digital nomads |
| Pain points | Complexe regelgeving, tijdgebrek | Seizoensgebonden traffic, hoge concurrentie |
| Monetization | Dienstverlening, software | Affiliate (booking, gear), display ads |
| Content that works | Checklists, kosten-breakdowns | Itineraries, off-the-beaten-path guides |

Zelfde schema, compleet andere inhoud. Dat is de kracht van niche-context.

Zie `pseo-2-systeem.md` voor de volledige pSEO 2.0 methodologie.

---

## 6. Content Gap Analyse

<!-- BRON: vul aan uit bronmateriaal — specifieke gap-analyse methode -->

### Vragen om te beantwoorden:
1. Welke zoekwoorden ranken concurrenten waarvoor wij geen pagina hebben?
2. Welke pagina's hebben wij die niet ranken? (optimalisatie-kans)
3. Welke zoekpatronen zijn onbediend in de markt? (first-mover kans)

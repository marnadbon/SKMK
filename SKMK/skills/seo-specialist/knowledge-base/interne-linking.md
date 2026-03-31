# Interne Linking — Structuur & Strategie

> Dit bestand bevat de interne linkingstrategie: hoe pagina's met elkaar verbonden worden.

---

## 1. Hub & Spoke Model

<!-- BRON: vul aan uit bronmateriaal — specifieke linking-structuur van de gebruiker -->

### Principe
- **Hub** = hoofdpagina over een breed onderwerp (bijv. "Boekhouder")
- **Spokes** = subpagina's over specifieke varianten (bijv. "Boekhouder Amsterdam", "Boekhouder Rotterdam")
- Elke spoke linkt naar de hub
- De hub linkt naar alle spokes
- Spokes linken onderling waar relevant

### Structuurvoorbeeld
```
Hub: /boekhouder
├── Spoke: /boekhouder-amsterdam
├── Spoke: /boekhouder-rotterdam
├── Spoke: /boekhouder-utrecht
├── Spoke: /boekhouder-den-haag
└── Spoke: /boekhouder-eindhoven
```

---

## 2. Silo Structuur

<!-- BRON: vul aan uit bronmateriaal -->

### Principe
- **Silo** = thematische groep pagina's die sterk onderling linken
- Pagina's binnen een silo linken veel naar elkaar
- Pagina's tussen silo's linken spaarzaam en strategisch
- Versterkt topical authority per onderwerp

### Voorbeeld
```
Silo 1: Boekhouding          Silo 2: Belastingadvies
├── /boekhouder               ├── /belastingadviseur
├── /boekhouder-amsterdam     ├── /belastingadviseur-amsterdam
├── /boekhouder-zzp           ├── /btw-aangifte
└── /boekhoudkosten           └── /belastingadvies-kosten
        ↕ (veel links)                ↕ (veel links)
        ←── spaarzame cross-links ──→
```

---

## 3. Breadcrumbs

<!-- BRON: vul aan uit bronmateriaal -->

### Implementatie
- **Elke pagina** toont breadcrumbs bovenaan
- Structuur volgt de silo/hub-hiërarchie
- Schema markup (`BreadcrumbList`) voor SERP-weergave

### Formaat
```
Home > [Silo/Hub] > [Huidige Pagina]
```

**Voorbeeld:**
```
Home > Boekhouder > Boekhouder Amsterdam
```

---

## 4. Contextual Links (In-Content Links)

<!-- BRON: vul aan uit bronmateriaal — hoeveel links per pagina, plaatsingsregels -->

### Regels
- **Natuurlijke plaatsing** — link vanuit relevante context, niet geforceerd
- **Ankertekst = zoekwoord** van de doelpagina (waar mogelijk)
- **Varieer ankerteksten** — niet altijd exact hetzelfde
- **2-5 interne links per pagina** als richtlijn

### Ankertekst Richtlijnen

| Type | Voorbeeld | Gebruik |
|------|-----------|---------|
| Exact match | "boekhouder amsterdam" | Primair (maar varieer) |
| Gedeeltelijk | "een boekhouder in Amsterdam" | Veelgebruikt |
| Beschrijvend | "bekijk onze boekhoudservice" | Aanvullend |
| Vermijd | "klik hier", "lees meer" | Nooit |

---

## 5. Cross-Linking tussen Templates

<!-- BRON: vul aan uit bronmateriaal -->

### Linking Matrix

| Van → Naar | Service-Locatie | Vergelijking | Use-Case | Review |
|------------|----------------|--------------|----------|--------|
| **Service-Locatie** | ✅ Andere steden | ⚠️ Indien relevant | ✅ Gerelateerde use-case | ⚠️ Zelden |
| **Vergelijking** | ⚠️ Indien lokaal | ✅ Gerelateerde vergelijkingen | ✅ Use-case per product | ✅ Review pagina |
| **Use-Case** | ✅ Locatie-variant | ✅ Product vergelijking | ✅ Andere doelgroepen | ✅ Aanbeveling |
| **Review** | ⚠️ Zelden | ✅ Individuele vergelijking | ✅ Use-case per aanbeveling | ✅ Andere categorieën |

✅ = Sterk aanbevolen | ⚠️ = Alleen als relevant

---

## 6. Sitemap & Navigatie

<!-- BRON: vul aan uit bronmateriaal -->

### Programmatische Sitemap
- **Alle gegenereerde pagina's** automatisch in `sitemap.xml`
- **Groepeer per silo** in de sitemap
- **Prioriteit instellen:**
  - Hub pagina's: `priority 0.8`
  - Spoke pagina's: `priority 0.6`
  - Blog/content: `priority 0.4`

### Footer/Navigatie Links
- Hubs in hoofdnavigatie
- Spokes NIET in hoofdnavigatie (te veel)
- Footer: links naar belangrijkste hubs + locatiepagina's

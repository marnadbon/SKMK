# Technische SEO — On-Page & Structuur

> Dit bestand bevat technische SEO-richtlijnen: meta tags, schema markup, URL-structuur, en meer.

---

## 1. Title Tags

<!-- BRON: vul aan uit bronmateriaal — specifieke title tag formules van de gebruiker -->

### Basisregels
- **Maximaal 60 tekens** (Google knipt af na ~60)
- **Hoofdzoekwoord vooraan** in de title
- **Unieke title per pagina** — nooit duplicaten
- **Formule:** `[Hoofdzoekwoord] — [Waardepropositie] | [Merk]`

### Title Formules per Template

| Template | Title Formule | Voorbeeld |
|----------|---------------|-----------|
| Service-locatie | `[Dienst] in [Stad] — [USP] \| [Merk]` | Boekhouder in Amsterdam — Persoonlijk & Betaalbaar \| BoekhoudPro |
| Vergelijking | `[Product A] vs [Product B] — [Jaar] Vergelijking` | HubSpot vs Salesforce — 2026 Vergelijking |
| Use-case | `[Tool] voor [Doelgroep] — [Resultaat]` | CRM voor ZZP — Klanten Beheren Zonder Gedoe |
| Review | `Beste [Categorie] voor [Use Case] ([Jaar])` | Beste Boekhoudsoftware voor Webshops (2026) |

---

## 2. Meta Descriptions

<!-- BRON: vul aan uit bronmateriaal — specifieke meta description richtlijnen -->

### Basisregels
- **Maximaal 155 tekens**
- **Bevat het hoofdzoekwoord** (wordt vetgedrukt in SERP)
- **Eindigt met CTA of belofte** (niet alleen beschrijving)
- **Uniek per pagina**

### Formule
```
[Zoekwoord-context]. [Waardepropositie]. [CTA].
```

---

## 3. Heading Structuur (H1-H4)

<!-- BRON: vul aan uit bronmateriaal — specifieke heading-richtlijnen -->

### Regels
- **1x H1 per pagina** — bevat hoofdzoekwoord
- **H2's** — secties, bevatten gerelateerde zoekwoorden
- **H3's** — subsecties, bevatten long-tail varianten
- **Logische hierarchie** — nooit H3 zonder H2 erboven

### Voorbeeld Structuur (Service-Locatie)
```
H1: [Dienst] in [Stad]
  H2: Waarom [Dienst] bij [Merk]?
  H2: Onze [Dienst]-aanpak
    H3: [Specifiek onderdeel 1]
    H3: [Specifiek onderdeel 2]
  H2: [Dienst] Prijzen in [Stad]
  H2: Veelgestelde Vragen over [Dienst] in [Stad]
    H3: [FAQ vraag 1]
    H3: [FAQ vraag 2]
```

---

## 4. URL Structuur

<!-- BRON: vul aan uit bronmateriaal — specifieke URL-conventies -->

### Regels
- **Kort en beschrijvend** — maximaal 3-5 woorden
- **Alleen kleine letters** — geen hoofdletters
- **Koppeltekens** als scheidingsteken (geen underscores)
- **Geen stopwoorden** (de, het, een, voor, in) tenzij noodzakelijk
- **Bevat hoofdzoekwoord**

### URL Patronen per Template

| Template | URL Patroon | Voorbeeld |
|----------|-------------|-----------|
| Service-locatie | `/[dienst]-[stad]` | `/boekhouder-amsterdam` |
| Vergelijking | `/[product]-vs-[alternatief]` | `/hubspot-vs-salesforce` |
| Use-case | `/[tool]-voor-[doelgroep]` | `/crm-voor-zzp` |
| Review | `/beste-[categorie]-[use-case]` | `/beste-boekhoudsoftware-webshops` |

---

## 5. Schema Markup (Structured Data)

<!-- BRON: vul aan uit bronmateriaal — specifieke schema-types die de gebruiker toepast -->

### Relevante Schema Types

| Schema Type | Wanneer | Voordeel |
|-------------|---------|----------|
| `LocalBusiness` | Service-locatie pagina's | Lokale zoekresultaten |
| `Product` | Vergelijkings- en review-pagina's | Rich snippets met ratings |
| `FAQPage` | Pagina's met FAQ-sectie | FAQ rich snippets in SERP |
| `BreadcrumbList` | Alle pagina's | Breadcrumb weergave in SERP |
| `Article` | Blog/content pagina's | Artikel rich snippets |

### FAQ Schema Voorbeeld
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Vraag]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Antwoord]"
      }
    }
  ]
}
```

---

## 6. Canonical Tags

<!-- BRON: vul aan uit bronmateriaal -->

### Regels
- **Elke pagina heeft een canonical tag** — zelfs als het naar zichzelf wijst
- **Voorkom duplicate content** — vergelijkbare pagina's wijzen naar de hoofdversie
- **Bij paginering** — canonical naar pagina 1 OF self-referencing (afhankelijk van strategie)

---

## 7. Overige Technische Elementen

<!-- BRON: vul aan uit bronmateriaal -->

### Image SEO
- **Alt-tekst** met zoekwoord (beschrijvend, niet keyword-stuffed)
- **Bestandsnaam** beschrijvend (`boekhouder-amsterdam.jpg`, niet `IMG_1234.jpg`)
- **Compressie** — WebP formaat, max 100KB voor hero images

### Mobile-First
- Responsive design is verplicht
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

### Indexatie
- `robots.txt` — blokkeer geen belangrijke pagina's
- `sitemap.xml` — alle programmatische pagina's opnemen
- `noindex` alleen voor utility-pagina's (bedankt, zoekresultaten)

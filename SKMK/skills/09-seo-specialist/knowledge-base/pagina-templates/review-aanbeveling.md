# Pagina Template: Beste [Categorie] voor [Use Case]

> Template voor review- en aanbevelingspagina's. Vangt "beste" zoekwoorden op.

---

## Patroon

```
beste [categorie] voor [use case]
beste [categorie] [jaar]
top [aantal] [categorie] voor [doelgroep]
[categorie] aanbevelingen [jaar]
```

**Voorbeelden:** "beste boekhoudsoftware voor webshops", "beste CRM 2026", "top 5 projecttools voor freelancers"

---

## Zoekintentie

- **Type:** Commercieel
- **Wat de zoeker wil:** Een overzicht van opties met een duidelijke aanbeveling
- **Conversiedoel:** Klik naar productpagina, affiliate-link, of aanmelding

---

## URL Structuur

```
/beste-[categorie]-[use-case]
/beste-[categorie]-[jaar]
```

Voorbeelden: `/beste-boekhoudsoftware-webshops`, `/beste-crm-2026`

---

## Pagina Structuur

<!-- BRON: vul aan uit bronmateriaal — specifieke review-pagina-opbouw -->

### Verplichte Elementen

```
Title: Beste [Categorie] voor [Use Case] ([Jaar]) | [Merk]
Meta: De [aantal] beste [categorie] voor [use case] vergeleken. [Winnaar] is onze top keuze. [CTA].
URL: /beste-[categorie]-[use-case]

H1: Beste [Categorie] voor [Use Case] ([Jaar])

  Intro (2-3 alinea's):
  - Context: waarom [use case] een goede [categorie] nodig heeft
  - Methode: "We hebben [aantal] opties vergeleken op [criteria]"
  - Quick pick: "Geen tijd? [Winnaar] is onze top aanbeveling"

H2: Onze Top [Aantal] [Categorie] voor [Use Case]
  - Snelle overzichtstabel met scores
  - Top pick gemarkeerd

H2: #1 — [Product 1] (Beste Algeheel / Beste voor [specifiek])
  H3: Wat we goed vinden
  H3: Wat beter kan
  H3: Prijs
  H3: Voor wie geschikt
  - Score per criterium

H2: #2 — [Product 2] (Beste voor [specifiek])
  (zelfde structuur)

H2: #3 — [Product 3]
  (zelfde structuur)

(herhaal voor 3-7 producten)

H2: Hoe We Hebben Getest
  - Transparantie over methode
  - Welke criteria, hoe gewogen

H2: Waar Moet Je Op Letten bij [Categorie]?
  - Koopgids: 3-5 criteria uitgelegd
  - Helpt de lezer zelf kiezen

H2: Veelgestelde Vragen
  H3: Wat is de beste [categorie] voor beginners?
  H3: Hoeveel kost een goede [categorie]?
  H3: [Use-case-specifieke vraag]?
  - Minimaal 3 FAQ's met schema markup

CTA-blok:
  - Herhaal top aanbeveling
  - Directe link naar winnaar
```

---

## Overzichtstabel Format

<!-- BRON: vul aan uit bronmateriaal -->

```markdown
| # | Product | Beste voor | Prijs | Score |
|---|---------|-----------|-------|-------|
| 1 | [Product] | [Specifiek] | €XX/mnd | ⭐ 9.2 |
| 2 | [Product] | [Specifiek] | €XX/mnd | ⭐ 8.7 |
| 3 | [Product] | [Specifiek] | €XX/mnd | ⭐ 8.3 |
```

---

## Variabelen (voor batch-generatie)

```
{{categorie}}        — De productcategorie
{{use_case}}         — De specifieke use case of doelgroep
{{jaar}}             — Huidig jaar
{{merk}}             — Jouw bedrijfsnaam
{{aantal}}           — Aantal producten in de lijst (3-7)
{{product_1..7}}     — Productnamen
{{score_1..7}}       — Scores per product
{{winnaar}}          — Top aanbeveling
```

---

## Unieke Content Elementen

| Element | Hoe uniek maken |
|---------|----------------|
| Intro | Specifiek scenario voor de use case |
| Reviews | Echte test/ervaring per product |
| Scores | Onderbouwde cijfers, niet willekeurig |
| Koopgids | Specifiek voor de use case |
| FAQ's | Specifiek voor categorie + use case |

---

## Schema Markup

- `FAQPage` schema voor FAQ-sectie
- `Product` schema per product (met `aggregateRating` indien beschikbaar)
- `ItemList` schema voor de ranking
- `BreadcrumbList` schema

---

## Interne Links

- Link naar **individuele vergelijkingspagina's** (bijv. "[Product 1] vs [Product 2]")
- Link naar **use-case pagina's** per product
- Link naar **andere "beste" lijsten** in gerelateerde categorieën
- Link naar **diepere productreviews** (als die bestaan)

---

## Quality Checklist

- [ ] Title tag ≤ 60 tekens, bevat "beste [categorie]"
- [ ] Meta description ≤ 155 tekens, noemt de winnaar
- [ ] H1 bevat categorie + use case + jaar
- [ ] Overzichtstabel aanwezig (boven de vouw)
- [ ] Minimaal 3 producten besproken
- [ ] Elk product: goed + slecht + prijs + voor wie
- [ ] Testmethode transparant
- [ ] Koopgids aanwezig
- [ ] Minimaal 3 FAQ's met schema markup
- [ ] Interne links naar vergelijkings- en use-case pagina's

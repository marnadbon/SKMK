# Pagina Template: [Product] vs [Alternatief]

> Template voor vergelijkingspagina's. Vangt commerciele zoekintentie op.

---

## Patroon

```
[product] vs [alternatief]
[product] of [alternatief]
[product] vergelijken met [alternatief]
verschil [product] en [alternatief]
```

**Voorbeelden:** "hubspot vs salesforce", "wordpress of wix", "mailchimp vs activecampaign"

---

## Zoekintentie

- **Type:** Commercieel
- **Wat de zoeker wil:** Twee opties vergelijken om een keuze te maken
- **Conversiedoel:** Keuze naar jouw product/dienst, of affiliate-link

---

## URL Structuur

```
/[product]-vs-[alternatief]
```

Voorbeelden: `/hubspot-vs-salesforce`, `/wordpress-vs-wix`

---

## Pagina Structuur

<!-- BRON: vul aan uit bronmateriaal — specifieke vergelijkingspagina-opbouw -->

### Verplichte Elementen

```
Title: [Product] vs [Alternatief] — Eerlijke Vergelijking ([Jaar]) | [Merk]
Meta: [Product] vs [alternatief] vergeleken op [criteria]. Ontdek welke het beste past. [CTA].
URL: /[product]-vs-[alternatief]

H1: [Product] vs [Alternatief] — Welke Past Bij Jou?

  Intro (2-3 alinea's):
  - Voor wie is deze vergelijking?
  - Korte samenvatting: wanneer [Product], wanneer [Alternatief]
  - "Lees verder voor de volledige vergelijking"

H2: [Product] vs [Alternatief] in het Kort
  - Vergelijkingstabel (5-8 criteria)
  - Snelle visuele vergelijking

H2: Wat is [Product]?
  - Korte beschrijving (3-5 zinnen)
  - Belangrijkste features
  - Voor wie geschikt

H2: Wat is [Alternatief]?
  - Korte beschrijving (3-5 zinnen)
  - Belangrijkste features
  - Voor wie geschikt

H2: [Product] vs [Alternatief] Vergeleken
  H3: [Criterium 1] (bijv. Prijs)
  H3: [Criterium 2] (bijv. Gebruiksgemak)
  H3: [Criterium 3] (bijv. Features)
  H3: [Criterium 4] (bijv. Klantenservice)
  H3: [Criterium 5] (bijv. Integraties)
  - Per criterium: eerlijke analyse + winnaar benoemen

H2: Wanneer Kies Je [Product]?
  - 3-5 concrete scenario's

H2: Wanneer Kies Je [Alternatief]?
  - 3-5 concrete scenario's

H2: Ons Oordeel
  - Eerlijke conclusie
  - Duidelijke aanbeveling per doelgroep

H2: Veelgestelde Vragen
  H3: [Vraag 1]?
  H3: [Vraag 2]?
  H3: [Vraag 3]?
  - Minimaal 3 FAQ's met schema markup

CTA-blok:
  - Aanbeveling herhalen
  - Link naar productpagina of demo
```

---

## Vergelijkingstabel Format

<!-- BRON: vul aan uit bronmateriaal -->

```markdown
| Criterium | [Product] | [Alternatief] | Winnaar |
|-----------|-----------|---------------|---------|
| Prijs | €XX/mnd | €XX/mnd | [Product/Alternatief] |
| Gebruiksgemak | ⭐⭐⭐⭐ | ⭐⭐⭐ | [Product] |
| Features | ... | ... | ... |
| Support | ... | ... | ... |
| Integraties | ... | ... | ... |
```

---

## Variabelen (voor batch-generatie)

```
{{product}}           — Het eerste product
{{alternatief}}       — Het tweede product
{{jaar}}              — Huidig jaar
{{merk}}              — Jouw bedrijfsnaam
{{criterium_1..5}}    — Vergelijkingscriteria
{{winnaar_overall}}   — Algemene winnaar
```

---

## Unieke Content Elementen

| Element | Hoe uniek maken |
|---------|----------------|
| Intro | Specifiek scenario schetsen |
| Tabel | Echte prijzen en features |
| Analyse | Eigen ervaring of klantfeedback |
| Conclusie | Oprechte mening, niet generiek |
| FAQ's | Specifiek voor dit vergelijkingspaar |

---

## Schema Markup

- `FAQPage` schema voor de FAQ-sectie
- `Product` schema voor beide producten (optioneel)
- `BreadcrumbList` schema

---

## Interne Links

- Link naar **individuele productpagina's** (als die bestaan)
- Link naar **andere vergelijkingen** met dezelfde producten
- Link naar **review/aanbeveling pagina** voor de categorie
- Link naar **use-case pagina's** gerelateerd aan de producten

---

## Quality Checklist

- [ ] Title tag ≤ 60 tekens, bevat "[Product] vs [Alternatief]"
- [ ] Meta description ≤ 155 tekens, bevat vergelijkingszoekwoord
- [ ] H1 bevat beide productnamen
- [ ] Vergelijkingstabel aanwezig (boven de vouw)
- [ ] Eerlijke analyse — niet alleen jouw product promoten
- [ ] Duidelijke "wanneer kies je X" scenario's
- [ ] Minimaal 3 FAQ's met schema markup
- [ ] Interne links naar gerelateerde vergelijkingen

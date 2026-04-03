# Pagina Template: [Tool] voor [Doelgroep]

> Template voor use-case pagina's. Koppelt een product/tool aan een specifieke doelgroep of situatie.

---

## Patroon

```
[tool/dienst] voor [doelgroep]
[tool/dienst] voor [branche]
[tool/dienst] voor [situatie]
```

**Voorbeelden:** "CRM voor ZZP", "boekhoudsoftware voor webshops", "projectmanagement voor agencies"

---

## Zoekintentie

- **Type:** Commercieel / Informationeel
- **Wat de zoeker wil:** Weten of een tool/dienst past bij hun specifieke situatie
- **Conversiedoel:** Aanmelding, demo, offerte

---

## URL Structuur

```
/[tool]-voor-[doelgroep]
```

Voorbeelden: `/crm-voor-zzp`, `/boekhoudsoftware-voor-webshops`

---

## Pagina Structuur

<!-- BRON: vul aan uit bronmateriaal — specifieke use-case pagina-opbouw -->

### Verplichte Elementen

```
Title: [Tool] voor [Doelgroep] — [Resultaat/Belofte] | [Merk]
Meta: Ontdek waarom [tool] ideaal is voor [doelgroep]. [Belangrijkste voordeel]. [CTA].
URL: /[tool]-voor-[doelgroep]

H1: [Tool] voor [Doelgroep]

  Intro (2-3 alinea's):
  - Herkenning: de uitdaging van [doelgroep]
  - Oplossing: hoe [tool] dit oplost
  - Belofte: wat ze kunnen verwachten

H2: Waarom [Doelgroep] een [Tool] Nodig Heeft
  - 3-4 pijnpunten van de doelgroep
  - Consequenties van geen oplossing
  - Transitie naar de oplossing

H2: Hoe [Tool] Werkt voor [Doelgroep]
  H3: [Feature/voordeel 1 relevant voor doelgroep]
  H3: [Feature/voordeel 2 relevant voor doelgroep]
  H3: [Feature/voordeel 3 relevant voor doelgroep]
  - Focus op features die SPECIFIEK relevant zijn voor deze doelgroep
  - Niet alle features opsommen — alleen wat voor hen telt

H2: [Tool] voor [Doelgroep] in de Praktijk
  - Concreet scenario of mini-casestudy
  - "Stel je voor dat..." of echt klantvoorbeeld
  - Resultaten met specifieke getallen

H2: Aan de Slag met [Tool]
  - Stappen om te starten (3-5 stappen)
  - Wat het kost (prijsindicatie)
  - Hoelang het duurt om resultaat te zien

H2: Veelgestelde Vragen
  H3: Is [tool] geschikt voor [doelgroep-variant]?
  H3: Wat kost [tool] voor [doelgroep]?
  H3: [Doelgroep-specifieke vraag]?
  - Minimaal 3 FAQ's met schema markup

CTA-blok:
  - Specifiek voor de doelgroep
  - "Speciaal voor [doelgroep]: [aanbod]"
```

---

## Variabelen (voor batch-generatie)

```
{{tool}}             — De tool of dienst
{{doelgroep}}        — De specifieke doelgroep
{{merk}}             — Jouw bedrijfsnaam
{{pijnpunt_1..3}}    — Pijnpunten van de doelgroep
{{feature_1..3}}     — Relevante features
{{prijs}}            — Prijsindicatie
{{resultaat}}        — Verwacht resultaat
```

---

## Unieke Content Elementen

<!-- BRON: vul aan uit bronmateriaal -->

| Element | Hoe uniek maken |
|---------|----------------|
| Pijnpunten | Specifiek voor elke doelgroep |
| Features | Selectie relevant voor doelgroep (niet copy-paste) |
| Casestudy | Ander voorbeeld per doelgroep |
| Prijs | Aangepaste prijsindicatie per segment |
| FAQ's | Doelgroep-specifieke vragen |

---

## Schema Markup

- `FAQPage` schema voor FAQ-sectie
- `Product` of `Service` schema (optioneel)
- `BreadcrumbList` schema

---

## Interne Links

- Link naar **hub-pagina** van de tool/dienst
- Link naar **vergelijkingspagina's** met de tool
- Link naar **andere doelgroep-varianten** ("Ook voor [andere doelgroep]")
- Link naar **review/aanbeveling pagina** in de categorie

---

## Quality Checklist

- [ ] Title tag ≤ 60 tekens, bevat "[tool] voor [doelgroep]"
- [ ] Meta description ≤ 155 tekens, doelgroep-specifiek
- [ ] H1 bevat tool + doelgroep
- [ ] Pijnpunten zijn ECHT specifiek voor de doelgroep
- [ ] Features zijn gefilterd op relevantie (niet alles)
- [ ] Praktijkvoorbeeld of casestudy aanwezig
- [ ] Minimaal 3 FAQ's met schema markup
- [ ] CTA spreekt de doelgroep direct aan

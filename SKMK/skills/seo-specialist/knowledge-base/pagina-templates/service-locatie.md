# Pagina Template: [Dienst] in [Stad]

> Template voor lokale service-pagina's. Het meest gebruikte programmatische SEO-patroon.

---

## Patroon

```
[dienst] in [stad]
[dienst] [stad]
[dienst] bij [stad]
```

**Voorbeelden:** "boekhouder amsterdam", "tandarts rotterdam", "loodgieter utrecht"

---

## Zoekintentie

- **Type:** Transactioneel / Commercieel
- **Wat de zoeker wil:** Een lokale aanbieder vinden en contact opnemen
- **Conversiedoel:** Offerte aanvraag, telefoongesprek, afspraak

---

## URL Structuur

```
/[dienst]-[stad]
```

Voorbeelden: `/boekhouder-amsterdam`, `/tandarts-rotterdam`

---

## Pagina Structuur

<!-- BRON: vul aan uit bronmateriaal — specifieke pagina-opbouw van de gebruiker -->

### Verplichte Elementen

```
Title: [Dienst] in [Stad] — [USP] | [Merk]
Meta: [Zoekwoord-context]. [Waardepropositie]. [CTA].
URL: /[dienst]-[stad]

H1: [Dienst] in [Stad]

  Intro (2-3 alinea's):
  - Wat bieden we aan in [stad]?
  - Waarom kiezen voor [merk] in [stad]?
  - Direct een micro-CTA (bijv. "Vraag een gratis offerte aan")

H2: Waarom [Dienst] bij [Merk] in [Stad]?
  - 3-5 USP's met toelichting
  - Lokale relevantie benoemen (kennis van [stad])

H2: Onze [Dienst]-aanpak
  H3: [Stap/onderdeel 1]
  H3: [Stap/onderdeel 2]
  H3: [Stap/onderdeel 3]
  - Concreet, niet vaag — beschrijf het proces

H2: [Dienst] Prijzen in [Stad]
  - Prijsindicatie of "vanaf" bedragen
  - Of: "Vraag een offerte aan voor exacte prijzen"
  - Tabel indien mogelijk

H2: Veelgestelde Vragen over [Dienst] in [Stad]
  H3: [Vraag 1]?
  H3: [Vraag 2]?
  H3: [Vraag 3]?
  H3: [Vraag 4]?
  - Minimaal 4 FAQ's
  - FAQ Schema markup toevoegen

CTA-blok:
  - Herhaal hoofdaanbod
  - Contactformulier of telefoonknop
  - Vertrouwenssignalen (reviews, certificeringen)
```

---

## Unieke Content Elementen

<!-- BRON: vul aan uit bronmateriaal — hoe de gebruiker uniekheid per pagina waarborgt -->

**Probleem:** 50 stads-pagina's die alleen de stadsnaam veranderen = duplicate content.

**Oplossing — Unieke elementen per stad:**

| Element | Hoe uniek maken |
|---------|----------------|
| Intro | Verwijs naar lokale context (bijv. "Als Amsterdams bedrijf...") |
| USP's | Lokale USP's toevoegen (bijv. "5 minuten van Centraal Station") |
| Aanpak | Lokale casestudy of voorbeeld |
| Prijzen | Regionale prijsverschillen benoemen |
| FAQ's | Stad-specifieke vragen (bijv. "Parkeren bij ons kantoor in [stad]?") |
| Testimonial | Review van klant uit [stad] |

---

## Variabelen (voor batch-generatie)

```
{{dienst}}        — De dienst (bijv. "boekhouder", "tandarts")
{{stad}}          — De stad (bijv. "Amsterdam", "Rotterdam")
{{merk}}          — Het bedrijfsnaam
{{usp_1}}         — Eerste USP
{{usp_2}}         — Tweede USP
{{usp_3}}         — Derde USP
{{prijs_vanaf}}   — Startprijs (optioneel)
{{telefoon}}      — Telefoonnummer
{{adres}}         — Lokaal adres (optioneel)
```

---

## Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{{merk}} — {{dienst}} in {{stad}}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{{stad}}",
    "addressCountry": "NL"
  },
  "description": "{{dienst}} in {{stad}}...",
  "url": "https://example.com/{{dienst}}-{{stad}}"
}
```

---

## Interne Links

- Link naar **hub-pagina** (`/[dienst]`)
- Link naar **andere steden** ("Ook beschikbaar in [stad 2], [stad 3]")
- Link naar gerelateerde **use-case pagina's**
- Ontvang links vanuit de hub en andere spokes

---

## Quality Checklist

- [ ] Title tag ≤ 60 tekens, zoekwoord vooraan
- [ ] Meta description ≤ 155 tekens, bevat zoekwoord + CTA
- [ ] H1 bevat `[dienst] in [stad]`
- [ ] Minimaal 4 FAQ's met schema markup
- [ ] Minimaal 1 uniek element per stad (niet alleen naam-swap)
- [ ] CTA boven de vouw + onderaan
- [ ] Interne links naar hub + 2-3 andere spokes
- [ ] LocalBusiness schema markup
- [ ] URL volgt patroon `/[dienst]-[stad]`

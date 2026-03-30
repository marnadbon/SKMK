---
description: Genereer een batch geoptimaliseerde landingspagina's vanuit een template en dataset
---
Genereer een batch geoptimaliseerde landingspagina's vanuit een template en dataset.

---

## Stap 1 — Context Laden

Lees de volgende bestanden (sla over als ze niet bestaan):

**Vault:**
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`

**Knowledge-base:**
- `knowledge-base/seo-strategie.md`
- `knowledge-base/pseo-2-systeem.md`
- `knowledge-base/technische-seo.md`
- `knowledge-base/interne-linking.md`

**References (als aanwezig):**
- `references/` — voorbeeldpagina's

Bevestig kort welke bestanden geladen zijn en welke ontbreken.

---

## Stap 2 — Intake

Vraag de gebruiker:

1. **Welke aanpak?**
   - **pSEO 2.0 (schema-driven)** — JSON schema + niche-context + AI-generatie (voor schaal: 100+ pagina's)
   - **Traditioneel (template-based)** — bewezen templates aanpassen (voor kleiner volume: 10-50 pagina's)

2. **Welk zoekpatroon / content categorie?**
   - [dienst] in [stad] — service-locatie pagina's
   - [product] vs [alternatief] — vergelijkingspagina's
   - [tool] voor [doelgroep] — use-case pagina's
   - beste [categorie] voor [use case] — review pagina's
   - Resource pagina's — idea-lijsten, checklists, guides, templates (pSEO 2.0)
   - Free tools — werkende tool-pagina's per niche (pSEO 2.0)
   - Alternative pagina's — "beste [product] alternatieven" (pSEO 2.0)
   - Of: beschrijf je eigen patroon

3. **Wat is de dataset?** (of help de gebruiker deze samen te stellen)
   - Bijv. lijst van steden, niches, concurrenten, doelgroepen
   - Hoeveel pagina's moeten er gegenereerd worden?

4. **Zijn er specifieke eisen?**
   - CTA-type (offerte, bellen, aanmelden)
   - Prijsinformatie opnemen?
   - Specifieke USP's of voordelen?
   - Eigen huisstijl of tone-of-voice aanpassingen?

---

## Stap 3 — Template Selectie

Laad het juiste template uit `knowledge-base/pagina-templates/`:
- `service-locatie.md` — voor [dienst] in [stad]
- `vergelijking.md` — voor [product] vs [alternatief]
- `use-case.md` — voor [tool] voor [doelgroep]
- `review-aanbeveling.md` — voor beste [categorie] voor [use case]

Toon de gebruiker de structuur van het gekozen template en vraag of aanpassingen nodig zijn.

---

## Stap 3b — Niche Taxonomie (pSEO 2.0)

**Alleen bij schema-driven aanpak.** Sla over bij traditionele template-based generatie.

Bouw gestructureerde context per niche (zie `knowledge-base/pseo-2-systeem.md`):

```json
{
  "slug": "[niche]",
  "name": "[Niche Naam]",
  "context": {
    "audience": "[Specifieke doelgroep]",
    "pain_points": "[Top problemen]",
    "monetization": "[Hoe ze geld verdienen]",
    "content_that_works": "[Formats die presteren]",
    "subtopics": ["[sub 1]", "[sub 2]", "[sub 3]"]
  }
}
```

Investeer hier ~60% van de tijd. Dit is het fundament:
- **Zonder niche-context** → generieke content (Google ziet dit als thin content)
- **Met rijke niche-context** → specifieke, waardevolle content per niche

Stel een JSON-schema op voor het content-type. Definieer verplichte velden, aantallen (bijv. "15-20 items per sectie"), en constraints.

**Belangrijke regel:** Titles zijn deterministisch (template), NIET AI-gegenereerd.

---

## Stap 4 — Data Inventaris

Inventariseer alle variabelen die nodig zijn:

1. **Verplichte variabelen** uit het template (bijv. {{dienst}}, {{stad}}, {{merk}})
2. **Unieke elementen** per pagina — wat maakt elke pagina anders dan alleen een naam-swap?
3. **Beschikbare data** — wat heeft de gebruiker al? Wat moet je genereren?

Maak een overzichtstabel:

```
| Pagina | Var 1 | Var 2 | Uniek element | Status |
|--------|-------|-------|---------------|--------|
| ...    | ...   | ...   | ...           | ...    |
```

---

## Stap 5 — Genereer Eerste Pagina

Genereer 1 complete voorbeeldpagina ter goedkeuring. Inclusief:
- Volledige content (H1 t/m CTA)
- Title tag
- Meta description
- URL
- Schema markup (als JSON-LD)
- Interne linking suggesties

Vraag expliciet: **"Klopt dit? Mag ik de rest genereren op basis van dit voorbeeld?"**

---

## Stap 6 — Quality Gate

Controleer de voorbeeldpagina op de checklist uit het template. Minimaal:

- [ ] Title tag ≤ 60 tekens, zoekwoord vooraan
- [ ] Meta description ≤ 155 tekens, bevat zoekwoord + CTA
- [ ] H1 bevat hoofdzoekwoord
- [ ] Heading hierarchie logisch (H1 → H2 → H3)
- [ ] Minimaal 3-4 FAQ's
- [ ] Content is UNIEK (niet alleen variabele-swap)
- [ ] CTA aanwezig (boven de vouw + onderaan)
- [ ] Schema markup correct
- [ ] URL volgt het patroon
- [ ] Interne links gepland

**pSEO 2.0 Kwaliteitstest (extra):**
- [ ] "Zou dit nuttig zijn als zoekmachines niet bestonden?" → JA
- [ ] "Als iemand dit bookmarkt en terugkomt, biedt het dan nog waarde?" → JA
- [ ] JSON schema volledig en valide (geen missende velden)
- [ ] Niche-context is merkbaar in de content (niet generiek)

Pas aan indien nodig. Ga pas door na goedkeuring.

---

## Stap 7 — Batch Generatie

Genereer alle pagina's:
- Volg exact het goedgekeurde voorbeeld als basis
- Zorg voor unieke elementen per pagina (lokale context, specifieke voorbeelden, unieke FAQ's)
- Sla op in `outputs/paginas/[patroon]-[datum]/`
- Eén bestand per pagina, naamgeving: `[zoekwoord-slug].md`

---

## Stap 8 — Interne Linking

Pas interne linking toe volgens `knowledge-base/interne-linking.md`:

1. **Identificeer de hub-pagina** (bestaat deze al? zo nee, moet deze gemaakt worden?)
2. **Link spokes → hub** in elke pagina
3. **Link hub → spokes** (alle pagina's opnemen)
4. **Cross-links** tussen gerelateerde pagina's
5. **Ankerteksten** — gebruik zoekwoorden als ankertekst, varieer

Lever een **linking overzicht** op:
```
Hub: /[hub-url]
├── /[pagina-1] ←→ links naar: hub, pagina-2, pagina-3
├── /[pagina-2] ←→ links naar: hub, pagina-1, pagina-4
└── ...
```

---

## Stap 9 — Lever Op

Lever het volledige pakket op:

1. **Alle pagina's** in `outputs/paginas/`
2. **Sitemap overzicht** — alle URL's met template-type
3. **Linking overzicht** — wie linkt naar wie
4. **Implementatie checklist:**
   - [ ] Pagina's uploaden naar CMS
   - [ ] Schema markup implementeren
   - [ ] Interne links controleren
   - [ ] Sitemap.xml updaten
   - [ ] Google Search Console: sitemap indienen
5. **Progressieve rollout plan** (bij grote batches):
   - Batch 1: 10-50 pagina's (test, monitor indexering)
   - Batch 2: 100-500 pagina's (opschalen na positieve signalen)
   - Batch 3+: volledige schaal
   - Monitor per batch: indexeringssnelheid, rankings, traffic, negatieve signalen

$ARGUMENTS

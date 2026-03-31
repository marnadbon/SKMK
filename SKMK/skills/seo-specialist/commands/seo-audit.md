---
description: Analyseer bestaande pagina's op SEO-kwaliteit en geef concrete verbeterpunten
---
Analyseer bestaande pagina's of content op SEO-kwaliteit en geef concrete verbeterpunten.

---

## Stap 1 — Context Laden

Lees de volgende bestanden:

**Knowledge-base:**
- `SKILL.md` (kernprincipes)
- `knowledge-base/technische-seo.md`
- `knowledge-base/seo-strategie.md`
- `knowledge-base/interne-linking.md`

**Vault (als aanwezig):**
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`

---

## Stap 2 — Intake

Vraag de gebruiker:

1. **Wat wil je laten auditen?**
   - Een URL (plak de URL)
   - Een tekst/document (plak of verwijs naar bestand)
   - Een batch pagina's (meerdere URL's of bestanden)

2. **Wat is het doel-zoekwoord?** — voor welk zoekwoord moet deze pagina ranken?

3. **Wat is het type pagina?**
   - Landingspagina (service/product)
   - Blogpost / content
   - Vergelijkingspagina
   - Homepage
   - Anders

4. **Specifieke zorgen?** — is er iets specifieks dat je wilt laten checken?

---

## Stap 3 — On-Page Analyse

Analyseer de volgende elementen:

### Title Tag
- [ ] Aanwezig?
- [ ] ≤ 60 tekens?
- [ ] Bevat hoofdzoekwoord?
- [ ] Zoekwoord vooraan?
- [ ] Uniek (niet duplicaat)?
- Score: /10

### Meta Description
- [ ] Aanwezig?
- [ ] ≤ 155 tekens?
- [ ] Bevat zoekwoord?
- [ ] Bevat CTA of belofte?
- Score: /10

### Heading Structuur
- [ ] H1 aanwezig en uniek?
- [ ] H1 bevat hoofdzoekwoord?
- [ ] Logische hiërarchie (H1 → H2 → H3)?
- [ ] H2's bevatten gerelateerde zoekwoorden?
- Score: /10

### Keyword Gebruik
- [ ] Hoofdzoekwoord in eerste 100 woorden?
- [ ] Natuurlijke keyword-dichtheid (niet stuffed)?
- [ ] Gerelateerde zoekwoorden/synoniemen gebruikt?
- [ ] Long-tail varianten opgenomen?
- Score: /10

### Interne Links
- [ ] Interne links aanwezig?
- [ ] Relevante ankerteksten (niet "klik hier")?
- [ ] Links naar gerelateerde pagina's?
- [ ] Ontvangt links van andere pagina's?
- Score: /10

---

## Stap 4 — Technische Check

Analyseer op basis van `knowledge-base/technische-seo.md`:

### URL Structuur
- [ ] Kort en beschrijvend?
- [ ] Bevat zoekwoord?
- [ ] Geen stopwoorden of rare tekens?
- Score: /10

### Schema Markup
- [ ] Relevant schema type aanwezig?
- [ ] FAQPage schema (als FAQ's aanwezig)?
- [ ] BreadcrumbList schema?
- [ ] LocalBusiness / Product schema (indien relevant)?
- Score: /10

### Canonical & Indexatie
- [ ] Canonical tag aanwezig?
- [ ] Geen onbedoelde noindex?
- [ ] In sitemap opgenomen?
- Score: /10

### Mobile & Performance
- [ ] Mobile-friendly?
- [ ] Afbeeldingen geoptimaliseerd?
- [ ] Laadsnelheid acceptabel?
- Score: /10

---

## Stap 5 — Content Kwaliteit

### Uniekheid
- [ ] Content is origineel (geen duplicaat)?
- [ ] Niet alleen een template-swap (eigen waarde per pagina)?
- Score: /10

### Diepte
- [ ] Beantwoordt de pagina de zoekvraag volledig?
- [ ] Biedt de pagina meer waarde dan concurrenten?
- [ ] Zijn er concrete details (getallen, voorbeelden, stappen)?
- Score: /10

### Zoekintentie Match
- [ ] Past de content bij de zoekintentie?
- [ ] Krijgt de zoeker wat hij verwacht?
- [ ] Is de CTA logisch voor de intent?
- Score: /10

---

## Stap 6 — Score & Rapport

Maak een overzichtsrapport:

```
## SEO Audit Rapport — [Pagina/URL]
Datum: [datum]
Doel-zoekwoord: [zoekwoord]

### Totaalscore: [X]/100

| Categorie | Score | Status |
|-----------|-------|--------|
| Title Tag | /10 | ✅/⚠️/❌ |
| Meta Description | /10 | ✅/⚠️/❌ |
| Heading Structuur | /10 | ✅/⚠️/❌ |
| Keyword Gebruik | /10 | ✅/⚠️/❌ |
| Interne Links | /10 | ✅/⚠️/❌ |
| URL Structuur | /10 | ✅/⚠️/❌ |
| Schema Markup | /10 | ✅/⚠️/❌ |
| Canonical & Indexatie | /10 | ✅/⚠️/❌ |
| Content Kwaliteit | /10 | ✅/⚠️/❌ |
| Zoekintentie Match | /10 | ✅/⚠️/❌ |

✅ = 8-10 | ⚠️ = 5-7 | ❌ = 0-4
```

---

## Stap 7 — Actieplan

Lever concrete verbeterpunten, gesorteerd op impact:

### Hoge Impact (doe dit eerst)
1. [Actie] — [waarom] — [hoe]
2. ...

### Medium Impact
1. [Actie] — [waarom] — [hoe]
2. ...

### Lage Impact (nice to have)
1. [Actie] — [waarom] — [hoe]
2. ...

Sla het rapport op in `outputs/audits/[onderwerp]-[datum].md`.

**Vraag:** Wil je dat ik de verbeterpunten direct doorvoer in de content?

$ARGUMENTS

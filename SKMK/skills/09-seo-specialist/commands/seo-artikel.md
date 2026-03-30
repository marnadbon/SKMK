---
description: Schrijf een research-backed SEO-artikel dat beter is dan de concurrentie
---
# Deep Article SEO — Schrijf een Research-Backed SEO Artikel

Schrijf een kwalitatief, research-backed SEO-artikel dat beter is dan alles wat er nu op pagina 1 staat. Twee modi: **interactief** (met goedkeuringsgates) of **autonoom** (batch, geen gates).

---

## Stap 1 — Context Laden

Laad ALTIJD deze bestanden:

**Vault (als aanwezig):**
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md`
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`

**Knowledge-base:**
- `knowledge-base/artikel-systeem.md` — het volledige artikel-systeem
- `knowledge-base/technische-seo.md` — SEO-richtlijnen
- `knowledge-base/seo-strategie.md` — keyword context

**References (als aanwezig):**
- Check `references/` voor voorbeeldartikelen

---

## Stap 2 — Intake & Mode Detectie

### Mode Detectie
- Gebruiker zegt "autonomous", "batch", "autonoom", of geeft een keyword-lijst → **Autonome Mode** (ga naar Stap 2B)
- Anders → **Interactieve Mode** (ga door naar Stap 2A)

### Stap 2A — Interactieve Intake
Vraag de gebruiker:
1. **Target keyword** — het zoekwoord waarvoor we willen ranken
2. **Artikel formaat** — lijst, how-to, vergelijking, review, of explainer (stel voor op basis van keyword-intent)
3. **Concurrent-URLs** — optioneel: 2-4 URLs van top-ranking artikelen (anders zoek je ze zelf)
4. **Woordaantal** — standaard 2500 woorden, of specificeer
5. **Doelgroep** — wie leest dit? (gebruik buyer-avatar als basis)
6. **Taal** — standaard Nederlands, of specificeer
7. **Aanvullende instructies** — specifieke invalshoek, verplichte onderwerpen, tone of voice afwijkingen

### Stap 2B — Autonome Batch Intake
Vraag de gebruiker:
1. **Keyword-lijst** — alle keywords waarvoor artikelen geschreven moeten worden
2. **Standaard formaat** — of per keyword aangegeven (lijst, how-to, vergelijking, review, explainer)
3. **Standaard woordaantal** — standaard 2500 woorden
4. **Doelgroep** — wie leest dit?
5. **Taal** — standaard Nederlands
6. **Aanvullende instructies** — gelden voor alle artikelen

Na intake: bevestig de lijst en start. Per keyword worden Stap 3-8 volledig autonoom doorlopen.

---

## Stap 3 — Concurrent Analyse

### Interactieve Mode
- Als de gebruiker concurrent-URLs heeft gegeven: scrape die met WebFetch
- Zo niet: zoek het target keyword met WebSearch, neem de top 4-6 organische resultaten

### Autonome Mode
- Zoek automatisch het keyword met WebSearch
- Neem de top 4-6 organische resultaten, scrape met WebFetch

### Voor elk concurrent-artikel, documenteer:
1. **URL + titel + geschat woordaantal**
2. **Volledige heading-structuur** (H1, H2's, H3's)
3. **Sterke secties** — waar gaat dit artikel diep?
4. **Zwakke secties** — waar is het oppervlakkig?
5. **Unieke elementen** — tabellen, tools, media, expert quotes
6. **Ontbrekende onderwerpen** — wat behandelt GEEN enkel concurrent-artikel?

### Output: Concurrent Analyse Samenvatting
Presenteer:
- Geanalyseerde artikelen (URL, titel, woordaantal)
- Gemeenschappelijke structuur (wat alle concurrenten doen)
- Gaps (wat er MIST — dit wordt ons concurrentievoordeel)
- Onze differentiatie (hoe ons artikel anders/beter wordt)

---

## Stap 4 — Deep Research

Gebruik WebSearch om diepere informatie te verzamelen dan de concurrenten hebben. Vul de 9 categorieën uit het research schema:

1. **Kernfeiten & Specificaties** — harde feiten, cijfers, verifieerbare info
2. **Gebruikerservaringen & Struggles** — Reddit, forums, reviews, echte ervaringen
3. **Expert Inzichten** — analisten, thought leaders, test-organisaties
4. **Vergelijkende Data** — benchmarks, marktaandeel, alternatieven
5. **Trends & Ontwikkelingen** — recente updates, roadmaps, regelgeving
6. **Praktische Toepassingen** — case studies, workflows, before/after
7. **Veelgestelde Vragen** — People Also Ask, forums, community vragen
8. **Statistieken & Data** — onderzoeken, surveys, metrieken
9. **Contrarian & Onverwachte Inzichten** — tegen de consensus, insidertips, mythen

### Research Richtlijnen
- Zoek minimaal 5-8 verschillende bronnen
- Noteer altijd de bron bij elk datapunt
- Focus op informatie die de concurrenten NIET hebben
- Kwaliteit > kwantiteit — 3 sterke inzichten > 10 generieke feiten

---

## Stap 5 — Outline Planning

Maak een gestructureerde outline op basis van concurrent analyse + research:

### Outline Bevat:
- **H1** — artikel titel met primary keyword
- **Per H2-sectie:**
  - Heading tekst
  - Sectie-type (intro, item, step, section, verdict, faq)
  - Woordbudget
  - Key points die behandeld worden
  - Welke research-categorieën hier verwerkt worden
- **Totaal woordbudget** — som van alle secties = target woordaantal (±10%)

### Outline Volgorde
Volg het formaat-specifieke sectiepatroon uit `artikel-systeem.md`.

### Interactieve Mode
⛔ **GOEDKEURING VEREIST** — presenteer de outline en wacht op feedback/goedkeuring voordat je gaat schrijven. De gebruiker kan secties toevoegen, verwijderen, herprioriteren, of woordbudgetten aanpassen.

### Autonome Mode
Geen goedkeuring — outline volgt automatisch de beste concurrent-structuur, aangevuld met geïdentificeerde gaps. Ga direct door naar Stap 6.

---

## Stap 6 — Schrijven

Schrijf het volledige artikel op basis van de goedgekeurde outline + research + brand voice.

### Schrijf-Instructies
- Volg de outline EXACT — secties, volgorde, woordbudgetten
- Verwerk ALLE relevante research — niet cherry-picken
- Brand voice uit vault consistent doorvoeren
- Elke H2-sectie opent met een engagement hook (zie artikel-systeem.md)
- Gebruik specifieke voorbeelden, cijfers, namen — geen vage claims
- Respecteer woordbudget per sectie (±10%)

### Fluff-Controle Tijdens Schrijven
Gebruik NOOIT zinnen uit de fluff blacklist (zie artikel-systeem.md). Geen em-dashes.

### Na Het Schrijven
Controleer:
- [ ] Totaal woordaantal binnen ±15% van target
- [ ] Primary keyword in eerste 100 woorden
- [ ] Primary keyword in H1 en minimaal 2 H2's
- [ ] Elke sectie heeft engagement hook
- [ ] Geen fluff-phrases uit blacklist
- [ ] Heading hiërarchie correct (H1 → H2 → H3)

---

## Stap 7 — Editing (Adversarial Review)

### Interactieve Mode
Neem de rol van strenge editor aan en review het hele artikel op 4 criteria:

#### 1. Informatiedichtheid
- Lees elke alinea: voegt het nieuwe informatie toe? Zo nee → herschrijf of verwijder.
- Test: "Als ik deze alinea weglaat, mist de lezer dan iets?"

#### 2. Nauwkeurigheid
- Kloppen alle claims? Zijn bronnen correct?
- Zijn er vage uitspraken die specifieker kunnen?
- Vervang elke "veel mensen" door een concreet getal of verwijder de claim.

#### 3. Engagement
- Opent elke sectie sterk? Niet met "In deze sectie..."
- Zijn er droge passages? Breek op met voorbeelden, vergelijkingen, vragen.
- Is de conclusie actiegericht?

#### 4. SEO & Structuur
- Keyword-gebruik natuurlijk en voldoende?
- Heading-hiërarchie correct?
- Interne en externe links aanwezig?
- FAQ-sectie met echte vragen?

Pas het artikel aan op basis van de editor-review. Presenteer de wijzigingen.

### Autonome Mode — Automated Quality Gate
Voer automatisch deze checks uit:

| Check | Criterium | Actie bij FAIL |
|-------|-----------|----------------|
| Woordaantal | Binnen ±15% van target | Secties inkorten of uitbreiden |
| Heading hiërarchie | H1 → H2 → H3, geen sprongen | Corrigeer structuur |
| Primary keyword | In eerste 100 woorden | Herschrijf intro |
| Fluff-phrases | Geen items uit blacklist | Vervang door concrete taal |
| FAQ sectie | Aanwezig met 4-6 vragen | Toevoegen op basis van research |
| Engagement hooks | Elke H2 opent sterk | Herschrijf zwakke openingen |
| Informatiedichtheid | Geen lege alinea's | Verwijder of vervang met feiten |

Als een check FAILT: automatisch herschrijven van de falende secties en opnieuw valideren.

---

## Stap 8 — SEO Meta & Polish

Genereer de SEO-metadata:

### Title Tag
- ≤ 60 tekens
- Primary keyword vooraan
- Formaat: "[Primary Keyword]: [Belofte/Hook] ([Jaar])"

### Meta Description
- 150-155 tekens
- Primary keyword in eerste helft
- Eindig met CTA of belofte

### URL Slug
- Kort, beschrijvend, primary keyword, koppeltekens

### Open Graph
- OG title (geoptimaliseerd voor social clicks)
- OG description (korter, punchier)

### Consistency Check
- Zijn alle feiten intern consistent?
- Worden termen consistent gespeld?
- Zijn alle links correct?
- Past de tone of voice bij de brand voice?

---

## Stap 9 — Lever Op

### Interactieve Mode
⛔ **GOEDKEURING VEREIST** — presenteer het volledige artikel met:

1. **Het artikel** — volledig in markdown
2. **SEO meta** — title, description, slug, OG
3. **Samenvatting:**
   - Woordaantal
   - Formaat
   - Belangrijkste gaps die gedekt zijn
   - Unieke waarde t.o.v. concurrentie
4. **Suggesties:** interne links, gerelateerde artikelen, vervolgcontent

Na goedkeuring: sla op in `outputs/artikelen/[keyword-slug].md`

### Autonome Mode
Per artikel:
1. Sla op in `outputs/artikelen/[keyword-slug].md`
2. Noteer: keyword, formaat, woordaantal, quality gate resultaten
3. Ga door naar het volgende keyword

**Na alle keywords:** presenteer samenvattingstabel:

| # | Keyword | Formaat | Woorden | Quality Gate | Bestand |
|---|---------|---------|---------|--------------|---------|
| 1 | [keyword] | [formaat] | [aantal] | PASS/FAIL + details | [pad] |
| 2 | ... | ... | ... | ... | ... |

Plus eventuele quality flags die aandacht vereisen.

---

## Belangrijke Notities

- **Research is alles** — een artikel zonder diepere research dan de concurrentie heeft geen reden om hoger te ranken. Besteed voldoende tijd aan Stap 3-4.
- **Brand voice** — het artikel moet klinken als het merk, niet als een AI. Gebruik de brand voice uit de vault als leidraad.
- **Geen opvulling** — liever 2000 sterke woorden dan 4000 met fluff. Elk woord verdient zijn plek.
- **Altijd bronvermelding** — claims worden onderbouwd met data of bronnen. Geen loze beweringen.

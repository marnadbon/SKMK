---
description: Schrijf een complete long-form salespage op basis van het salespage systeem
---

Schrijf een complete long-form salespage op basis van het salespage systeem.

---

## Stap 1: Context Laden

Lees de volgende bestanden:

**Vault (klantcontext):**
- `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` — toon en stem
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` — doelgroep
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` — aanbod (als aanwezig)
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — bedrijfscontext (als aanwezig)
- `${CLAUDE_PLUGIN_DATA}/generated/testimonials.md` — beschikbaar bewijs (als aanwezig)

**Knowledge base:**
- `references/salespage-systeem.md` — het volledige salespage systeem

**Referenties:**
- Scan `references/salespages/README.md` voor beschikbare voorbeeldpages
- Lees 1-2 referentie salespages die qua type/prijspunt het meest lijken op wat de klant nodig heeft

**Klassieke frameworks (als extra context nodig):**
- `references/long-form-frameworks/leads.md` — lead types
- `references/long-form-frameworks/frameworks.md` — AIDA, PAS, 4P's
- `references/long-form-frameworks/proof.md` — bewijstechnieken

---

## Stap 2: Intake

Vraag de gebruiker om de volgende informatie. Vul zoveel mogelijk in vanuit vault-bestanden, vraag alleen wat ontbreekt.

| Veld | Wat je nodig hebt |
|------|-------------------|
| **Product/dienst** | Wat verkoop je? Naam, type, format |
| **Doelgroep** | Wie is de ideale koper? (avatar uit vault als beschikbaar) |
| **Salespage type** | Tripwire (€5-37) / Low-ticket (€37-97) / Mid-ticket (€197-497) / Pre-sale (€99-249) |
| **Prijs** | Actuele prijs + eventuele doorgestreepte prijs / introductieprijs |
| **Hoofdbelofte** | Het #1 resultaat voor de koper |
| **Unique Mechanism** | Wat maakt jouw aanpak/methode uniek? Naam van de methode? |
| **Beschikbaar bewijs** | Testimonials, screenshots, resultaten, eigen ervaring |
| **Bonussen** | Extra's die je meelevert (met cash values als je die hebt) |
| **Garantie** | Type garantie, termijn, voorwaarden |
| **Urgentie** | Deadline, introductieprijs, beperkte oplage, of geen urgentie |

---

## Stap 3: Strategische Fundering

Bepaal VOORDAT je schrijft:

### 3a. Big Idea
Eén intellectueel interessant EN emotioneel overtuigend concept dat de hele pagina draagt. Niet het product zelf, maar het grotere idee erachter.

### 3b. Awareness Level Doelgroep
Bepaal waar de meerderheid van de doelgroep zit:
- Most Aware → Offer Lead (direct product + prijs)
- Product Aware → Promise Lead (specifieke belofte)
- Solution Aware → Secret Lead (nieuwsgierigheid)
- Problem Aware → Problem-Solution Lead
- Unaware → Story Lead

### 3c. Hook Strategie
Op basis van awareness level: welk headline type? Schrijf 3-5 headline opties.

### 3d. Prijspresentatie Strategie
Op basis van salespage type:
- Tripwire: "Slechts €X" + triviale vergelijking
- Low-ticket: Doorgestreepte prijs + percentage besparing
- Mid-ticket: Value stack optellen → introductieprijs
- Pre-sale: Cascade doorgestreepte prijzen

---

## Stap 4: Structuur Ontwerp

⛔ **GATE — Presenteer de structuur aan de gebruiker voor goedkeuring voordat je gaat schrijven.**

Op basis van het salespage type, stel de sectievolgorde samen uit `salespage-systeem.md` → "Pagina Anatomie Per Type".

Presenteer:
1. Gekozen salespage type + reden
2. Sectievolgorde (welke van de 15 secties, in welke volgorde)
3. Gekozen headline type + 3-5 headline opties
4. Gekozen prijspresentatie strategie
5. Voorgestelde close type (two-path / "what would it be worth" / fear close)

**Wacht op goedkeuring of aanpassingen.**

---

## Stap 5: Headline & Opening

Schrijf:
- **Headline** — De gekozen optie (of een nieuwe variant op basis van feedback)
- **Subheadline** — Verduidelijking of nieuwsgierigheid
- **Lead** — Eerste 3-4 paragrafen die de lezer vastpakken

Zorg dat de lead matcht met het awareness level. Gebruik de formules uit `salespage-systeem.md` → "Opening / Lead" en de voorbeelden uit `bronnen/salespage-masterclass-leads.md`.

---

## Stap 6: Kern Schrijven

Schrijf de kernsecties in volgorde:

### Probleem + Agitatie
- Probleemherkenning ("als jij nu op dit moment...")
- Agitatie (maak het voelbaar)
- Impact op andere gebieden (partner, relaties, financiën)

### Discovery Story
- Situatieschets met specifieke details
- Element van toeval/geluk
- De ontdekking
- Eerste resultaten

### Oplossing & Mechanisme
- Waarom jouw aanpak anders werkt
- Contrasteer met de "normale" manier
- Unique mechanism uitleggen

### Social Proof
- Testimonials (tekst met naam + plaats)
- Screenshots (als beschikbaar)
- Resultaatcijfers (als beschikbaar)

---

## Stap 7: Offer & Close

Schrijf de afsluitende secties:

### Wat Je Krijgt
Features → Benefits bullets. Formaat: ✅ [Feature] — [Benefit]. ([Consequentie zonder.])

### Bonus Stack
Elke bonus met:
- Naam
- Beschrijving (1-2 zinnen)
- Cash value

### Prijspresentatie
Volgens de gekozen strategie uit Stap 3d.

### Garantie
Creatieve garantie volgens patronen uit `salespage-systeem.md`:
- Refund + houd product
- Specifiek bedrag terug
- Geen-gedoe belofte
- Empathie ("ook al is het maar €X, je hebt hier voor gewerkt")

### FAQ / Bezwaren
3-6 veelgestelde vragen die bezwaren wegnemen.

### Close
Kies op basis van salespage type:
- Two-path close (links = status quo, rechts = transformatie)
- "What would it be worth" emotionele close
- Fear close ("alles blijft hetzelfde")
- Of een combinatie

### P.S. Secties
1. Samenvatting voor scrollers
2. Herhaal garantie + CTA

---

## Stap 8: Quality Gate + Lever Op

### Kwaliteitscheck (uit salespage-systeem.md)

**Universeel:**
- [ ] Avatar-first: geschreven vanuit het hoofd van de doelgroep
- [ ] Headline matcht awareness level
- [ ] Discovery story bevat element van toeval
- [ ] Specifieke getallen en details (niet vaag)
- [ ] Minimaal 3 CTA's verspreid door de pagina
- [ ] Garantie is creatief en memorabel
- [ ] Geen generieke claims zonder bewijs
- [ ] PS sectie aanwezig
- [ ] Slippery slide: elk element leidt naar het volgende

**Type-specifiek:**
- Tripwire: Eerste CTA vroeg? Disclaimer? Transparantie over backend?
- Mid-ticket: "What would it be worth"? Fear close? Introductieprijs met anker?
- Pre-sale: Educatie sectie? Echte schaarste? Missie? Verlengde garantie?

### Lever Op
Lever de complete salespage op als doorlopende copy, klaar om te implementeren.

**Markeer duidelijk:**
- `[HEADLINE]`, `[CTA BUTTON]`, `[IMAGE]`, `[VIDEO]`, `[TESTIMONIAL SCREENSHOT]` — visuele elementen
- `[PLACEHOLDER: ...]` — informatie die de klant nog moet aanleveren

### Iteratie
Vraag: "Wil je aanpassingen aan specifieke secties, of wil je een alternatieve headline/opening zien?"

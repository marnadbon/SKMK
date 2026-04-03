---
description: Schrijf een platform-native social media post voor LinkedIn, Instagram, X/Twitter of Facebook
---

De gebruiker wil een social media post schrijven. Gebruik de `content-creator` skill.

## Platform Detectie

Bepaal het platform uit de argumenten. Als niet opgegeven, vraag: LinkedIn, Facebook, Instagram, of X/Twitter.

---

## LinkedIn Workflow

Als het platform LinkedIn is, volg deze stappen:

### Stap 1 — Context Laden
1. Lees `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` — voor toon, stem, en de LinkedIn Voice Profile sectie
2. Lees `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` — voor doelgroep
3. Lees `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — voor je verhaal, achtergrond en business context (als aanwezig)
4. Lees `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` — voor producten/aanbod (als aanwezig, vooral bij converteren-doel)
5. Lees `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — voor klantresultaten (als aanwezig, vooral bij bewijs/proof content)
6. Lees `references/platform-guides/linkedin.md` — voor platform context
7. Lees `references/linkedin/writing-rules.md` — voor harde regels en workflow
8. Check `references/linkedin-voorbeelden/` — voor extra referentie-posts (als aanwezig)

### Stap 2 — Intake
Vraag de gebruiker (als niet opgegeven in de argumenten):
- **Onderwerp/idee** — waar gaat de post over?
- **Doel** — attract (nieuw publiek) / nurture (verdiepen) / position (autoriteit) / convert (actie)?
- **Eigen ervaring/data** — specifieke details, cijfers, momenten die de "Alleen Jij" filter doorstaan

### Stap 3 — Template Selectie
Lees `references/linkedin/templates.md` en selecteer 3 passende templates op basis van onderwerp en doel. Presenteer ze kort:
- Template naam
- Waarom deze past
- Structuur in 1 zin

Laat de gebruiker kiezen (of kies de sterkste als quick mode).

**Quick mode:** Als de gebruiker "quick", "snel", of vergelijkbaar zegt, skip de template-presentatie en kies zelf het sterkste template.

### Stap 4 — Hook & Draft
1. Lees `references/linkedin/hooks-library.md` — kies de meest passende hook-categorie
2. Schrijf de hook volgens het gekozen patroon (check: past in 150 tekens?)
3. Schrijf de volledige post volgens:
   - De gekozen template structuur
   - De writing rules (geen hashtags, geen emdashes, elke zin heeft doel)
   - De brand voice (inclusief LinkedIn Voice Profile)

### Stap 5 — Quality Gate
Controleer intern voordat je de post presenteert:
- [ ] Anti-saai checklist (min 3/5 ja)
- [ ] "Alleen Jij" filter doorstaan
- [ ] Geen hashtags
- [ ] Geen emdashes
- [ ] Hook werkt in 150 tekens
- [ ] Lengte: 500-1200 tekens

### Stap 6 — Lever Op
Presenteer:
1. **De post** — volledig uitgeschreven, klaar om te plakken
2. **2 alternatieve hooks** — andere invalshoeken
3. **Visuele suggestie** — welk type visual past (stat card, screenshot, meme, infographic, foto, of geen)
4. **Hergebruik ideeën** — hoe dit onderwerp op andere platforms kan worden hergebruikt

### Stap 7 — Iterate
Bied aan: korter / langer / andere invalshoek / zachter / meer verhaal / punchier

---

## Instagram Workflow

Als het platform Instagram is, vraag eerst: **"Reel of feed/carousel?"**

- **Feed/carousel** → ga naar "Overige Platforms" workflow hieronder
- **Reel** → volg het Reels-workflow:

### Stap 1 — Context Laden
1. Lees `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` — voor toon en stem
2. Lees `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` — voor doelgroep
3. Lees `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — voor je verhaal, achtergrond en business context (als aanwezig)
4. Lees `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` — voor producten/aanbod (als aanwezig, vooral bij converteren-doel)
5. Lees `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — voor klantresultaten (als aanwezig, vooral bij bewijs/proof content)
6. Lees `references/instagram/reels-formaten.md` — voor Reel formaten, hooks, productie
7. Lees `references/instagram/captions-en-cta.md` — voor caption systeem en CTA's
8. Lees `references/platform-guides/instagram.md` — voor platform context
9. Check `references/instagram-voorbeelden/` — voor extra referentie-posts (als aanwezig)

### Stap 2 — Intake
Vraag de gebruiker (als niet opgegeven in de argumenten):
- **Onderwerp/idee** — waar gaat de Reel over?
- **Reel type** — Quote Reel / B-Roll + Caption / Talking Head (leg kort de 3 opties uit)
- **Doel** — bereik (nieuwe mensen) / engagement (community) / conversie (DM's/sales)?
- **Footage beschikbaar?** — heeft de gebruiker eigen B-roll of moet het met screenshots/quotes?

### Stap 3 — Reel Format & Hook
1. Bevestig het format op basis van doel + comfort level (zie Wanneer Welk Format tabel)
2. Kies de beste hook-categorie (Curiosity / Story / Value / Contrarian / Social Proof)
3. Schrijf de hook (0-2 seconden) — de eerste zin/text overlay
4. Schrijf 2 alternatieve hooks in andere categorieen

### Stap 4 — Reel Script
Schrijf het script volgens de structuur: Hook (0-2s) → Setup (2-5s) → Value (5-25s) → CTA (25-30s)

Per format:
- **Quote Reel:** screenshot tekst + B-roll beschrijving + audio suggestie
- **B-Roll + Caption:** text overlay tekst + timing instructies + "lees caption" moment + color pop suggestie + audio suggestie
- **Talking Head:** spreektekst (woord voor woord) + caption format + cover image suggestie

### Stap 5 — Caption Schrijven
1. Schrijf een LANGE caption (150-300+ woorden) — dit forceert looping
2. Kies het caption content type:
   - Transparante business inzichten (cijfers, behind-the-scenes)
   - Stap-voor-stap tutorial (genummerde lijst)
   - Kwetsbaar gesprek (eerlijk, als vriend)
3. Pas de juiste CTA toe:
   - DM + Comment CTA (70% standaard): "DM me het woord [KEYWORD]" + "Comment [emoji/woord]"
   - Follow CTA (15%): "Volg voor meer [onderwerp]"
   - Save CTA (10%): "Sla op voor later"
   - Geen CTA (5%): alleen bij kwetsbare/persoonlijke posts

### Stap 6 — Quality Gate
Controleer intern voordat je de Reel presenteert:
- [ ] Hook in 0-2 seconden (stopt de scroll)
- [ ] Reel 15-60 seconden lang
- [ ] Caption lang genoeg voor looping (150+ woorden)
- [ ] CTA specifiek ("DM me [KEYWORD]", niet "neem contact op")
- [ ] Audio past bij footage energie
- [ ] Text overlay: clean sans-serif, leesbaar
- [ ] Brand voice consistent
- [ ] Eén duidelijk punt per Reel (niet te veel willen)

### Stap 7 — Lever Op
Presenteer:
1. **Het Reel script** — volledig uitgeschreven per format
2. **De caption** — klaar om te plakken, met CTA
3. **2 alternatieve hooks** — andere invalshoeken/categorieen
4. **Audio suggestie** — type audio dat past (trending/chill/energiek)
5. **Cover image suggestie** — welk frame of welke text overlay
6. **Hergebruik ideeen** — hoe dit onderwerp op andere platforms kan worden hergebruikt

### Stap 8 — Iterate
Bied aan: kortere reel / langere caption / andere hook / andere CTA / ander reel type / meer story / punchier

---

## X/Twitter Workflow

Als het platform X of Twitter is, volg deze stappen:

### Stap 1 — Context Laden
1. Lees `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` — voor toon en stem
2. Lees `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` — voor doelgroep
3. Lees `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — voor je verhaal, achtergrond en business context (als aanwezig)
4. Lees `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` — voor producten/aanbod (als aanwezig, vooral bij converteren-doel)
5. Lees `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — voor klantresultaten (als aanwezig, vooral bij bewijs/proof content)
6. Lees `references/twitter/writing-rules.md` — voor harde regels, bars-principe en workflow
7. Lees `references/platform-guides/twitter.md` — voor platform context
8. Check `references/twitter-voorbeelden/` — voor extra referentie-posts (als aanwezig)

### Stap 2 — Intake
Vraag de gebruiker (als niet opgegeven in de argumenten):
- **Onderwerp/idee** — wat wil je delen? (moment, inzicht, resultaat, mening)
- **Doel** — attract (nieuw publiek) / engage (conversatie) / prove (bewijs) / convert (actie)?
- **Format** — enkele tweet / thread / image post?

### Stap 3 — Format & Template Selectie
1. Lees `references/twitter/templates.md` en selecteer 3 passende templates op basis van idee, doel en format
2. Presenteer ze kort:
   - Template naam
   - Waarom deze past
   - Structuur in 1 zin
3. Laat de gebruiker kiezen (of kies de sterkste als quick mode)

**Quick mode:** Als de gebruiker "quick", "snel", of vergelijkbaar zegt, skip de template-presentatie en kies zelf het sterkste template.

### Stap 4 — Hook & Draft
1. Schrijf de tweet/thread met het bars-principe: elke zin eindigt met impact
2. Gebruik specifieke cijfers, geen vage claims
3. Geen AI-taal — schrijf alsof je een vriend appt
4. Bij threads: elke tweet staat op zichzelf, nummering met slash-notatie (1/, 2/, 3/)

### Stap 5 — Quality Gate
Controleer intern voordat je de post presenteert:
- [ ] Bars-principe: elke zin eindigt met impact
- [ ] Geen AI-taal: klinkt menselijk en direct
- [ ] Specifieke cijfers waar mogelijk
- [ ] "Alleen Jij" filter doorstaan
- [ ] Anti-saai checklist: min 3/5
- [ ] Geen links in de tweet
- [ ] Enkele tweet: max 280 tekens
- [ ] Media overwogen

### Stap 6 — Lever Op
Presenteer:
1. **De tweet/thread** — volledig uitgeschreven, klaar om te plakken
2. **2 alternatieve hooks** — andere invalshoeken
3. **Media suggestie** — welk type visual past (screenshot, multi-image, before/after, of geen)
4. **Reply game suggestie** — op welk type account/post je deze tweet als reply zou kunnen plaatsen
5. **Hergebruik ideeën** — hoe dit onderwerp op andere platforms kan worden hergebruikt

### Stap 7 — Batch Suggestie
Stel 2-3 gerelateerde tweets voor die dezelfde dag of week gepost kunnen worden:
- Een andere invalshoek op hetzelfde onderwerp
- Een follow-up die dieper gaat op één detail
- Een herkenbaarheidtweet die bij het thema past

### Stap 8 — Iterate
Bied aan: korter / langer / punchier / meer verhaal / andere invalshoek / als thread / als enkele tweet

---

## Overige Platforms (Facebook, Instagram Feed/Carousel)

Als het platform NIET LinkedIn is, NIET een Instagram Reel, en NIET X/Twitter, volg deze stappen:

1. Lees `${CLAUDE_PLUGIN_DATA}/references/brand-voice.md` voor toon
3. Lees `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md` voor doelgroep
4. Lees `${CLAUDE_PLUGIN_DATA}/references/onboarding.md` — voor je verhaal, achtergrond en business context (als aanwezig)
5. Lees `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md` — voor producten/aanbod (als aanwezig, vooral bij converteren-doel)
6. Lees `${CLAUDE_PLUGIN_DATA}/references/testimonials.md` — voor klantresultaten (als aanwezig, vooral bij bewijs/proof content)
7. Lees de relevante platform guide uit `references/platform-guides/`
5. Vraag het onderwerp of de kernboodschap (als niet opgegeven)
6. Schrijf de post volgens de platform-specifieke richtlijnen
7. Bied 2-3 variaties aan (verschillende hooks) + hergebruik suggesties

$ARGUMENTS

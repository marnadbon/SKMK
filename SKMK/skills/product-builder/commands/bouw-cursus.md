---
description: Ontwerp een complete cursus met modules, lessen, oefeningen en werkbladen
---
# Bouw Cursus — Ontwerp een Complete Cursusstructuur

Bouw een volledige cursus: van transformatiebelofte tot uitgewerkte modules, lessen, oefeningen en werkbladen. Inclusief materiaalverwerking als er ruwe bronnen beschikbaar zijn.

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
- `knowledge-base/cursus-architectuur.md` — curriculum design, patronen, scaffolding
- `knowledge-base/materiaal-verwerking.md` — als er ruwe materialen zijn
- `knowledge-base/product-validatie.md` — voor validatie check

**Eerdere outputs (als aanwezig):**
- Check `outputs/analyses/` — materiaal-analyse beschikbaar?
- Check `outputs/plannen/` — productplan beschikbaar?

**References (als aanwezig):**
- Check `references/` voor voorbeeldcursussen

Bevestig kort welke bestanden geladen zijn en welke ontbreken.

---

## Stap 2 — Intake

Vraag de gebruiker:

1. **Onderwerp** — waarover gaat de cursus?
2. **Transformatiebelofte** — "Na deze cursus kan de leerling..."
3. **Doelgroep** — wie is de leerling? Kennisniveau? (gebruik buyer-avatar)
4. **Cursusniveau** — mini-cursus (€47-197) / signature (€297-997) / premium + coaching (€997-4997)?
5. **Materialen** — zijn er ruwe materialen in `inputs/` of `bronnen/`?
6. **Bestaand plan** — is er een productplan of analyse? Zo ja, welk bestand?

**Belangrijk — AI Rol:**
Jouw rol als AI is de expert helpen hun EIGEN kennis te extraheren en structureren — niet om een generieke outline te bedenken. De botten (outline, tijdlijn, unieke ervaring) komen van de expert. Jij bouwt het vlees eromheen (structuur, polish, oefeningen, werkbladen). Zie "De Rol van AI bij Product Creatie" in `materiaal-verwerking.md`.

---

## Stap 3 — Validatie Check ⛔

Voer een snelle validatie uit met de transformatiebelofte 4-vragen toets:

1. **Wie is de leerling?** → ✅ / ⚠️ / ❌
2. **Wat is de transformatie?** → ✅ / ⚠️ / ❌
3. **Waarom jij?** → ✅ / ⚠️ / ❌
4. **Waarom nu?** → ✅ / ⚠️ / ❌

**⛔ GATE:** Als er ❌ scores zijn, stop en help de gebruiker het ontbrekende invullen.
Als er ⚠️ scores zijn, benoem ze en vraag of de gebruiker wil aanscherpen of doorgaan.

---

## Stap 4 — Materiaal Inventarisatie

### Als er ruwe materialen zijn:
Volg het 5-stap extractie proces uit `materiaal-verwerking.md`:
1. Inventariseer alle beschikbare materialen (type, onderwerp, diepte)
2. Identificeer kernthema's en ondersteunende thema's
3. Maak een kenniskaart (relaties, prerequisites, dependencies)
4. Voer gap analyse uit (wat mist?)
5. Wijs materiaal toe aan de cursusstructuur

### Als er GEEN materialen zijn:
Gebruik de **Tijdlijn Methode** uit `materiaal-verwerking.md`:
1. Vraag de expert: "Schrijf de tijdlijn op van wat je WERKELIJK deed om [resultaat] te bereiken."
2. Niet wat ze zouden aanraden — wat ze ECHT deden, in de echte volgorde
3. Groepeer de tijdlijn in 4-6 grote blokken (= modules)
4. Per blok → breek op in 3-7 concrete stappen (= lessen)
5. Check: is dit echt wat ze deden, of wat ze denken dat ze zou moeten zeggen?

Gebruik aanvullend de interview vragen uit "Impliciete Kennis Interview Vragen" om de tijdlijn te verdiepen en gaps te identificeren.

---

## Stap 5 — Kenniskaart & Gap Analyse

Presenteer de kenniskaart:

```
[Prerequisites / Wat de leerling al moet weten]
    ↓
[Module 1: Fundament]
    ↓
[Module 2: Kernvaardigheid 1] ←→ [Module 3: Kernvaardigheid 2]
    ↓
[Module 4: Integratie]
    ↓
[Transformatie bereikt]
```

Gap analyse:
| Gap | Type | Prioriteit | Oplossing |
|-----|------|------------|-----------|
| ... | prerequisite/transitie/toepassing/voorbeeld | kritiek/belangrijk/nice-to-have | ... |

---

## Stap 6 — Curriculum Ontwerp ⛔

Ontwerp de volledige cursusstructuur:

### Cursus Overzicht
```
Cursus: [Naam]
Transformatie: [Van A → B]
Niveau: [mini/signature/premium]
Modules: [X]
Totaal lessen: [X]
```

### Per Module:
```
## Module [X]: [Naam]
Subthema: [welk deel van de transformatie]
Patroon: [lineair/hub-spoke/problem-solution/chronologisch]

### Lessen:
1. [Lesnaam] — leerdoel: [wat kan de leerling na deze les]
   Patroon: [concept/vaardigheid/framework/casestudy]
   Bron: [uit materiaal X / nieuw te schrijven]
2. [Lesnaam] — ...
3. ...

### Module Oefening:
[Beschrijving van de praktijkoefening]

### Module Werkblad:
[Beschrijving van het werkblad]
```

**⛔ GATE:** Presenteer het curriculum overzicht aan de gebruiker. Vraag goedkeuring voordat je de lessen gaat uitwerken. Check:
- Klopt de volgorde?
- Missen er onderwerpen?
- Zijn er modules die geschrapt kunnen worden?
- Past de omvang bij het cursusniveau?

---

## Stap 7 — Les Uitwerking (Iteratief)

Na goedkeuring van het curriculum, werk elke les uit:

### Per Les:
```markdown
# Les [X.Y]: [Naam]

## Leerdoel
Na deze les kan de leerling [concreet, meetbaar resultaat].

## Kerninhoud
[De daadwerkelijke lesinhoud — uitleg, methode, stappen]

## Voorbeeld
[Concreet praktijkvoorbeeld of case study]

## Veelgemaakte Fouten
[Wat beginners vaak fout doen bij dit onderwerp]

## Actie
[Wat moet de leerling nu doen? Concrete opdracht.]

## Overgang
[Link naar de volgende les: "Nu je X weet, gaan we in de volgende les..."]
```

Gebruik het juiste lespatroon uit `cursus-architectuur.md`:
- **Concept Uitleg** — voor theoretische lessen
- **Vaardigheid Aanleren** — voor praktische skills
- **Framework Introductie** — voor modellen en systemen
- **Case Study** — voor voorbeelden en bewijs

**Werk per module:** presenteer elke uitgewerkte module aan de gebruiker voordat je doorgaat naar de volgende.

### Lestitels Polijsten (na inhoud)
Na het uitwerken van alle lessen, herschrijf elke lestitel van functioneel naar aantrekkelijk:
- Van "Kies je onderwerp" → "Hoe je een idee kiest dat iedereen wil kopen"
- Titels benadrukken de belofte van de les, niet de taak
- Gebruik de taal van het resultaat, niet de taal van het proces
- Zie "Aantrekkelijke Lestitels" in `cursus-architectuur.md`

---

## Stap 8 — Oefeningen & Werkbladen

Ontwerp voor elke module:

### Oefening
- Type: invuloefening / mini-opdracht / project / reflectie
- Instructies: stap-voor-stap wat de leerling moet doen
- Verwacht resultaat: wat levert de oefening op
- Geschatte tijd: hoeveel minuten/uren

### Werkblad
- Titel en doel
- Voorbeeld (ingevuld)
- Invulvelden met labels
- Instructies bovenaan

---

## Stap 9 — Quality Gate

Controleer het volledige curriculum:

### Curriculum Quality Checklist
- [ ] Transformatiebelofte is helder en meetbaar
- [ ] Elke module heeft een eigen sub-transformatie
- [ ] Module-structuur volgt een logisch patroon
- [ ] Elke les heeft een leerdoel + actie
- [ ] Scaffolding: moeilijkheid bouwt geleidelijk op
- [ ] Quick win in module 1 of 2
- [ ] Geen les zonder voorbeeld
- [ ] Geen module zonder oefening
- [ ] Onboarding module aanwezig
- [ ] Alle jargon uitgelegd bij eerste gebruik
- [ ] Totale scope past bij het prijsniveau
- [ ] Gaps uit de gap analyse zijn ingevuld

### Principes Check
- [ ] Transformatie boven structuur
- [ ] Gebouwd voor de leerling, niet de expert
- [ ] 80% toepasbaar, 20% theorie
- [ ] Scaffolding is consistent
- [ ] Één cursus = één transformatie

Presenteer de quality gate resultaten. Corrigeer eventuele problemen.

---

## Stap 10 — Lever Op

### 1. Sla de cursus op
Sla de complete cursusstructuur op in `outputs/cursussen/[cursus-naam].md`.

### 2. Schrijf product summary naar vault
Maak of update `${CLAUDE_PLUGIN_DATA}/products/[cursus-naam].md`:

```markdown
# [Cursus Naam]

## Type
Cursus ([mini/signature/premium])

## Transformatiebelofte
[De belofte]

## Doelgroep
[Specifiek]

## Structuur
- Modules: [X]
- Lessen: [X]
- Oefeningen: [X]
- Werkbladen: [X]

## Prijsindicatie
€[X]

## Status
[Ontwerp / In ontwikkeling / Klaar]

## Gebouwd op
[Datum]
```

### 3. Presenteer samenvatting
Geef de gebruiker een overzicht:
- Cursus naam en transformatiebelofte
- Aantal modules en lessen
- Waar het bestand staat
- Suggesties voor volgende stappen (sales page via Copywriter, launch via Content Creator)

$ARGUMENTS

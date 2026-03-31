---
description: Valideer een productidee met de 4-vragen toets en maak een concreet productplan
---
# Productplan — Valideer en Plan Je Product

Valideer een productidee met de transformatiebelofte 4-vragen toets, analyseer de concurrentie, en ontvang een concreet productplan met type-aanbeveling.

---

## Stap 1 — Context Laden

Laad ALTIJD deze bestanden:

**Vault (als aanwezig):**
- `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
- `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`
- `${CLAUDE_PLUGIN_DATA}/generated/offer-stack.md`
- `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`

**Knowledge-base:**
- `knowledge-base/product-validatie.md` — validatie ladder, 4-vragen toets, producttype matrix
- `knowledge-base/materiaal-verwerking.md` — om materiaal-situatie te begrijpen

**Eerdere analyses (als aanwezig):**
- Check `outputs/analyses/` — is er al een materiaal-analyse gedaan?

Bevestig kort welke bestanden geladen zijn en welke ontbreken.

---

## Stap 2 — Intake

Vraag de gebruiker:

1. **Wat is het idee?** — beschrijf het product in 1-3 zinnen
2. **Voor wie is het?** — specifieke doelgroep (gebruik buyer-avatar als basis)
3. **Welk probleem lost het op?** — de pijn of wens van de doelgroep
4. **Heb je al materialen?** — transcripties, notities, ervaring (verwijs naar `/analyseer-materiaal` als er veel materiaal is)
5. **Heb je al validatie?** — zijn er signalen dat mensen dit willen? (e-mails, vragen, betalingen)
6. **Budget & tijdlijn** — hoeveel tijd wil je investeren in het bouwen?

---

## Stap 3 — Transformatiebelofte 4-Vragen Toets

Toets het idee aan de 4 vragen uit `product-validatie.md`:

### Vraag 1: Wie is de leerling?
- Beschrijf de specifieke persoon (niet "iedereen")
- Huidige situatie (punt A)
- Kennisniveau
- **Score:** ✅ Helder / ⚠️ Vaag / ❌ Ontbreekt

### Vraag 2: Wat is de transformatie?
- Van punt A → punt B
- Concreet en meetbaar?
- **Score:** ✅ / ⚠️ / ❌

### Vraag 3: Waarom jij?
- Persoonlijke ervaring
- Track record
- Unieke hoek
- **Score:** ✅ / ⚠️ / ❌

### Vraag 4: Waarom nu?
- Urgentie
- Markttiming
- Kosten van wachten
- **Score:** ✅ / ⚠️ / ❌

### Resultaat
- **4× ✅** → Sterk productidee, door naar stap 4
- **3× ✅ + 1× ⚠️** → Goed, maar verbeter het zwakke punt
- **2× ✅ of minder** → Product moet aangescherpt worden. Geef concrete suggesties.
- **Bevat ❌** → Stop. Help de gebruiker het ontbrekende onderdeel invullen voor je doorgaat.

---

## Stap 4 — Concurrentie Scan

Analyseer de concurrentie:

### Directe concurrenten (zelfde transformatie)
| Concurrent | Product | Prijs | Formaat | Sterkte | Zwakte |
|------------|---------|-------|---------|---------|--------|
| ... | ... | ... | ... | ... | ... |

### Indirecte concurrenten (zelfde doelgroep, ander product)
| Concurrent | Product | Overlap |
|------------|---------|---------|
| ... | ... | ... |

### Differentiatie
- Wat kan dit product anders/beter dan de concurrentie?
- Welk gat vult het?
- Is er ruimte in de markt?

*Opmerking: als je geen concurrenten vindt, is dat een waarschuwingssignaal — mogelijk geen vraag.*

---

## Stap 5 — Producttype Aanbeveling

Op basis van de intake, validatie, en concurrentie:

### Aanbevolen producttype
Gebruik de producttype aanbevelingsmatrix uit `product-validatie.md`.

Presenteer:

```
## Aanbeveling: [Producttype]

**Transformatiebelofte:** "[De zin die het product verkoopt]"

**Doelgroep:** [Specifiek]

**Formaat:**
- Type: [mini-cursus / signature cursus / workshop / guide / ...]
- Omvang: [X modules/hoofdstukken/minuten]
- Levermethode: [self-paced / live / hybrid]

**Prijsindicatie:** €[X] — gebaseerd op [concurrentie + waarde + offer-stack positie]

**Offer-Stack Fit:**
- Positie in de value ladder: [entry / core / premium]
- Leidt naar: [volgend product]
- Komt na: [vorig product]

**Geschatte bouwtijd:** [X weken]

**Validatie niveau:** [1-5] — [toelichting]

**Volgende stap:** `/bouw-cursus` of `/bouw-workshop` of `/bouw-guide`
```

Als er meerdere goede opties zijn, presenteer ze gerangschikt met voor- en nadelen.

---

## Stap 6 — Lever Op

Sla het productplan op in `outputs/plannen/productplan-[naam].md`.

### Plan Structuur
```markdown
# Productplan: [Naam]
Datum: [datum]

## Productidee
[uit intake]

## Transformatiebelofte
[de gevalideerde belofte]

## 4-Vragen Toets
[scores + toelichting]

## Concurrentie Analyse
[uit stap 4]

## Aanbeveling
[uit stap 5]

## Volgende Stappen
1. [Eventuele gaps invullen]
2. [Materiaal verzamelen / analyseren]
3. [Bouwen met /bouw-cursus of /bouw-workshop of /bouw-guide]
```

Presenteer het plan aan de gebruiker en vraag of ze door willen naar het aanbevolen bouw-command.

$ARGUMENTS

---
name: researcher
description: Marktonderzoek en social listening - X/Twitter scraping, Kindle extractie, last30days en concurrentieanalyse
---

# Researcher — Marktonderzoek en Social Listening

## Doel
Drie onderzoekscapaciteiten in één agent: X/Twitter scraping, Kindle boek-extractie, en social listening over de afgelopen 30 dagen.

## Projectstructuur
- `SKILL.md` — Hoofdinstructies
- `scripts/x/` — X/Twitter scraper scripts
- `scripts/kindle/` — Kindle boek-extractie scripts
- `last30days/` — Social listening tool
- `.claude/commands/` — Slash commands

## Vault Paden
- **Leest:** `${CLAUDE_PLUGIN_DATA}/references/research.md`
- **Schrijft:** `${CLAUDE_PLUGIN_DATA}/competitors/`

## Configuratie
API keys worden opgeslagen in `${CLAUDE_PLUGIN_DATA}/.env`.
Bij eerste gebruik wordt gevraagd om benodigde API keys.

## Scripts
- X scraper: `node scripts/x/[script].js`
- Kindle: `node scripts/kindle/[script].js`
- Last30days: `python3 last30days/scripts/last30days.py "[onderwerp]"`

---

# Researcher — Marktonderzoek & Social Listening

> Drie onderzoekscapaciteiten in één agent: X/Twitter scraping, Kindle boek-extractie, en social listening over de afgelopen 30 dagen. Vind wat je markt denkt, voelt en zegt — en breng die inzichten naar de vault.

## Wat Deze Agent Doet

- **Social Listening (Last30days)** — Luister mee op Reddit, X/Twitter, YouTube en het web over de afgelopen 30 dagen
- **X/Twitter Scraper** — Cureer je dagelijkse feed, exporteer bookmarks, analyseer timelines
- **Kindle Scraper** — Extraheer highlights en notities uit Kindle boeken
- **Concurrentieanalyse** — Analyseer concurrenten en breng inzichten naar de vault

## Instructies

### First-Use Configuratie Check

Bij ELKE aanroep, check eerst of `${CLAUDE_PLUGIN_DATA}/.env` bestaat:

1. Lees `${CLAUDE_PLUGIN_DATA}/.env`
2. **Als het bestand niet bestaat of leeg is** → Start de **Configuratie Flow** (zie hieronder)
3. **Als het bestand bestaat en API keys bevat** → Ga door naar de gevraagde taak

### Configuratie Flow

Toon dit bericht:

```
Welkom bij de Researcher agent!

Deze agent heeft API keys nodig om te functioneren. Niet alle keys zijn verplicht —
je kunt beginnen met alleen de verplichte keys en later meer toevoegen.

We configureren nu de volgende API keys:

1. OPENAI_API_KEY (verplicht) — Voor social listening via Reddit en web search
   Maak een key aan op: https://platform.openai.com/api-keys

2. BRAVE_API_KEY (optioneel) — Voor uitgebreide web search resultaten
   Gratis tier: 2.000 queries/maand
   Aanmaken op: https://brave.com/search/api/

3. XAI_API_KEY (optioneel) — Voor X/Twitter search via xAI API
   Aanmaken op: https://console.x.ai/

Welke keys wil je nu configureren?
```

Vraag de keys één voor één. Sla ze op in `${CLAUDE_PLUGIN_DATA}/.env`:

```
OPENAI_API_KEY="[waarde]"
BRAVE_API_KEY="[waarde]"
XAI_API_KEY="[waarde]"
```

Na configuratie, bevestig welke keys zijn geconfigureerd en welke capaciteiten beschikbaar zijn.

### Voordat Je Begint (bij elke taak)

1. Lees `${CLAUDE_PLUGIN_DATA}/.env` voor API keys
2. Lees `${CLAUDE_PLUGIN_DATA}/references/research.md` als die bestaat — vermijd dubbel onderzoek
3. Check welke capaciteiten beschikbaar zijn op basis van geconfigureerde API keys

---

## 1. Social Listening — Last30days (`/last30days`)

### Wat Het Doet
Scan Reddit, X/Twitter, YouTube en het web voor discussies, meningen en trends over een specifiek onderwerp in de afgelopen 30 dagen.

### Hoe Te Gebruiken

```bash
# Via slash command
/last30days [onderwerp]

# Direct script
python3 last30days/scripts/last30days.py "[onderwerp]" --emit=compact
```

### Modi

| Modus | Diepte | Tijd | Bronnen |
|-------|--------|------|---------|
| `--quick` | Snelle scan | 2-3 min | 8-12 per platform |
| *(standaard)* | Gebalanceerd | 3-5 min | 20-30 per platform |
| `--deep` | Uitgebreid | 5-8 min | 50-70 Reddit, 40-60 X |

### Bronfilters

| Flag | Effect |
|------|--------|
| `--sources=reddit` | Alleen Reddit |
| `--sources=x` | Alleen X/Twitter |
| `--sources=both` | Reddit + X (standaard) |
| `--include-web` | Voeg Brave web search toe |

### Output

- **Script output**: `~/.local/share/last30days/out/` (report.md, report.json, last30days.context.md)
- **Archivering**: Na onderzoek, archiveer met `./scripts/sync-output.sh "onderwerp-slug"`

### Vereiste API Keys
- `OPENAI_API_KEY` — Verplicht (Reddit search via Responses API)
- `BRAVE_API_KEY` — Optioneel (web search, gratis tier 2.000 queries/maand)
- `XAI_API_KEY` — Optioneel (alternatieve X/Twitter search via xAI API)

### Voorbeeldqueries

```
/last30days AI automation voor ondernemers
/last30days [concurrent naam] reviews en klachten
/last30days [pijnpunt] oplossingen op Reddit
/last30days [industrie keyword] voor copywriting invalshoeken
```

### Wat Te Doen Met De Resultaten

Bevindingen uit social listening voeden de vault:
- **Markttaal en trending termen** → `${CLAUDE_PLUGIN_DATA}/references/research.md`
- **Klantemoties en triggers** → `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`
- **Concurrent-inzichten** → `${CLAUDE_PLUGIN_DATA}/competitors/`

**Workflow**: Run onderzoek → Review bevindingen → Relevante inzichten handmatig mergen naar vault referenties. Geen automatische overschrijvingen — altijd reviewen en goedkeuren.

---

## 2. X/Twitter Scraper

### Wat Het Doet
Cureer je X/Twitter feed, exporteer bookmarks, analyseer timelines, en filter content op kwaliteit.

### Beschikbare Scripts

| Script | Functie | Gebruik |
|--------|---------|---------|
| `scripts/x/scrape-timeline.js` | Scrape timeline posts | `node scripts/x/scrape-timeline.js` |
| `scripts/x/export-bookmarks.js` | Exporteer bookmarks | `node scripts/x/export-bookmarks.js` |
| `scripts/x/fetch-articles.js` | Haal artikelen op uit links | `node scripts/x/fetch-articles.js` |
| `scripts/x/filter-posts.js` | Filter posts op kwaliteit | `node scripts/x/filter-posts.js` |
| `scripts/x/rebuild-digest.js` | Bouw dagelijkse digest | `node scripts/x/rebuild-digest.js` |
| `scripts/x/analyze-ratings.js` | Analyseer beoordelingen | `node scripts/x/analyze-ratings.js` |
| `scripts/x/generate-filter-rules.js` | Genereer filterregels | `node scripts/x/generate-filter-rules.js` |
| `scripts/x/generate-obsidian.js` | Exporteer naar Obsidian | `node scripts/x/generate-obsidian.js` |
| `scripts/x/run-daily.js` | Dagelijkse run (alle stappen) | `node scripts/x/run-daily.js` |
| `scripts/x/setup-daily-run.sh` | Cron setup voor dagelijkse run | `bash scripts/x/setup-daily-run.sh` |

### Setup

1. Navigeer naar `scripts/x/`
2. Run `npm install` om dependencies te installeren
3. Configureer browser data pad in de scripts (eerste keer handmatig aanpassen)

### Dagelijkse Workflow

```bash
# Volledige dagelijkse run
node scripts/x/run-daily.js

# Of handmatig stap voor stap:
node scripts/x/scrape-timeline.js      # 1. Scrape timeline
node scripts/x/filter-posts.js         # 2. Filter op kwaliteit
node scripts/x/fetch-articles.js       # 3. Haal artikelen op
node scripts/x/rebuild-digest.js       # 4. Bouw digest
```

---

## 3. Kindle Scraper

### Wat Het Doet
Extraheer highlights, notities en annotaties uit Kindle boeken voor gebruik in kennisbanken en content.

### Beschikbare Scripts

| Script | Functie | Gebruik |
|--------|---------|---------|
| `scripts/kindle/scrape-book.js` | Scrape highlights uit een boek | `node scripts/kindle/scrape-book.js` |
| `scripts/kindle/ocr-screenshots.js` | OCR op screenshots | `node scripts/kindle/ocr-screenshots.js` |

### Setup

1. Navigeer naar `scripts/kindle/`
2. Run `npm install` om dependencies te installeren

### Gebruik

```bash
# Highlights uit een boek extraheren
node scripts/kindle/scrape-book.js "[boek titel of URL]"

# Screenshots OCR-en
node scripts/kindle/ocr-screenshots.js
```

---

## 4. Concurrentieanalyse (`/analyseer-concurrent`)

### Wat Het Doet
Analyseer een concurrent op basis van hun website, social media, en online aanwezigheid. Resultaten worden opgeslagen in de vault.

### Hoe Het Werkt

1. **Input verzamelen:**
   - Concurrent naam
   - Website URL
   - Social media profielen (optioneel)
   - Wat specifiek te onderzoeken (aanbod, positionering, content, prijzen)

2. **Onderzoek uitvoeren:**
   - Website analyseren (positionering, aanbieding, prijzen, copy)
   - Social media scannen (content frequentie, engagement, thema's)
   - Klantreviews zoeken (via last30days of web search)
   - Sterke en zwakke punten identificeren

3. **Output:**
   - Concurrentprofiel document
   - Opslaan naar `${CLAUDE_PLUGIN_DATA}/competitors/[concurrent-naam].md`

### Output Format

```markdown
# Concurrentieanalyse — [Naam]

## Overzicht
- **Website:** [URL]
- **Branche:** [branche]
- **Doelgroep:** [wie ze targeten]
- **Positionering:** [hoe ze zichzelf positioneren]

## Aanbieding
- **Producten/diensten:** [wat ze verkopen]
- **Prijzen:** [prijspunten]
- **Uniek Mechanisme:** [wat ze als differentiator claimen]
- **Garantie:** [type garantie]

## Marketing & Content
- **Actieve platformen:** [waar ze content plaatsen]
- **Content frequentie:** [hoe vaak]
- **Content thema's:** [waarover ze schrijven]
- **Advertenties:** [type ads, platforms]

## Sterke Punten
[Wat ze goed doen]

## Zwakke Punten / Kansen
[Waar ze kwetsbaar zijn — kansen voor jou]

## Klant Sentiment
[Wat klanten zeggen — positief en negatief]
```

---

## Vault Integratie

### Wat De Researcher Leest
- `${CLAUDE_PLUGIN_DATA}/references/research.md` — Bestaand marktonderzoek (vermijd dubbel werk)

### Wat De Researcher Schrijft
- `${CLAUDE_PLUGIN_DATA}/competitors/[naam].md` — Concurrentieanalyses

### Hoe Bevindingen De Vault Voeden

```
Last30days onderzoek → review → ${CLAUDE_PLUGIN_DATA}/references/research.md
                              → ${CLAUDE_PLUGIN_DATA}/references/testimonials.md
                                       ↓
                     buyer-avatar.md → strategy / copywriting / ads
```

Bevindingen worden NIET automatisch naar de vault geschreven (behalve concurrentieanalyses). De gebruiker reviewt eerst en merged relevante inzichten handmatig.

---

## Diagnostiek

### Last30days diagnostiek
```bash
python3 last30days/scripts/last30days.py --diagnose
```

### API key status checken
Lees `${CLAUDE_PLUGIN_DATA}/.env` en rapporteer welke keys geconfigureerd zijn en welke capaciteiten beschikbaar.

### Veelvoorkomende problemen

| Probleem | Oplossing |
|----------|-----------|
| "Missing OPENAI_API_KEY" | Configureer via de onboarding flow |
| Reddit search faalt | Check of OPENAI_API_KEY geldig is |
| X/Twitter search leeg | Configureer XAI_API_KEY voor betere resultaten |
| Node scripts falen | Run `npm install` in de relevante scripts/ map |
| Browser data niet gevonden | Update het pad in het script naar je browser profiel |

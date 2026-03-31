# Escalatieregels — Wanneer `[NEEDS REVIEW]` markeren

Claude markeert een concept-antwoord met `[NEEDS REVIEW]` wanneer een van de volgende situaties van toepassing is. Dit zorgt ervoor dat een menselijke medewerker het antwoord extra controleert voordat het verstuurd wordt.

## Altijd escaleren

### 1. Antwoord niet in kennisbank
- De vraag gaat over iets dat **niet** in de knowledge base staat
- Claude zou moeten gokken of improviseren om een antwoord te geven

### 2. Juridisch / AVG / GDPR
- Klant vraagt over privacy, gegevensverwijdering, data-export op basis van AVG
- Klant dreigt met juridische stappen
- Vragen over verwerkersovereenkomsten

### 3. Boze of geëscaleerde klant
- Klant is duidelijk boos, gefrustreerd, of dreigend
- Klant heeft al meerdere keren contact opgenomen over hetzelfde probleem
- Klant vraagt expliciet om een manager/leidinggevende

### 4. Financieel gevoelig
- Terugbetalingsverzoeken boven [VUL IN: bedrag, bijv. €50]
- Geschillen over facturatie
- Klant claimt onterecht te zijn afgeschreven

### 5. Technische bugs
- Klant meldt een bug die niet in de bekende problemen staat
- Dataverlies of corruptie
- Beveiligingsgerelateerde meldingen

### 6. Commercieel / Upsell
- Klant vraagt om maatwerk of enterprise-functies
- Klant wil onderhandelen over prijzen
- Partnerschap- of samenwerkingsverzoeken

## Hoe markeren
1. Prefix het concept-antwoord met: `[NEEDS REVIEW]`
2. Voeg een korte toelichting toe waarom het gemarkeerd is
3. Geef alsnog een zo goed mogelijk concept-antwoord

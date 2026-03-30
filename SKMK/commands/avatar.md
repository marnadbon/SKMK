---
description: Maak een diep buyer avatar profiel vanuit de vault referentiedocumenten
---

Creëer een diep, emotioneel rauw kopersprofiel vanuit de vault-referentiebestanden.

## Stappen

1. **Prerequisite Check** — Lees en verifieer dat deze 3 bestanden bestaan en inhoud bevatten:
   - `${CLAUDE_PLUGIN_DATA}/references/testimonials.md`
   - `${CLAUDE_PLUGIN_DATA}/references/onboarding.md`
   - `${CLAUDE_PLUGIN_DATA}/references/research.md`

   Als EEN document ontbreekt of leeg is: STOP en meld welke ontbreken.

2. **Documentverwerking** — Lees alle 3 documenten en extraheer:
   - Wie de klanten zijn (demografie, rollen, situaties)
   - Welke problemen ze ervaren (uitgesproken en geïmpliceerd)
   - Welke taal ze gebruiken (exacte zinnen, emotionele woorden)
   - Welke resultaten ze bereikt hebben (specifieke uitkomsten, cijfers)
   - Wat het bedrijf biedt (producten, diensten, positionering)

3. **Avatar Creatie** — Volg de Kopersprofiel Methodologie uit SKILL.md regel voor regel:
   1. Demografie (naam, leeftijd, korte beschrijving)
   2. Kernprobleem (het ENE ding dat ze wakker houdt)
   3. Top 5 Krachtigste Emoties
   4. Top 5 Grootste Angsten (3AM angsten)
   5. 5 Manieren Waarop Angsten Relaties Beïnvloeden
   6. 5 Pijnlijke Dingen Die Relaties Zouden Zeggen
   7. Eerder Gefaalde Oplossingen (5 stuks)
   8. Wat Ze Niet Willen Doen (5 stuks)
   9. Primaire Transformatie / Magic Genie (5 droomuitkomsten)
   10. Hoe Transformatie Relaties Beïnvloedt
   11. Post-Transformatie Soundbites
   12. Marktspecifieke Informatie (A-D)

4. **Opslaan** — Schrijf de volledige avatar naar `${CLAUDE_PLUGIN_DATA}/generated/buyer-avatar.md`

5. **Bevestig** aan de gebruiker en bied aan om secties te verfijnen.

## Toonrichtlijnen
- Rauw, ongefilterd, conversationeel
- Specifiek boven generiek
- Emotioneel geladen
- Als het leest als een privédagboek: goed. Als het leest als een corporate document: fout.

$ARGUMENTS

# Case, fall 2019
## Nettbureau AS
## Erik Turøy Midtun

## Språk og rammeverk
Jeg valgte å gå for utelukkende javascript på denne casen, dette fordi jeg har brukt React på en del på frontend og at jeg ville prøve ut express.js som backend.

Jeg valgte å gjøre Frontend delen av oppgaven først, da dette var den letteste delen for meg.

## Frontend
Jeg fant raskt ut hva som manglet i skjemaet dere gav meg som utgangspunkt. Det måtte legges til POST som method of linken dere oppgav som action.
Jeg måtte også legge til en input av type hidden og med name="applicant" og value skulle være navnet mitt.

Da dette fungerte startet jeg med å skrive skjemaet i react, hvor jeg brukte create-react-app som utgangspunkt.

For å kjøre react-appen min som dev må dere bruke npm install i frontend-mappen og deretter npm start.

Jeg brukte kanskje litt for mye tid på utformingen og css, som gikk utover tidsbruken jeg hadde på backend delen av oppgaven, men jeg synest skjemaet blei ganske fint til slutt, så det var verdt det.

Valideringen av dataene på frontenden valgte jeg å gjøre med regular expressions, da dette var enkelt og greit og lage disse.

Jeg valgte å validere;
namn: som alle strenger med Stor forbokstav med lengde større enn 1.
Glømte å legge til unicode støtte her.
email: denne regexpen fant jeg på nettet og har unicode støtte.
phone: number med lengde 8-10. burde vært 8 eller 10 og sjekket for landskode.
area code: trenger bare å være integer med lengde 4 på frontend validering.
Jeg tok ikke med validering på meldingsinputen.

Ellers har jeg valgt å gi brukeren feedback med fargene rød og grønn, noe som kanskje burde endres pga tigjenglighet for fargeblindet. Det kommer også opp en feilmedling om brukeren prøver å submitte uten at alle feltene er valid

Videre ville jeg lagt til en ny side eller state som skal komme opp når en trykker på "send inn!" og bruke det validerte svaret fra backenden til å gi feilmedling på frontenden. Jeg ville også laget bedre feedback til brukeren om hva konkret som er galt med inputdataen.

## Backend 

På backenden-delen har jeg ikke mye erfaring, men er et felt jeg spesielt har lyst til å lære mer. For å gjøre det lett for meg selv valgte jeg å bruke node med express.js. Jeg brukte programmet postman for å teste backenden min med ulike data gjennom hele utviklingen. Jeg valgte også å teste frontenden med backenden.

backenden kan kjøres med først å laste ned node modules med npm install i backend mappen og deretter node api.js

Jeg slet litt med å få backenden min til å fungere. Spesielt tok det litt tid før jeg fant ut at jeg måtte bruke cors. Ellers brukte jeg express-validator for å validere dataene.

Jeg prøvde å få både bring apiet og å sende epost, men hadde ikke tid til å få de til å fungere.

Jeg har bare nett tenkt fort over hvordan jeg kunne oppdage spam, og en en super lett måte er å ha input på frontend som ikke vises for vanlige brukere, men som enkle bots vil skrive inn i. Vi kan da validere ved at det ikke er en tom streng.

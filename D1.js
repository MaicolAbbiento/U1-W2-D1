/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*  estiono vari tipi di datatype alcuni dei pricipali sono : 
le stinghe sono parti di testo che sono rachiuse fra virgolette doppie("") virgolette singole ('') o back tick(``),

i numeri sono numeri interi o parzilia(4.5) non devono essere racchiusi fra nessun tag se venniserro messi fra virgolette 
diventerebbero stringe,

dati booleani sono dati speciali che comprendo come risposta vero o falso si usano per verificare una varibile o per eseguire operazioni
solo se il testo precedente è verificato o solo se non lo è

esistono altri due datatype null e undefined 
null è una variabile vuota ovvero ho dichiarato una funzione e lo definata come null overro senza nessun valore 
undifined invece si verifica quando crei una funzione e non le dai nessun valore quella funzione è undefined bisogna ancora definire i valori
di quella funzione

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myname = "maicol"
console.log("il mio nome è ", myname)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma = 12 + 20
console.log("somma di due numeri ", somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
 
*/
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myname = "abbiento"
console.log("la varibile let è cambiata", myname) // avendo assegnato una variabile let il nome cambia

const surname = "abbiento" // questa varibile invece essendo const non è modificabile
// surname = "rossi" varibile constate presenta errori
console.log("la varibile const non è invece modificabile", surname) // infatti la console darà errore se decomentiamo il cambio variabile

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x - 4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john"
let name2 = "John"
console.log(name1 === name2)
// cosi è falso poichè java è case sensitive ovvero riconse che J maiuscolo è differente rispetto a j minuscolo
console.log(name1 === name2.toLowerCase())
/* infatti cambiando il case a minuscolo risulta true poiche abbiamo cambiato J con j funziona anche se ci fossero più caratteri
minuscoli maiscoli*/
name2 = "JOHN"
console.log(name1 === name2.toLowerCase())

'use strict';

// dichiarazione e inizializzazione variabili tramite input 
const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favColor = prompt("Inserisci il tuo colore preferito");
const firstNumber = prompt("Inserisci il primo numero");
const secondNumber = prompt("Inserisci il secondo numero");

/* dichiarazione variabile con risultato della divisione dei due numeri di input,
convertiti in Number, arrotondati alla cifra minore */
const result = Math.floor(+firstNumber / +secondNumber)

// variabile contenente la password risultante
const password = `${firstName}${lastName}${favColor}${result}`

//inserimento del testo della password all'interno dell'elemento con id "password"
const element = document.getElementById('password');
element.innerText = password;



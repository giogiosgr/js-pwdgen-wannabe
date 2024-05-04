'use strict';

// dichiarazione e inizializzazione variabili tramite input 
const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const favColor = prompt("Inserisci il tuo colore preferito");
const firstNumber = prompt("Inserisci il primo numero");
const secondNumber = prompt("Inserisci il secondo numero");

// dichiarazione variabile con risultato della divisione dei due numeri di input, convertiti in Number
const result = +firstNumber / +secondNumber

// scrittura del risultato sulla console del browser  
console.log(`${firstName}${lastName}${favColor}${result}`)
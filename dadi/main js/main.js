console.log('ciao padrone');

let value;

// dichiariamo le costanti e le stampiamo
const scelta = prompt('utente mio fai la tua scelta che sia pari o che sia dispari');
console.log('l utente ha scelto: ' + scelta);

//scelta dell utente del numero
const sceltaUtente = parseInt(prompt('Scegli un numeretto da 1 a 5'));
console.log('il numero scelto dall utente è ' + sceltaUtente);


//scelta del pc
const sceltaPc = getRandomNumber(1, 5);
console.log('li numero scelto del pc è ' + sceltaPc);


let sum = sceltaUtente + sceltaPc;
console.log('la somma è: ' + sum);


console.log(getNumbers(sum));

if (scelta == value) {
    alert('hai vinto');
} else {
    alert('hai perso');
};











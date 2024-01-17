// # Functions

// * GENERA NUMERO RANDOMICO
/**
 * 
 * @param {number} min Il valore minimo da usare per la generazione
 * @param {*number} max Il valore massimo da usare per la generazione
 * @returns numero randomico generato tra minimo e massimo
 */

function getRandomNumber(min, max) {
    min = parseInt(min);
    max = parseInt(max);

    if (isNaN(min) || isNaN(max)) {
        console.error('I valori inseriti devono essere numerici');
        return;
    }

    if (min >= max) {
        console.error('Il valore massimo deve essere maggiore del valore minimo');
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}
const myRand = getRandomNumber(1, 6,);
console.log(myRand);
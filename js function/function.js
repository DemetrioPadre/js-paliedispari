// # Functions

// * GENERA NUMERO RANDOMICO
/**
 * 
 * @param {number} min Il valore minimo da usare per la generazione
 * @param {*number} max Il valore massimo da usare per la generazione
 * @returns numero randomico generato tra minimo e massimo
 */


//     min = parseInt(min);
//     max = parseInt(max);

//     if (isNaN(min) || isNaN(max)) {
//         console.error('I valori inseriti devono essere numerici');
//         return;
//     }

//     if (min >= max) {
//         console.error('Il valore massimo deve essere maggiore del valore minimo');
//     }
function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}


function getNumbers(number) {
    if (number % 2 == 0) {
        value = 'pari';
        alert('il numero è pari');

    } else {
        value = 'dispari';
        alert('il numero è dispari');
    }

    return number % 2 == 0;
}


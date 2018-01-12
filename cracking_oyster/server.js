let Utils = require('./Utils.js');

let readNumbersCallback = (arrNumber) => {
    console.log(arrNumber.length);
}

let arrNumber = Utils.readArrNumberFromFile('random_number.txt', 0, 0, readNumbersCallback);

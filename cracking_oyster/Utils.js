
const fs = require('fs');
const readline = require('readline');
let NUMBER_RANDOM_RANGE = 27000;

let shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let generateRandomNumber = () => {
    let arrNumber = Array.from(Array(NUMBER_RANDOM_RANGE).keys());
    shuffleArray(arrNumber);
    return arrNumber;
}

let writeArrNumberToFile = (arrNumber, fileName) => {
    let writeStream = fs.createWriteStream(fileName, {
        flags: 'a'
    })
    arrNumber.forEach(function (element) {
        writeStream.write(element + '\n');
    })
    writeStream.end();
}

exports.readArrNumberFromFile = (fileName, from, to, callback) => {
    let arrNumber = [];
    const rl = readline.createInterface({
        input: fs.createReadStream(fileName),
        crlfDelay: Infinity
    });

    rl.on('line', (line) => {
        arrNumber.push(line);
    });

    rl.on('close', () => {
        if(callback) 
            callback(arrNumber);
    })
}

exports.generateRandomNumberAndWriteToFile = () => {
    let arrRandomNumber = generateRandomNumber();
    writeArrNumberToFile(arrRandomNumber, 'random_number.txt');
}

exports.generateRandomNumber = generateRandomNumber;
exports.writeArrNumberToFile = writeArrNumberToFile;
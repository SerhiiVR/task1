const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const MAX_NUMBER = 9;
const MIN_NUMBER = 0;

// Input data from the user via the command line.
rl.question('Enter the number: ', (lineFromUser) => {
console.log('Result: ' +  countNumbers(findMinNumber(lineFromUser), findMaxNumber(lineFromUser)));
rl.close();
});

/**
 * The function takes a string as input and finds the minimum digit in it.
 * @param {*} line line of numbers.
 */
function findMinNumber(line) {

    let num = MAX_NUMBER;
    // Comparison of numbers in a string. Search for the minimum number from them.
    for (let i = 0; i < line.length; i++) {
        if (num > +line[i] & checkType(line[i])) {
            num = +line[i];
        }
    }
    
    return num;
}

/**
 * The function takes a string as input and finds the maximum digit in it.
 * @param {*} line стока чисел.
 */
function findMaxNumber(line) {
    
    let num = MIN_NUMBER;
    // Comparison of numbers in a string. Search for the maximum number from them.
    for (let i = 0; i < line.length; i++) {
        if (num < +line[i] & checkType(line[i])) {
            num = +line[i];
        }
    }

    return num;
}

/**
 * The function adds two numbers and returns the result of the operation.
 * @param {*} minNum first number.
 * @param {*} maxNum second number.
 */
function countNumbers(minNum, maxNum) {
    return minNum + maxNum;
}

/**
 * The function takes a symbol as input and checks that it is exactly a number.
 * @param {*} symbol symbol.
 */
function checkType(symbol) {
    if(symbol !== ' ') {
    return Number.isInteger(+symbol);
    }
}
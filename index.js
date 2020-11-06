const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


rl.question("Enter the number: ", (lineFromUser) => {
console.log("Result: " +  countNumbers(findMinNumber(lineFromUser), findMaxNumber(lineFromUser)));
rl.close();
});


function findMinNumber(line) {

    let num;
    
    for (let i = 0; i < line.length; i++) {
    if(checkType(line[i])) {
        num = +line[i];
        break;
    }
}
    
    for (let i = 1; i < line.length; i++) {
        if (num > +line[i]) {
            num = +line[i];
        }
    }
    return num;
}

function findMaxNumber(line) {
    
    let num;
    
    for (let i = 0; i < line.length; i++) {
    if(checkType(line[i])) {
        num = +line[i];
        break;
    }
}
    
    for (let i = 1; i < line.length; i++) {
        if (num < +line[i]) {
            num = +line[i];
        }
    }
    return num;
}

function countNumbers(minNum, maxNum){
    return minNum + maxNum;
}

function checkType(simbol){
    return Number.isInteger(+simbol);
}
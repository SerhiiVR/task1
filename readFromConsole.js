function findMinNumber(number) {
    let num;
    
    for (let i = 0; i < number.length; i++) {
    if(checkType(number[i])) {
        num = +number[i];
        console.log(num);
        break;
    }
}
}


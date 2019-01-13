function solve(firstNumberAsString, secondNumberAsString) {
    let firstNum = +firstNumberAsString;
    let secondNum = +secondNumberAsString;

    let result = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }

    console.log(result);
}

solve('1', '5' );
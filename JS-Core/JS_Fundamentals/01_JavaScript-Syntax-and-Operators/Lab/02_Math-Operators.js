function solve(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '/': result = firstNumber / secondNumber; break;
        case '%': result = firstNumber % secondNumber; break;
        // ** is the exponentiation operator and is the equivalent of Math.pow
        case '**': result = firstNumber ** secondNumber; break;
    }

    console.log(result);
}
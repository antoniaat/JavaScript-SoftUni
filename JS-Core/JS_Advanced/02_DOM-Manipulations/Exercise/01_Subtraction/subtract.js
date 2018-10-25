function subtract() {
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');

    let result = Number(firstNumber.value) - Number(secondNumber.value);

    document.getElementById('result').textContent = result.toString();
}
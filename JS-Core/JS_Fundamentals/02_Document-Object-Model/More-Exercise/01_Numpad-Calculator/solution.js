function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'))
        .forEach((btn) => btn.addEventListener('click', getBtnValue));

    function getBtnValue() {
        let buttonValue = this.value;
        console.log(buttonValue);
        let actions = ['/', '*', '-', '+'];

        if (buttonValue !== "=") {

            if (buttonValue === "Clear") {
                document.getElementById('expressionOutput').innerHTML = "";
                document.getElementById('resultOutput').innerHTML = "";

            } else {
                if (actions.includes(buttonValue)) {
                    document.getElementById('expressionOutput').innerHTML += " " + this.value + " ";
                } else {
                    document.getElementById('expressionOutput').innerHTML += this.value;
                }
            }
        } else {
            let expression = document.getElementById('expressionOutput').innerHTML;
            let splitExpression = expression.split(' ');

            let leftOperand = splitExpression[0];
            let operator = splitExpression[1];
            let rightOperand = splitExpression[2];

            let result = "";

            switch (operator) {
                case '/':
                    result = Number(leftOperand) / Number(rightOperand);
                    break;
                case '*':
                    result = Number(leftOperand) * Number(rightOperand);
                    break;
                case '-':
                    result = Number(leftOperand) - Number(rightOperand);
                    break;
                case '+':
                    result = Number(leftOperand) + Number(rightOperand);
                    break;
            }

            document.getElementById('resultOutput').innerHTML = result;
        }
    }
}
function specialWords() {
    let startNum = parseInt(document.getElementById("firstNumber").value);
    let endNum = parseInt(document.getElementById("secondNumber").value);
    let firstWord = document.getElementById("firstString").value;
    let secondWord = document.getElementById("secondString").value;
    let thirdWord = document.getElementById("thirdString").value;
    let divResult = document.getElementById("result");

    for (let i = startNum; i <= endNum; i++) {
        checkCurrentNumber(i);
    }


    function checkCurrentNumber(i) {
        let p = document.createElement('p');
        if (i % 3 === 0 && i % 5 === 0) {
            p.textContent = `${i} ${firstWord}-${secondWord}-${thirdWord}`;
        } else if (i % 3 === 0) {
            p.textContent = `${i} ${secondWord}`;
        } else if (i % 5 === 0) {
            p.textContent = `${i} ${thirdWord}`;
        } else {
            p.textContent = i;
        }

        divResult.appendChild(p);
    }
}
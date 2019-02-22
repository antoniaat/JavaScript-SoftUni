function solve() {
    let createBtn = document.querySelector('#myNumbers button');
    let allNumbers = document.getElementById('allNumbers');
    let numbersInput = document.querySelector('#myNumbers input');

    createBtn.addEventListener('click', function (event) {

        let myNumbers = numbersInput.value.split(" ").map(el => Number(el));
        let badNumbers = myNumbers.filter(n => n < 1 || n > 49);

        if (badNumbers.length === 0 && myNumbers.length === 6) {

            for (let i = 1; i <= 49; i++) {

                let div = document.createElement('div');
                div.setAttribute('class', 'numbers');
                div.textContent = `${i}`;

                if (myNumbers.includes(i)) {
                    div.style.background = "orange";
                }

                allNumbers.appendChild(div);
            }

            event.target.disabled = 'true';
            numbersInput.disabled = 'true';
        }
    });

}
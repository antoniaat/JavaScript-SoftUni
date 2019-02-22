function solve() {
    let btn = document.getElementsByTagName('button')[0];
    let toMenu = document.getElementById('selectMenuTo');


    createAndAppendOptions(toMenu);
    btn.addEventListener('click', clickedButton);

    function createAndAppendOptions(parent) {

        let binaryOption = document.createElement('option');
        let hexaOption = document.createElement('option');

        binaryOption.value = 'binary';
        binaryOption.textContent = 'Binary';

        hexaOption.value = 'hexadecimal';
        hexaOption.textContent = 'Hexadecimal';

        parent.appendChild(binaryOption);
        parent.appendChild(hexaOption);
    }

    function clickedButton() {
        let number = document.getElementById('input');
        let result = document.getElementById('result');

        if (toMenu.value === 'binary') {
            result.value = (+number.value).toString(2);
        } else if (toMenu.value === 'hexadecimal') {
            result.value = ((+number.value).toString(16)).toUpperCase();
        }
    }
}
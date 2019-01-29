function solve() {
    document.querySelector('button').addEventListener('click', function () {
        let input = document.querySelector('input');
        let name = input.value[0].toUpperCase() + input.value.slice(1, input.value.length).toLowerCase();

        let currentLiIndex = name.charCodeAt(0) - 65;
        let currentLi = Array.from(document.querySelector('ol').children)[currentLiIndex];

        if (currentLi.textContent.length === 0) {
            currentLi.textContent += name;
        } else {
            currentLi.textContent += `, ${name}`;
        }

        input.value = '';
    });
}
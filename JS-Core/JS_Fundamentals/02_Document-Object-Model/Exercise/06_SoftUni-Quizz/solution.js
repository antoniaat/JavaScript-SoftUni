function solve() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let sections = Array.from(document.getElementsByTagName('section'));
    let result = document.getElementById('result');

    buttons.forEach((b) => {
        b.addEventListener('click', function (event) {

            let parent = event.target.parentNode;

            if (sections[0] === parent) {
                sections[1].style.display = "block";

            } else if (sections[1] === parent) {
                sections[2].style.display = 'block';
            } else {

                let rightAnswers = 0;

                let softUniYearChecked = Array.from(document.querySelectorAll('input[name="softUniYear"]'))
                    .filter((input) => input.checked)[0];

                let popularNameChecked = Array.from(document.querySelectorAll('input[name="popularName"]'))
                    .filter((input) => input.checked)[0];

                let softUniFounderChecked = Array.from(document.querySelectorAll('input[name="softUniFounder"]'))
                    .filter((input) => input.checked)[0];

                if (softUniYearChecked.value === '2013') {
                    rightAnswers += 1;
                }

                if (popularNameChecked.value === 'Pesho') {
                    rightAnswers += 1;
                }

                if (softUniFounderChecked.value === 'Nakov') {
                    rightAnswers += 1;
                }

                rightAnswers === 3 ?
                    result.textContent = `You are recognized as top SoftUni fan!` :
                    result.textContent = `You have ${rightAnswers} right answers`

            }
        })
    });
}
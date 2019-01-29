function solve() {
    let clicks = 0;
    let buttons = Array.from(document.getElementsByTagName('button'));
    let content = document.getElementById('content');
    let fStep = document.getElementById('firstStep');
    let sStep = document.getElementById('secondStep');
    let tStep = document.getElementById('thirdStep');

    buttons.forEach((btn) => {
        btn.addEventListener('click', function (event) {

            if (btn.textContent === 'Next') {
                if (clicks === 0) {
                    fStep.style.display = 'block';
                    content.style.backgroundImage = 'none';
                    clicks += 1;

                } else if (clicks === 1) {
                    if (document.querySelector('input[value="agree"]').checked) {
                        fStep.style.display = 'none';
                        sStep.style.display = 'block';
                        buttons[0].style.display = 'none';
                        clicks += 1;

                        setTimeout(function () {
                            buttons[0].style.display = 'inline-block';
                        }, 3000);
                    }

                } else {
                    fStep.style.display = 'none';
                    sStep.style.display = 'none';
                    tStep.style.display = 'block';
                    buttons[0].style.display = 'none';
                    buttons[1].textContent = 'Finish';
                }

            } else {
                event.target.parentNode.parentNode.style.display = 'none';
            }
        })
    });
}
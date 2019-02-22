function solve() {
    Array.from(document.getElementsByTagName('img')).forEach(img => {
        img.addEventListener('click', clickEvent);
    });

    function clickEvent(event) {
        let currentCard = event.target;
        currentCard.src = './images/whiteCard.jpg';
        let result = document.getElementById('result');
        let p1 = result.children[0];
        let p2 = result.children[2];

        let firstIsFirst = Array.from(document.querySelectorAll('#player1Div img')).includes(currentCard);

        if (firstIsFirst) {
            p1.textContent = currentCard.name;
            currentCard.removeEventListener("click", clickEvent);

        } else {
            p2.textContent = currentCard.name;
            currentCard.removeEventListener("click", clickEvent);
        }

        if (p1.textContent !== "" && p2.textContent !== "") {

            let winner;
            let looser;

            if (Number(p1.textContent) > Number(p2.textContent)) {

                winner = document.querySelector(`#player1Div img[name="${p1.textContent}"]`);
                looser = document.querySelector(`#player2Div img[name="${p2.textContent}"]`);

            } else {
                winner = document.querySelector(`#player2Div img[name="${p2.textContent}"]`);
                looser = document.querySelector(`#player1Div img[name="${p1.textContent}"]`);
            }


            document.getElementById('history').textContent += `[${p1.textContent} vs ${p2.textContent}] `;
            p1.textContent = "";
            p2.textContent = "";

            winner.style.border = "2px solid green";
            looser.style.border = "2px solid darkred";
        }
    }
}
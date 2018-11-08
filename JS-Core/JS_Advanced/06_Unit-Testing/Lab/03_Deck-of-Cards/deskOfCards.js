function printDeckOfCards(arr) {
    let cards = [];

    for (let i = 0; i < arr.length; i++) {

        let currentCard = arr[i];

        let suit = currentCard[currentCard.length - 1];
        let face = '';

        if (currentCard.length === 2) {
            face = currentCard[0];
        } else if (currentCard.length === 3) {
            face = currentCard[0] + currentCard[1];
        }

        cards.push(makeCard(face, suit));
    }

    printCards(cards);

    function makeCard(face, suit) {
        let cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let cardSuits = ['S', 'H', 'D', 'C'];

        if (cardFaces.includes(face) && cardSuits.includes(suit)) {
            switch (suit) {
                case 'S':
                    return `${face}\u2660`; // Spades
                case 'H':
                    return `${face}\u2665`; // Hearts
                case 'D':
                    return `${face}\u2666`; // Diamonds
                case 'C':
                    return `${face}\u2663`; // Clubs
            }
        } else {
            console.log(`Invalid card: ${face}${suit}`);
            return;
        }
    }

    function printCards(cards) {
        if (cards) {
            console.log(cards.join(' '));
        }
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
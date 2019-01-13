function makeCard(face, suit) {
    let cardFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let cardSuits = ['S', 'H', 'D', 'C'];

    if (cardFaces.includes(face) && cardSuits.includes(suit)) {
        switch (suit) {
            case 'S': return `${face}\u2660`; // Spades
            case 'H': return `${face}\u2665`; // Hearts
            case 'D': return `${face}\u2666`; // Diamonds
            case 'C': return `${face}\u2663`; // Clubs
        }
    } else {
        throw new Error('Error');
    }
}

console.log('' + makeCard('A', 'S'));
console.log('' + makeCard('10', 'H'));
console.log('' + makeCard('1', 'C'));
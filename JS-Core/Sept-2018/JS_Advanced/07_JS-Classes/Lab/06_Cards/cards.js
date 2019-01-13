(function () {
    class Card {

        constructor(face, suit) {

            if (!Faces.includes(face)) {
                throw new Error("Invalid card face: " + face);
            } else if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error("Invalid card suite: " + suit);
            }

            this.face = face;
            this.suit = suit;
        }

        toString() {
            return `${this.face}${this.suit}`;
        }

    }

    let Suits = {
        CLUBS: "\u2663",    // ♣
        DIAMONDS: "\u2666", // ♦
        HEARTS: "\u2665",   // ♥
        SPADES: "\u2660"    // ♠
    };

    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    return {
        Suits:Suits,
        Card:Card
    }

})();

let card = result.Card;
let suits = result.Suits;

// let card = new Card("Q", Suits.CLUBS);

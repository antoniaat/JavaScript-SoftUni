function solve() {
    let input = JSON.parse(document.getElementById("arr").value);
    let divResult = $('#result')

    function convertFunc(data) {
        let temp = data.toString();
        return temp.replace(new RegExp("J", 'gi'), '11')
            .replace(new RegExp("Q", 'gi'), '12')
            .replace(new RegExp("K", 'gi'), '13')
            .replace(new RegExp("A", 'gi'), '14')
            .split(',');
    }

    function convertBack(data) {
        let temp = data.toString();
        return temp.replace(new RegExp("11", 'gi'), 'J')
            .replace(new RegExp("12", 'gi'), 'Q')
            .replace(new RegExp("13", 'gi'), 'K')
            .replace(new RegExp("14", 'gi'), 'A')
            .split(',');
    }

    function cards(input) {
        let first = convertFunc(input[0]).map(Number);
        let second = convertFunc(input[1]).map(Number);

        let i = 0;

        while (i < 20 && first.length > 0 && second.length > 0) {
            let firstPlayerCard = first.shift();
            let secondPlayerCard = second.shift();
            let winnerHand = [firstPlayerCard, secondPlayerCard];

            if (firstPlayerCard > secondPlayerCard) {
                first = first.concat(winnerHand);
            } else {
                second = second.concat(winnerHand);
            }

            i++;
        }

        let f = convertBack(first);
        let s = convertBack(second);
        console.log(f.join(" "));
        console.log(s.join(" "));
        let p = $('<p>');
        let p1 = $('<p>');
        divResult.append(p.text('First -> ' + f.join(', ')));
        divResult.append(p1.text('Second -> ' + s.join(', ')));
    }

    cards(input);
}
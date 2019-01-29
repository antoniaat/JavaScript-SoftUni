function solve() {
    let number = document.getElementById("num").value;
    let divResult = $('#result')

    function dna(number) {
        number = Number(number);
        let str = 'ATCGTTAGGG';
        let counter = 0;

        for (let i = 0; i < number; i++) {
            if (i % 4 === 0) {
                let p = $('<p>');
                divResult.append(p.text(`**${str[counter % 10]}${str[counter % 10 + 1]}**`));

            } else if (i % 4 === 1) {
                let p1 = $('<p>');
                divResult.append(p1.text(`*${str[counter % 10]}--${str[counter % 10 + 1]}*`));

            } else if (i % 4 === 2) {
                let p2 = $('<p>');
                divResult.append(p2.text(`${str[counter % 10]}----${str[counter % 10 + 1]}`));

            } else if (i % 4 === 3) {
                let p3 = $('<p>');
                divResult.append(p3.text(`*${str[counter % 10]}--${str[counter % 10 + 1]}*`));

            }

            counter += 2
        }
    }
    
    dna(number);
}
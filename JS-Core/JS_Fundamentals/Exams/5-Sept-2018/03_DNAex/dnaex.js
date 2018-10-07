function solve(input) {
    let pattern = /([a-zA-Z!@#$?]+)=(\d+)--(\d+)<<([a-z]+)/g;
    let collection = { };

    for (let i = 0; i < input.length - 1; i++) {
        let currentElement = input[i];

        let matches = pattern.exec(currentElement);

        if (matches) {
            let name = matches[1]
                .replace(new RegExp('\\!', 'g'), '')
                .replace(new RegExp('\\@', 'g'), '')
                .replace(new RegExp('\\#', 'g'), '')
                .replace(new RegExp('\\$', 'g'), '')
                .replace(new RegExp('\\?', 'g'), '');

            let lengthOfName = Number(matches[2]);
            let genomesCount = Number(matches[3]);
            let organism = matches[4];

            if(name.length === lengthOfName) {
                if(collection[organism]) {
                    collection[organism] =
                        collection[organism] + genomesCount;
                } else {
                    collection[organism] = genomesCount;
                }
            }
        }

        pattern.exec();
    }

    let sorted = [];

    for (const organism in collection) {
        sorted.push([organism, collection[organism]]);
    }

    sorted = sorted.sort((first, second) => {
        let firstValue = Number(first[1]);
        let secondValue = Number(second[1]);

        return secondValue - firstValue;
    });

    for (const elem of sorted) {
        console.log(elem[0] + ' has genome size of ' + elem[1]);
    }
}

let test0 = [
    '!@ab?si?di!a@=7--152<<human',
    'b!etu?la@=6--321<<dog',
    '!curtob@acter##ium$=14--230<<dog',
    '!some@thin@g##=9<<human',
    'Stop!'
];

let test1 = [
    '=12<<cat',
    '!vi@rus?=2--142',
    '?!cur##viba@cter!!=11--800<<cat',
    '!fre?esia#=7--450<<mouse',
    '@pa!rcuba@cteria$=13--351<<mouse',
    '!richel#ia??=8--900<<human',
    'Stop!'
];

let test2 = [
    '!@ру?би#=4--57<<polecat',
    '?do?@#ri#=4--89<<polecat',
    '=12<<cat',
    '!vi@rus?=2--142',
    '@pa!rcu>ba@cteria$=13--234<<mouse',
    '?!cur##viba@cter!!=11--680<<cat',
    'Stop!'
];

solve(test1);
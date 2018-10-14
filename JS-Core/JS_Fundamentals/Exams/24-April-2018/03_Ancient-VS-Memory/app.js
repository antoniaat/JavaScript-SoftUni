function solve(array) {
    const pattern = /([0-9]+)( 0 )(.+)/gm;
    let names = [];

    let wholeInput = array.join(' ');
    wholeInput = wholeInput.split('32656 19759 32763 0 ');
    wholeInput.shift();

    for (let i = 0; i < wholeInput.length; i++) {
        let currentElement = wholeInput[i];

        let matches = pattern.exec(currentElement);

        if (matches) {
            let sizeOfString = +matches[1];
            let string = matches[3].split(' ');

            string = string.slice(0, sizeOfString);
            
            names.push(encodeName(string));
        }

        pattern.exec();
    }
    
    function encodeName(nameInNumbers) {
        let name = '';

        for (let i = 0; i < nameInNumbers.length; i++) {
            let currentLetter = String.fromCharCode(nameInNumbers[i]);
            name += currentLetter;
        }
        console.log(name);
    }
}

let test0 = [
    '32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0',
    '0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0'
];

let test1 = [
    '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0'
];

solve(test0);
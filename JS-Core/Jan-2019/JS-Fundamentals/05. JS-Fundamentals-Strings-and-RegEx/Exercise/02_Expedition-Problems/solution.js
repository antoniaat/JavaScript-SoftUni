function solve() {
    let inputStrings = JSON.parse(document.getElementById("arr").value);
    let divResult = $('#result');

    function decodeMessages(inputStrings) {
        let specialKey = inputStrings[0]
        let pattern = `(\\s|^)(${specialKey}\\s+)([!#$%A-Z]{8,})(\\.|,|\\s|$)`
        let rgx = new RegExp(pattern, 'gi')

        for (var index = 1; index < inputStrings.length; index++) {
            var currentString = inputStrings[index];
            let match;
            while (match = rgx.exec(currentString)) {
                let encodedWord = match[3]
                if (encodedWord.toUpperCase() !== encodedWord) {
                    continue
                }

                let decodedWord = decodeWord(encodedWord)
                let decodedMatch = match[1] + match[2] + decodedWord + match[4]

                currentString = currentString.replace(match[0], decodedMatch)
            }
            let p = $('<p>');
            divResult.append(p.text(currentString));

        }

        function decodeWord(encodedWord) {
            while (encodedWord.indexOf('!') !== -1) {
                encodedWord = encodedWord.replace('!', '1')
            }

            while (encodedWord.indexOf('%') !== -1) {
                encodedWord = encodedWord.replace('%', '2')
            }

            while (encodedWord.indexOf('#') !== -1) {
                encodedWord = encodedWord.replace('#', '3')
            }

            while (encodedWord.indexOf('$') !== -1) {
                encodedWord = encodedWord.replace('$', '4')
            }

            return encodedWord.toLowerCase()
        }
    }
    decodeMessages(inputStrings);

}
// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/306.

function extractWords(input) {
    let array = [];

    const regex = /[A-Za-z]+/gm;
    const str = input;
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match) => {
            array.push(match)
        });
    }

    array = array.map(function (x) {
        return x.toString().toUpperCase()
    });

    console.log(array.join(", "))
}

extractWords('Hi, how are you?')
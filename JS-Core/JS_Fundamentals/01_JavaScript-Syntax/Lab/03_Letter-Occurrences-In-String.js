// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/287/.

function countLetterOccurences(text, letter) {
    let counter = 0;

    for (let index = 0; index < text.length; index++) {
        if(text[index] === letter){
            counter++;
        }
    }

    return counter;
}

console.log(countLetterOccurences('hello', 'l'));
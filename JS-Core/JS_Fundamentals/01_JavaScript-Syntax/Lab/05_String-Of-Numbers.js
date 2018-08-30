// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/287/.

function stringOfNumbers(number) {
    let html = [];

    for (let index = 1; index <= number; index++)
        html.push(index);

    return html.join("");
}

console.log(stringOfNumbers('5'));
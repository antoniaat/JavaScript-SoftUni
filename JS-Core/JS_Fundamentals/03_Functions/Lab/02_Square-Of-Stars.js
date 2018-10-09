// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/306.

const star = '* ';

function printSquare(n) {
    for (let columns = 1; columns <= n; columns++) {
        console.log(star.repeat(n))
    }
}

printSquare(5);
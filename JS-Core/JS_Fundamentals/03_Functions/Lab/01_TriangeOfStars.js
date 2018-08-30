// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/306.

const star = '*';

function printTriangle(n) {
    for (let index = 1; index <= n; index++) {
        console.log(star.repeat(index))
    }

    for (let index = n - 1; index >= 1; index--) {
        console.log(star.repeat(index))
    }
}

printTriangle(5);
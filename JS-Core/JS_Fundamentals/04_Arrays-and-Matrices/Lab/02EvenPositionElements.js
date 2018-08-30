// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/311.

function sumEvenNumbers(arr) {
    let result = [];
    result.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 == 0) {
            result.push(arr[i]);
        }
    }

    console.log(result.join(' '));
}

sumEvenNumbers(['5', '10']);
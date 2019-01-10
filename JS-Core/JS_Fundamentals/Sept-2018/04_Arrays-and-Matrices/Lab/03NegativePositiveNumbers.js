// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/311.

function groupNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = Number(arr[i]);

        if (currentNumber >= 0) {
            result.push(currentNumber);
        }
        else {
            result.splice(0, 0, currentNumber);
        }
    }

    return result.join('\n');
}

console.log(groupNumbers([3, -2, 0, -1]));
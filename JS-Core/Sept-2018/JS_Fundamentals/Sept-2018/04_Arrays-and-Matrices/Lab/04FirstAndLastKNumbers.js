// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/311.

function printNumbers(arr) {
    let kNumber = Number(arr[0]);
    arr.splice(0, 1); // removes one element at index 0
    let result = [];

    let firstKNumbers = '';
    for (let i = 0; i < kNumber; i++) {
        firstKNumbers += arr[i] + ' ';
    }

    result.push(firstKNumbers);

    let lastKNumbers = '';
    for (let i = arr.length - kNumber; i < arr.length; i++) {
        lastKNumbers += arr[i] + ' ';
    }

    result.push(lastKNumbers);

    console.log(result.join('\n'));
}

printNumbers([1,
5]);
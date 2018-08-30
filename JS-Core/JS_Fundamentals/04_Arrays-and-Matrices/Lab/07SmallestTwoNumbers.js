// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/311.

function solve(array) {
    let firstNumber = findSmallestNumber(array);
    let secondNumber = findSmallestNumber(array);

    return firstNumber + ' ' + secondNumber;
}

function findSmallestNumber(array) {
    let smallerNumber = Number.MAX_VALUE;
    for (let i = 0; i < array.length; i++) {
        if(array[i] < smallerNumber){
            smallerNumber = array[i];
        }
    }

    let index = array.indexOf(smallerNumber);
    array.splice(index, 1);
    return smallerNumber;
}

console.log(solve([3, 0, 10, 4, 7, 3]));
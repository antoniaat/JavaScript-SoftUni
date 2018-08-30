// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/311.

function diagonalSums(matrix) {
    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length-row-1];
    }
    console.log(mainSum + ' ' + secondarySum);
}

diagonalSums([[20, 40], [10, 60]]); // 80 50

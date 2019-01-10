// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/313/

function equalSums(matrix) {
    let horizontalSum = matrix.map(function (y) {
        return y.reduce(function (a, b) {
            return a + b;
        });
    });

    let verticalSum = matrix.reduce(function (a, b) {
        return a.map(function (v, i) {
            return v + b[i];
        });
    });

    function arraysEqual(horizontalSum, verticalSum) {
        return JSON.stringify(horizontalSum) === JSON.stringify(verticalSum);
    }

    return arraysEqual(horizontalSum, verticalSum);
}

console.log(equalSums([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
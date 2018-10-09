// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/310/.

function fits(arr) {
    let [x1, y1, x2, y2] = [arr[0], arr[1], arr[2], arr[3]];

    printResult(x1, y1, 0, 0);
    printResult(x2, y2, 0, 0);
    printResult(x1, y1, x2, y2);

    function printResult(firstNum, secondNum, thirdNum, fourthNum) {
        let a = firstNum - thirdNum;
        let b = secondNum - fourthNum;

        let distance = Math.sqrt(a**2 + b**2);

        if (isInt(distance)) {
            console.log(`{${firstNum}, ${secondNum}} to {${thirdNum}, ${fourthNum}} is valid`)
        } else {
            console.log(`{${firstNum}, ${secondNum}} to {${thirdNum}, ${fourthNum}} is invalid`)
        }
    }

    function isInt(value) {
        if (isNaN(value)) {
            return false;
        }
        var x = parseFloat(value);
        return (x | 0) === x;
    }
}

// fits([3, 0, 0, 4]);
fits([2, 1, 1, 1]);
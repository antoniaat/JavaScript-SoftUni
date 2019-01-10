// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/310/.

function modify(num) {
    let numAsString = num.toString();
    let sum = sumDigits(numAsString);

    while (sum / numAsString.length <= 5) {
        numAsString += "9";
        sum = sumDigits(numAsString);
    }

    console.log(numAsString);

    function sumDigits(numAsString) {
        let sum = 0;
        for (let digit of numAsString) {
            sum += Number(digit);
        }

        return sum;
    }
}

modify('101');
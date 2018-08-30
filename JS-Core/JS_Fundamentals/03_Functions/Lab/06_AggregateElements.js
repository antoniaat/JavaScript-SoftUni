// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/306.

function printAggregation(params) {
    function aggregate(initialValue, func) {
        let result = initialValue;

        for (num of params) {
            result = func(result, num);
        }

        return result;
    }

    console.log(aggregate(0, (result, num) => result + num));
    console.log(aggregate(0, (result, num) => result + 1 / num));
    console.log(aggregate('', (result, num) => result + num));
}

printAggregation([1, 2, 3]);
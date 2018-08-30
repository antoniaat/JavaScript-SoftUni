// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/287/.

function solve(array) {
    let sum = 0, vat = 0;

    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        vat += (20 * array[index]) / 100;

    }

    console.log("sum =", sum);
    console.log("VAT =", vat);
    console.log("total =", sum + vat);
}

// solve([1.20, 2.60, 3.50]);
solve([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);

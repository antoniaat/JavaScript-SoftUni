// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/311.

function processOddNumbers(array) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            arr.push(array[i] * 2);
        }
    }

    arr.reverse();
    console.log(arr.join(' '));

    // short one ->
    // [1, 2, 3, 4, 5].filter((el, i) => { return i % 2 === 1}).map(el => el * 2).reverse().forEach(e => console.log(e))
}

processOddNumbers([10, 15, 20, 25]);
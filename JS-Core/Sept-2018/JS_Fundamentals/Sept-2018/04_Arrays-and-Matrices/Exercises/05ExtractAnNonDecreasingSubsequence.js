// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/313/

function extractArray(array) {
    array = array.map(Number);
    let biggestNumber = array[0];

    for (let i = 0; i <= array.length; i++) {
        if (array[i] >= biggestNumber) {
            biggestNumber = array[i];
            console.log(biggestNumber);
        }
    }
}
extractArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/313/

function separateAndPrintArray(arr) {
    let separator = arr.pop();
    console.log(arr.join(separator));
}

separateAndPrintArray(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);
// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/313/

function sort(arr) {
    function compare(a, b) {
        if (a.length < b.length) { // a is less than b
            return -1;
        } else if (a.length > b.length) { // a is greater than b
            return 1;
        } else if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    }

    return arr.sort(compare).join('\n');
}

console.log(sort(['alpha',
    'beta',
    'gamma'
]));
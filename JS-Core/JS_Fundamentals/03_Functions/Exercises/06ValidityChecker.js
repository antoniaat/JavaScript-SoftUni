// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/310/.

function fits(arr) {
    let [x1, y1, x2, y2] =
        [Number(arr[0]), Number(arr[1]), Number(arr[2]), Number(arr[3])];

    let distance = Math.sqrt((x2 - x1), 2) + Math.sqrt((y2 - y1), 2);

    if (Number.isInteger(distance)) {
        return 'valid!';
    }
    return 'invalid';
}

console.log(fits([3, 0, 0, 4]));
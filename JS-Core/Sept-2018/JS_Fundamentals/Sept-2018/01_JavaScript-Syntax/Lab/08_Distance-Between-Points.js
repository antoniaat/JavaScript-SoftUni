// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/287/.

function calculateDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return distance
}

console.log(calculateDistance(2, 4, 5, 0));
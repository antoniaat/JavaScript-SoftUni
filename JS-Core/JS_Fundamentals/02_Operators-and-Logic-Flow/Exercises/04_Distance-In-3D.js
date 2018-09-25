// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni Judge system at https://judge.softuni.bg/Contests/308.

function calcDistance(input) {
    input = input.map(Number);
    let firstPoint = {x1: input[0], y1: input[1], z1: input[2]};
    let secondPoint = {x2: input[3], y2: input[4], z2: input[5]};
    let distance = Math.sqrt(
        (secondPoint.x2 - firstPoint.x1) * (secondPoint.x2 - firstPoint.x1) +
        (secondPoint.y2 - firstPoint.y1) * (secondPoint.y2 - firstPoint.y1) +
        (secondPoint.z2 - firstPoint.z1) * (secondPoint.z2 - firstPoint.z1));
    console.log(distance)
}

calcDistance([1, 1, 0, 5, 4, 0]);

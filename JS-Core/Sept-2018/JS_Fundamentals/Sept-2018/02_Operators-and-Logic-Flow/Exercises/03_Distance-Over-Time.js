// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni Judge system at https://judge.softuni.bg/Contests/308.

function calculateDistance(input) {
    let dist1= (input[0] / 3.6) * input[2];
    let dist2= (input[1] / 3.6) * input[2];

    let delta = Math.abs(dist1- dist2);

    return delta;
}

console.log(calculateDistance([0, 60, 3600]));
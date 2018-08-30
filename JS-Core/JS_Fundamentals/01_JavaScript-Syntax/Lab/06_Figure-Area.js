// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/287/.

function calculateArea(w, h, W, H) {
    return (H * (W - w)) + (h * w);
}

console.log(calculateArea(13,2,5,8));
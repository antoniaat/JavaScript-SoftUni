// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/313/

function rotateArray(array) {
    let numberOfRotations = Number(array.pop());
    if(numberOfRotations > 1000) numberOfRotations %= 1000;

    for (let index = 0; index < numberOfRotations; index++) {
        array.splice(0, 0, array.pop());
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
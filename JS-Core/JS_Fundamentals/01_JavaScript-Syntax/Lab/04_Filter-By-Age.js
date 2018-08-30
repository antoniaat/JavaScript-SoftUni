// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/287/.

function solve(minimumAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let firstPerson = {name: firstPersonName, age: Number(firstPersonAge)};
    let secondPerson = {name: secondPersonName, age: Number(secondPersonAge)};

    minimumAge = Number(minimumAge);

    if (firstPerson.age >= minimumAge){
        console.log(firstPerson);
    } else if(secondPerson.age >= minimumAge) {
        console.log(secondPerson);
    }
}

solve(19, 'Pesho', 119, 'Gosho', 20);
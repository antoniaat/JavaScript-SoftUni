// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/287/.

function solve(minimumAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let firstPerson = {
        name: firstPersonName,
        age: +firstPersonAge
    };

    let secondPerson = {
        name: secondPersonName,
        age: +secondPersonAge
    };

    let array = [firstPerson, secondPerson];
    array = array.filter(x=>x.age, minimumAge);
    console.log(array[0]);
}

solve(19, 'Pesho', 119, 'Gosho', 20);
solve(12, 'Ivan', 15, 'Asen', 9);
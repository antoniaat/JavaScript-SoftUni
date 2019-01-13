// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/313/

function printElements(arr) {
    let n = Number(arr.pop());
    for (let i = 0; i < arr.length; i+=n) {
        console.log(arr[i])
    }
}

printElements(['5', '20', '31', '4', '20','2']);

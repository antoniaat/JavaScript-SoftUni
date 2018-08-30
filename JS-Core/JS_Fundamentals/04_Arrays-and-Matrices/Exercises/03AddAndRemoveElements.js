// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/313/

function dispatchCommands(arr) {
    let array = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 'add') {
            array[index] = index + 1;
        }
        else if (arr[index] === 'remove') {
            if (arr.length > 0) {
                array.pop();
            }
        }
    }

    if (array.length === 0) {
        console.log('Empty');
        return;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined && array[i] !== '') {
            console.log(array[i]);
        }
    }
}

dispatchCommands(['add',
    'add',
    'remove',
    'add',
    'add'
]);
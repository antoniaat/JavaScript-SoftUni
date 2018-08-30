// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/311.

function printSeq(seqLength, k) {
    let arr = [];
    arr.push(1); // index [0]
    arr.push(1); // index [1]

    for (let index = 2; index < seqLength; index++) {
        while (k > arr.length) { // sum all of the elements if the length is smaller than k
            let sum = arr.reduce(function (acc, val) { return acc + val; });
            arr.push(sum);

            if (arr.length >= seqLength) {
                return arr.join(' ');
            }
        }

        let sumNumber = 0;
        for (let i = arr.length - k; i < arr.length; i++) {
            sumNumber += arr[i];
        }

        arr.push(sumNumber);

        if (arr.length >= seqLength) {
            return arr.join(' ');
        }
    }

    arr.join(' ');
}

console.log(printSeq(8, 2));
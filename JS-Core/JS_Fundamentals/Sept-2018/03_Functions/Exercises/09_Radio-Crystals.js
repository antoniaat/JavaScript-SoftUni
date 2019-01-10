// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/310/.

function solve(numArr) {
    let targetSize = numArr[0];
    let opStr = 'Cut';

    for (let i = 1; i < numArr.length; i++) {
        let microns = numArr[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns, `Cut`, cut);
        microns = executeOperation(microns, `Lap`, lap);
        microns = executeOperation(microns, `Grind`, grind);
        microns = executeOperation(microns, `Etch`, etch);

        if (microns + 1 === targetSize) {
            microns = xRay(microns);
        }

        console.log(`Finished crystal ${microns} microns`)
    }

    function executeOperation(microns, opStr, op) {
        let newSize = op(microns);
        let counter = 0;

        while (newSize >= targetSize || Math.floor(targetSize - newSize) === 1) {
            microns = newSize;
            newSize = cut(microns);
            counter++;
        }

        if (counter > 0) {
            console.log(`${opStr} x${counter}`);
            microns = transportAndWash(microns);
        }

        return microns;
    }

    function cut(crystal) {
        crystal /= 4;
        return crystal;
    }

    function lap(crystal) {
        crystal -= crystal * 0.2;
        return crystal;
    }

    function grind(crystal) {
        crystal -= 20;
        return crystal;
    }

    function etch(crystal) {
        crystal -= 2;
        return crystal;
    }

    function xRay(crystal) {
        return ++crystal;
    }

    function transportAndWash(crystal) {
        console.log(`Transporting and washing`);
        return Math.floor(crystal);
    }
}

solve([1375, 50000]);
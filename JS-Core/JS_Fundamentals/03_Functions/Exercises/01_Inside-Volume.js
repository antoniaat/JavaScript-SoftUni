// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/310/.

function insideVolume(input) {
    function isInside(x, y, z) {
        let x1= 10, x2= 50, y1=20, y2=80, z1=15, z2 = 50;

        if(x >= x1 && x <= x2 && y>=y1 && y <= y2 && z >= z1 && z<= z2) {
            return true;
        }

        return false;
    }

    input = input.map(Number);

    for(let i=0; i< input.length; i+=3) {
        let x = input[i];
        let y = input[i +1];
        let z = input[i + 2];

        if(isInside(x, y, z)) {
            console.log("inside");
        } else {
            console.log("outside");
        }
    }
}

console.log(solve([8, 20, 22]));
// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/310/.

function cookingByNumbers(input) {
    let number = parseFloat(input[0]);

    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number, 2);
                break;
            case 'spice':
                ++number;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= (number * 20) / 100;
                break;
        }
        console.log(number);
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
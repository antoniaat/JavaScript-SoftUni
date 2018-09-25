function solve(num) {
    let number = Math.floor(num / 12);
    let reminder = num - (number * 12);

    console.log(`${number}'-${reminder}"`)
}

solve(36);
solve(55);
function solve(firstString, secondString, thirdString) {
    let sumLength = Math.floor(firstString.length + secondString.length + thirdString.length);
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
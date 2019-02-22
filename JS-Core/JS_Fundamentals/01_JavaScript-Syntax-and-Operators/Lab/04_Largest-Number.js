function findMax(num1, num2, num3) {
    let biggestNumber = Math.max(Math.max(num1, num2), num3);
    console.log(`The largest number is ${biggestNumber}.`);
}
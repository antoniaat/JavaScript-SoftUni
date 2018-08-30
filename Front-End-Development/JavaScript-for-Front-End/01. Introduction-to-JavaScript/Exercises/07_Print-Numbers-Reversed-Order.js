function numbersInReversedOrder(arr) {
    let arrayOfNumbers = arr.map(Number);
    arrayOfNumbers.reverse();

    return arrayOfNumbers.join("\n");
}

console.log(numbersInReversedOrder(['20', '15', '19']));
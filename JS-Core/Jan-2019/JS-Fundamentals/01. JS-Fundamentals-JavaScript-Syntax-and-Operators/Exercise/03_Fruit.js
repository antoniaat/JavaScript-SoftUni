function solve(fruit, weight, price) {
    let kilos = weight / 1000;
    console.log(`I need ${(kilos*price).toFixed(2)} leva to buy ${kilos.toFixed(2)} kilograms ${fruit}.`)
}
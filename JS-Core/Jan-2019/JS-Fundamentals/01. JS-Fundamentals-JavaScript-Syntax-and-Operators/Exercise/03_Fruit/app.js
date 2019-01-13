function solve(typeOfFruit, weightInGrams, pricePerKg) {
    let weightInKilograms = weightInGrams / 1000;
    let price = pricePerKg * weightInKilograms;

    console.log(`I need ${price.toFixed(2)} leva to buy ${weightInKilograms.toFixed(2)} kilograms ${typeOfFruit}.`);
}

solve('orange', 2500, 1.80);
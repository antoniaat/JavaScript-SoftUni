function solve(arr) {
    let price = 0;
    let totalIncome = 0;

    for (const line of arr) {
        let tokens = line.split(', ');
        let insertedCoins = +tokens[0];

        let typeOfTheDrink = tokens[1]; // Coffee or tea

        let supplement = tokens[2];
        price = calculatePrice(typeOfTheDrink, supplement);

        if (tokens.includes('milk')) {
            let milkPrice = Number(((10 * price) / 100).toFixed(1));
            price += milkPrice;
        }

        let lastIndex = tokens.length - 1;
        let quantityOfSugar = +tokens[lastIndex];
        let sugarPrice = 0;

        if (quantityOfSugar > 0 && quantityOfSugar <= 5) {
            sugarPrice = 0.1;
        }

        price += sugarPrice;
        printTheResult(insertedCoins, price, typeOfTheDrink);
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);

    function printTheResult(insertedCoins, price, drink) {
        if (insertedCoins >= price) {
            let change = insertedCoins - price;
            totalIncome += price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        } else {
            let moneyNeeded = price - insertedCoins;
            console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);
        }
    }

    function calculatePrice(typeOfTheDrink, supplement) {
        if (typeOfTheDrink === 'coffee') {
            if (supplement === 'caffeine') {
                price = 0.8;
            } else if (supplement === 'decaf') {
                price = 0.9;
            }
        } else if (typeOfTheDrink === 'tea') {
            price = 0.8;
        }

        return price;
    }
}
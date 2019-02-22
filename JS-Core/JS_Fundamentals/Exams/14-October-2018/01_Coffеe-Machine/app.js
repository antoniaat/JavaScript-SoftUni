function solve(array) {
    let totalIncome = 0;

    function printResult(coins, drink, price) {
        if (coins >= price) {
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)} Change: ${(coins - price).toFixed(2)}`);
            totalIncome += price;
        } else {
            console.log(`Not enough money for ${drink}. Need ${(price - coins).toFixed(2)} more`);
        }
    }

    for (let i = 0; i < array.length; i++) {
        let currentOrder = array[i].split(', ');
        let coins = +currentOrder[0];
        let typeOfTheDrink = currentOrder[1];
        let price;
        let milk = false;
        let quantityOfSugar = +(currentOrder[currentOrder.length - 1]);

        let milkPrice = 0;
        let sugarPrice = 0;

        if (typeOfTheDrink === 'coffee') {
            let typeOfCoffee = currentOrder[2]; //'caffeine' or 'decaf'

            if (typeOfCoffee === 'caffeine') {
                price = 0.8;
            } else if (typeOfCoffee === 'decaf') {
                price = 0.9;
            }

            if (currentOrder.length === 5) {
                milk = true;
            }
        } else if (typeOfTheDrink === 'cappuccino') {
            price = 1.30;
        } else if (typeOfTheDrink === 'tea') {

            if (currentOrder.length === 4) {
                milk = true;
            }

            price = 0.80;
        }

        if (milk) {
            milkPrice = +(10 / 100) * price;
            // milkPrice = +milkPrice.toFixed(1);
            milkPrice = Math.ceil(milkPrice * 10) / 10;
        }

        if (quantityOfSugar !== 0) sugarPrice = 0.10;

        price += milkPrice;
        price += sugarPrice;

        printResult(coins, typeOfTheDrink, price);
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}`);
}

test1 = ['1.00, coffee, caffeine, milk, 4',
    '0.50, cappuccino, 1',
    '0.40, tea, milk, 2'];

solve(test1);

// Никъде не се споменава какво е change и откъде идва?
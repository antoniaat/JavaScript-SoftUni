function solution() {

    const success = 'Success';

    let stock = {
        flavour: 0,
        protein: 0,
        carbohydrate: 0,
        fat: 0
    };

    function returnError(element) {
        return `Error: not enough ${element} in stock`;
    }

    function removeQuantity(protein, carbohydrates, fat, flavours, quantity) {
        stock.protein -= protein * quantity;
        stock.carbohydrate -= carbohydrates * quantity;
        stock.fat -= fat * quantity;
        stock.flavour -= flavours * quantity;
    }

    function prepareApple(quantity) {

        if (stock.carbohydrate >= 1 * quantity && stock.flavour >= 2 * quantity) {
            removeQuantity(0, 1, 0, 2, quantity); //protein, carbohydrates, fat, flavours, quantity
            return success;
        } else {
            if (stock.carbohydrate < 1 * quantity) {
                return returnError('carbohydrate');
            } else if (stock.flavour < 2 * quantity) {
                return returnError('flavour');
            }
        }

    }

    function prepareCoke(quantity) {

        if (stock.carbohydrate >= 10 * quantity && stock.flavour >= 20 * quantity) {
            removeQuantity(0, 10, 0, 20, quantity); //protein, carbohydrates, fat, flavours, quantity

            return success;
        } else {
            if (stock.carbohydrate < 10 * quantity) {
                return returnError('carbohydrate');
            } else if (stock.flavour < 20 * quantity) {
                return returnError('flavour');
            }
        }

    }

    function prepareBurger(quantity) {

        if (stock.carbohydrate >= 5 * quantity && stock.fat >= 7 * quantity && stock.flavour >= 3 * quantity) {
            removeQuantity(0, 5, 7, 3, quantity); //protein, carbohydrates, fat, flavours, quantity

            return success;
        } else {
            if (stock.carbohydrate < 5 * quantity) {
                return returnError('carbohydrate');
            } else if (stock.fat < 7 * quantity) {
                return returnError('fat')
            } else if (stock.flavour < 3 * quantity) {
                return returnError('flavour')
            }
        }

    }

    function prepareOmelet(quantity) {

        if (stock.protein >= 5 * quantity && stock.fat >= 1 * quantity && stock.flavour >= 1 * quantity) {
            removeQuantity(5, 0, 1, 1, quantity); //protein, carbohydrates, fat, flavours, quantity

            return success;
        } else {
            if (stock.protein < 5 * quantity) {
                return returnError('protein');
            } else if (stock.fat < 1 * quantity) {
                return returnError('fat')
            } else if (stock.flavour < 1 * quantity) {
                return returnError('flavour')
            }
        }
    }

    function prepareCheverme(quantity) {

        if (stock.protein >= 10 * quantity && stock.carbohydrate >= 10 * quantity && stock.fat >= 10 * quantity && stock.flavour >= 10 * quantity) {
            removeQuantity(10, 10, 10, 10, quantity); //protein, carbohydrates, fat, flavours, quantity

            return success;
        } else {
            if (stock.protein < 10 * quantity) {
                return returnError('protein')
            } else if (stock.carbohydrate < 10 * quantity) {
                return returnError('carbohydrate');
            } else if (stock.fat < 10 * quantity) {
                return returnError('fat')
            } else if (stock.flavour < 10 * quantity) {
                return returnError('flavour')
            }
        }

    }

    function increaseTheStoredQuantity(microElement, currentQuantity) {
        if (stock.hasOwnProperty(microElement)) {
            stock[microElement] += currentQuantity;
        }

        return 'Success';
    }

    function prepareTheGivenMeal(recipe, quantity) {
        if (recipe === 'apple') {
            return prepareApple(quantity);
        } else if (recipe === 'coke') {
            return prepareCoke(quantity);
        } else if (recipe === 'burger') {
            return prepareBurger(quantity);
        } else if (recipe === 'omelet') {
            return prepareOmelet(quantity);
        } else if (recipe === 'cheverme') {
            return prepareCheverme(quantity);
        }
    }

    function printStock() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }

    return function (currentArgTokens) {
        currentArgTokens = currentArgTokens.split(' ');
        let command = currentArgTokens[0];

        if (command === 'restock') {
            let microElement = currentArgTokens[1];
            let quantity = +currentArgTokens[2];

            return increaseTheStoredQuantity(microElement, quantity);
        } else if (command === 'prepare') {
            let recipe = currentArgTokens[1];
            let quantity = +currentArgTokens[2];

            return prepareTheGivenMeal(recipe, quantity);
        } else if (command === 'report') {
            return printStock();
        }
    };
}

let manager = solution();
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
//
// console.log(manager('prepare cheverme 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare cheverme 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare cheverme 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare cheverme 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare cheverme 1'));
// console.log(manager('report'));
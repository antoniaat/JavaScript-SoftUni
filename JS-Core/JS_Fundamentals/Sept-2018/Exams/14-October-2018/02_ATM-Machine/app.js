function solve(arr) {
    let atm = [];
    let atmBalance = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentArray = arr[i];

        if (currentArray.length === 1) {
            quantityOfBanknote(currentArray);
        } else if (currentArray.length === 2) {
            withdraw(currentArray);
        } else if (currentArray.length > 2) {
            loadMoney(currentArray);
        }
    }

    function quantityOfBanknote(currentArray) {
        let banknote = +currentArray[0];

        let count = atm.filter(function (x) {
            return x === banknote
        }).length;

        console.log(`Service Report: Banknotes from ${banknote} lv. in the ATM are ${count}!`);
    }

    function withdraw(arr) {
        let currentBalance = +arr[0];
        let moneyForWithdraw = +arr[1];

        if (currentBalance < moneyForWithdraw) {
            console.log(`There is not enough money in your account. Your current balance is ${currentBalance}.`);
        } else if (moneyForWithdraw > atmBalance) {
            console.log(`ATM machine is out of order!`);
        } else {
            ejectingMoney(currentBalance, moneyForWithdraw);
            atmBalance -= moneyForWithdraw;
            console.log(`You get ${moneyForWithdraw} lv. Your card balance is ${currentBalance - moneyForWithdraw}. Thank you!`);
        }
    }

    function ejectingMoney(currentBalance, moneyForWithdraw) {
        atm.sort(sortNumber);

        while (moneyForWithdraw > 0) {
            let lastBanknote = atm.pop();
            if (lastBanknote > moneyForWithdraw) {
                atm.unshift(lastBanknote);
            } else {
                moneyForWithdraw -= lastBanknote;
            }
        }
    }

    function sortNumber(a, b) {
        return a - b;
    }

    function loadMoney(arr) {
        let sum = +arr.reduce(add, 0);
        atmBalance += sum;

        atm = atm.concat(arr);

        console.log(`Service Report: The ATM machine is loaded with ${sum}. Current balance is ${atmBalance}.`);
    }

    function add(a, b) {
        return a + b;
    }
}

let test0 = [[20, 5, 100, 20, 5, 50, 20, 10, 2, 1, 1, 1],
    [457, 25],
    [280, 125],
    [250, 85],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20],
    [20, 85],
    [100, 20, 50, 100, 80, 50, 100],
    [5000, 4500],
];

solve(test0);

// Има разминаване в принтирането в условието и в тестовете. (atm или balance)
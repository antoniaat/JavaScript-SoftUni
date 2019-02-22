function amountTocoins(amount, coins) {
    coins.sort((a, b) => b - a);
    let result = [];

    while (true) {
        if (amount === 0) {
            return [];
        } else {
            if (amount >= coins[0]) {
                amount = (amount - coins[0]);

                if (amount === 0) {
                    result.push(coins[0]);
                    break;
                } else if (amount < 0) {
                    break;
                } else {
                    result.push(coins[0]);
                }
                
            } else {
                coins.shift();
            }
        }
    }
    console.log(result.join(', '));
}
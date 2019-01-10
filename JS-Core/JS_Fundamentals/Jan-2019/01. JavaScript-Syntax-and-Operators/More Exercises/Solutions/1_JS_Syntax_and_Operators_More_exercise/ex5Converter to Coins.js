function amountTocoins(amount, coins){
    coins.sort((a,b)=> b-a);
    let leftMoney = 0;
    let result = [];
    while(true){
        if (amount === 0)
        {
            return [];
        }
        else
        {
            if (amount >= coins[0])
            {
                 amount = (amount - coins[0]);
                 if(amount===0){
                     result.push(coins[0]);
                     break;
                 }else if(amount<0){
                     break;
                 }else {
                     result.push(coins[0]);
                 }

                 //return [coins[0]].concat( amountTocoins(left, coins) );
            }
            else
            {
                coins.shift();
            }
        }
    }
    console.log(result.join(', '));
}
amountTocoins(46, [10, 25, 5, 1, 2]);
amountTocoins(123, [5, 50, 2, 1, 10]);

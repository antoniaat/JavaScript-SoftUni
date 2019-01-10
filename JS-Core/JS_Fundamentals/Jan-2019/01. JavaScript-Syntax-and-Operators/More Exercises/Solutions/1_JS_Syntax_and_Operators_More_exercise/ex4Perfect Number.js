function isPerfect(arr) {
    let result = [];
    for (const number of arr) {
        let temp = 0;
        for(var i=1;i<=number/2;i++)
        {
            if(number%i === 0)
            {
                temp += i;
            }
        }
        if(temp === number && temp !== 0)
        {
            result.push(number);
        }
    }
    if(result.length===0){
        console.log('No perfect number')
    }else{
        console.log(result.join(', '))
    }

}
isPerfect([5, 6, 28]);
isPerfect([5, 32, 82]);

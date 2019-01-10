function solve(num) {
    function sumDigits(n) { 
        if (n == 0) 
            return 0; 
        return (n % 10 + Math.floor(sumDigits(n / 10))); 
    } 
    let sum = sumDigits(num);
    let equal = true;
    let first = num % 10;
    while (num) {
        if (num % 10 !== first) {
            equal = false;
            break;
        }
        num = Math.floor(num / 10);
    }
    console.log(equal);
    console.log(sum);
}
solve(2222222);
solve(1234);
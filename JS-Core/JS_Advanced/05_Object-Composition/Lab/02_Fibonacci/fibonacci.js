function getFibonator() {
    let arr = [0, 1];
    let counter = 0;

    return function () {
        counter++;
        if (counter === 1) return 1;
        
        let currentNumber = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(currentNumber);
        return currentNumber;
    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
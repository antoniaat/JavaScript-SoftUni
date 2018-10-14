function solve(arr) {
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    const product = (accumulator, currentValue) => accumulator * currentValue;

    console.log(`Sum = ${arr.reduce(sum)}`);
    console.log(`Min = ${Math.min(...arr)}`);
    console.log(`Max = ${Math.max(...arr)}`);
    console.log(`Product = ${arr.reduce(product)}`);
    console.log(`Join = ${arr.join('')}`);
}

let test0 = [2,3,10,5];
let test1 = [5, -3, 20, 7, 0.5];

solve(test0);
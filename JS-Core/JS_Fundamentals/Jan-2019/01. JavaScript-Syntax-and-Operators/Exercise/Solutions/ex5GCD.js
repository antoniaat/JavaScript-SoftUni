function solve(a, b) {

    let gcd;
    while (a !== b) {
        if (a > b) {
            a = a - b;
        }
        else {
            b = b - a;
        }
    }
    gcd = a;
    console.log(gcd);
}
solve(15, 5)

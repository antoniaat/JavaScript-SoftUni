function solve(a, b) {

    let gcd;
    while (a !== b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }

    gcd = a;
    console.log(gcd);
}
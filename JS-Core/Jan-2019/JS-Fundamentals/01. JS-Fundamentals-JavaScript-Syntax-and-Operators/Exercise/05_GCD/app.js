// function solve(a, b) {
//
//     let gcd;
//     while (a !== b) {
//         if (a > b) {
//             a -= b;
//         } else {
//             b -= a;
//         }
//     }
//
//     gcd = a;
//     console.log(gcd);
// }


function solve(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }
    
    console.log(a);

}
solve(15, 5);

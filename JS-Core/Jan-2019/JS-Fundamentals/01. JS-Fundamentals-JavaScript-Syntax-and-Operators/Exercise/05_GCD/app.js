function solve(a, b) {
    let biggerNum = Math.max(a, b);
    let smallerNum = Math.min(a, b);

    let divider = smallerNum;
    let gcd;

    //Check if the smaller number is the divider
    if (biggerNum % smallerNum === 0) {
        gcd = smallerNum;
    } else {
        while (divider > 0) {
            divider--;

            if (biggerNum % divider === 0 && smallerNum % divider === 0) {
                gcd = divider;
                break;
            }
        }
    }

    console.log(gcd);
}

solve(15, 5);
solve(2154, 458);

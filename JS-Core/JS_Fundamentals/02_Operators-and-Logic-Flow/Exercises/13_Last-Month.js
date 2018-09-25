function solve(arr) {
    let day = +arr[0];
    let month = +arr[1];
    let year = +arr[2];

    int_d = new Date(year, month - 1, 1);
    d = new Date(int_d - 1);

    console.log(d.getDate());
}

solve([17, 3, 2002]);
solve([13, 12, 2004]);
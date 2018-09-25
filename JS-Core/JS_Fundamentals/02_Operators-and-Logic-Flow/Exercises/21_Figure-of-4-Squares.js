function figure4Squares(input) {
    let n = Number(input);
    if (n == 2) {
        console.log('+++');
    } else {
        console.log('+' + Array(n - 1).join('-') + '+' + Array(n - 1).join('-') + '+');
        for (let i = 1; i <= Math.floor((n - 3) / 2); i++) {
            console.log('|' + Array(n - 1).join(' ') + '|' + Array(n - 1).join(' ') + '|');
        }
        console.log('+' + Array(n - 1).join('-') + '+' + Array(n - 1).join('-') + '+');
        for (let i = 1; i <= Math.floor((n - 3) / 2); i++) {
            console.log('|' + Array(n - 1).join(' ') + '|' + Array(n - 1).join(' ') + '|');
        }
        console.log('+' + Array(n - 1).join('-') + '+' + Array(n - 1).join('-') + '+');
    }
}
function solve(row) {
    let line = '';
    for (let col = 1; col <= row; col++) {
        line += '$';
        console.log(line);
    }
}

solve(4);
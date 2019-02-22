function add(num) {
    add.sum = add.sum === undefined ? num : add.sum + num;

    add.toString = function() {
        return this.sum;
    };

    return add;
}

console.log(add(1)(5)(-3).toString());
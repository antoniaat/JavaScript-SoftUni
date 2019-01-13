class Sumator {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }

    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }

    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

let list = new Sumator();
// console.log(`list = [${list}]`); // list = [(empty)]
//
// list.add(1);
// list.add(2);
// list.add("three");
// list.add(4);
// console.log(`list = [${list}]`); // list = [1, 2, three, 4]
// console.log("sum = " + list.sumNums()); // sum = 7
//
// list.add("5.5"); // not a number!
// list.add(7.7);
// console.log(`list = [${list}]`); //list = [1, 2, three, 4, 5.5, 7.7]
// console.log("sum = " + list.sumNums()); //sum = 14.7
//
// list.removeByFilter(x => x % 2 === 0);
// console.log(`list = [${list}]`); // list = [1, three, 5.5, 7.7]
// console.log("sum = " + list.sumNums()); // sum = 8.7

// console.log(list.getPrototypeOf());

module.exports = Sumator;

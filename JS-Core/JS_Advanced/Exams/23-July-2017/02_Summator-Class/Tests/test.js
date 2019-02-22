let Sumator = require('../summatorClass');
let expect = require('chai').expect;

describe("Sumator - constructor", function () {
    it("Empty list", function () {
        let list = new Sumator();
        expect(list.toString()).to.equal('(empty)');
    });
});

describe("Sumator - Add function", function () {
    it("Add numbers to list", function () {
        let list = new Sumator();
        list.add(1);
        list.add(2);

        expect(list.toString()).to.equal('1, 2');
    });
    it("Add string and numbers to list", function () {
        let list = new Sumator();
        list.add(1);
        list.add(2);
        list.add('pesho');

        expect(list.toString()).to.equal('1, 2, pesho');
    });
});

describe("Sumator - Sum function", function () {
    it("Sum numbers with string", function () {
        let list = new Sumator();
        list.add(1);
        list.add(2);
        list.add('pesho');

        list = list.sumNums();

        expect(list.toString()).to.equal('3');
    });

    it("Sum only numbers", function () {
        let list = new Sumator();
        list.add(1);
        list.add(2);

        list = list.sumNums();

        expect(list.toString()).to.equal('3');
    });

    it("Sum string with number", function () {
        let list = new Sumator();
        list.add(1);
        list.add('2');

        list = list.sumNums();

        expect(list.toString()).to.equal('1');
    });

    it("Sum only strings", function () {
        let list = new Sumator();
        list.add('pesho');
        list.add('2');

        list = list.sumNums();

        expect(list.toString()).to.equal('0');
    });
});

describe("Sumator - Remove by filter function", function () {
    it("Remove even numbers", function () {
        let list = new Sumator();

        list.add(1);
        list.add(2);
        list.add('three');
        list.add(4);
        list.add(5.5);
        list.add(7.7);
        //list = [1, 2, three, 4, 5.5, 7.7]

        list.removeByFilter(x => x % 2 === 0);
        // list = [1, three, 5.5, 7.7]

        expect(list.toString()).to.equal('1, three, 5.5, 7.7');
    });

    it("Remove all strings", function () {
        let list = new Sumator();

        list.add(1);
        list.add(2);
        list.add('three');
        list.add(4);
        list.add('5.5');
        list.add('7.7');
        //list = [1, 2, three, 4, 5.5, 7.7]

        list.removeByFilter(x => typeof x === 'string');
        // list = [1, 2, 4]

        expect(list.toString()).to.equal('1, 2, 4');
    });
});
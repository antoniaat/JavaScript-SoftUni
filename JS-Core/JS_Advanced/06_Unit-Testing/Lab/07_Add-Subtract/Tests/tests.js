let createCalculator = require('../addSubtract');
let expect = require('chai').expect;

let test1 = function () {
    it("Get functionality", function () {
        let expected = createCalculator();
        expect(expected.get()).to.equal(0);
    });
};

let test2 = function () {
    it("Get functionality", function () {
        let expected = createCalculator();
        expect(expected.hasOwnProperty('get')).to.equal(true);
    });
};

let test3 = function () {
    it("Add functionality", function () {
        let expected = createCalculator();
        expect(expected.hasOwnProperty('add')).to.equal(true);
    });
};

let test4 = function () {
    it("Subtract functionality", function () {
        let expected = createCalculator();
        expected.add(2);

        expect(expected.get()).to.equal(2);
    });
};

let test5 = function () {
    it("Subtract functionality", function () {
        let expected = createCalculator();
        expected.add(10);
        expected.subtract(4);

        expect(expected.get()).to.equal(6);
    });
};

let test6 = function () {
    it("Add string to number", function () {
        let expected = createCalculator();
        expected.add(10);
        expected.add('pesho');

        expect(expected.get()).to.be.NaN;
    });
};

let test7 = function () {
    it("Subtract string from number", function () {
        let expected = createCalculator();
        expected.add(10);
        expected.subtract('pesho');

        expect(expected.get()).to.be.NaN;
    });
};

describe("Get functionality", test1);
describe("Get functionality", test2);
describe("Add functionality", test3);
describe("Add number", test4);
describe("Subtract number", test5);
describe("Add string to number", test6);
describe("Subtract string from number", test7);
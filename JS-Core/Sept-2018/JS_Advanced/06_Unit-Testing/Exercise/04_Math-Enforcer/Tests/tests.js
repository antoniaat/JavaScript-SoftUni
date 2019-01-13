let mathEnforcer = require('../mathEnforcer');
let expect = require('chai').expect;

let test1 = function () {
    it("Correct input parameters for add five function", function () {
        expect(mathEnforcer.addFive(15)).to.be.equal(20);
    });
};

let test2 = function () {
    it("Incorrect input parameters for add five function", function () {
        expect(mathEnforcer.addFive('pesho')).to.be.undefined;
    });
};

let test3 = function () {
    it("Correct input parameters for subtract function", function () {
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
    });
};

let test4 = function () {
    it("Inorrect input parameters for subtract function", function () {
        expect(mathEnforcer.subtractTen('pesho')).to.be.undefined;
    });
};

let test5 = function () {
    it("Correct input parameters for sum function", function () {
        expect(mathEnforcer.sum(20, 10)).to.be.equal(30);
    });
};

let test6 = function () {
    it("Inorrect input parameters for sum function", function () {
        expect(mathEnforcer.sum('pesho', 'gosho')).to.be.undefined;
    });
};

let test7 = function () {
    it("Inorrect input parameters for sum function", function () {
        expect(mathEnforcer.sum(12, 'gosho')).to.be.undefined;
    });
};

let test8 = function () {
    it("Inorrect input parameters for sum function", function () {
        expect(mathEnforcer.sum('gosho', 152)).to.be.undefined;
    });
};

describe("Add five function - correct parameters", test1);
describe("Add five function - incorrect parameters", test2);
describe("Subtract ten function - correct parameters", test3);
describe("Subtract ten function - incorrect parameters", test4);
describe("Sum function - correct parameters", test5);
describe("Sum function - incorrect parameters", test6);
describe("Sum function - incorrect parameters", test7);
describe("Sum function - incorrect parameters", test8);
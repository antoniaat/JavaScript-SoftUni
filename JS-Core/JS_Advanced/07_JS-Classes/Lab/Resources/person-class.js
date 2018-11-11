class Person {
    constructor(firstName, lastName, age, email) {
        [this.firstName, this.lastName, this.age, this.email] =
            [firstName, lastName, age, email];
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let expect = require('chai').expect;

describe("Person class tests", function () {
    it("Person should be class", function () {
        expect(typeof Person).to.be.equal('function',
            "Class 'Person' not found");
        expect(typeof Person.constructor).to.be.equal('function',
            "'Person.constructor' not found");
        expect(Person.length).to.be.equal(4,
            "'Rectangle.constructor' should take 4 parameters");
        expect(typeof Person.constructor.name).to.be.equal('string',
            "'Person.constructor' not found");
    });

    it("Person should have firstName, lastName, age and email", function () {
        let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
        expect(p.firstName).to.be.equal("Peter",
            "Property 'firstName' not working");
        expect(p.lastName).to.be.equal("Marinov",
            "Property 'lastName' not working");
        expect(p.age).to.be.equal(18,
            "Property 'age' not working");
        expect(p.email).to.be.equal("pesho18@abv.bg",
            "Property 'email' not working");
    });

    it("Person.toString() should work correctly", function () {
        let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
        expect(typeof p.toString).to.be.equal('function',
            "Method 'toString()' does not exist");
        let str = p.toString();
        expect(str).to.be.equal('Peter Marinov (age: 18, email: pesho18@abv.bg)');
    });
});

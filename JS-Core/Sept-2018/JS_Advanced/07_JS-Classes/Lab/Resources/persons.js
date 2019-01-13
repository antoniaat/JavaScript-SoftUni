function getPersons() {
    class Person {
        constructor (firstName, lastName, age, email) {
            [this.firstName, this.lastName, this.age, this.email] =
                [firstName, lastName, age, email];
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    return [
        new Person('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Nikolov', 25),
        new Person('Peter', 'Kolev', 24, 'ptr@gmail.com'),
    ];
}

console.log(getPersons().join(", "));

let expect = require('chai').expect;

describe("getPersons() tests", function() {
    it("getPersons() should return array of Person objects", function() {
        expect(typeof getPersons).to.be.equal('function',
            "function 'getPersons' not found");
        let persons = getPersons();
        expect(Array.isArray(persons)).to.be.equal(true,
            "getPersons() should return array");
        expect(persons.length).to.be.greaterThan(0,
            "getPersons() should return non-empty array");
        expect(typeof persons[0]).to.be.equal('object',
            "getPersons() should return array of objects");
        expect(persons[0].constructor.name).to.be.equal('Person',
            "getPersons() should return array of objects");
    });

    it("getPersons() should return array of 4 elements", function() {
        let persons = getPersons();
        expect(persons.length).to.be.equal(4,
            "getPersons() should return array of 4 elements");
    });

    it("getPersons()[0] should be Maria Petrova", function() {
        let persons = getPersons();
        expect(persons[0].firstName).to.be.equal('Maria',
            "getPersons()[0].firstName should be Maria");
        expect(persons[0].lastName).to.be.equal('Petrova',
            "getPersons()[0].lastName should be Petrova");
        expect(persons[0].age).to.be.equal(22,
            "getPersons()[0].age should be 22");
        expect(persons[0].email).to.be.equal('mp@yahoo.com',
            "getPersons()[0].email should be mp@yahoo.com");
    });

    it("getPersons()[1] should be SoftUni", function() {
        let persons = getPersons();
        expect(persons[1].firstName).to.be.equal('SoftUni',
            "getPersons()[1].firstName should be SoftUni");
        expect(persons[1].lastName).to.be.equal(undefined,
            "getPersons()[1].lastName should be undefined");
        expect(persons[1].age).to.be.equal(undefined,
            "getPersons()[1].age should be undefined");
        expect(persons[1].email).to.be.equal(undefined,
            "getPersons()[1].email should be undefined");
    });

    it("getPersons()[2] should be Stephan Nikolov", function() {
        let persons = getPersons();
        expect(persons[2].firstName).to.be.equal('Stephan',
            "getPersons()[2].firstName should be Stephan");
        expect(persons[2].lastName).to.be.equal('Nikolov',
            "getPersons()[2].lastName should be Nikolov");
        expect(persons[2].age).to.be.equal(25,
            "getPersons()[2].age should be 25");
        expect(persons[2].email).to.be.equal(undefined,
            "getPersons()[2].email should be undefined");
    });

    it("getPersons()[3] should be Peter Kolev", function() {
        let persons = getPersons();
        expect(persons[3].firstName).to.be.equal('Peter',
            "getPersons()[3].firstName should be Peter");
        expect(persons[3].lastName).to.be.equal('Kolev',
            "getPersons()[3].lastName should be Kolev");
        expect(persons[3].age).to.be.equal(24,
            "getPersons()[3].age should be 24");
        expect(persons[3].email).to.be.equal('ptr@gmail.com',
            "getPersons()[3].email should be ptr@gmail.com");
    });


    it("Person.toString() should work correctly", function() {
        let persons = getPersons();
        let personsAsString = persons.join(", ");
        expect(personsAsString).to.be.equal(
            'Maria Petrova (age: 22, email: mp@yahoo.com), SoftUni undefined (age: undefined, email: undefined), Stephan Nikolov (age: 25, email: undefined), Peter Kolev (age: 24, email: ptr@gmail.com)',
            "Person.toString()");
    });
});

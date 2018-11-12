function getPersons() {
    let persons = [];

    class Person {
        constructor (firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    persons.push(new Person('Maria' , 'Petrova', 22, 'mp@yahoo.com'));
    persons.push(new Person('SoftUni'));
    persons.push(new Person('Stephan' , 'Nikolov', 25));
    persons.push(new Person('Peter' , 'Kolev', 24, 'ptr@gmail.com'));

    return persons;
}
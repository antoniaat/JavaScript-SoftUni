class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(clientID) {
        if (!(clientID.length === 6 && Number.isInteger(+clientID))) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = clientID;
    }

    get clientId() {
        return this._clientId;
    }

    set email(email) {
        if (!(/([\w]+@[a-zA-Z]+)/gm).test(email)) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = email;
    }

    get email() {
        return this._email;
    }

    set firstName(firstName) {
        if (!(firstName.length >= 3 && firstName.length <= 20)) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        } else if (!((/([a-zA-Z]+)/gm).test(firstName))) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = firstName;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(lastName) {
        if (!(lastName.length >= 3 && lastName.length <= 20)) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        } else if (!((/([a-zA-Z]+)/gm).test(lastName))) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = lastName;
    }

    get lastName() {
        return this._lastName;
    }
}

let acc = new CheckingAccount('423414', 'petkan@another.co.uk', 'Петкан', 'Draganov');
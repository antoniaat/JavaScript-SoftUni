class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(length) {
        if (this.innerLength < 0) {
            this.innerLength = 0;
        } else if (this.innerLength - length < 0) {
            this.innerLength = 0;
            return;
        }

        // let points = this.innerString.substring(this.innerString.length - length, this.innerString.length);

        return this.innerString;
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            let diff = this.innerString.length - this.innerLength;
            this.innerString.slice(-diff);
        } else if (this.innerString.length === this.innerLength) {
            this.innerString += '...';
        } else if (this.innerLength === 0) {
            return '...';
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...
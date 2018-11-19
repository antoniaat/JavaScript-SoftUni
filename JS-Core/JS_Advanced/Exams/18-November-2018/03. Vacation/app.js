class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        } else {
            if (!this.kids[grade]) {
                this.kids[grade] = []; //`${name}-${budget}`
            }

            let kidValues = this.kids[grade];
            if (kidValues.filter(o => o['name'] === name).length === 0) {
                kidValues.push({name: name, budget: budget});
            } else {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }

            let result = [];

            for (let i = 0; i < this.kids[grade].length; i++) {
                let currentKid = this.kids[grade][i];
                result.push(`${currentKid.name}-${currentKid.budget}`);
            }

            return result;
        }
    }

    removeChild(name, grade) {
        let currentGrade = this.kids[grade];

        if (currentGrade && currentGrade.filter(o => o.name === name).length > 0) {

            let index = this.kids[grade].findIndex(x => x.name === name);

            if (index !== -1) {
                this.kids[grade].splice(index, 1);
            }

            let result = [];

            for (let i = 0; i < this.kids[grade].length; i++) {
                let currentKid = this.kids[grade][i];
                result.push(`${currentKid.name}-${currentKid.budget}`);
            }

            return result;

        } else {
            return `We couldn't find ${name} in ${grade} grade.`;
        }
    }

    numberOfChildren() {
        let count = 0;

        for (let i = 0; i < Object.keys(this.kids).length; i++) {
            let currentGrade = (Object.keys(this.kids))[i];

            for (let kid of Object.values((this.kids[currentGrade]))) {
                count++;
            }
        }

        return count;
    }

    set newBudget(newBudget) {
        this.budget = newBudget;

        for (let i = 0; i < Object.values(this.kids).length; i++) {
            let currentGrade = (Object.values(this.kids)[i]);

            for (let grade of Object.values(currentGrade)) {

                for (const kid of grade) {
                    if (kid.budget < newBudget) {
                        let index = grade.indexOf(kid);
                        grade.splice(index, 1);
                    }
                }
            }
        }
    }

    toString() {
        // sort in ascending order
        let result = '';

        let ordered = Object.values((this.kids)).sort();

        result += `${this.organizer} will take ${this.numberOfChildren()} children on trip to ${this.destination}\n`;


        for (let i = 0; i < Object.keys(this.kids).length; i++) {
            let currentGrade = (Object.keys(this.kids))[i];
            result += `Grade: ${currentGrade}\n`;

            let count = 0;

            for (let kid of Object.values((this.kids[currentGrade]))) {
                count++;
                result += `${count}. ${kid.name}-${kid.budget}\n`;
            }
        }

        return result;
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500);

console.log(vacation.toString());

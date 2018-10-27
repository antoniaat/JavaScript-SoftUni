function personalBMI(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: 0,
        status: ''
    };

    person.BMI = Math.round(person.personalInfo.weight / Math.pow(person.personalInfo.height / 100, 2));

    if (person.BMI < 18.5) {
        person.status = 'underweight'
    } else if (person.BMI < 25) {
        person.status = 'normal'
    } else if (person.BMI < 30) {
        person.status = 'overweight'
    } else if (person.BMI >= 30) {
        person.status = 'obese'
    }

    if (person.status === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;
}

// console.log(personalBMI('Peter', 29, 75, 182));
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));
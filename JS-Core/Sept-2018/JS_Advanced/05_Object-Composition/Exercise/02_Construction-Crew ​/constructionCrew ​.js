function solve(workerObj) {

    if (workerObj.handsShaking === true) {
        let intakeAlcohol = (workerObj.weight / 10) * (workerObj.experience);

        workerObj.bloodAlcoholLevel += intakeAlcohol;
        workerObj.handsShaking = false;
    }

    return workerObj;
}

let test0 = {
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
};

let test1 = {
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
};

let test2 = {
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
};

console.log(solve(test1));
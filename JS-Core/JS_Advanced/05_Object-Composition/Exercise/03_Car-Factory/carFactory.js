function solve(obj) {
    let car = {};

    car.model = obj.model;

    let volume = 0;

    if (obj.power <= 90) {
        obj.power = 90;
        volume = 1800;
    } else if(obj.power <= 120) {
        obj.power = 120;
        volume = 2400;
    } else if(obj.power <= 200) {
        obj.power = 200;
        volume = 3500;
    }

    car.engine = {
        power: obj.power,
        volume: volume
    };

    car.carriage = {
        type: obj.carriage,
        color: obj.color
    };

    if(obj.wheelsize % 2 === 0){
        obj.wheelsize--;
    }

    car.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];

    return car;
}

let test0 = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
};

let test1 = {
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
};

console.log(solve(test1));




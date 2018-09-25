function solve(array) {
    let cherryCount = 0;
    let peachCount = 0;
    let plumCount = 0;
    let bucket = 0;

    for (let i = 0; i < array.length; i++) {
        let fruit = array[i].split(/\s+/);
        let fruitName = fruit[0];
        let fruitWeightKg = +fruit[1];

        if (fruitName === "cherry") {
            cherryCount += fruitWeightKg;
        } else if (fruitName === "peach") {
            peachCount += fruitWeightKg;
        } else if (fruitName === "plum") {
            plumCount += fruitWeightKg;
        } else {
            bucket += fruitWeightKg;
        }
    }

    let cherryKompots = (cherryCount / 25 / 9) * 1000;
    let peachKompots = (peachCount / 2.5 / 140) * 1000;
    let plumKompots = (plumCount / 10 / 20) * 1000;
    let rakiyaLiters = 0.2 * bucket;

    function printProducts() {
        console.log(`Cherry kompots: ${Math.floor(cherryKompots)}`)
        console.log(`Peach kompots: ${Math.floor(peachKompots)}`)
        console.log(`Plum kompots: ${Math.floor(plumKompots)}`)
        console.log(`Rakiya liters: ${rakiyaLiters.toFixed(2)}`)
    }

    printProducts();
}

solve(['cherry 1.2',
    'peach 2.2',
    'plum 5.2',
    'peach 0.1',
    'cherry 0.2',
    'cherry 5.0',
    'plum 10',
    'cherry 20.0',
    'papaya 20'
]);

solve(['apple 6',
    'peach 25.158',
    'strawberry 0.200',
    'peach 0.1',
    'banana 1.55',
    'cherry 20.5',
    'banana 16.8',
    'grapes 205.65', 'watermelon 20.54'
]);
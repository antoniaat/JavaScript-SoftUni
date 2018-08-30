function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalSum = 0;

    let shieldBroken = 0;
    let helmetBroken = false;
    let swordBroken = false;

    for (let i = 1; i <= lostFightsCount; i++) {

        // Every second lost game, his helmet is broken.
        if (i % 2 === 0) {
            totalSum += helmetPrice;
            helmetBroken = true;
        }

        // Every third lost game, his sword is broken.
        if (i % 3 === 0) {
            totalSum += swordPrice;
            swordBroken = true;
        }

        // When both his sword and helmet are broken in the same lost fight, his shield also brakes.
        if (helmetBroken && swordBroken) {
            totalSum += shieldPrice;
            shieldBroken++;
        }

        // Every second time, when his shield brakes, his armor also needs to be repaired.
        if (shieldBroken === 2) {
            totalSum += armorPrice;
            shieldBroken = 0;
        }

        helmetBroken = false;
        swordBroken = false;
    }

    let result = parseFloat(Math.round(totalSum * 100) / 100).toFixed(2);

    console.log(`Gladiator expenses: ${result} aureus`)
}

solve(23, 12.50, 21.50, 40, 200);
function solve() {
    let arr = JSON.parse(document.getElementById("arr").value);
    let divResult = $('#result')

    function radioCrystals(arr) {
        let target = arr[0];
        let crystals = arr.slice(1);
        for (let crystal of crystals) {
            let p = $('<p>');
            divResult.append(p.text(`Processing chunk ${crystal} microns`));

            let cuts = 0;
            let laps = 0;
            let grinds = 0;
            let etchs = 0;
            let xray = 0;
            while (crystal / 4 >= target - 1) {
                cuts++;
                crystal /= 4;
            }
            if (cuts !== 0) {
                let p = $('<p>');
                divResult.append(p.text(`Cut x${cuts}`));
                crystal = Math.floor(crystal);
                let p1 = $('<p>');
                divResult.append(p1.text("Transporting and washing"));

            }
            if (crystal === target) {
                let p = $('<p>');
                divResult.append(p.text(`Finished crystal ${crystal} microns`));

                continue;
            }
            while (crystal - crystal * 0.2 >= target - 1) {
                laps++;
                crystal -= crystal * 0.2;
            }
            if (laps !== 0) {
                let p = $('<p>');
                divResult.append(p.text(`Lap x${laps}`));

                crystal = Math.floor(crystal);
                let p1 = $('<p>');
                divResult.append(p1.text("Transporting and washing"));
            }

            if (crystal === target) {
                let p = $('<p>');
                divResult.append(p.text(`Finished crystal ${crystal} microns`));
                continue;
            }

            while (crystal - 20 >= target - 1) {
                grinds++;
                crystal -= 20;
            }
            
            if (grinds !== 0) {
                let p = $('<p>');
                divResult.append(p.text(`Grind x${grinds}`));
                crystal = Math.floor(crystal);
                let p1 = $('<p>');
                divResult.append(p1.text("Transporting and washing"));
            }

            if (crystal === target) {
                let p = $('<p>');
                divResult.append(p.text(`Finished crystal ${crystal} microns`));

                continue;
            }
            while (crystal - 2 >= target - 1) {
                etchs++;
                crystal -= 2;
            }
            
            if (etchs !== 0) {
                let p = $('<p>');
                divResult.append(p.text(`Etch x${etchs}`));
                crystal = Math.floor(crystal);
                let p1 = $('<p>');
                divResult.append(p1.text("Transporting and washing"));
            }

            if (crystal === target) {
                let p = $('<p>');
                divResult.append(p.text(`Finished crystal ${crystal} microns`));

                continue;
            }

            if (crystal + 1 <= target) {
                xray++;
                crystal += 1;
            }

            if (xray !== 0) {
                let p = $('<p>');
                divResult.append(p.text(`X-ray x${xray}`));

            }

            let p2 = $('<p>');
            divResult.append(p2.text(`Finished crystal ${crystal} microns`));
        }
    }
    radioCrystals(arr);
}
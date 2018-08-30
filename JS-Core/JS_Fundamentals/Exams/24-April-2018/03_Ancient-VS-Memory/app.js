function solve(array) {
    let regex = /(32656 19759 32763 0 )([0-9])( 0 )/gm;

    for (let i = 0; i < array.length; i++) {
        let currentLine = array[i];
        let count;

        let m;
        while ((m = regex.exec(currentLine)) !== null) {
            // Count
            m.forEach((match, groupIndex) => {
                if (groupIndex === 2) {
                    count = match;
                }
            });
        }

        let innerRegex = /(32656 19759 32763 0 )({${count}}[0-9])( 0 )(([0-9]+ ){5})/gm;
        //
        // let replace = "regex";
        // let re = new RegExp(replace,"g");
        //
        // "mystring".replace(re, "newstring");

        let match;
        while ((match = innerRegex.exec(currentLine)) !== null) {
            // Count
            m.forEach((match, groupIndex) => {
                console.log(`Match: ${match} , index: ${groupIndex}`)
            });
        }


        console.log(count)
    }
}

solve(['32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0', '0 32656 19759 32763 0 7 0 83 111 102 116' +
' 117 110 105 0 0 0 0 0 0 0 0']);
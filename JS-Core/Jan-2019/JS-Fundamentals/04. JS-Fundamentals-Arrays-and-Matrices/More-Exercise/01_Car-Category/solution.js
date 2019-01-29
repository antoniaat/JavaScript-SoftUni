function solve() {
    let inputArray = JSON.parse(document.getElementById("arr").value);
    let divResult = $('#result')

    function carNumbers(inputArray) {
        let type = "";
        let cars = [];

        inputArray.forEach(number => {
            let temp = number.split(' ');
            let firstGroup = temp[0];
            let secondGroup = temp[1];
            let thirdGroup = temp[2];

            let returnThird = returnTypeThirdGroup(thirdGroup);
            if (isNaN(firstGroup)) {
                switch (firstGroup) {
                    case "C":
                        if (returnThird === "undefined") {
                            type = "Diplomatic";
                        } else if (returnThird === "number") {
                            type = "Other";
                        } else {
                            type = "Sofia";
                        }
                        break;
                    case "CT":
                        if (returnThird === "undefined") {
                            type = "Diplomatic";
                        } else if (returnThird === "letters") {
                            type = "Province";
                        } else {
                            type = "Other";
                        }
                        break;
                    case "CP":
                        if (returnThird === "number") {
                            type = "CivilProtection";
                        } else if (returnThird === "letters") {
                            type = "Province";
                        } else {
                            type = "Other";
                        }
                        break;
                    case "CA":
                        type = "Sofia";
                        break;
                    case "BA":
                        if (returnThird === "number") {
                            type = "BulgarianArmy";
                        } else if (returnThird === "letters") {
                            type = "Province";
                        }
                        break;
                    case "XX":
                        type = "Foreigners";
                        break;
                    default:
                        if (secondGroup === undefined) {
                            type = "Other";
                        } else {
                            type = "Province";
                        }
                        break;
                }
            } else if (firstGroup.length === 3) {
                type = "Transient";
            } else {
                type = "Other";
            }

            if (!cars.hasOwnProperty(type)) {
                cars[type] = 0;
            }
            cars[type] += 1;
        });

        function returnTypeThirdGroup(thirdGroup) {
            if (thirdGroup === undefined) {
                return "undefined";
            } else {
                let temp = thirdGroup[0];
                if (0 <= +temp && +temp <= 9) {
                    return "number";
                } else {
                    return "letters";
                }
            }
        }

        let tempArr = [];

        for (let car in cars) {
            tempArr.push(car);
        }

        let sortedArr = [...tempArr].sort((a, b) => a.localeCompare(b));

        for (let car of sortedArr) {
            let p = $('<p>');
            divResult.append(p.text(`${car} -> ${cars[car]}`));
        }
    }

    carNumbers(inputArray);
}
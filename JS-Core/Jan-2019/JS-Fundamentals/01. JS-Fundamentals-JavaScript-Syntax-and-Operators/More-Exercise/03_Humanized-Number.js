function humanize(text) {
    let arrayText = text.split(/[., ]/).filter((el) => el !== '');
    let numberArray = [];

    for (let i = 0; i < arrayText.length; i++) {
        if (arrayText[i].match(/\d+/)) {
            numberArray.push(Number(arrayText[i]));
        }
    }
    
    for (const num of numberArray) {
        if (num % 100 >= 11 && num % 100 <= 13) {
            console.log(num + "th");
        } else if (num % 10 === 1) {
            console.log(num + "st");
        } else if (num % 10 === 2) {
            console.log(num + "nd");
        } else if (num % 10 === 3) {
            console.log(num + "rd");
        } else {
            console.log(num + "th");
        }
    }
}
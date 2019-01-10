function humanize(text) {
    let arrayText = text.split(/[., ]/).filter((el)=>el!=='');
    let numberArray = [];
    for (let i = 0; i < arrayText.length; i++) {
        if(arrayText[i].match(/\d+/)){
            numberArray.push(Number(arrayText[i]));
        }
    }
    for (const num of numberArray) {
        if(num % 100 >= 11 && num % 100 <= 13) {
            console.log(num + "th");
        }else if(num%10 === 1){
            console.log(num + "st");
        }else if(num%10 === 2){
            console.log(num + "nd");
        }else if(num%10 === 3){
            console.log(num + "rd");
        }else{
            console.log(num + "th");
        }
    }

}
humanize('The school has 256 students. In each class there are 26 chairs, 13 desks and 1 board.');
humanize('Yesterday I bought 12 pounds of peppers, 3 kilograms of carrots and 5 kilograms of tomatoes.');
// console.log(humanize(3));
// console.log(humanize(12));
// console.log(humanize(8));
// console.log(humanize(301));
// console.log(humanize(402));

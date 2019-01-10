function solve(data, activity) {
    let sex = data[0];
    let weight = data[1];
    let height = data[2];
    let age = data[3];
    let dailyCalorie = 0;
    if(sex==='f'){
        dailyCalorie = 655 + 9.7*weight + 1.85*height - 4.7*age;
    }else{
        dailyCalorie = 66 + 13.8*weight + 5*height - 6.8*age;
    }
    if(activity===0){
        dailyCalorie=dailyCalorie*1.2;
    }else if(activity>=1 && activity<=2){
        dailyCalorie = dailyCalorie*1.375;
    }else if(activity>=3 && activity<=5){
        dailyCalorie = dailyCalorie*1.55;
    }else if(activity>=6 && activity<=7){
        dailyCalorie = dailyCalorie*1.725;
    }else{
        dailyCalorie = dailyCalorie*1.90;
    }
    console.log(Math.round(dailyCalorie));
}
solve(['f', 46, 157, 32], 5);
solve(['m', 82, 175, 26], 3);
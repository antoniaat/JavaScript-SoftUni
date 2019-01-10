function solve(steps, distance, speed) {
    let distanceMeters = steps*distance;

    let speedMeterSecond = speed/60/60*1000;

    let timeSeconds = Math.round(distanceMeters/speedMeterSecond);

    //а всеки 500м човека прави по 1 минута почивка
    let rest = Math.floor(distanceMeters/500);
    timeSeconds += rest*60;


    let hours = 0;
    let seconds = timeSeconds%60;
    let minutes = (timeSeconds-seconds)/60;
    if(minutes>60){
        hours = Math.floor(minutes/60);
        minutes = minutes - (hours*60);
    }
    if (seconds<10){
        seconds = '0' + seconds;
    }
    if(minutes<10){
        minutes = '0' + minutes;
    }
    if(hours<10){
        hours = '0' + hours;
    }
    console.log(`${hours}:${minutes}:${seconds}`)
}
solve(2564, 0.70, 5.5)
    //брой стъпки, разстояние в метри, скорост в километра в час


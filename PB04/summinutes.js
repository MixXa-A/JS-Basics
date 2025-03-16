function sumMinutes(sec1, sec2, sec3){
let totalSec = sec1 + sec2 + sec3;
let secinMins = Math.floor(totalSec/60);
let secLeft = totalSec % 60;
if (secLeft<10){
    console.log(`${secinMins}:0${secLeft}`);
}else{
    console.log(`${secinMins}:${secLeft}`)
}
}
sumMinutes(50, 50, 49)
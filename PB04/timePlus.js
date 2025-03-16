function timePlus (hours, mins){
let hoursAndMins = hours * 60 + mins;
let allMins = hoursAndMins + 15;
let newHour = Math.floor(allMins/60);
let newMins = allMins % 60;
if (newHour===24){
    newHour = 0;
}
if (newMins<10){
    console.log(`${newHour}:0${newMins}`)
}else {
    console.log(`${newHour}:${newMins}`)
}
}
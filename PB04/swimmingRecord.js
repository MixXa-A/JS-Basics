function SwimmingRecord (actualRecord, meters, timePer1m){
let waterResistance = meters /15;
let waterRestMins = Math.floor(waterResistance)* 12.5;
let allTime = timePer1m * meters + waterRestMins;
if (allTime<actualRecord){
console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`)
} else{
    let timeSlower = Math.abs(allTime - actualRecord);
    console.log(`No, he failed! He was ${timeSlower.toFixed(2)} seconds slower.`)
}
}
SwimmingRecord(55555.67,

    3017,
    
    5.03)
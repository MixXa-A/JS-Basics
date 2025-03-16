function lunchBreak (serialName, episodeTime, breakTime){
let lunchTime = breakTime * 1/8;
let restTime = breakTime * 1/4;
let totalTimeLeft = breakTime - lunchTime - restTime;
if(episodeTime <= totalTimeLeft){
let timeLeft = totalTimeLeft - episodeTime;
console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
} else{
    let timeNeeded = episodeTime - totalTimeLeft;
    console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(timeNeeded)} more minutes.`)
}
}
lunchBreak("Teen Wolf", 48, 60)
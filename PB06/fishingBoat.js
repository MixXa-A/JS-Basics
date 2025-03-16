function fishingBoat (budget, season, fishermanCount){
    let boatPrice = 0;
if (season === `Spring`){
    boatPrice = 3000;
}else if (season === "Summer" || season === "Autumn"){
    boatPrice = 4200;
}else if (season === `Winter`){
    boatPrice = 2600;
}

if (fishermanCount <= 6){
    boatPrice*=0.90;
} else if(fishermanCount <= 11){
    boatPrice*=0.85;
}else {
    boatPrice*=0.75;
}

if(season !== `Autumn` && fishermanCount%2 === 0){
    boatPrice *=0.95;
}
if (budget>=boatPrice){
   let moneyLeft = budget - boatPrice;
   console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
}else if(budget<boatPrice){
    let moneyNeeded = boatPrice - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
}
}

fishingBoat(3000,

    "Summer",
    
    11)
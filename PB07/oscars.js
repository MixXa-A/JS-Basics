function oscars (input){
let actorName = input[0];
let startingPoints = Number(input[1])
let totalJuges = Number(input[2])


for (let i = 3; i< input.length; i+=2){
    let pointsWon = Number(input[i+1])
    let namesPoints = (input[i]);
    let totalPointsWon = pointsWon * namesPoints.length /2
     startingPoints+=totalPointsWon

     if (startingPoints >= 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);return;
    
}

} if (startingPoints < 1250.5) {
    let pointsNeeded = 1250.5 - startingPoints;
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`)
}


}
oscars(["Sandra Bullock",

    "340",
    
    "5",
    
    "Robert De Niro",
    
    "50",
    
    "Julia Roberts",
    
    "40.5",
    
    "Daniel Day-Lewis",
    
    "39.4",
    
    "Nicolas Cage",
    
    "29.9",
    
    "Stoyanka Mutafova",
    
    "33"])
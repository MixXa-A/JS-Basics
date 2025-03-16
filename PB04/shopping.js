function shopping (budget, videoCards, processors, ram){
    let videoPrice = videoCards * 250;
    let processorPrice = videoPrice * 0.35;
    let ramPrice = videoPrice * 0.1;
    let totalSum = videoPrice + processorPrice * processors + ramPrice*ram;
    if (videoCards>processors){
        totalSum *= 0.85
    }
if (budget>=totalSum){
    let moneyLeft = budget - totalSum
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
} else{
    let moneyNeeded = Math.abs(budget-totalSum)
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
}

}
shopping(900, 2, 1, 3)
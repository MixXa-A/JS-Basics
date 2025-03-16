function toyShop (tripPrice ,puzzle, doll, teddy, minion, truck ){
    let moneyWon = puzzle*2.60 + doll*3 + teddy*4.10 + minion*8.20 + truck*2;
    let toyCount = puzzle + doll + teddy + minion + truck;
    if (toyCount>=50){
        moneyWon*=0.75
}
moneyWon*= 0.9;
if (moneyWon >= tripPrice){
    let moneyLeft = moneyWon - tripPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
}else if(moneyWon < tripPrice){
    let moneyNeeded = tripPrice - moneyWon;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
}
}
toyShop(40.8, 20, 25, 30, 50, 10)
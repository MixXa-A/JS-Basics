
function newHouse (flowerType, pcs, budget){

let totalPrice = 0;
switch(flowerType){
case `Roses`:
    totalPrice = 5 * pcs;
    if (pcs > 80){
        totalPrice *= 0.9;
    }
    break;
case `Dahlias`:
    totalPrice = 3.8 * pcs;
    if (flowerType === `Dahlias` && pcs >= 90){
        totalPrice *= 0.85;
    }
    break;
case `Tulips`:
    totalPrice = 2.8 * pcs;
    if (flowerType === `Tulips` && pcs >= 80){
        totalPrice*=0.85;
    }
    break;
case `Narcissus`:
    totalPrice = 3 * pcs;
    if (flowerType === `Narcissus` && pcs < 120 ){
        totalPrice*= 1.15;
    }
    break;
case `Gladiolus`:
    totalPrice = 2.5 * pcs;
    if (flowerType === `Gladiolus` && pcs < 80){
        totalPrice*=1.2;
    }
    break;
}
if(budget>=totalPrice){
    let moneyLeft =  budget-totalPrice;
console.log(`Hey, you have a great garden with ${pcs} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
}
else if (totalPrice>budget){
    let moneyNeeded = totalPrice - budget;
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
}
}
newHouse("Roses",

55,

250)
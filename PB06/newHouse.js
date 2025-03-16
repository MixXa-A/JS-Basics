function newHouse (flowerType, pcs, budget){
let totalPrice = 0;
switch(flowerType){
case `Roses`:
    totalPrice = 5 * pcs;
    break;
case `Dahlias`:
    totalPrice = 3.8 * pcs;
    break;
case `Tulips`:
    totalPrice = 2.8 * pcs;
    break;
case `Narcissus`:
    totalPrice = 3 * pcs;
    break;
case `Gladiolus`:
    totalPrice = 2.5 * pcs;
    break;
}

if(flowerType === `Roses` && pcs > 80){
    totalPrice *= 0.9;
}else if(flowerType === `Dahlias` && pcs > 90){
    totalPrice *= 0.85;

}else if (flowerType === `Tulips` && pcs > 80){
    totalPrice *= 0.85;

}else if (flowerType === `Narcissus` && pcs < 120 ){
    totalPrice *= 1.15;

}else if (flowerType === `Gladiolus` && pcs < 80){
    totalPrice *= 1.2;
}



if(budget>=totalPrice){
    let moneyLeft =  budget - totalPrice;
console.log(`Hey, you have a great garden with ${pcs} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
}
else if (totalPrice>budget){
    let moneyNeeded = totalPrice - budget;
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
}
}
newHouse("Tulips",88,260)
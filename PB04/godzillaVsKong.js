function godzillaVsKong (budget, actors, costume){
let decor = 0.1 * budget;
let totalCostumePrice = actors * costume

if(actors>150){
    totalCostumePrice *= 0.9;
}
let totalCost = decor + totalCostumePrice;

if(budget >= totalCost) {
    let moneyLeft = budget - totalCost
  console.log(`Action!`);
  console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

}else {
    let moneyNeeded = totalCost - budget
    console.log(`Not enough money!`);
console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
}
}
godzillaVsKong(15437.62,

    186,
    
    57.99)
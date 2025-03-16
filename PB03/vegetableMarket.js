function vegetableMarket (vege, fruit, allvege, allfruit){
let vegeInEuro = vege / 1.94
let fruitInLeva = fruit / 1.94
let totalPriceinEvro = ((allvege * vegeInEuro) + (allfruit * fruitInLeva))
console.log(totalPriceinEvro.toFixed(2))
}
vegetableMarket(0.194, 19.4, 10, 10)
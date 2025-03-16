function  basketballEquipment (pricePerYear){
let priceForShoes = pricePerYear * 0.6 
let priceForClothes = priceForShoes * 0.8 
let priceForBall = 1/4 * priceForClothes
let priceForAccessoaries = 1/5 * priceForBall
let totalPrice = pricePerYear + priceForShoes + priceForClothes + priceForBall + priceForAccessoaries ; 
console.log(totalPrice)
}
basketballEquipment(365)
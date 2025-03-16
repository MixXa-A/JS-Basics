function repainting (nilon, paint, disolver, pricePerHour){
let allNilon = nilon * 1.5;
let allPaint = paint * 14.5;
let allDisolver = disolver * 5;
let extraPaint = allPaint * 0.1;
let priceForMaterials = allNilon + allPaint + extraPaint + allDisolver + 3 + 0.40;
let priceForWorkers = priceForMaterials * 0.3;
let totalPrice = priceForMaterials + priceForWorkers * pricePerHour;
console.log(totalPrice)
}

repainting (10, 11, 4, 8)
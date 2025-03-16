function repainting (nilon, paint, disolver, pricePerHour){
    let allPaint = paint * 14.5
    let extraPaint = allPaint * 0.1 ;
    let priceForMaterials = (nilon * 1.5) + allPaint + extraPaint + (disolver * 5) + 3 + 0.40 ; 
    let priceForWorkers = priceForMaterials * 0.3;
    let totalPrice = priceForMaterials + priceForWorkers * pricePerHour
console.log(totalPrice)
}

repainting (10, 11, 4, 8)
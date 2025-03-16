function schoolSupplies(penPack, markerPack, cleaningAgentPack, discountPercent) {
   let discountDecimal = discountPercent / 100
    let totalPrice = (penPack * 5.8 ) + (markerPack * 7.2) + (cleaningAgentPack * 1.2)
    let percent = discountDecimal * totalPrice
    let totalPriceWithDiscount = totalPrice - percent
    console.log(totalPriceWithDiscount)

}
schoolSupplies(2, 3 , 4 , 25)
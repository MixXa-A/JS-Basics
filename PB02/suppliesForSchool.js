function suppliesForSchool (penPack, markerPack, cleaningAgentPack, discountPercent){
let onePenPack = penPack * 5.80;
let oneMarkerPack = markerPack * 7.20;
let oneCleaningAgent = cleaningAgentPack * 1.20;
let discountDecimal = discountPercent /  100;
let totalSum = onePenPack + oneMarkerPack + oneCleaningAgent 
let percent = totalSum * discountDecimal
let totalSumWithdiscount = totalSum - percent
console.log(totalSumWithdiscount)
}
suppliesForSchool(2, 3, 4, 25)

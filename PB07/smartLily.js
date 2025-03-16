function smartLily (lilyAge, washingMachine, pricePerToy){
    let totalMoneySaved = 0;
    let promisedMoney = 10;
 
for (i=1; i<=lilyAge; i++ ){
  
   if (i % 2 === 0){
    totalMoneySaved += promisedMoney - 1 ;
    promisedMoney +=10;
   } else{
    totalMoneySaved += pricePerToy;
   }
}
if (totalMoneySaved >= washingMachine){
    let moneyLeft = totalMoneySaved - washingMachine;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
} else {
    let moneyNeeded = washingMachine - totalMoneySaved;
    console.log(`No! ${moneyNeeded.toFixed(2)}`)
}


}
smartLily(21,

    1570.98,
    
    3)
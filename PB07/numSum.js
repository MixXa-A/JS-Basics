function sumNum (num){
 let numAsText = String(num)
    let totalSum = 0;
    for(i=0; i<numAsText.length; i++){
     let numAsNumber = Number(numAsText[i])
     totalSum += numAsNumber 
      
    }
    console.log(`The sum of the digits is:${totalSum}`)
}
sumNum(`1234`)
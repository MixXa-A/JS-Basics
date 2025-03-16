function equalSums (n1, n2){
   let result = ``
   for (let i = n1; i<=n2; i++){
    let oddNums = 0;
    let equalNums = 0;
    let currentNumStr = String(i);
    
    for(let numcalc =0; numcalc<currentNumStr.length;numcalc++){
    let currentDigit = Number(currentNumStr[numcalc]);
    if (numcalc % 2===0){
        equalNums+=currentDigit
    }else{
        oddNums+=currentDigit
    }
}
if (oddNums===equalNums){
    result+=`${currentNumStr} `
   
}
}
console.log(result)
}
equalSums(100000,

    100050)
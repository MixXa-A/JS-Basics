function sumNum (n){


let numsForPrint = ``
let startNum = 1111
let endNum = 9999
while (startNum<=endNum){
 let devisor = String(startNum)
 let buff = ``
    for (b=0;b<devisor.length;b++){

        let currentDigit = Number(devisor[b])
        if ( n % currentDigit === 0){
          buff+=currentDigit
       
    }else{
        buff= ``
        break;
    }
      
    }
    if (buff==devisor){
        numsForPrint+=`${devisor} `
       }
      
   startNum++
}
console.log(numsForPrint)
}
sumNum(16)
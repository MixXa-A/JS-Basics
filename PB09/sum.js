function sum (n1,n2,n3){
let start = Number(n1);
let stop = Number(n2);
let mNum = Number(n3);
let isTrue = false;
let possibleCombinations = 0;
for (let i = start;i<=stop;i++){
     for (let n = start;n<=stop;n++){
        let sum = i + n;
        possibleCombinations++
           if (sum===mNum){
            
            isTrue = true;
            console.log(`Combination N:${possibleCombinations} (${i} + ${n} = ${mNum})`) 
            break;}
             
}
if (isTrue){
    break;
}
}
if (!isTrue){
    console.log(`${possibleCombinations} combinations - neither equals ${mNum}`)
}
        
}
sum(1,

    10,
    
    5)
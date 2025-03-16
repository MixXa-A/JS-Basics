/*function combinations (n){
    let magicNum = Number(n);
     let possibleCombinations = 0;
    for(let a=0; a<=magicNum; a++){
        for (let b = 0; b<=magicNum; b++){
            for(let c=0; c<=magicNum; c++){
                   let result = a+b+c
                if (result === magicNum){
                    possibleCombinations++
                    
                }
            }
        }
    }
    console.log(possibleCombinations)

}
combinations(25)*/

function barcodeGenerator (num1,num2){

let start = String(num1);
let end = String(num2);
let buff = ``;
let start1 = start[0];
let start2 = start[1];
let start3 = start[2];
let start4 = start[3];

let end1 = end[0];
let end2 = end[1];
let end3 = end[2];
let end4 = end[3];

for(let a =start1; a<=end1;a++){
  for (let b = start2; b<=end2;b++){
    for(let c= start3; c<=end3;c++){
        for(let d = start4; d<=end4; d++){
            console.log(`${a}${b}${c}${d}`)
        }
    }
  }  
}




}
barcodeGenerator(2345,
    6789
    )
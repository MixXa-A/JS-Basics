function maxNum (input){
let index = 0;
let num = (Number.MIN_SAFE_INTEGER)
while(input[index]!==`Stop`){
let buffer = Number(input[index]);

if(num<buffer){
   num = buffer
}
index++
}
console.log(num)
}
maxNum(["100",

    "99",
    
    "80",
    
    "70",
    
    "Stop"])
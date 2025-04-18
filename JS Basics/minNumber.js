function minNum (input){
let index = 0;
let num = Number(input[0])

while (input[index] !== `Stop`){

let buffer = Number(input[index]);

if(buffer<num){
    num = buffer
}
index++
}
console.log(num)
}
minNum([1,
    3,
    -1,
    -3,
    `Stop`])
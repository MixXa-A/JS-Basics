function divisibleby9 (num1, num2){
let sum = 0;
let buff = ``;
for(i=num1; i<=num2; i++){

  if (i % 9 === 0){
    sum += i  
    buff += i + `\n`
}}

console.log(`The sum: ${sum}`)
console.log(buff)
}
divisibleby9(100,200)
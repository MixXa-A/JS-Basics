function yardGreening (num){
let wholeM2= num* 7.61
let discount = 0.18* wholeM2
let sum= wholeM2 - discount

console.log(`The final price is: ${sum} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(550)
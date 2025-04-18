function accountBalace (input){
let income = 0;
let totalSum = 0;


while (input[income] !== "NoMoreMoney"){


let incomeFeed = Number(input[income])

if (incomeFeed<0){
console.log("Invalid operation!");
break;
}
console.log(`Increase: ${incomeFeed.toFixed(2)}`)
totalSum+=incomeFeed
income++
}
console.log(`Total: ${totalSum.toFixed(2)}`)  
}


    accountBalace(["5.51",

        "69.42",
        
        "100",
        
        "NoMoreMoney"])
function  vacantion (input){
let tripMoney = Number(input[0]);
let availabeMoney = Number(input[1]);
let daysSpending = 0;
let totalDays = 0;
index = 2;

while(tripMoney>availabeMoney){
let buffer = input[index]
index++
let sum = Number(input[index])
index++
totalDays++
if (buffer === `save`){
    availabeMoney+=sum;
    daysSpending=0;
}else if(buffer===`spend`){
    if (availabeMoney<sum){
    availabeMoney=0;}
    else{
        availabeMoney-=sum;
    }
  daysSpending++}

  if (daysSpending === 5){
    console.log("You can't save the money.") 
    console.log(totalDays);
    break;
}
  
}
if (tripMoney<=availabeMoney){
    console.log(`You saved the money for ${totalDays} days.`)
}
}
vacantion
(["2000",

    "1000",
    
    "spend",
    
    "1200",
    
    "save",
    
    "2000"])
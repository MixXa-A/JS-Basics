function salary (input){
let totalMoneyTaken = 0;

for (i=0; i<=input[0]; i++){
    let websites = input[i+2]
    
    switch(websites){
        case `Facebook`:
            totalMoneyTaken +=150; break;
        case `Instagram`:
            totalMoneyTaken +=100; break;
        case `Reddit`:
            totalMoneyTaken +=50;break;
        default :
        totalMoneyTaken +=0 ; break;
    }

}
if (totalMoneyTaken>= input[1]){
    console.log(`You have lost your salary.`)
} else{
    let moneyLeft = input[1] - totalMoneyTaken;
    console.log(moneyLeft)
}

}
salary([10,

    750,
    
    "Facebook",
    
    "Dev.bg",
    
    "Instagram",
    
    "Facebook",
    
    "Reddit",
    
    "Facebook",
    
    "Facebook"])
function vacantion (input){
    let index = 0;
    let vacantionCost = Number(input[index]);
    index++;
    let totalMoneySaved = Number(input[index]);
    index++;

    let daysSpending = 0;
    
    
    let totalDays=0;
     
    
    while(vacantionCost>totalMoneySaved){
    let buffer = input[index];
    index++
    let money = Number(input[index])
    index++
    totalDays++
    if (buffer === "save"){ 
        totalMoneySaved+=money;
        daysSpending=0;
    }else if (buffer === "spend"){

        if (totalMoneySaved<money){
            totalMoneySaved=0;
         }else{
            totalMoneySaved-=money
      }
          daysSpending++
        }   
    if (daysSpending === 5){
        console.log(`You can't save the money.`)
        console.log(totalDays)
        break;} 
}
if (totalMoneySaved>=vacantionCost){
    console.log(`You saved the money for ${totalDays} days.`)
}
}
 vacantion(["250",

    "150",
    
    "spend",
    
    "50",
    
    "spend",
    
    "50",
    
    "save",
    
    "100",
    
    "save",
    
    "100"])
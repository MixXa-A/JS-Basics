function exam (input) {
let badScoreCounter = Number(input[0]);
let totalBadScore = 0;



let totalgrades = 0;
let gradesCount = 0;

let index = 1
let counter = input[index]

let problemNames=``

while(counter !== `Enough`){
problemNames = counter
let grade = Number(input[index+1])
index++
gradesCount+=grade
totalgrades++

 if (grade<=4){
    totalBadScore++;
    if(totalBadScore===badScoreCounter){
     console.log(`You need a break, ${totalBadScore} poor grades.`);
     break;}
 }

 index++
 counter = input[index]
 


}
if(counter==="Enough"){
    console.log(`Average score: ${(gradesCount/totalgrades).toFixed(2)}`)
    console.log(`Number of problems: ${totalgrades}`)
    console.log(`Last problem: ${problemNames}`)
}



}
exam (["2",

    "Income",
    
    "3",
    
    "GameInfo",
    
    "6",
    
    "BestPlayer",
    
    "4"])
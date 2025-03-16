function trekking (input){
let allGrops =Number(input[0]);
let groupsCount1 = 0;
let groupsCount2 = 0;
let groupsCount3 = 0;
let groupsCount4 = 0;
let groupsCount5 = 0;
let allPerticipants =0;
for (i=1; i<=allGrops; i++){
 let groupsType = Number(input[i])
 allPerticipants += Number(groupsType)

 if (groupsType<=5){
    groupsCount1 += groupsType;
   
 }else if(groupsType <= 12){
    groupsCount2 += groupsType;
    
 }else if(groupsType<=25){
    groupsCount3 += groupsType

 }else if(groupsType<=40){
    groupsCount4 +=groupsType
   
 }else{
    groupsCount5 += groupsType
 }
 }
 
let groupsPercent1 = (groupsCount1/allPerticipants)*100;
let groupsPercent2 = (groupsCount2/allPerticipants)*100;
let groupsPercent3 = (groupsCount3/allPerticipants)*100;
let groupsPercent4 = (groupsCount4/allPerticipants)*100;
let groupsPercent5 = (groupsCount5/allPerticipants)*100;

console.log(`${groupsPercent1.toFixed(2)}%`)
console.log(`${groupsPercent2.toFixed(2)}%`)
console.log(`${groupsPercent3.toFixed(2)}%`)
console.log(`${groupsPercent4.toFixed(2)}%`)
console.log(`${groupsPercent5.toFixed(2)}%`)




}

trekking(["5",

    "25",
    
    "41",
    
    "31",
    
    "250",
    
    "6"])
function graduation(input){
let name = input[0];
let index = 1;

let averageGrade = 0;
let chances = 0;
let i = 1;

while(i <= 12){
    let grade = Number(input[index]);
    index++;
    
    if (grade<4){
        chances++
        if(chances === 2 ){
            console.log(`${name} has been excluded at ${i} grade`)
            break;
        }
        continue;} 

        averageGrade += grade
        i++;

}
if(chances!==2){
console.log(`${name} graduated. Average grade: ${(averageGrade/12).toFixed(2)}`)}

}

graduation(["Gosho",

    "5",
    
    "5.5",
    
    "6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
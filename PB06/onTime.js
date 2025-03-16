function onTime (hourOfExam, minutesOfExam, studentHour, studentMinutes){
let hourInMinExam = hourOfExam * 60;
let hourInMinStudent = studentHour * 60;
let totalTimeinMinsExam = hourInMinExam + minutesOfExam;
let totaTimeinMinsStudent = hourInMinStudent + studentMinutes;
let totalDiffence = totalTimeinMinsExam - totaTimeinMinsStudent;


if (totalDiffence <= -30 && totalDiffence <= 0 ){
   
    return;
}else if (totalDiffence<=-59){
    console.log(`Early`)
    console.log(`${totalDiffence} hours before the start`);}

if (totalDiffence>=-60)
if(hoursEarly<-10 && hoursEarly>0){
    console.log(`Early`)
    console.log(`${hoursEarly}:0${mins1} hours before the start`)
}else{
    console.log(`Early`)
    console.log(`${hoursEarly}:${mins1} hours before the start`)
}



if (totalDiffence > 0 && totalDiffence<= 59){
    console.log("Late");
    console.log(`${Math.abs(totalDiffence)} minutes after the start`)

} else if (totalDiffence<= 60)
    if (hoursEarly<0 && hoursEarly>= 10){
        console.log("Late");
    console.log(`${Math.abs(hours1)}:0${Math.abs(mins1)} hour minutes after the start`)
    } else{ 
        console.log("Late");
        console.log(`${Math.abs(hours1)}:${Math.abs(mins1)} hour minutes after the start`)
        } else{

    }

} 
onTime(9,

    30,
    
    9,
    
    50)
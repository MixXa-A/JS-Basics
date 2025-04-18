function onTime (examHour, examMin, studentHour, studentMin){
let examTimeinMinutes = examHour * 60 + examMin;
let studentTimeinMin = studentHour * 60 + studentMin;
let diff = Math.abs(examTimeinMinutes-studentTimeinMin);
let totalHours = Math.floor(diff / 60); 
let totalMinutes = diff % 60;
if (examTimeinMinutes === studentTimeinMin) {
    console.log(`On time`);
} else if (examTimeinMinutes<studentTimeinMin) {
    console.log(`Late`);
      if (diff < 60){
     console.log(`${totalMinutes} minutes after the start`)}
      else {
         if (totalMinutes < 10){
        console.log(`${totalHours}:0${totalMinutes} hours after the start`)
      } else {
        console.log(`${totalHours}:${totalMinutes} hours after the start`)
    }
}
} else if (diff<=30){
    console.log(`On time`)
    console.log(`${totalMinutes} minutes before the start`)
} else {
    if(diff<60){
        console.log(`Early`)
        console.log(`${totalMinutes} minutes before the start`)
    } else {
       if (totalMinutes<10){
        console.log(`Early`)
        console.log(`${totalHours}:0${totalMinutes} hours before the start`)
     } else{
        console.log(`Early`);
        console.log(`${totalHours}:${totalMinutes} hours before the start`)
    }
}
}
}
onTime(16, 0,15, 0)



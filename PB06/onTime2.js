function onTimeForTheExam(examHour, examMin, arrivalHour, arrivalMin) {
    let totalExamTime = examHour * 60 + examMin;
    let totalArrivalTime = arrivalHour * 60 + arrivalMin;
 
    let totalDiffTime = Math.abs(totalExamTime - totalArrivalTime);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMin = totalDiffTime % 60;
 
    if (totalExamTime === totalArrivalTime) {
        console.log('On Time');
    } else if (totalExamTime < totalArrivalTime) {
        console.log('Late');
 
        if (totalDiffTime < 60) {
            console.log(`${totalDiffTime} minutes after the start`);
        } else {
            if (diffMin < 10) {
                console.log(`${diffHour}:0${diffMin} hours after the start`);
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    } else {
        if (totalDiffTime <= 30) {
            console.log('On time');
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            console.log('Early');
 
            if (totalDiffTime < 60) {
                console.log(`${totalDiffTime} minutes before the start`);
            } else {
                if (diffMin < 10) {
                    console.log(`${diffHour}:0${diffMin} hours before the start`);
                } else {
                    console.log(`${diffHour}:${diffMin} hours before the start`);
                }
            }
        }
    }
}
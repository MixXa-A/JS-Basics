function trainTheTrainers (input){
    let index = 0;
    let presentationsGrades = Number(input[index]);
    index++
    let command = input[index];
    
    let grades=0;
    let totalGradesforAllStodents=0;

    while (command !== `Finish`){
        let currentPresentationName = command;
        
        let currentStudentGrade=0;
        
    for (let i = 0; i<presentationsGrades; i++){
        index++
        let presentationsGrades1 = Number(input[index])
        
         currentStudentGrade+=presentationsGrades1
         totalGradesforAllStodents+=presentationsGrades1
         grades++
         
         
    }


          console.log(`${currentPresentationName} - ${(currentStudentGrade/presentationsGrades).toFixed(2)}.`)

          index++
         command=input[index]
        
    }
    console.log(`Student's final assessment is ${(totalGradesforAllStodents/grades).toFixed(2)}.`)
}
trainTheTrainers((["2",

    "While-Loop",
    
    "6.00",
    
    "5.50",
    
    "For-Loop",
    
    "5.84",
    
    "5.66",
    
    "Finish"]))
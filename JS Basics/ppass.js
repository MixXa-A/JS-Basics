function passworsTodor (input){
    let index = 0;
    let userName = input[index];
    index++;
    let password = input[index];
    index++;
    let tempPass = input[index];
    index++;
     
    while(tempPass !== password){
     tempPass = input[index]
     index++

     }
     console.log(`Welcome ${userName}!`)
    }
    passworsTodor(["Nakov",

        "1234",
        
        "Pass",
        
        "1324",
        
        "1234"])
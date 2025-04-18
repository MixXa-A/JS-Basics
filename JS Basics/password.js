function password (input){
    let userName = input[0];
    let password1 = input[1];
    let index=2;
    let passwordGuess = input[index]
    
    
    while (passwordGuess!== password1){
    index++
    passwordGuess = input[index];    
    }
    if(passwordGuess === password1){
        console.log(`Welcome ${userName}!`)
        }


}
password (["Nakov",

    "1234",
    
    "Pass",
    
    "1324",
    
    "1234"])
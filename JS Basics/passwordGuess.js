function passwordGuess (pass){
    let password = "s3cr3t!P@ssw0rd" === pass
    if(password){
        console.log("Welcome")
    }else {
       console.log("Wrong password!")
    }
}
passwordGuess("s3cr3t!P@ssw0rdkabuki")
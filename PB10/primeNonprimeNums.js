function primeNonPrimeNum (input){
    let index = 0;
    let startingPoint = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;


    while(startingPoint !== `stop`){
    let currentNum = Number(input[index]);
     let isNonPrime = false;

    for (let i = 2; i<currentNum;i++){
     if (currentNum % i === 0){
        isNonPrime = true;
        break;
     }
    }
      if(isNonPrime){
        nonPrimeSum+=currentNum
        
    }else if (currentNum<0){
        console.log(`Number is negative.`)

    }else{
        primeSum+=currentNum
    }


    index++
    startingPoint=input[index]
    }

    console.log(`Sum of all prime numbers is: ${primeSum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}
primeNonPrimeNum((["3",

    "9",
    
    "0",
    
    "7",
    
    "19",
    
    "4",
    
    "stop"]))
function combination (n){

let possibleCombinations = 0;
    for (let n1 = 0; n1<=n;n1++){
        for (let n2 = 0; n2<=n;n2++){
            for(let n3 = 0;n3<=n;n3++){
            let sum = n1 + n2 + n3;
                if (sum === n){
                    possibleCombinations++
                    
                }
            }
        }  
        
    }
console.log(possibleCombinations)
}
combination(20)
function oscars (input){
    let actorName = input[0];
    let startingPoints = Number(input[1])
    let totalJuges = input[2]
    
    
    for (let i = 0; i< totalJuges; i++){
        let pointsWon = input[ 4 + i * 2];
        let namesPoints = input[3 + i * 2];
        startingPoints += (pointsWon * namesPoints.length)/2
    }
    if (startingPoints > 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints}!`)
    } else {
        let pointsNeeded = 1250.5 - startingPoints;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded} more!`)
    }
    
    
    }
    /** tuk e reshenieto na Plami, greshkata v prepisa mi e , che na tozi etap ne bqh razbrala che trqbva da spre da odbroqva v mometa ,v koito stigne nad 1250.5 tochki
     * za belejka OSTAVQM 
     * vadeneto i dobavqneto na stoinosti v cikala
      */
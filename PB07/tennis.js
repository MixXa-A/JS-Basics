function tennis (input){
    let tournirCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let pointsWon =0;
    let tout1st = 0;

    for(i = 2; i < input.length ; i++){
        let tournirPoints = input[i]
        
        switch(tournirPoints){
          case `W`:
            pointsWon += 2000;
            tout1st +=1; break;
          case `F`:
            pointsWon += 1200; break;
          case `SF` :
            pointsWon +=720;break;       
         }
    
    }
 let totalpoins = Math.floor(startingPoints + pointsWon);
 let percentWonPoints = Math.floor(pointsWon / tournirCount);
 let percentWonTours = tout1st/tournirCount * 100
 console.log(`Final points: ${totalpoins}`);
 console.log(`Average points: ${percentWonPoints}`)
 console.log(`${percentWonTours.toFixed(2)}%`)

}
tennis(["5",

"1400",
    
"F",
    
"SF",
    
"W",
    
"W",
"SF"])
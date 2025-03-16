function cake (input){
    let cakelength = Number(input[0]);
    let cakewidth = Number(input[1]);
    let cakeSize = cakelength*cakewidth;
   
    let pieces= 0;
    
let index = 2;
let piecesTaken = input[index];


while(piecesTaken !== "STOP"){
   pieces = Number(piecesTaken);
   cakeSize-=pieces;
   
   if(cakeSize<0){
    console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
    break;
   }
   
     index++
     piecesTaken =input[index]
     
    
}
if (piecesTaken==="STOP"){
  
    console.log(`${cakeSize} pieces are left.`)

}
}
cake (["10",

    "10",
    
    "20",
    
    "20",
    
    "20",
    
    "20",
    "-50",
    
    "21",
])
function pen4oOdyssey (a, b, c){
     let pen4oGo = (a < b + c && b < a + c && c < a + b)
     if (pen4oGo) { 
        console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} has been validated. Pen4o, you may begin your journey!`);
        } 
        else 
         console.log(`The Triangle of Truth with sides ${a}, ${b}, and ${c} is invalid. Pen4o remains stuck!`);
            
         }
        
         pen4oOdyssey(1, 2 , 3)
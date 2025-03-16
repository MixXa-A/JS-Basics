function tradeComissions (town, sales){
    let moneyWon = 0;

    switch (town){
        case `Sofia`:
            if (sales>=0 && sales<=500){
                moneyWon = sales * 0.05;
            }else if (sales>500 && sales<=1000){
                moneyWon = sales * 0.07;}
            else if (sales>1000 && sales<=10000){
                moneyWon = sales * 0.08;
            }else if (sales>=10000){
                moneyWon = sales * 0.12;
            } else{
                console.log(`error`);
                return;
            } 
            console.log(moneyWon.toFixed(2))
             break;
        case `Varna`:
            if (sales>=0 && sales<=500){
                moneyWon = sales * 0.045;
            }else if (sales>500 && sales<=1000){
                moneyWon = sales * 0.075;}
            else if (sales>1000 && sales<=10000){
                moneyWon = sales * 0.10;
            }else if (sales>=10000){
                moneyWon = sales * 0.13;
            } else{
                console.log(`error`);
                return;
            } 
            console.log(moneyWon.toFixed(2))
             break;
        
        case`Plovdiv`:
        if (sales>=0 && sales<=500){
            moneyWon = sales * 0.055;
        }else if (sales>500 && sales<=1000){
            moneyWon = sales * 0.08;}
        else if (sales>1000 && sales<=10000){
            moneyWon = sales * 0.12;
        }else if (sales>=10000){
            moneyWon = sales * 0.145;
        } else{
            console.log(`error`);
            return; 
        }
        console.log(moneyWon.toFixed(2))
        break;
       default:
        console.log(`error`);
        break;

    }


}
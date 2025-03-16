function cinema (type, rows, columns ){
let places = rows * columns;
let moneyWon = 0;
switch(type){
    case `Premiere` :
        moneyWon = places * 12
        console.log(moneyWon.toFixed(2))
        break;
    case `Normal` :
        moneyWon = places * 7.5
         console.log(moneyWon.toFixed(2))
        break;
    case `Discount` :
        moneyWon = places * 5
        console.log(moneyWon.toFixed(2))
        break;
}
}
cinema(`Normal`, 21, 13)
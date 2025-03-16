function foodDelivery (chickenMenu, fishMenu, vegeterianMenu) {
let chickenMenuPrice = chickenMenu  * 10.35 ;
let fishMenuPrice = fishMenu * 12.40 ; 
let vegeterianMenuPrice = vegeterianMenu * 8.15 ; 
let menuSum = chickenMenuPrice + fishMenuPrice + vegeterianMenuPrice ; 
let desert = menuSum * 0.2 ; 
let totalPrice = menuSum + desert + 2.5 ; 
console.log(totalPrice)

}
foodDelivery(2, 4 , 3)
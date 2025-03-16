function hotelRoom (month, daysinHotel) {
    let priceForAopartment = 0;
    let priceForStudio = 0;
    switch (month){
     case `May` :
     case `October` :
    priceForStudio = 50 * daysinHotel;
    priceForAopartment = 65 * daysinHotel;
    if (daysinHotel>7 && daysinHotel<=14){
        priceForStudio *= 0.95; 
    } else if (daysinHotel>14){
        priceForStudio*= 0.7;
        priceForAopartment *= 0.9;}
    console.log(`Apartment: ${priceForAopartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`)
    break; 
     case `June`:
     case `September`:
    priceForStudio = 75.2 * daysinHotel;
    priceForAopartment = 68.7 * daysinHotel;
     if (daysinHotel>14){
        priceForStudio*= 0.8;
        priceForAopartment *= 0.9;}
    console.log(`Apartment: ${priceForAopartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`)
    break;
     case `July`:
     case `August`:
    priceForStudio = 76 * daysinHotel;
    priceForAopartment = 77 * daysinHotel;
    if (daysinHotel>14){
        priceForAopartment *= 0.9;}
        priceForStudio *= 1
    console.log(`Apartment: ${priceForAopartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceForStudio.toFixed(2)} lv.`)
    break;
    }
}
hotelRoom(`July`,

15)
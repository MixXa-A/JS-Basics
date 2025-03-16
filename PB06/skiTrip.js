function skiTrip (daysInHotel, sleepingPlaceType, feedback){
    let nights = daysInHotel - 1;
    let price = 0;
switch(sleepingPlaceType){
    case `room for one person` :
        price = 18 * nights; break;
    case `apartment` :
        price = 25 * nights;
        if (nights < 10){
            price *= 0.7;
        } else if (nights >=10 && nights<= 15){
            price *= 0.65;
        }else{
        price *= 0.5;
        }
        break;
    case `president apartment`:
        price = 35 * nights;
        if (nights < 10){
            price *= 0.9;
        } else if (nights >=10 && nights<= 15){
            price *= 0.85;
        }else{
        price *= 0.8;
        }
        break;

}
if (feedback === `positive`){
    price *= 1.25;
    console.log(price.toFixed(2));
} else{
    price *=0.9;
    console.log(price.toFixed(2));
}

}
skiTrip(14,

    "apartment",
    
    "positive")

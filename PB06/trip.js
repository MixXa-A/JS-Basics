function trip (budget, season){
    let moneyForSleeping = 0;
    let placeForTrip = ``;
    let placeforSleeping =``
    
     if (season === `summer` && budget<=100){
        placeForTrip = `Bulgaria`;
        moneyForSleeping = budget * 0.3;
        placeforSleeping = `Camp`
        console.log(`Somewhere in ${placeForTrip}`)
        console.log(`${placeforSleeping} - ${moneyForSleeping.toFixed(2)}`)
        return;
    }else if (season === `winter` && budget<=100){
        placeForTrip = `Bulgaria`;
        moneyForSleeping = budget * 0.7;
        placeforSleeping = `Hotel`
        console.log(`Somewhere in ${placeForTrip}`)
        console.log(`${placeforSleeping} - ${moneyForSleeping.toFixed(2)}`)
        return;
} else if (season === `summer` && budget<=1000){
    placeForTrip = `Balkans`;
    moneyForSleeping = budget * 0.4;
    placeforSleeping = `Camp`
    console.log(`Somewhere in ${placeForTrip}`)
    console.log(`${placeforSleeping} - ${moneyForSleeping.toFixed(2)}`)
    return;
} else if (season === `winter` && budget<=1000){
    placeForTrip = `Balkans`;
    moneyForSleeping = budget * 0.8;
    placeforSleeping = `Hotel`
    console.log(`Somewhere in ${placeForTrip}`)
    console.log(`${placeforSleeping} - ${moneyForSleeping.toFixed(2)}`)
    return;
}else if( budget>1000){
    placeForTrip = `Europe`;
    moneyForSleeping = budget * 0.9;
    placeforSleeping = `Hotel`
    console.log(`Somewhere in ${placeForTrip}`)
    console.log(`${placeforSleeping} - ${moneyForSleeping.toFixed(2)}`)
    return;
}
}
trip(50,

    "summer")
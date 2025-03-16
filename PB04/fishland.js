function fishland (mackerelPrice, sprinklePrice, palamudKg, safridKg, clamsKg ){

let calmsPrice = clamsKg * 7.5;

let palamudPrice = mackerelPrice * 1.6;

let safridPice = sprinklePrice * 1.8;

let totalPrice = calmsPrice + (palamudPrice * palamudKg) + (safridPice*safridKg);
console.log(totalPrice.toFixed(2))
}
fishland(6.90, 4.20, 1.5, 2.5, 1)
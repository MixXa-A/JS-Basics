function smallShop (product, city, pcs){
    let price = 0;
    switch(city){
        case `Sofia`:
            if (product === `coffee`){
                price = 0.5 * pcs;}
               else if (product === `water`){
                 price = 0.80 * pcs;}
               else if (product === `beer`){
                     price = 1.2 * pcs;}
                else if (product === `sweets`){
                     price = 1.45 * pcs;}
                else{
                 product === `peanuts`
                  price = 1.6 * pcs}; break;
    case `Plovdiv`:
        if (product === `coffee`){
            price = 0.4 * pcs;}
           else if (product === `water`){
            price = 0.70 * pcs;}
           else if (product === `beer`){
            price = 1.15 * pcs;}
           else if (product === `sweets`){  
            price = 1.30 * pcs;}
            else{
             product === `peanuts`
             price = 1.50 * pcs}; break;
    case `Varna`:
        if (product === `coffee`){
            price = 0.45 * pcs;}
           else if (product === `water`){
            price = 0.70 * pcs;}
           else if (product === `beer`){
            price = 1.1 * pcs;}
           else if (product === `sweets`){
             price = 1.35 * pcs;}
            else{
             product === `peanuts`
             price = 1.55 * pcs}; break;

    }
console.log(price)
}
smallShop(`qiwi`, `Sofia`, 1)
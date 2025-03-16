function fruitShop (product, day, pcs){
    let price = 0;
let weekDay = day === `Monday`||day === `Tuesday`||day ===`Wednesday`||day === `Friday`||day ===`Thursday`
let weekend = day === `Saturday`||day === `Sunday`


if (!weekDay && !weekend) {
    console.log(`error`);}
  if (weekDay)
  if (product === `banana`){
    price = 2.50 * pcs;
    console.log(price.toFixed(2));
 }else if (product === `apple`){
    price = 1.2 * pcs;
    console.log(price.toFixed(2));
}else if (product === `orange`){
    price = 0.85 * pcs;
    console.log(price.toFixed(2));
}else if (product === `grapefruit`){
    price = 1.45 * pcs;
    console.log(price.toFixed(2));
}else if (product === `kiwi`){
    price = 2.70 * pcs;
    console.log(price.toFixed(2));
}else if (product === `pineapple`){
    price = 5.50 * pcs;
    console.log(price.toFixed(2));
}else if(product === `grapes`){
    price = 3.85 * pcs;
    console.log(price.toFixed(2));}
    else{console.log(`error`);}

 if (weekend)
    if (product === `banana`){
        price = 2.70 * pcs;
        console.log(price.toFixed(2));
     }else if (product === `apple`){
        price = 1.25 * pcs;
        console.log(price.toFixed(2));
    }else if (product === `orange`){
        price = 0.9 * pcs;
        console.log(price.toFixed(2));
    }else if (product === `grapefruit`){
        price = 1.60 * pcs;
        console.log(price.toFixed(2));
    }else if (product === `kiwi`){
        price = 3 * pcs;
        console.log(price.toFixed(2));
    }else if (product === `pineapple`){
        price = 5.60 * pcs;
        console.log(price.toFixed(2));
    }else if(product === `grapes`){
        price = 4.20 * pcs;
        console.log(price.toFixed(2));}
        else{console.log(`error`);}
    }

        
fruitShop(`apple`,`Tuesday`,2)

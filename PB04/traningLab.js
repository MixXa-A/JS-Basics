function traningLab (l, w){
    let w2 = w-1;
let spaceInCmL = l*100;
let spaceinCmW = w2*100;
 let totalWTable = Math.floor(spaceinCmW / 70);
 let totalL = Math.floor(spaceInCmL /120);
 let totalCount = totalWTable * totalL - 3
  console.log(totalCount.toFixed(2));
}

traningLab (15,
8.9)

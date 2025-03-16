function coins (input){
let lv = Math.trunc(input)
let st = input - lv

let totalst = Math.round((lv+st)*100)

let pcs = 0;

while (totalst !== 0){
  if (totalst>=200){
    totalst-=200;
    pcs++}
  else if (totalst>=100){
    totalst-=100;
    pcs++
  }else if(totalst>=50){
    totalst-=50
    pcs++
  }else if(totalst>=20){
    totalst-=20
    pcs++
  }else if(totalst>=10){
    totalst-=10  
    pcs++
  }else if (totalst>=5){
    totalst-=5
    pcs++
  }else if(totalst>=2){
    totalst-=2
    pcs++
  }else if(totalst>=1){
    totalst-=1
    pcs++
  }
}
console.log(pcs)
}
coins(10)

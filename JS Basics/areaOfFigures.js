function areaOfFigure (type, arg1, arg2){
if (type === `square`){
let sideA = (arg1);
let result = sideA*sideA
console.log(result.toFixed(3))
}else if(type===`rectangle`){
    let sideA = (arg1);
    let sideB = (arg2);
    let result = sideA * sideB;
    console.log(result.toFixed(3))
}else if(type===`circle`){
let sideA = (arg1);
let result = Math.PI * sideA * sideA
console.log(result.toFixed(3))
}else{ type ===`triangle`
let sideA = (arg1);
let sideB = (arg2);
let result = sideA*sideB/2;
console.log(result.toFixed(3))
}
}
areaOfFigure("triangle", 4.5, 20)
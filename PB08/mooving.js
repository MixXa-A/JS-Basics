function mooving (input){
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * lenght * height;
    let boxes = 0;
    let index = 3;

    while(input[index] !== `Done`){
    boxes = Number(input[index]);
   
    freeSpace-=boxes;
    if(freeSpace<0){
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
        break;
    }
    index++
    }
  if (input[index] === `Done`){
    console.log(`${freeSpace} Cubic meters left.`)
  }
}
mooving(["10",

    "10",
    
    "2",
    
    "20",
    
    "20",
    
    "20",
    
    "20",
    
    "122"])
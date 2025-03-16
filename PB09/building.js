function building (a1, a2){

   let floors = Number(a1);
   let roomsOnFloor = Number(a2)
    

    for (let i = floors; i>0; i--){
       let names = ``
        for (let l = 0; l<roomsOnFloor; l++){
            if (i===floors){
            names += `L${i}${l} `
            } else if (i%2===0){
                names += `O${i}${l} `
            }else{
                names += `A${i}${l} `
            }
        }
        console.log(names)

    }
   
}
building(6,4)
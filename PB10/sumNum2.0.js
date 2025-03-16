function sumNum(n){
    let startingNum = String(1111);
    let endingNum = String(9999);
   
    let start1 = Number(startingNum[0]);
    let start2 = Number(startingNum[1]);
    let start3 = Number(startingNum[2]);
    let start4 = Number(startingNum[3]);

    let end1 = Number(endingNum[0]);
    let end2 = Number(endingNum[1]);
    let end3 = Number(endingNum[2]);
    let end4 = Number(endingNum[3]);
   let buff=``

    for(let a=start1;a<=end1;a++){
        for(let b=start2;b<=end2;b++ ){
            for(let c = start3;c<=end3;c++){
                for(let d=start4; d<=end4;d++){
                    if (n%a===0 && n%b===0 &&n%c===0&&n%d===0){
                        
                        buff+=`${a}${b}${c}${d} `
                    }
                }
            }
        }
    }

    console.log(buff)
}
sumNum(16)
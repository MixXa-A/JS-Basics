function minNum (input){
    let index = 0;
    let start = input[index]
    let num = Number(input[0])
    
    while (start !== `Stop`){
    
    let buffer = Number(start);
    
    if(buffer<num){
        num = buffer
    }
    start = input[index]
    index++
    }
    console.log(num)
    }
    minNum([1,
        3,
        -1,
        -3,
        `Stop`])
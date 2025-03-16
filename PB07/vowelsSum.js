function vowelsSum (input) {
    let totalSum = 0;
    for(let i= 0; i < input.length; i++){
    let type = input[i]
        switch(type){
            case `a` :
                totalSum +=1; break;
            case `e` :
                totalSum +=2; break;
            case `i` :
                totalSum +=3; break;
            case`o` :
                totalSum +=4; break;
            case `u` :
                totalSum +=5; break;
        }
        
    }
    console.log(totalSum)
   
}
vowelsSum (`bamboo`)
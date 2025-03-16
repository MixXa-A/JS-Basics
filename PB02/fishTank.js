function fishTank (lenght, width, height, percent){
    let allSpace = lenght * width * height 
    let allSpaceInLiters = allSpace * 0.001
    let usedPercent = percent / 100
    let totalFreeSpace = allSpaceInLiters * (1-usedPercent)
    console.log (totalFreeSpace)
}
fishTank(85, 75, 47, 17)
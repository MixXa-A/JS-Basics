function pyramid (n){
let maxNum = Number(n);
let currentNum = 1;
let rows = 1;
let numsInRows = 0;
let result = ``;

while (currentNum<=maxNum){
  if (rows>numsInRows){
    result += `${currentNum} `
    numsInRows++
  }else {
    result += `\n${currentNum} `
    rows++
    numsInRows =1;

  }

    currentNum++
}

console.log(result)

}
pyramid(7)
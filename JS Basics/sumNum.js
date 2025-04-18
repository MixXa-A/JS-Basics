function sumNumbers (input){
let index = 0;
let totalSum = 0;
let startingPoint = Number(input[index]);
index++

while(startingPoint>totalSum){
let currentNum = Number(input[index])
index++

totalSum+=currentNum

}

console.log(totalSum);
}

sumNumbers(["100",

    "10",
    
    "20",
    
    "30",
    
    "40"])
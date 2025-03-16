function histogram (n){
   let totalNumers = n[0];
   let p1 = 0;
   let p2 = 0;
   let p3 = 0;
   let p4 = 0;
   let p5 = 0;

  for(let i = 1; i<= totalNumers; i++ ){
    let nums = n[i];
   if (nums<200){
     p1 +=1
   } else if (nums<=399){
     p2 +=1 
   } else if (nums<=599){
     p3 +=1
   } else if (nums<=799){
     p4 +=1
   } else{
     p5 += 1
   }

  }
  let p1Percent = ((p1/totalNumers * 100).toFixed(2));
  let p2Percent = ((p2/totalNumers * 100).toFixed(2));
  let p3Percent = ((p3/totalNumers * 100).toFixed(2));
  let p4Percent = ((p4/totalNumers * 100).toFixed(2));
  let p5Percent = ((p5/totalNumers * 100).toFixed(2))

console.log(`${p1Percent}%`)
console.log(`${p2Percent}%`)
console.log(`${p3Percent}%`)
console.log(`${p4Percent}%`)
console.log(`${p5Percent}%`)


}
histogram([3, 1, 2, 999])
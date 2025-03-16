function walking (input){
    let goal = 10000;
    let stepCounter= 0;
    let index = 0;
    let steps = input[index];
    
while(steps !== `Going home`){
    let actualSteps = Number(steps);
    stepCounter+=actualSteps
    if (stepCounter>goal){
        let diff = stepCounter-goal
        console.log(`Goal reached! Good job!`)
        console.log(`${diff} steps over the goal!`)
        break;
    }
index++
steps = input[index]
}
if (steps === `Going home`){
index++
stepCounter += Number(input[index]);
  if (stepCounter>goal){
console.log(`Goal reached! Good job!`)
console.log(`${stepCounter-goal} steps over the goal!`)
  }else{
    console.log(`${goal-stepCounter} more steps to reach goal.`)
  }
}
}
walking(["1500", "300", "2500", "3000", "Going home", "200"])
function depositCalculator (depositSum, depositPeriod, interestRate){
    let percent = interestRate / 100;
let totalSum = depositSum + depositPeriod * ((depositSum * percent)/12);
console.log(totalSum);
}
depositCalculator(200, 3, 5.7)
function vacationBooksList (totalPages, pagesPerHour, daysForReading){
let totalPagesPerDay = ((totalPages / pagesPerHour) / daysForReading);
console.log(totalPagesPerDay);
}
vacationBooksList(212, 20, 2)


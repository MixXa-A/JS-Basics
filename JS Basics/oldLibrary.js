function oldLibrary (input){
    let bookName = input[0];
    let index = 1;
    let startingPoint = input[index];
    let booksChecked = 0;
    while (startingPoint!==`No More Books`){
        let currentBook = input[index]
       
        if (currentBook === bookName){
       console.log(`You checked ${booksChecked} books and found it.`)
       break;
        }
        booksChecked++
    index++
    startingPoint=input[index]
    }
    if (startingPoint ===`No More Books`){
 console.log("The book you search is not here!")
 console.log(`You checked ${booksChecked} books.`)}


}
oldLibrary(["Bourne",

    "True Story",
    
    "Forever",
    
    "More Space",
    
    "The Girl",
    
    "Spaceship",
    
    "Strongest",
    
    "Profit",
    
    "Tripple",
    
    "Stella",
    
    "The Matrix",
    
    "Bourne"])
function cinemaTicket (input){
let soldStudenTicekts = 0;
let soldStandartTickets= 0;
let soldKidTickets = 0;
 
let totalSoldTickets = 0;
index=0;
let command = input[index];

while(command!=="Finish"){
    let movieName = command;
    index++
    let totalFreeSeats = Number(input[index]);
    index++
    let projectionTicketType = input[index]
    let currentProjectionSoldTickets=0;

    while(projectionTicketType!=="End"){

        switch(projectionTicketType){
            case "standard":
         soldStandartTickets++
         currentProjectionSoldTickets++
         totalSoldTickets++
         break;
            case "kid":
            soldKidTickets++
            currentProjectionSoldTickets++
            totalSoldTickets++
            break;
           case "student" :
            soldStudenTicekts++
            currentProjectionSoldTickets++
            totalSoldTickets++
            break;
        }
        if (totalFreeSeats===currentProjectionSoldTickets){
            
            let percentOfSoldTickets = (currentProjectionSoldTickets/totalFreeSeats)*100
           console.log(`${movieName} - ${percentOfSoldTickets.toFixed(2)}% full.`)
                  break;
              }
        index++
        projectionTicketType = input[index]
        
        
    }
    if (projectionTicketType===`End`){
        let percentOfSoldTickets = (currentProjectionSoldTickets/totalFreeSeats)*100
        console.log(`${movieName} - ${percentOfSoldTickets.toFixed(2)}% full.`)
    }
    

     index++
    command=input[index]
    
}


let percentKidSoldTickets = (soldKidTickets/totalSoldTickets)*100;
let percentStudentSoldTickets = (soldStudenTicekts/totalSoldTickets)*100;
let percentStandartSoldTickets = (soldStandartTickets/totalSoldTickets)*100;

console.log(`Total tickets: ${totalSoldTickets}`)
console.log(`${percentStudentSoldTickets.toFixed(2)}% student tickets.`)
console.log(`${percentStandartSoldTickets.toFixed(2)}% standard tickets.`)
console.log(`${percentKidSoldTickets.toFixed(2)}% kids tickets.`)

    






}
cinemaTicket([`Shutter Island`,
    9,
    `standard`,
    `standard`,
    `standard`,
    `student`,
    `student`,
    `student`,
    `kid`,
    `kid`,
    `kid`,
    `Rush`,
    9,
    `standard`,
    `standard`,
    `standard`,
    `student`,
    `student`,
    `student`,
    `kid`,
    `kid`,
    `kid`,
    `Deadpool`,
    9,
    `standard`,
    `standard`,
    `standard`,
    `student`,
    `student`,
    `student`,
    `kid`,
    `kid`,
    `kid`,
    `Finish`])
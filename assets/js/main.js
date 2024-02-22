// console.log('connesso');


// creare un prompt che richieda l' email all' utente
const userEmail = prompt('Inserisci la tua email');

// console.log(userEmail);

// creare un array in cui saranno presenti tutte le email già confermate
const emailList = ['email1', 'email2', 'email3', 'email4', 'email5']

// console.log(emailList);

// creare un ciclo che scansiona l'email dell'utente e la paragona con quelle già confermate
for (let index = 0; index < emailList.length; index++) {
    const emailElement = emailList[index];
    
    // console.log(emailElement);

    // creare delle condizioni all'interno del ciclo
    // SE l'email è presente allora l'utente potrà giocare
    if (userEmail === emailElement) {

        // compare un alert che conferma l'email
        alert('email confermata');
        console.log('email confermata');
    }
    // SE l'email non è presente allora l'utente non può giocare:
    // } else {

    //     // compare un alert che non conferma l'email
    //     alert('email errata');
    // }
}

// creare due variabili, una per l'utente e una per il computer entrambe con math.random

let userNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber);

let pcNumber = Math.floor(Math.random() * 6) + 1;

console.log(pcNumber);

// creare delle condizioni
// SE il numero del giocatore è più alto del computer -> il giocatore vince
if (userNumber > pcNumber) {
    
    console.log('hai vinto');

    // SE il numero del giocatore è più basso del computer -> il giocatore perde
} else if (userNumber < pcNumber) {
    
    console.log('hai perso');

    // SE il numero del giocatore è uguale al computer -> pareggio
} else if (userNumber == pcNumber) {
    
    console.log('pareggio');
}

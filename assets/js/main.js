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

        alert('email confermata');
        console.log('email confermata');

    } else(userEmail !== emailElement); {

        alert('email errata');
    }
}
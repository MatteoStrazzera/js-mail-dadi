# Js-mail-dadi

## Exercise istruction

- Mail: Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

- Gioco dei dadi: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

- Bonus: Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

## Steps

- Mail:
    - creare un prompt che richieda l' email all' utente
    - creare un array in cui saranno presenti tutte le email già confermate
    - creare un ciclo che scansiona l'email dell'utente e la paragona con quelle già confermate
    - creare delle condizioni all'interno del ciclo con le seguenti regole:
        - SE l'email è presente allora l'utente potrà giocare:
            - compare un alert che conferma l'email
        - SE l'email non è presente allora l'utente non può giocare:
            - compare un alert che non conferma

- Gioco dei dati:
    - creare due variabili, una per l'utente e una per il computer entrambe con math.random
    - creare delle condizioni:
        - SE il numero del giocatore è più alto del computer:
            - il giocatore vince 
            - il computer perde
        - SE il numero del giocatore è più basso del computer:
            - il giocatore perde
            - il computer vince
        - SE il numero del giocatore è uguale al computer:
            - si estraggono dei nuovi numeri    


## Tools

- const / let
- prompt
- alert
- array
- for
- if / else if / else
- math.random
- console.log
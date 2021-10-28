let somma = 0;


for(let i = 0; i < 5; i++){
    numbers = parseInt(prompt("inserisci un numero"));
    if ( numbers > 0 ) {
        somma += numbers;
    }
}
console.log(somma)
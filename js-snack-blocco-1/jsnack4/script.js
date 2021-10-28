const numeroArray = [];

for(let i = 0; i < 6; i++){
    numeroUtente = parseInt(prompt("inserisci un numero"));
    if(numeroUtente % 2 != 0){
        numeroArray.push(numeroUtente);
    }
}
 console.log(numeroArray)
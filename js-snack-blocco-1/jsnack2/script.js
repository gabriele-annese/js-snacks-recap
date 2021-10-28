
const parola1 = prompt ("");
console.log(parola1);
const parola2 = prompt ("");
console.log(parola2);

if(parola1 > parola2) {
    console.log( `la parola piu lunga é ${parola1}` );
} else if (parola1 < parola2) {
    console.log( `la parola piu lunga é ${parola2}` );
} else {
    console.log( `la parola ${parola1} e la parola ${parola2} sono ugulai ` );
}

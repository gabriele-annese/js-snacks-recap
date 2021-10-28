
const numeriInteri =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somma = 0;


for(let i = 0; i < numeriInteri.length; i++){
    if(numeriInteri[i] % 2 !== 0){
       somma += numeriInteri[i] ;
    }
}
console.log (somma)
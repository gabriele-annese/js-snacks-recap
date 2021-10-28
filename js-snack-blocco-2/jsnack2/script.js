
const nomi = ['dario', 'marco', 'sofia', 'claudia', 'gianluca', 'rocco'];
const cognomi = ['Rossi','Ferrari', 'Bianchi', 'Gallo','Costa', 'Fontana'];
const gatsby = [];

// genera nuemri casuali
const nomiCasuali = nomi[Math.floor(Math.random()* nomi.length)] ;
console.log(nomiCasuali)
const cognomiCasuali = cognomi[Math.floor(Math.random()* cognomi.length)] ;
console.log(cognomiCasuali)
// priny lista
for(let i = 0; i <=3; i++){
    gatsby.push(nomiCasuali, cognomiCasuali)
}
 console.log(gatsby)
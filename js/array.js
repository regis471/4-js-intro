/*
Array - betkokiu elementu sarasas(prioeritetas tuo paties tipo elementai)
*/

const tusciapinigine = [];
console.log(tusciapinigine);

const pinigine = [1, 2, 3, 5, 10];
console.log(pinigine);

const abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);

const aplankytiMiestai = ['vilnius', 'klaipeda', 'kaunas']
console.log(aplankytiMiestai);

//kaip suzinoti kiek sarase yra reiksmiu: array.length
console.log('Kiek yra reiksmiu tusciame sarase:', tusciapinigine.length);
console.log('Kiek yra reiksmiu pinigineje:', pinigine.length );
console.log("kiek esu aplankes miestu;", aplankytiMiestai.length );

// kaip suzinoti koks teksto ilgis : tekstas.length

const labas = 'labas';
const labasIlgis = labas.length
console.log(`"${labas}" ilgis yra ${labasIlgis}.`);

console.log('labas rytas!', 'labas rytas!'.length);

//istraukti saraso reiksme
const pirmasmiestas = aplankytiMiestai[0];
console.log('pirma miestas', pirmasmiestas);

const antrasmst = aplankytiMiestai[1];
console.log('antra miestas', antrasmst);

const tremst = aplankytiMiestai[2];
console.log('trecia miestas', tremst);

//istraukti teksto n-taji simboli

const hi = 'Labas';
const pirmaraide = hi[0];
console.log(pirmaraide);
console.log(hi[1]);
console.log(hi[2]);
console.log(hi[3]);
console.log(hi[4]);


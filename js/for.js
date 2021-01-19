
/*

for(let i=0; i<5; i++) {
    kartotinas kodas
}

i=0(kintamasis)
i<5(tikrinama salyga)
i++(kintamaji didinti vienu vienetu)
*/

console.log('Pradzia');

for (let i = 0; i <= 10; i += 2) {
    console.log('kartotinas kodas', i); 
}
console.log('Pabaiga');


// i=0; 0<5 true
//      console.log('kartotinas kodas);
//       i++ -> i=1
// i=1; 1<5 true
//      console.log('kartotinas kodas);
//       i++ -> i=2
// i=2; 2<5 true
//      console.log('kartotinas kodas);
//       i++ -> i=3
// i=3; 3<5 true
//      console.log('kartotinas kodas);
//       i++ -> i=4
// i=4; 4<5 true
//      console.log('kartotinas kodas);
//       i++ -> i=5
// i=5; 5<5 false


// for (let i = 2.5; i <= 8.5; i = Math.round((i + 0.4) * precision) / presicion) {
//    console.log('kartotinas kodas', i);
//}

console.log('--------------');

const words = ['abc', 'Borisas', 'uoga', 'citrina', 'duobe', 'eziukas', 'fabrikas'];

console.log(words);


for(let i=0; i< words.length; i++) {
    
    const word = words[i];

    console.log(i, words[i]);
    console.log('Pirma zodzio raide:', word[0]);
    console.log('Zodzio ilgis:', word.length);
}




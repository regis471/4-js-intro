/*

0 - 0
numcount - kai reikia sumuoti skaicius intervale
*/


const from = 0;
const till = 5;
let sum=0;


for (let i=0;  i <=5;  i++){
    sum +=i;
    console.log(i, sum);
}
console.log('==================');
 let suma=0;

for (let i=from;  i <=till;  i++){
    suma +=i;
    
}

const ats = `Suma nuo ${from} iki ${till} yra ${suma}.`;
console.log(ats);


/*

i = 3; 3 <= 5 -> true
    sum = 0 + 3 = 3
    i++ -> i=4 
i = 4; 4 <= 5 -> true
    sum = 3 + 4 = 7
    i++ -> i=5 
i = 5; 5 <=5 -> true
    sum = 7 + 5 = 12
    i++ -> i=6
i = 6; 6 <= -> false

*/
"use strict";

/*
Suskaičiuoti, kiek nurodytame intervale (0 - 11; 8 - 31; -18 - 18 ), kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:


*/

const from = 0;
const till = 11;
const divider = 5;

let count = 0;

//logic

const ats = `Skaičių intervale tarp ${from} ir ${till} besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
console.log(ats);

for (let i=from; i<=till; i++) {
    if (i%divider === 0){
    console.log(i, i% divider);
    }
}
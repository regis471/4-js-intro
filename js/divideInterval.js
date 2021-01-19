"use strict";

/*


*/

const from = 0;
const till = 11;
const divider = 5;

let count = 0;

//logic

for (let i=from; i<=till; i++) {
    if (i%divider === 0){
    console.log(i, i% divider);
    }
}
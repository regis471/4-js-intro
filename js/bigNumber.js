function bigNumber(list) {

    //validation
    if (typeof list !=='object'){
        return 'ERROR: reikia array tipo reiksmes.';
    }
    if (list.length === 0){
        return 'ERROR: sarasas yra tuscias.'
    }

    

    //logic
    //let biggestNumber = list[0];
    let biggestNumber = -Infinity;

    for(let i=0; i<list.length; i++){
        const number = list[i];
        // list item validation
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        //list logic
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    // post logic validation
    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase turi buti bent vienas normalus skaicius.';
    }

    //return result
    return biggestNumber;
}
/* pavyzdys jei butu grazios reiksmes skaiciu.
function bigNumberFromValidArray(list) {  

    //logic
    let biggestNumber = list[0];

    for(let i=1; i<list.length; i++){
        const number = list[i];
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }
    //return result
    return biggestNumber;
}
*/

console.log(bigNumber([1]), '->', 1 );
console.log(bigNumber([1, 2, 3]), '->', 3 );
console.log(bigNumber([-5, 78, 14, 0, 18]), '->', 78 );
console.log(bigNumber([69, 69, 69, 69, 66]), '->', 69 );
console.log(bigNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1 );
console.log(bigNumber('pomidoras'));
console.log(bigNumber(1233));
console.log(bigNumber(true));
console.log(bigNumber(false));
console.log(bigNumber([]));


console.log(bigNumber([-5, 78, 14, 0, 18, 'asdd']), '->', 78 );
console.log(bigNumber([-5, 78, 14, 'asdad', 0, 18]), '->', 78 );
console.log(bigNumber(['asdad',-5, 78, 14,  0, 18]), '->', 78 );
console.log(bigNumber(['asdad', true, 'false', [],  [123], ['asdads']]));

console.log(bigNumber([-5, 78, 14, Infinity, 0, 18]), '->', 78 );
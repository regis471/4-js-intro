/*
Salygos:
-grazinamas sandaugos rezultatas
- dauginami tik skaiciai
*/
function multiply(a, b){
    if (typeof a !== 'number'){
        return 'ERROR: pirmasis parametras nera skaicius';
    }
    if (typeof b !== 'number'){
        return 'ERROR: antrasis parametras nera skaicius';
    }

    return a * b ;
}

const m1 = multiply(2, 2);
console.log(m1);


const m2 = multiply(7, 8);
console.log(m2);


const m3 = multiply(-4, 8.5);
console.log(m3);


console.log(multiply(5, 8), '->', 40);
console.log(multiply(-5, 8), '->', -40);
console.log(multiply(-5, -8), '->', 40);
console.log(multiply(0.5, 8), '->', 4);
console.log(multiply(0.5, 2.6), '->', 1.3);
console.log(multiply(-1, 0), '->', -0);


console.log(multiply('labas', 'rytas'));
console.log(multiply('labas', 0));
console.log(multiply(5, 'rytas'));
console.log(multiply('5', '10'));

console.log(multiply(true, 0));
console.log(multiply(true, false));
console.log(multiply(false, 0));


console.log(multiply(NaN, 0));
console.log(multiply(NaN, NaN));
console.log(multiply(8  , NaN));









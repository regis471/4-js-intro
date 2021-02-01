function pickLetters(text, step){
    //validation
    if (typeof text !== 'string'||
        text ===''){
        return 'ERROR: pirmasis parametras turi buti ne tuscias tekstas';
    }
    if (typeof step !== 'number' || 
        !isFinite(step) ||
        step === 0){
        return 'ERROR: pirmasis parametras turi buti skaicius';
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti nulinis';
    }
    if (step > text.length) {
        return 'ERROR: zingsnis negali buti didesnis nei teksto ilgis';
    }
    
    if (step % 1 !==0) {
        return 'ERROR: zingsnis turi buti sveikasis skaicius';
    }




    //logic
    let picker = '';

    for (let i=0; i < text.length; i++) {
        const letter = text[i];

        if (i % step === 1) {
            picker += letter;
        }

    }

    //post logic validation


    // return result
    return picker;
}

console.log( pickLetters('abcdefg', 2), '->', 'bdf' );
console.log( pickLetters('Labasrytas', 2), '->', 'aarts' );
console.log( pickLetters('abcdefghijkl', 3), '->', 'cfil' );
console.log( pickLetters('abc', 0 ));
console.log( pickLetters('abc', 4 ));
console.log( pickLetters(1561, 2 ));
console.log( pickLetters('Labas', 'fd' ));
console.log( pickLetters('Labas', NaN ));
console.log( pickLetters('Labas', -Infinity ));
console.log( pickLetters('abc', 3 ), '->', 'c');

console.log( pickLetters('abcdefg', -1), '->', '' );
console.log( pickLetters('abcdefg', -2), '->', '' );
console.log( pickLetters('abcdefghijkl', -3), '->', '' );
console.log( pickLetters('abc', -3 ));
console.log( pickLetters('abc', 1.5 ));
console.log( pickLetters('', 10));








/*

1 b
3 d         3 % step(2) = 1
5 f         5 % step(2) = 1



*/
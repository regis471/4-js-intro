function bigNumber(list) {

    //validation
    if (typeof list !=='object'){
        return 'ERROR: reikia array tipo reiksmes.';
    }
    if (list.length ===0){
        return 'ERROR: sarasas yra tuscias.'
    }





    //logic

    for(let i=0; i<list.length; i++){
        const number = list[i];
    }
}


console.log(bigNumber('pomidoras'));
console.log(bigNumber(582));
console.log(bigNumber(true));
console.log(bigNumber(false));
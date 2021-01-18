
/*
OPERATORIAI:
naudotini: <, >, >=, <=, ===(norint palyginti), !==(norint su=inoti ar tikrai nelygu)
nenaudotini : ==(lygybe), !=(nelygu) (vienas lygybes zenklas yra priskyrimas)


if (tikrinama salyga) {
    jei tenkinama
} else {
    jei ne tenkinama
}
 SABLONAI:
 if () {}
 if () {} else {}
 if () {} else if () {} ....else if () {}
 if () {} else if () {}.... else if () {} else {}

*/

const a = 2;
const b = 4;

if (a >b) {
    console.log('taip');
}else { 
    console.log('ne');
}

const spalva = 'rud';

if (spalva === 'melyna' ){
    console.log('melynakiai');
} else if (spalva === 'zalia' ){
    console.log('zaliaakiai');
    
}else if (spalva === 'ruda') {
    console.log('rudaakiai');
}else {
    console.log('nei tokia nei tokia');
}

console.log('------------');
    
const moneta = 'dingo';

if (moneta==='skaicius') {
    console.log('iskrito skaicius');
} else if (moneta==='herbas') {
    console.log('iskrito herbas');
} else {
    if (moneta==='briauna') {
    console.log('nukrito ant briaunos');
    } else {
        if (moneta==='pavoge'){
            console.log('moneta pavoge');
        } else {
            console.log('vis dar ore');
        }

        
    }
}


console.log('------------');

const namoTipas = 'butas';      //namas, butas
const kilti = 'laiptai';        //laiptai, liftas


if (namoTipas === 'namas') {
    if (kilti === 'laiptai') {
        console.log('Ieinu i nama, kylu laiptais');
    } else if (kilti==='liftas') {
        console.log('Ieinu i nama, kylu liftu');
    } else {
        console.log('Ieinu i nama, nekylu nes nera kuo');
    }

} else if (namoTipas === 'butas' ) {
    if (kilti ==='liftas') {
        console.log('Ieinu i daugiauauskti ir kylu liftu');
    }else if (kilti==='laiptai') {
        console.log('Ieinu i daugiauauksti ir lipu laiptais');
    }else {
        console.log("Ieinu i daugiauauksti ir nera kuo kilti");
    }
} else {
    console.log("namo tipas nezinomas");
}

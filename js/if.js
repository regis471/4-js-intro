
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
    





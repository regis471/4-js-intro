"use strict";
// vienos eilutes komentaras


/*
keletos
eiluciu
komentaras
*/

//jei norim ka nors issispausdinti , naudojam console.log( turinys)

console.log(2021);
console.log('Labas vakaras ');


/*
Reiksmiu tipai:
number (skaicius)
string(tekstas)
boolean (logine reiksme)
array (sarasas)
object (objektas)
*/

/*
Kintamuju iniciavimu budai:
    const (pagrindinis,kurie reikia rinktis pagal default)
    let (renkames, jei info keiciasi)
    var ( nenaudoti)
*/

//inicijuoti kinatamaji, kuris niekada nesikeis ir bus skaicisu 2021
const metai = 2021;

//inicijuoti kintamaji, kuris niekada nesikeis ir bus tekstas Petras
const vardas = 'Petras'

console.log(metai);
console.log(vardas);

console.log(metai, vardas);

console.log('Metai:', metai);
console.log('Vardas:', vardas, 'jis gyveno;', metai, 'metais');

const pirmasSkaicius = 10
const antrasSkaicius = 5

const suma = pirmasSkaicius + antrasSkaicius
console.log(suma);
console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

let adresas = 'Vilnius';
console.log(adresas);

adresas = 'Kaunas';
console.log(adresas);

adresas = 'Klaipeda'
console.log(adresas);


let pinigine = 0;
console.log('Turiu pinigu', pinigine);

const pirmaAlga = 100;
pinigine = pinigine + pirmaAlga;
console.log('Turiu pinigu', pinigine);

const antraAlga = 350;
pinigine = pinigine + antraAlga;
console.log('Turiu pinigu', pinigine);

const treciaAlga = 550;
pinigine = pinigine + treciaAlga;
console.log('Turiu pinigu', pinigine);

//matematines operacijos
const s1 = 2;
const s2 = 4;

console.log('----------------');

console.log(s1 + s2);
console.log(s1 * s2);
console.log(s1 / s2);
console.log(s1 ** s2); //kelimas laipsniu

console.log((2 + 2) * 2);
console.log(2 + 2 * 2);

//tekstines operacijos

const hi = 'labas';

const morning = 'rytas';

const sayhi = hi + ' ' +  morning + '!';
console.log(sayhi);

/*
teksto reiksme gali buti iniciuota
    viengubose kabutėse  ' '
    dvigubose kabutese   " "
    back tick kabutes     ``
    */

// tekste naudojamos dvigubos kabutes :
const dvigubosTekste = 'tekste naudojamos dvigubos (") kabutes.';
console.log(dvigubosTekste);

// tekste naudojamos viengubos kabutes :
const viengubosTekste = "tekste naudojamos viengubos (') kabutes.";
console.log(viengubosTekste);

// tekste naudojamos viengubos kabutes ir dvigubos kabutes :
const abiTekste1 = 'tekste naudojamos yra abi kabutes 1  (\') ir 2 (").';
console.log(abiTekste1);

// tekste naudojamos viengubos kabutes ir dvigubos kabutes :
const abiTekste2 = "tekste naudojamos yra abi kabutes 1  (') ir 2 (\").";
console.log(abiTekste2);

// tekste naudojamos viengubos kabutes ir dvigubos kabutes :
const abiTekste12 = 'tekste naudojamos yra abi kabutes 1  (\') ir 2 (\").';
console.log(abiTekste12);

// tekste naudojamos viengubos kabutes ir dvigubos kabutes :
const abiTekste21 = "tekste naudojamos yra abi kabutes 1  (\') ir 2 (\").";
console.log(abiTekste21);

const imgSrc = './img/doggo.jpg';
const h1 = 'Labas rytas!';
const p = 'BlaBla';

const html = '<main>\n\
    <img src="'+ imgSrc +'" >\n\
    <div>\n\
        <h1>'+ h1 +'</h1>\n\
        <p>'+ p +'</p>\n\
    </div>\n\
</main>';
console.log(html);


const beautifulHTML = `<main>
<img src="${imgSrc}'" >
<div>
    <h1>${h1}</h1>
    <p>${p}</p>
</div>
</main>`;
console.log(beautifulHTML);

console.log('-----------------');

const john = 'Johny boy';
const candy = 'lolly pop';

const sentence = `${john} do you want a ${candy}?`;
console.log(sentence);


   











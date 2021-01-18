
const a = 4;
const b = 4;

const arlygu= a ===b?   true : false;

console.log(arlygu);

const aukstai = 5;
const aukstai1 = 5;

const araukstas = aukstai == aukstai1? 'taip' : 'ne';

console.log(araukstas);

console.log('===========');



const variklisijungtas = true;

const arjudam=variklisijungtas ===true? 'vaziuojam' : 'stovim';
console.log(arjudam);

const aralkanas = true;

const areinamvalgyt = true? 'einam valgyti' : 'dar neinam valgyt';
console.log(areinamvalgyt);


console.log('=====================');


let alkioatsakymas = '';
const iprociai= 'mesedis';

if ( aralkanas === true) {
    if (iprociai ==='mesedis'){
        alkioatsakymas = 'tai valgom';
    } else {
        alkioatsakymas = 'nevalgom mesos';
    }
} else {
    alkioatsakymas = 'dar palaukiam';
}
console.log(alkioatsakymas);


const alkioatsakymas2 = aralkanas === true 
                                    ? 'tai valgom' 
                                     : 'dar palaukiam';
console.log(alkioatsakymas2);

const skaicius = true ? 
                    true 
                    ? 4
                    :2
                :3;
console.log(skaicius);

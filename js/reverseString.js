    function reverseString(text){
        const size = text.length;
        let reverseText = '';

    for (let i = 0; i < size; i++) {
        const letter = text[i];
        reverseText = letter + reverseText;
        
}


    return reverseText;

}

console.log(reverseString('labas'), '->', 'sabal');
console.log(reverseString('kodel'), '->', 'ledok');
console.log(reverseString('aciu'), '->', 'iuca');
console.log(reverseString('tarakonas'), '->', 'sanokarat');

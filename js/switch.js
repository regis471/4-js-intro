const day=6;

switch(day) {
    case 1:
        console.log('Pirmadienis');
        break;
    case 2:
        console.log('Antradienis');
        break;
    case 3:
        console.log('Treciadienis');
        break;

    default:
        console.log('Tokios dienos savaiteje nera');
        break;
    
}


const day2 = 'trec' ;

switch(day2) {
    case 'pirm':
        console.log('Pirmadienis');
        break;
    case 'antr':
        console.log('Antradienis');
        break;
    case 'trec':
        console.log('Treciadienis');
        break;

    default:
        console.log('Tokios dienos savaiteje nera');
        break;
    
}
console.log('=============================');
const day3= 6;

switch (day3) {
    case 1:       
    case 2:        
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        console.log('Reikia dirbti');
        break;
    case 6:        
    case 7:
        console.log('Savaitgalis');
        console.log('Galima pailseti');
        break;
    default:
        console.log('Tokios dienos nera');
        break;
        
}

console.log('--------------------------');


const stotele='seskines';
switch (stotele){
    case 'ziedo' :
        console.log('ziedo');
    case 'antakalnio' :
        console.log('antakalnio');
    case 'ukmerges' :
        console.log('ukmerges');
    case 'studentu' :
        console.log('studentu');
    case 'seskines' :
        console.log('seskines');
    case 'rudens' :
        console.log('rudens');
    case 'karaliaus' :
        console.log('karaliaus');
    case 'olimpieciu' :
        console.log('olimpieciu');
        break;

    default:
        console.log('Tokios stoteles nera');
}
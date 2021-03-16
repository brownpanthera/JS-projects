let userName = 'ishan';
const userQuestion = 'Will I become werewolf tonight?';
let randomNumber = Math.floor(Math.random() * 8);
let eightball = '';


userName === 'ishan' ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log(`The user asked ${userQuestion}`);

switch (randomNumber) {
    case 0:
        eightball = 'it is certain';
        break;
    case 1:
        eightball = 'it is decidely so';
        break;
    case 2:
        eightball = 'Reply hazy try again';
        break;
        case 3:
        eightball = 'Cannot preddict now';
        break;
        case 4:
        eightball = 'Do not count on it';
        break;
        case 5:
        eightball = 'My source say no';
        break;
        case 6:
        eightball = 'Outlook not so good';
        break;
        case 7:
        eightball = 'Signs point to yes';
        break;
}

console.log(eightball);

// if(randomNumber === 1){
// console.log('oh dear');
// }else if(randomNumber === 2){
//     console.log('oh my god');
// }else if(randomNumber === 3){
//     console.log('yes my dear');
// }else if (randomNumber === 4){
//     console.log('yes yes dear');
// }else if(randomNumber === 5){
//     console.log('what dear');
// }else if(randomNumber === 6){
//     console.log('oh no dear');
// }else if(randomNumber === 7){
//     console.log('yo did it dear');
// }

// console.log(eightball);
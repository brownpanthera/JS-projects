let secretMessage = ['learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out', '-2015', 'Chris', 'pine', 'Learn', 'JavaScript'];

secretMessage.pop()
// console.log(secretMessage.length);

secretMessage.push('to', 'program');
// console.log(secretMessage);

console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';

secretMessage.shift();
console.log(secretMessage);

secretMessage.splice(5, 10, 'know');
console.log(secretMessage);

console.log(secretMessage.join());
//constant holding our kelvin value
const kelvin = 0;

// kelvin value converted to celsius
const celsius = kelvin - 273;

// celsius value converted to fahrenheit 
let fahrenheit = celsius * (9/5) + 32;

// round down the fahrenheit
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);

// round down the newton 
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

console.log(`The temperature is ${newton} degrees Newton`);
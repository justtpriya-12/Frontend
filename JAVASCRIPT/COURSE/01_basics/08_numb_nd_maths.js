const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance) 

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.897
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//--------------------------MATHS---------------------------
console.log(Math);   //----------object
console.log(Math.abs(-4));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.max(4, 5, 7, 34,45));
console.log(Math.min(-4, 45, 23, 1, 4));

console.log(Math.random(-4));
console.log(Math.random (45));
const name = "priya"
const repoCount = 5

console.log(name + repoCount + " Value");

//string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhhc')
// In browser it shows string in (key : value) pairs
// key : value
//  0 : "h"
//  1 : "i"
//  2 : "t".....
//  7 : "c"
//  Length : 8

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 6);
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh/%20/choudhary"
console.log(url.replace('%20', ''));
console.log(url.includes("hitesh"));
console.log(url.includes("priya"));
console.log(url.split('/'));
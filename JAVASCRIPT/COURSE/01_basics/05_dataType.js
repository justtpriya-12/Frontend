/*
# Primitive
7-type ... String, Number, Boolean, null, undefined, Symbol, BigInt
*/
const score = 100;
console.log(typeof score);

const scoreValue = 100.3
console.log(typeof scoreValue);


const isLoggedIn = false
console.log(typeof isLoggedIn);

const outsideTemp = null
console.log(typeof outsideTemp);

let userEmail;
console.log(typeof userEmail);

const id = Symbol('123')
console.log(typeof id);

const anotherId = Symbol('123')
console.log(typeof anotherId);
console.log(id == anotherId);

const bigNumber = 34567543223456677888877n
console.log(typeof bigNumber);
/*
#Reference Type --(Non-Primitive)
type... Array, Objects, Functions
*/
const heros = ["shaktiman", "naagraj", "doga"]
console.log(typeof heros);

let myObj ={
    name : "hitesh",
    age : 22,
}
console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);

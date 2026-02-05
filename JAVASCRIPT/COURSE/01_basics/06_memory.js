/* 1. Stack Memory --
~ Primitive
~ in stack memory we get a copy of variable.

2.Heap Memory
~ Non-primitive
~ in heap memory we get a reference of original value  */

let myYoutubeName = "hiteshdotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"
console.log(myYoutubeName)
console.log(anotherName)


//Non-primitive
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "priya@google.com"
console.log(userOne.email);
console.log(userTwo.email);
//TDZ --> temporal dead zone

//conditional

// let age = 10;
// if (age > 13 && age < 19){
//     console.log("Teenager");
// } else {
//     console.log("Not teenager");
// }

//pattern

// let n = 4;
// for(let i = 0;i < n; i++){
//     let str = "";
//     for(let j = n-1-i; j >= 0; j--){
//         str += "*";
//     }
//     console.log(str);    
// }
// console.log("nikki" && "hello");

// function

function operation(num1, num2, para){
    if(para === "sum"){
        return  num1 + num2;
    }
}
let n1 = 14;
let n2 = 2;
console.log(operation(n1, n2, "sum"));
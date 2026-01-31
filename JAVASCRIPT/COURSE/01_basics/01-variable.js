const accountId = 144553 
let accountEmail = "priyachauhan51574gmail.com"
var accountPassword = "12345"
accountCity = "Mathura"
let accountState;

//accountId = 2  //not allowed const var can not reassign
console.log(accountId);

accountEmail = "anshchauhan@1234.com"
accountPassword = "9V4FAF"
accountCity = "Kanpur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/
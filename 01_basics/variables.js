const accountId = 7447
let accountEmail = "vanisha@gmail.com"
var accountPassword = "123456" // not preferable because var doesn't contain block scope or functional scope(we don't use it)
accountCity = "Lucknow" // possible but not preferable

let name; //returns undefined

//only const variables can't be changed
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,name]);
accountEmail = "vj@google.com"
accountPassword = "1212121"
accountCity = "Kanpur"
console.table([accountEmail,accountPassword,accountCity]);


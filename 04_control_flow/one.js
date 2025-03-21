//if/else statements are just same as other languages.

// Nullish Coalescing Operator(??): this is all about null undefined...it is used to check the values coming from database basically it tells if we want to assign any values at the place of any errors then what we can put and how. Major use in the database.

let val1;
//val1 = 5??10 // 5
val1 = null??10 //10
//val1 = undefined??10 // 10
//val1 = undefined ?? 10 ?? 20 // 10
console.log(val1);

// Terniary Operator:  
// condition?true:false

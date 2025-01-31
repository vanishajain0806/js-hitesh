const score = 400
console.log(score);
console.log(typeof score);

const balance = new Number(100)//to explicitly define the data type of the variable.
console.log(balance);

console.log(score.toString());
console.log(score.toString().length);

console.log(score.toFixed(2));//after decimal the no of digits will be 2.

const t = 347.737474
console.log(t.toPrecision(5));//total no of digits will be 5

const s = 1000000000
console.log(s.toLocaleString('en-IN'));//the digits will be seperated by the commas.

// ************** MATHS ************** //
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.6));
// console.log(Math.min(4,3,5,2));
console.log(Math.random()) //value between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1); // +1 to avoid the 0 values

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min); //+min to get the values in the specific min max range




let  score = 33
//both are correct
//console.log(typeof score);
//console.log(typeof(score));

let score1 = "33"
let valueInNumber = Number(score1) // type conversion me String Boolean kuch bhi kr sakte hai.
//console.log(typeof(valueInNumber));

let score2 = "33abc"
let valueInNumber1 = Number(score2)
// console.log(typeof(valueInNumber1));
// console.log(valueInNumber1);

// when other datatypes are converted into number datatypes: 
// "33" -> 33
// "33abc" -> NaN
// null -> 0
// undefined -> undefined
// true -> 1; false -> 0

// empty string when converted into boolean gives false value.

// ********************** Operations ************************* //
let val = 7
let negVal = -val
// console.log(negVal);
let str1 = "hello"
let str2 = " Vanisha"
// console.log(str1+str2);

// console.log("1"+2);// 12
// console.log(1+"2");// 12
// console.log(1+2+"3");// 33
// console.log("1"+2+3);// 123

// console.log(+true); // + is used to convert the value in Number
// console.log(+""); // not preferable

let gameCounter = 100
++gameCounter
console.log(gameCounter);
gameCounter++
console.log(gameCounter);






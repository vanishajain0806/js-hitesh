"use strict"; // treat all JS code as newer version

// alert(3+3) //not allowed because we are using nodejs not browser//used to pop up a message.

let name = "Vanisha"
let age = "23"
let isLoggedIn = false

console.log(typeof null); //object
console.log(typeof undefined); //undefined

//Primitive DataTypes:(call by value)
//Number -> range(2^53)
//BigInt
//String -> "" or ''
//Boolean -> true/false
//null -> standalone value(representation of empty value)
//undefined -> value not yet assigned
//Symbol -> to find the uniqueness

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

// JS is a dynamically typed// you don't have to declare variable tyoes, they are figured out while the program is running.

//Reference(Non-Primitve): Memory me reference inka direct allocate kia jaa sakta hai(call by reference)
//Objects,Array,Functions(Declarations: )
// Arrays:
const names = ["Vanisha","Vaibhav","Harshita"];
// Objects:
let myObj = {
    name: "Vanisha",
    age: 23,
}
// Functions:
const myFunc = function(){
    console.log("Hello World");
}

// Stack Memory(Stack Memory is used for all the primitive data types, here a copy is created for all the variables declared, changes in any variable doesn't affect the another variable)
// Heap Memory(Heap Memory is used for all the reference data types, here you get a direct reference for that variable, changes affects the other variable which are referencing to the same variable) 










const user = {
    username: "Vanisha",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);// "this" refers to the current context.
        console.log(this);
    }
}
// user.welcomeMessage()//Vanisha, welcome...
// user.username = "Harshita"
// user.welcomeMessage()// Harshita, welcome...

//console.log(this);//{}//this is refering to empty object because we are in node environment.
//when we will run the above line in the browser it will give the Window Object because in browser Window is the global Object.

// the way we were able to use "this" in the object, we can't use "this" the same way in the functions...it gives undefined as result
// function chai(){
//     // console.log(this); //we get a lot of values when "this" is called inside a function in the node environment.
//     let username = "vanisha"
//     console.log(this);// same as above 
//     console.log(this.username)//undefined
// }
// chai()


// we can't use "this" in arrow function:
// const chai = () =>{
//     let username = "vanisha"
//     console.log(this.username)//undefined
//     console.log(this)//{}
// }
// chai()

// arrow function:

// 1st way:
// const addtwo = (num1,num2) => {
//     return num1+num2
// }

// 2nd way:
// const addTwo = (num1,num2) => (num1+num2)
//if curly braces are used then we have to write return keyword else if paranthesis used then no need to write return statement.
// console.log(addTwo(3,4));// 7

// if we have to return obejct:
const addTwo = (num1,num2) =>({username:"hitesh"})//to return the obejct we have wrap them in paranthesis 

console.log(addTwo(3,4));



 

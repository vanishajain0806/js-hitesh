// IIFE(Immediately Invoked Function Expressions)
// when functions are invoked immediately and global scope ke variables se hone wale pollution ko hatane ke liye IIFE ka use kia

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// this the way to execute IIFE, we firstly wrapped the function inside the paranthesis and then called the function using second paranthesis and we have to end the process by using ;

// this function can be written as arrow function:
( () =>{
    // unnamed IIFE
        console.log(`DB CONNECTED TWO`);
})(); //always add semicolon if you want to write another iife after this one so that this iife terminates.

// to give parameters:
( (name) => {
    console.log(`My name is ${name}`);
})('Vanisha');
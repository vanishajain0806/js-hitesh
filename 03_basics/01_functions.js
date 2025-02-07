//ways to degine a function:
//1st way
addOne(5)//gives no error...valid
function addOne(num){
    return num+1
}
//2nd way:
//addTwo(5)//gives error as the function is acting as a variable here and is not defined yet!//this is called hoisting which states that you can not use any variable above its declaration.
const addTwo = function(num){
    return num+2
}
//console.log(addTwo(5))//gives no error

//function definition:
// function sayMyName(){
//     console.log("V");
//     console.log("A");
//     console.log("N");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("A");
// }
// sayMyName//reference of function
// sayMyName()//execution

// function add(num1,num2){
//     console.log(num1+num2);
// }
// add(7,4)//11
// const ans = add(7,4)
// console.log(result);//undefined

// function add(num1,num2){
//     let ans = num1+num2
//     return ans
// }
// const result = add(7,4)
// console.log("Result:" ,result);

// function loginUserMessage(username)/*(username = "sam") if you don't want to send undefined as parameters*/{
//     if(username === undefined)/*(!username)*/{
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Vanisha"));//Vanisha
// console.log(loginUserMessage());//undefined

// how to send multiple values in the functions parameters
// function calculateCartPrice(...num1)/*...num1 is a rest operator used to send multiple values in a single variable*/{
//     return num1
// }
// console.log(calculateCartPrice(200,300,400,20000));

// how to pass object as parameter in the function:
// 1st way:
// const user = {
//     name:"Vanisha",
//     age:23
// }
// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
// }
// handleObject(user)

// 2nd way:
// handleObject({
//     name:"Vanisha",
//     age:23
// })

// how to pass arrays as parameters in the function:
// const myArr = [200,400,600,800]

// function returnSecondValue(getArray){
//     return getArray[1]
// }
// console.log(returnSecondValue(myArr));





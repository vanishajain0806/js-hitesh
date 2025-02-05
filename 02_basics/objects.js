//singleton//is the objects are being created by literals then singleton object doesn't get created but if objects are being created by constructors then obviously it does!
  
//Object.create//this is how objects are created with the help of constructor

// object literals

const mySym = Symbol("key1")//this is how symbol is defined.

const JsUser = {
    name: "Vanisha",
    "full name": "Vanisha Jain",
    [mySym]: "mykey1",//symbol 
    age: 18,
    location: "Lucknow",
    email: "vanishajain@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(JsUser.email);//not preferable
// console.log(JsUser["email"]);//same as above just preferable//"" are important to use!
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);//for symbol

// JsUser.email = "vanishajain@yahoo.com"//this is how to overwrite the object data

//  Object.freeze(JsUser)//to kind of lock the object so that it can't be changed or modified

// JsUser.email = "vanishajain.microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());//to execute the function
// console.log(JsUser.greeting);//tells the type of greeting
console.log(JsUser.greeting2());


 


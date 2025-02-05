// how to declare objects with the help of constructors and singleton

//const tinderUser = new Object()//singleton object

const tinderUser = {}//non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vanisha",
            lastname:"Jain"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// console.log(regularUser.fullname?.userfullname.firstname); // ? is used to check if there exists any full name then only print//when the response is coming from an api

//to merge the objects:

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//1st way:
//const obj3 = {obj1,obj2}//problametic

//2nd way:
const obj3 = Object.assign(obj1,obj2)//here obj1 is the target and obj2 is the source...basically whatever is written in the first place will be the target and rest will be source i.e. Object.assign({},obj1,obj2) then {} would be the target
// console.log(obj3);
// console.log(obj1);
// console.log(obj3===obj1);//true only if there isn't any {} is used

//3rd way:
const obj4 = {...obj1,...obj2}//spread all the objects
//console.log(obj3);
 
//if the objects are coming from the databases:
const users = [
    {
        id:1,
        email:"v@gmail.com"
    },
    {
        id:1,
        email:"v@gmail.com"
    },
    {
        id:1,
        email:"v@gmail.com"
    }
]//when fetching from database the objects come in array 
users[1].email//this is how to fetch the data

//console.log(tinderUser);

//console.log(Object.keys(tinderUser));//the return type of this is an array//we can iterate over the array...we can use loop through the array

//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));//every entry will be an array.

//to check if the key exist in the object or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true







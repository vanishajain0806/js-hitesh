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

// console.log(regularUser.fullname?.userfullname.firstname); // ? is used to check if there exists any full name then only print



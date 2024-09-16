const name = "Vanisha"
const repoCount = 5

//console.log("Hello " + name + " with " + repoCount + " RepoCount"); // outdated way not preferable

// String Interpolation:(we can use the methods of strings in this as well)
//console.log(`Hello my name is ${name} and my RepoCount is ${repoCount}`);

// Another way to declare String:
const userName = new String('Vanisha_74_jain')
//console.log(userName);
// It provides a key value pair:
// console.log(userName[1]); //a
// console.log(userName.__proto__); //returns object {}
// console.log(userName.length);
// console.log(userName.toUpperCase());
// console.log(userName.charAt(4));
// console.log(userName.indexOf('a'));
const s = userName.substring(0,4);
// console.log(s);
const t = userName.slice(-9,4);
//console.log(t);
const v = "     Vanisha      ";
//console.log(v.trim());// removes the white spaces and terminators from both beginning and end...to specifically remove from start or end use trimStart() or trimEnd()
const url = "https://vanisha.com/vanisha%20jain"
console.log(url.replace("%20","-"));
console.log(url.includes("jain"));
console.log(userName.split("_"));
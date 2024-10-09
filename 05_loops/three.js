// high Ordering Array Loops:
// forEach(callback function)
const a = ["js","cpp","rb","swift"]

a.forEach(function (val) {
    //console.log(val);
})//in the forEach paranthesis there is a callback function, it has no name, it takes a variable in its paranthesis which iterate the array and in its curly braces, all the functionality is written over.

// forEach(arrow function as callback function)
a.forEach((item)=>{
    //console.log(item);
})

//a fucntion can also be passed in the forEach paranthesis:
function printMe(item){
    //console.log(item);
}
//a.forEach(printMe)

//other parameters of forEach:
a.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

// iteration on array of objects:

const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})
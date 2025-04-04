// for and while loops are same as other languages.
// in javascript there is no error as out of bound, if loop goes out of bound it will print undefined as the output
// Array specific loops: 
// for of:
const arr = [1,2,3,4,5,6,7,8,9,10]
for (const val of arr) {
    //console.log(val);
}// no need of any increment or condition check.//can be used on strings, objects or anything.


// Maps(key-value pair)//used for storing unique sets

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map);

for(const key of map){
    //console.log(key);
}
for(const [key,value] of map){
    console.log(key, ':-', value);
}//this doesn't work on objects because objects are not iterable.
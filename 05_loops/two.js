const myObject ={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by Apple"
}
//for in:(used on Objects)
for(const key in myObject){
    //console.log(key);
}
for(const key in myObject){
    // console.log(myObject[key]);
}

//for in(can be used on arrays? yes)
const arr = [1,2,3,4,5,6,7,8,9,10]
for(const key in arr){
    // console.log(key);
}//prints index(keys)

for(const key in arr){
    //console.log(arr[key]);
}

// for in (can be used on maps? NO)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for(const key in map){
    console.log(key);
}

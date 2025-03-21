// truthy values: "0", 'false', " ", [], {}, function(){}
// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN

// this is how we check if the array is empty
const userEmail = []
if(userEmail.length===0){
    console.log("Array is Empty")
}

// this is how we check if the object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty")
}

// false == 0 //true
// false == '' //true
// 0 == '' //true




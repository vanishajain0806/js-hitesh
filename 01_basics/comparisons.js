 // console.log("2">1); // doesn't give predictable value

// console.log(null > 0);// comparison operator changes null to number(treating it as 0) that's why output->false
// console.log(null == 0);// equality doesn't change null to number // output->false
// console.log(null >= 0);// true

console.log("2" === 2) // === is a strict check, it compares not only the value but the datatype also.

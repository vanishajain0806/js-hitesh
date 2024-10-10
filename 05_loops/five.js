// map is also used as filter or forEach:
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const nums = myNumbers.map((nums)=>nums+10)
// console.log(nums);

// chaining method:
const nums = myNumbers
            .map((num)=>num*10)
            .map((num)=>num+1)
            .filter((num)=>num>=40)
console.log(nums);
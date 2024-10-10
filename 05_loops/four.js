const lang = ["js","java","ruby","cpp","python"]

const values = lang.forEach((item)=>{
    // console.log(item);
    return item
})
// console.log(values);//return undefined

const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.filter((num)=> num>4)
// console.log(newNums);//returns whatever is asked for, the filter function returns something based on the condition, it also uses the arrow(callback) function and condition.
// const newNums = nums.filter((num)=>{
//     return num>4//if the scope is open then you have to use the return keyword.
// })
// console.log(newNums);//another way to provide the values based on the condition.

//forEach usage like filter:
const newNums = []

nums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

//console.log(newNums);

const books = [
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008},
    {title:'Book Three',genre:'History',publish:1989,edition:2007},
    {title:'Book Four',genre:'Fiction',publish:1999,edition:2010},
    {title:'Book Five',genre:'Non-Fiction',publish:2009,edition:2014},
    {title:'Book Six',genre:'History',publish:1987,edition:2010},
    {title:'Book Seven',genre:'Fiction',publish:1986,edition:1996},
    {title:'Book Eight',genre:'Non-Fiction',publish:2011,edition:2016},
    {title:'Book Nine',genre:'History',publish:1981,edition:1989},
];

let userBooks = books.filter((bk)=> bk.genre==='History')
userBooks = books.filter((bk)=>{
    return bk.publish >= 1985 && bk.genre==="History"
})
console.log(userBooks);





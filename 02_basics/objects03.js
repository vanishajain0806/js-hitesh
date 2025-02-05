 // how to destructure the object:
const course = {
    coursename:"js-hitesh",
    price:999,
    courseInstructor:"hitesh"
}
const{courseInstructor} = course
console.log(courseInstructor);
//the above thing can be done like this also...when we want to change the name of the key:
const{courseInstructor:Instructor} = course
console.log(Instructor);

//react ki baatein:
// const navabr = ({company}) => {
// }//rather than using (props.company) directly use{company}//this is how destructuring is done

// navabr(company = "vanisha")

//json format:
// {
//     "name":"vanisha",
//     "coursename":"js-hitesh",
//     "price":"free"
// }

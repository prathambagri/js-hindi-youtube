// const tinederUser = new Object() // singleton object 
const tinederUser = {} // non singleton object


tinederUser.id = "123abs"
tinederUser.name = "John Doe"
tinederUser.isLoggedIn = false

// console.log(tinederUser);

const regularUser = {
    email: "john.doe@example.com",
    fullname : {
        userfullname:{
            firstname: "John",
            lastname: "doe"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1:"A", 2:"b"}
const obj2 = { 3:"A", 4:"b"}
const obj3 = { 5:"A", 6:"b"}


// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({},obj1, obj2, obj3) // {} - optional parameter
const obj4 = {...obj1, ...obj2 , ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

users[1].email
// console.log(tinederUser);
// console.log(Object.keys(tinederUser));
// console.log(Object.values(tinederUser));
// console.log(Object.entries(tinederUser));

// console.log(tinederUser.hasOwnProperty('isLoggedIn'));

const course = {
    cousrename: "js in hindi",
    price: "999",
    couresInstructor: "hitesh"
}

// course.couresInstructor

const {couresInstructor: instructor} = course // destructuring
console.log(instructor);

// json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {}
]
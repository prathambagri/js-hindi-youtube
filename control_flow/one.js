//  if
const isUserloggedIn = true
const temprature = 21
// if(temprature === 20){
//     console.log("less than 30");

// }else {
//     console.log("temprature is greater than 30");

// }
// console.log("EXECUTE");


// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if( score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2"); // implicit scope but not recommended

// if (balance < 500) {
//     console.log("less than ");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if( balance < 900 ){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false;
const loggedInFromEmail =true

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}

const user = {
    username: "pratham",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){ 
//     let username= "pratham"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){ // function using object 
//     let username= "pratham"
//     console.log(this.username);
// }
// chai()

const chai = () => { // arrow function
    let username= "pratham"
    console.log(this);
}
// chai()

// const addtwo = (num1,num2) => { // explicit return 
//     return num1 + num2
// }

// const addtwo = (num1,num2) => num1 + num2  // implicit return
 
// const addtwo = (num1,num2) => (num1 + num2) // if parenthesis is their no need to write return keyword 
// but in {} need to write return keyword

const addtwo = (num1,num2) => ({username: "pratham "}) // return object


console.log(addtwo(5,4));

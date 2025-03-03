
// fuction- keyword , sayMyName - name if the fuction ,(){}- with the parameter is a Syntax

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("A");
    console.log("M");    
}

// sayMyName() // sayMyName - references of the fuction name and sayMyName() - execution

// function addTwoNumbers(num1,num2){ // num1,num2 - parameters
//     console.log(num1 + num2);
    
// }
//  addTwoNumbers(10,20) // 10,20 - arguments


function addTwoNumbers(num1,num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2
}
const result = addTwoNumbers(10,20)

// console.log("result: ",result);


function loginUserMessage(username = "sam"){ // default value
    if(!username){ // if username is falsy
        console.log("PLEASE ENTER USERNAME");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pratham"));
// console.log(loginUserMessage()); // undefined because we are not passing any argument to the function


function calculateCartPrice(val1,val2,...num1){ // ...num1 - rest parameter
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "pratham",
    price : 20000
}

function handleObjecdt(anyObject) {

    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObjecdt(user)
handleObjecdt({
    username: "bagri",
    price : 200
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArry) {
    return getArry[1]    
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));


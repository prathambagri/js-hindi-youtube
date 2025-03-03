const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is completed');
        resolve() // it will call the then method
    },1000)
})

promiseOne.then(function(){ // .then () is used to handle the result of the promise
    console.log("Promise consumed");
    
})

// insted doing in two part we can do it in one part
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const PromiseThree  = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"pratham",password:"123"})
        }else{
            reject('error: something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username   
}).then((username)=>{
    console.log(username); 
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected")
)

// error handling in promise
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('error: JS went wrong')
        }
    },1000)
})

// another way to handle error
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }
    
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error)
)
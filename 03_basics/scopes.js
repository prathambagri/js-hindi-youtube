
// var c=300 // global scope
let a = 300
if(true){
    let a = 10 // block scope
const b = 20
// console.log("inner: ",a);


}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "pratham"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "pratham"
    if(username === "pratham"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ++++++++++++interesting+++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}

addtwo(5) 

const addtwo = function(num){ // function expression
    return num + 2
}
// console.log();

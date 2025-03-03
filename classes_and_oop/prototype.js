// let myName = "pratham     "
// let myChannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.pratham = function(){
    console.log(`pratham is present in all objects`);
    
}

Array.prototype.heyPratham = function(){
    console.log(`pratham says hello`);
    
}


// heroPower.pratham()
// myHeros.pratham()
// myHeros.heyPratham()
// heroPower.heyPratham() // error because heyPratham is not a function in heroPower object

// inhertance 

const User = {
    name:"chai",
    email: "chai@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport  = {
    isAvailable: false
}

const TASupport  = {
    makeAssignment:'JS assginment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// mordern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
   
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherUserName.trueLength()

"pratham".trueLength()
"iceTea".trueLength()
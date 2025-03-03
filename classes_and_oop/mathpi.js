const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor); 


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const chai = {
    name:"ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bni");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai)); // undefined cuz its an object not a property of an object
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable: false,
    enumerable: true,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){ // this is needed because code na fatte!!!!
        console.log(`${key} : ${value}`);
    }
    
}
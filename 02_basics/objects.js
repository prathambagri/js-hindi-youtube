// singletons
// object.create 

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "pratham",
    "full name": "pratham bagri",
    [mySym]: "mykey1",
    age: 22,
    location: "kolkata",
    email: "pratham@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "pratham123@gmail.com";
// Object.freeze(JsUser);
JsUser.email = "pratham123@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingtwo = function(){
    console.log(`Helo Js user, ${this.name}`); // this is refering to JsUser object // the backtic use for String interpulation
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


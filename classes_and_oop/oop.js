// object literal - collection of property and method
const user  = {
    username:"pratham",
    loginCount: 8,
    signIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`Username:${this.username}`);
        console.log(this); // this keyword refers to the object it is called on
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise(); // new keyword is used to create a new object of the Promise class it is also called constructor function 
// const date = new Date();

function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this // implicity defined in the function
}

const userOne = new User("pratham",12,true)
const userTwo = new User("ChaiAurCode",11,false)
console.log(userOne.constructor); // constructor is the reference to itself 
// console.log(userTwo);

// when new keyword used 
// step 1: to create empty obeject which is called instances 
// step 2: to call the constructor function with the new keyword
// step 3: this keyword used to inject the properties of the object
// step 4: return this keyword used to return the object created
// step 5: the object is assigned to the variable on the left side of the assignment operator
// step 6: the object is returned by the function and assigned to the variable on the left

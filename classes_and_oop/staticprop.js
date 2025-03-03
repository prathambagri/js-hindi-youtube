class User{
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`usename ${this.username}`);
    }

    static createId(){
        return`123`
    }
}

const pratham = new User("pratham")
// console.log(pratham.createId());


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email =email
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com")
console.log(iphone.createId())


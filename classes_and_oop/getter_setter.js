class User{
    constructor(email,password){
        this.email = email;
        this.password = password;

    }
    get email(){ // we have to return in getter can be empty 
        return this._email.toUpperCase();
    }
    set email(value){ // we never return in setter
        this._email = value
    }
    get password(){ // getter it simple get the value of the property
        return `${this._password}pratham`
    }
    set password(value){ // setter it simple set the value of the property
        this._password = value 
    }
}

const pratham= new User("pb@gmail.com","abc")
console.log(pratham.email);



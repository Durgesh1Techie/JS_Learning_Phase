class user{

    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;

    }

    encryptpassword(){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}


const chai = new user("chai","chai@gmail.com","123")

console.log(chai.encryptpassword());
console.log(chai.changeusername())


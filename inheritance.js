class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
         addcourse(){
            console.log(`new course was added by ${this.username}`);
         }
}

const chai = new teacher("chai","chai@gmail.com","123")
chai.addcourse()

const masalachai = new user("Durgesh")

masalachai.logme()
class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username: ${this.username}`)
    }

     createid(){
        return `123`
    }
}


const dps = new user("Durgesh")
console.log(dps.createid())

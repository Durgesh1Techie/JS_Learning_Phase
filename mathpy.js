class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password= value.toUpperCase()
    }
}

const dps = new user("Dur@dps.ai","abc")
console.log(dps.password)
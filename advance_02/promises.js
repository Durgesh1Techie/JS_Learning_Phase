const promiseone = new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log('Asyn task complete');
        resolve()
    },1000)

})
promiseone.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Asyn 2 resolved")
})


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "durgesh",
            mail : "dps@gmail.com"
        })

    },1000)

})
promisethree
.then(function(user){
    console.log(user)

})

const promisefour = new Promise(function(resolve,reject){
   setTimeout(function (){
    let error = false
    if(!error){
        resolve({username : "durgesh", email : "dps@gmaaail,com"})

    }
    else{
        reject('ERROR something went wrong')
    }

   },1000)
})
 promisefour
 .then((user) => {
        console.log(user);
        return user.username

})
.then((username) => {
    console.log(username)

})
.catch((error) => {
console.log(error)
})
.finally(()=> console.log("the promise is either resolve or rejected"))


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function (){
        let error = false
        if(!error){
            resolve({username : "jsscript", email : "js@gmaaail,com"})
    
        }
        else{
            reject('ERROR something went wrong')
        }
    
       },1000)
})
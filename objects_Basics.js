// // objects literals

// const mysym = Symbol("key 1");

// const jsUser ={
//     name : "durgesh",
//     age : 19,
//     [mysym ]: "key 1",
//     email : "dps@gmail.com",
//     login : false,
//     lastloginDays : ["monday" , "friday"],

// }

// //  console.log(jsUser.email);
// //  console.log(jsUser["email"]);

// // 


// //+++++++++++++++++++ part 2 ++++++++++++++

// //const tinderUser = new Object()   ///singleton object
// // const tinderUser = {} // not a singleton object
// // console.log(tinderUser);

// // tinderUser.name = "sam"
// // tinderUser.age = 19
// // tinderUser.city = "delhi"

// // console.log(tinderUser.age)

// // 


// //++++++++++++++++++functions++++++++++++++++++++++++++++

// // function addTwonumber(number1, number2){
// //  let result = number1+number2;
// //  console.log("Durgesh")
// //  return result;
 

// // }

// //  const result = addTwonumber(3,22);
// //  console.log("Result  :", result);


// // function addUsername(Username){
// //     if( !Username ){
// //         console.log("please enter Username");
// //         return;
// //     }
// //     return`${Username}  just logged in`
// // }

// // console.log(addUsername())


// // function CalculateSum(...num1){
// //     return num1;
// // }
// // console.log(CalculateSum(200,300,400,21))


// //  const user ={
// //     Username : "Durgesh",
// //     Price : 200

// // }

// // function handlingObject(anyObject){
// //     console.log(`UserName is ${anyObject.Username} and cart price is ${anyObject.price}`);
// // }
// // handlingObject({
// //     Username : "dpsingh",
// //     price : 200,

// // });
    


// // passing array in function;

// //const newArray = [100,200,300,400];

// // function returnsecond(myarr){
// //     return myarr[2]
// // }
// //  console.log(returnsecond([100,300,400]))
// // console.log(addTwo(5))

// // function addTwo(num){
// //     return num+1;
// // }
// // console.log(addThree(7))
// // const addThree = function(nums){
// //     return nums+1;
// // }




// ++++++++++++++++++++++++Arrow and this Function ++++++++++++++

//This is an arrow function

// const addTwo = (num1 , num2) => {
//     return (num1 + num2)
// }

// console.log(addTwo(3,4))

//implicit arrow function

// const addtwo = (num1,num2) => num1+num2
// console.log(addtwo(3,5))

// Explcit arrow function
// const addtwo = (num1,num2) => (num1+num2)
// console.log(addtwo(13,12))
// console.log(addtwo(12,67))

// Immediately Invoked fundtiom Expression IIFE
  // Named IIFE

  (function chai(){
    console.log("Db connected");
  })();


  // IIFE

  ((name) => {
    console.log(`Db connected ${name}`)

  })('dpsingh');
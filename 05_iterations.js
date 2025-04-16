

// for(let i =0; i<10;i++){
//     const Element = i;
//     if(Element == 5){
//         console.log("Element is 5")
        
//     }
//     console.log(Element)

// }


// for(let i =0;i<=10;i++){
//     console.log(`Table of ${i}`)
//     for(let j = 0;j<=10;j++){
//         console.log(i + "*"+j + "=" +i*j)


//     }
// }

// While loop

// let i =0;
// while(i<=10){
//     console.log(`Value of index is ${i}`);
//     i = i+3
// }

// Do while loop

// let score = 11

// do{
//     console.log(`Score is ${score}`);
//     score++

// }while(score<=10);

// const numbers = [1,2,3,4,5,6]

// for (const nums of numbers) {
//     console.log(nums)
    
// }

// const Greetings = "hello I am Durgesh"

// for (const Greet of Greetings) {
//     console.log(`Each char is : ${Greet}`)
    
// }

// const map = new Map();
// map.set('IN',"India")
// map.set('US',"United States")
// map.set('FR',"France")
// map.set('BN',"Bangladesh")

// for (const [key,Value] of map) {
//     console.log(key, " : ",Value);
    
// }

// for-in loop

// const myobject = {
//     js : "Javascript",
//     cpp : "c++",
//     rb : "ruby",
//     swift : "swift by apple"

// }

// for (const key in myobject) {
//     console.log(`${key} shortcut is for ${myobject[key]}`)
    
// }

// for each Loop

const arr = ["ruby","java","python","c++"]

// arr.forEach(function(val)  {
//     console.log(val);

// })

// arr.forEach((item) => {
//     console.log(item)
// })

// function printme(item){
//     console.log(item);
// }

// arr.forEach(printme)


//for each access in objects

// const coding = [
//     {
//         LanguageName : "javascript",
//         Languagesyntax : "js"
//     },
//     {
//         LanguageName : "python",
//         Languagesyntax : "py"
//     },

//     {
//         LanguageName : "java",
//         Languagesyntax : "java"
//     },

//     {
//         LanguageName : "c++",
//         Languagesyntax : "cpp"
//     },
// ]

// coding.forEach((item,index,Array) => {
//     console.log(item,index,Array)
    
// });


// foor each

const mynums = [1,12,2,2,3,4,5,6,7,8,8,8,]

// const newnums = mynums.filter((num) => num>5)
const newnums = mynums.filter((nums) => { return nums > 4})

console.log(newnums)
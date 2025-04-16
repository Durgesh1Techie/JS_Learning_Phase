//const mynums = [1,2,3,4]

// const newnums =mynums.map((nums) => { return nums+10})
// const newnums = mynums.map((nums) => (nums*10))
//                     .map((nums) => (nums+1))
//                     .filter((nums) => nums>30)
// console.log(newnums) 


// reduce

// const mytototal = mynums.reduce(function (acc,currval){
//     console.log(`accumulator ${acc} currval : ${currval}`)
//     return acc+currval
// },0)
// console.log(mytototal)

//reduce in other syntax

// const mytotal = mynums.reduce((acc,cur) => acc+cur , 0 )
// console.log(mytotal)

const shoppingcart =[
  {  itemname : "js course",
    price : 2000

  },
{
    itemname : "js python",
    price : 999

},
{
    itemname : "js api",
    price : 1500

}
]

const pricetopay = shoppingcart.reduce((acc,item) => acc+item.price,0)
console.log(pricetopay)
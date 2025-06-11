let sampleapi = "https://jsonplaceholder.typicode.com/users";
let fetchdatabutt = document.querySelector("#Fetchdata")
let li = document.querySelector("#list")
fetchdatabutt.addEventListener("click",()=>{




let fetchdata = fetch(sampleapi)
.then((rawdata)=>{
  return rawdata.json();
  

})
.then((data)=>{
data.map(user => {
  `<li>${li.innerHTML= user.name}</li>`.join("");
  
});
})
.catch((error)=>{
  console.log(error)
})

})
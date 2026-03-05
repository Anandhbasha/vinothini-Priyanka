let products = []
let filteredData = []

let currentPage = 1
let perPage = 5

async function getProducts(){

 let res = await fetch("https://fakestoreapi.com/products")
 products = await res.json()

 filteredData = products

 display()
}

getProducts()

function display(){

 let container = document.getElementById("products")

 container.innerHTML=""

 let start = (currentPage-1)*perPage //0
 let end = start + perPage //5

 let pageData = filteredData.slice(start,end)//(0,5)


 pageData.forEach(p=>{

  container.innerHTML += `
   <div>
    <h3>${p.title}</h3>
    <p>Price: ${p.price}</p>
    <p>Desc:${p.description}</p>
   </div>
  `
 })

 document.getElementById("page").innerText =
 "Page " + currentPage
}

function nextPage(){

 if(currentPage*perPage < filteredData.length){
  currentPage++
  display()
 }

}

function prevPage(){

 if(currentPage>1){
  currentPage--
  display()
 }

}
document.getElementById("search").addEventListener("keydown",(e)=>{
   searchProduct(e.target.value) 
})
function searchProduct(text){

 filteredData = products.filter(p =>
  p.title.toLowerCase().includes(text.toLowerCase())
 )

 currentPage = 1
 display()
}

function filterPrice(){

 filteredData = products.filter(p => p.price > 100)

 currentPage = 1
 display()
}
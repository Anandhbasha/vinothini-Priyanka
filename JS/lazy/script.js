import { fetchProduct,fetchUser } from "./api.js"
import { calculateTotal } from "./utilis.js"

const btn = document.getElementById("loadBtn")
const output = document.getElementById("output")
const loading = document.getElementById("loading")

btn.addEventListener("click",async()=>{
    loading.innerHTML="loading"
    output.innerHTML=""
    try{
        const [products,user] = await Promise.all([
            fetchProduct(),fetchUser()
        ])

        const total = calculateTotal(products)
        output.innerHTML = `<p>Total Products:${products.length}</p>
        <p>Total Users:${user.length}</p>
        <p>Total Amount:${total}</p>`

        const module = await import("./lazy.js")
        module.showAlert()
        
    }
    catch(err){
        output.innerHTML="Error Loading"
    }
    loading.innerHTML =""
})
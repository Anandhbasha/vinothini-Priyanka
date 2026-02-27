// document.getElementById("btn").addEventListener("click",()=>{
//     document.getElementById("output").innerText="loading"
//     setTimeout(()=>{
//         document.getElementById("output").innerText = "Data Loaded"
//     },3000)
// })


// const longData = ()=>{
//     const bigData = ()=>{
//         for(let x=0;x<1000000000000000;x++){
//             setTimeout(()=>{

//             })
            
//         }
//     }
//     bigData()
// }
// longData()


// const calTax = (tax,amount)=>{
//     let finalPrice = amount+(amount*tax/100)
//     console.log(finalPrice);
    
// }
// calTax(18,2000)
// calTax(18,3000)
// calTax(18,4000)


const calculateTax = (tax)=>{
    return function(amount){
        return amount+(amount*tax/100)
    }
}

const gst = calculateTax(18)
console.log(gst(1000));
console.log(gst(2000));
console.log(gst(3000));

// components

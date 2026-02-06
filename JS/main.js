// let bookTicket = new Promise ((resolved,reject)=>{
//     let success = true
//     if(success){
//         // resolved("Ticket Booking is Confirmed")
//     }
//     else{
//         reject("Unable to Book the Ticket")
//     }
// })

// bookTicket.then((res)=>console.log(res)).catch((err)=>console.log(err))

// any
let friend1 = new Promise((resolved,reject)=>{
    let reached = true
    if(!reached){
        reject("friend1 Not Yet Reached")
    }
    else{
        resolved("friend1 Reached Home")
    }
})
let friend2 = new Promise((resolved,reject)=>{
    let reached = false
    if(!reached){
        reject("friend2 Not Yet Reached")
    }
    else{
        resolved("friend2 Reached Home")
    }
})
let friend3 = new Promise((resolved,reject)=>{
    setTimeout(()=>{
        let reached = true
    if(!reached){
        reject("friend3 Not Yet Reached")
    }
    else{
        resolved("friend3 Reached Home")
    }
    },5000)
})

Promise.allSettled([friend1,friend2,friend3]).then((res)=>console.log(res)).catch((err)=>console.log(err))
// race
// all
// allSettled

// const fetchData = async()=>{
//     try{
//         const res = await fetch("https://fakestoreapi.com/products")
//         if (!res){
//             console.log("Unable to connect APi");
            
//         }
//         else{
//             const data = await  res.json()
//             console.log(data);
            
//         }
//     }catch(err){
//         console.log(err);
        
//     }
// }

// fetchData()
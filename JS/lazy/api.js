export const fetchUser = async()=>{
    const res = await fetch('https://fakestoreapi.com/users')
    return res.json()
}

export const fetchProduct = async()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json()
}
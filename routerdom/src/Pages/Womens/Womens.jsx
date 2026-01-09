import React, { useContext } from 'react'
import Cards from '../../Components/Cards/Cards'
import { PassingValues } from '../../App'

const Womens = () => {
  const Products = useContext(PassingValues)
  const WomensProduct = Products.filter((item)=>item.prodCat==="Womens")
  return (
    <div className='Womens'>
      {WomensProduct.map((item)=>(
        <Cards {...item}/>
      ))}
    </div>
  )
}

export default Womens
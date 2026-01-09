import React, { useContext } from 'react'
import Cards from '../../Components/Cards/Cards'
import { PassingValues } from '../../App'


const Mens = () => {
  const Products = useContext(PassingValues)
  const MensProduct = Products.filter((item)=>item.prodCat==="Mens")
  return (
    <div className='Mens'>
      {
        MensProduct.map((item)=>(
          <Cards {...item}/>
        ))
      }
    </div>
  )
}

export default Mens
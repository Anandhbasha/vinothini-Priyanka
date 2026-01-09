import React, { useContext } from 'react'
import Cards from '../../Components/Cards/Cards'
import './AllProducts.css'
import { PassingValues } from '../../App'



const AllProducts = () => {
  const {Produts,cart} = useContext(PassingValues)
  return (
    <div className='AllProducts'>
      {
        Produts.map((item)=>(
          <Cards {...item}/>
        ))
      }
    </div>
  )
}

export default AllProducts
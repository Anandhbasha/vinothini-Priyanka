import React from 'react'
import Cards from '../../Components/Cards/Cards'
import Mshirt from "../../assets/Images/ShirtsMens.webp"
import MTshirt from "../../assets/Images/Tshirt.webp"

const Mens = () => {
  const MensProduct = [
    {
        prodCat:"Mens",
        prodName:"Mens_Shirt",
        prodPrice:500,
        prodDesc:"Westside Gia Women's Easy Textured Spread Collar Casual Three-quarter Sleeve Shirt",
        image:Mshirt
      },
      {
        prodCat:"Mens",
        prodName:"Mens_TShirt",
        prodPrice:400,
        prodDesc:"Westside Gia Women's Easy Textured Spread Collar Casual Three-quarter Sleeve Shirt",
        image:MTshirt
      }
  ]
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
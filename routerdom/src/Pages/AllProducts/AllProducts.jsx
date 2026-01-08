import React from 'react'
import Cards from '../../Components/Cards/Cards'
import Mshirt from "../../assets/Images/ShirtsMens.webp"
import MTshirt from "../../assets/Images/Tshirt.webp"
import Wshirt from "../../assets/Images/Wshirt.webp"
import WTshirt from "../../assets/Images/WTshirt.webp"
import './AllProducts.css'

const Produts = [
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
  },
  {
    prodCat:"Womens",
    prodName:"Womens_Shirt",
    prodPrice:400,
    prodDesc:"Westside Gia Women's Easy Textured Spread Collar Casual Three-quarter Sleeve Shirt",
    image:Wshirt
  },
  {
    prodCat:"Womens",
    prodName:"Womens_TShirt",
    prodPrice:600,
    prodDesc:"Westside Gia Women's Easy Textured Spread Collar Casual Three-quarter Sleeve Shirt",
    image:WTshirt
  },
]

const AllProducts = () => {
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
import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts/AllProducts'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import Mshirt from "./assets/Images/ShirtsMens.webp"
import MTshirt from "./assets/Images/Tshirt.webp"
import Wshirt from "./assets/Images/Wshirt.webp"
import WTshirt from "./assets/Images/WTshirt.webp"

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

export const PassingValues = createContext()

const App = () => {
  const [cart,setCart] = useState(0)

  return (
    <BrowserRouter>
      <PassingValues.Provider value={{Produts,cart}}>
        <div className='App'>
        <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<AllProducts/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/womens' element={<Womens/>}/>
        </Routes>
      </PassingValues.Provider>
    </BrowserRouter>
  )
}

export default App
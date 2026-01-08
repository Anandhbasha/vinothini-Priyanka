import React from 'react'
import "./Cards.css"
const Cards = ({prodName,prodPrice,prodDesc,image}) => {
  return (
    <div className='Cards'>
      <div className='cardTop'>
        <img src={image}></img>
      </div>
      <div className='cartDetails'>
        <h3>{prodName}</h3>
        <h3>{prodPrice}</h3>
        <p>{prodDesc}</p>
      </div>
      <div className='cardBottom'>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Cards
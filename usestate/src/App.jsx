import React, { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  const handleAdd = ()=>{
    setCount(++count)
    console.log(count);    
  }
   
  return (
    <div className='App'>
      <p>{count}</p>
      <button onClick={handleAdd}>AddCount</button>
    </div>
  )
}

export default App
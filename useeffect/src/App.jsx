import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  const [add,setAdd] = useState(0)
  useEffect(()=>{
    console.log("UseEffect is Working");
    
  },[count,add])
  const handleAdd = ()=>{
    setAdd((prev)=>++prev)
  }

  const handleCount = ()=>{
    setCount((prev)=>++prev)
  }
  return (
    <div className='App'>
      <button onClick={handleCount}>Count{count}</button>
      <button onClick={handleAdd}>Add{add}</button>
    </div>
  )
}

export default App
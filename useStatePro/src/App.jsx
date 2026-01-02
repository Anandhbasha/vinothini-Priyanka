import { useState } from "react";

const App = () => {
  // useState
  let [count,setCount] = useState(0)
  let [bg,setBg] = useState("light")
  const handleAdd = ()=>{
    setCount(++count)
    console.log(count);
    
  }
  const handleBg = ()=>{
      if (bg==="dark"){
        setBg("light")
      }
      else{
        setBg("dark")
      }
  }
  return (
    <div className='App'>
      <button onClick={handleAdd}>{count}Add</button>
      <button onClick={handleBg} style={{backgroundColor:bg==="dark"?"black":"white",color:bg==="dark"?"white":"black"}}>{bg}</button>
    </div>
  )
}

export default App
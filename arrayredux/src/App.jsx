import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from './Slice/Slice'

const App = () => {
  const dispatch = useDispatch()
  const items = useSelector((state)=>state.addRemove.items)
  return (
    <div className='App'>
      <h3>Items List</h3>
      {items.map((x,index)=>(
        <p key={index}>{x}</p>
      ))}
        <button onClick={()=>dispatch(addItem(items.length+1))}>Add Items</button>
        <button onClick={()=>dispatch(removeItem())}>Remove Items</button>
    </div>
  )
}

export default App
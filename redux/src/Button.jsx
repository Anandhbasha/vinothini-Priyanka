import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/Slice'

const Button = () => {
  const dispatch = useDispatch()
  const dataCounts = useSelector((state)=>state.counting.count)
  return (
    <div className='App'>
      <p>{dataCounts}</p>
      <button onClick={()=>dispatch(increment(1))}>Incerment</button>
      <button onClick={()=>dispatch(decrement(1))}>Decrement</button>
    </div>
  )
}

export default Button
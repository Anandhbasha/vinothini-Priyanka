import React, { useReducer, useState } from 'react'

const App = () => {
  const reduce = (state,action)=>{
    switch(action.type){
      case "add":
        return {...state,count:state.count+1}
      case "bg":
        return {...state,bg:state.bg==="dark"?"light":"dark"}
    }
  }
  const [state,dispatch] = useReducer(reduce,{count:0,bg:"dark"})
  return (
    <div className='App'>
      <button onClick={()=>{dispatch({type:"add"})}}>{state.count}</button>
      <button onClick={()=>{dispatch({type:"sub"})}}>{state.count}</button>
      <button onClick={()=>{dispatch({type:"bg"})}}>{state.bg}</button>
    </div>
  )
}

export default App
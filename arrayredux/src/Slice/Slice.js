import { createSlice } from "@reduxjs/toolkit";

export const addRemoveSlice = createSlice(
    {
        name:"AddorRemove",
        initialState:{
            items:[]
        },
        reducers:{
            addItem:(state,action)=>{state.items.push(action.payload)},
            removeItem:(state)=>{state.items.pop()}
        }
    }
)

export const{addItem,removeItem} = addRemoveSlice.actions

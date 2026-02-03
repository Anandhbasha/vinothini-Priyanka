import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "../Slice/Slice";

const Store = configureStore(
    {
        reducer:{
            counting:countSlice.reducer
        }
    }
)

export default Store
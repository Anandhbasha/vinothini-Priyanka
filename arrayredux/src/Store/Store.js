import { configureStore } from "@reduxjs/toolkit";
import { addRemoveSlice } from "../Slice/Slice";

const Store = configureStore({
    reducer:{
        addRemove:addRemoveSlice.reducer,
    }
})

export default Store
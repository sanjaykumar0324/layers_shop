import { configureStore } from "@reduxjs/toolkit";
import brandSlice from "./brandSlice";
import productSlice from "./productSlice";

const store =  configureStore({
    reducer:{
        brands : brandSlice,
        products :productSlice

    }
})


export default store

import { configureStore } from "@reduxjs/toolkit";
import brandSlice from "./slices/brandSlice";
import productSlice from "./slices/productSlice";

const store =  configureStore({
    reducer:{
        brands : brandSlice,
        products :productSlice

    }
})


export default store

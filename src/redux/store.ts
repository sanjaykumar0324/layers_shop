import { configureStore } from "@reduxjs/toolkit";
import brandSlice from "./slices/brandSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

const store =  configureStore({
    reducer:{
        brands : brandSlice,
        products :productSlice,
        cart : cartSlice

    }
})


export default store

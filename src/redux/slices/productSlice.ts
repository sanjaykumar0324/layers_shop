import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../utils/types/Types";
import axios from "axios";
import { API_URL } from "../../utils/constants";

interface InitialState {
  loading: boolean;
  error: any;
  products: Product[];
}

const initialState: InitialState = {
  loading: false,
  error: null,
  products: [],
};

export const fetchAllProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const  res = await axios.get(API_URL);
    return res.data.products;
  } catch (error) {
    return error;
  }
});
const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllProducts.pending,(state)=>{
        state.loading=true
    })
    .addCase(fetchAllProducts.fulfilled,(state,action)=>{
        state.loading =false,
        state.products= action.payload,
        state.error =null
    })
    .addCase(fetchAllProducts.rejected,(state,action)=>{
        state.loading =false,
        state.error=action.payload
    })
  },
});

export default productSlice.reducer
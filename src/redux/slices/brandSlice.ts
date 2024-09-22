import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BrandItem } from "../../utils/types/Types";
import axios from "axios";
import { API_URL } from "../../utils/constants";

interface InitialState{
    loading : boolean,
    error : any,
    brands :BrandItem[]
}
const initialState :InitialState={
   loading :false,
   error : null,
   brands : []
}

export const fetchAllBrands = createAsyncThunk(
    "fetchBrands",async()=>{
        try{
            const res= await axios.get(API_URL);
            console.log(res.data.brands," from brand slice")
            return res.data.brands 

        }catch(error){
            console.log(error)
        }

})

const brandSlice = createSlice({
    name: "brandReducer",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchAllBrands.pending,(state)=>{
            state.loading = true

        })
        .addCase(fetchAllBrands.fulfilled,(state,action)=>{
            state.brands = action.payload; 
            state.loading=false
        })
        .addCase(fetchAllBrands.rejected,(state,action)=>{
            state.error = action.payload,
            state.loading = false
        })
    },



})


export default  brandSlice.reducer
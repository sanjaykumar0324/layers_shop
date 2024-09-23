import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../utils/types/Types";

interface InitialState {
  loading: boolean;
  error: any;
  cart: Cart[];
}

const initialState: InitialState = {
  loading: false,
  error: null,
  cart: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    AddItem: (state, action) => {
      const item = state.cart.find(
        (item) => item.productId === action.payload.product.id
      );
      if (item) {
        item.quantity +=action.payload.itemCount;
        console.log("iffff>>>>>>>>>>>>>>>>>>>>>>>>")
      } else {
        state.cart.push({
          productId: action.payload.product.id,
          price: action.payload.product.price,
          productName: action.payload.product.name,
          quantity: action.payload.itemCount,
          image: action.payload.product.image
          
        });
        console.log("else >>>>>>>>>>>>>>>>>>>>>>>>")
      }
    },
    RemoveItem: (state, action) => {
        console.log(">>>>>>>>>",action.payload)
        state.cart  = state.cart.filter((item)=>item.productId !== action.payload);
        console.log(state.cart,">>>>>>>>>>>>>>>>>>>>>>>>>>>>after delete")
    },
  },
});

export default cartSlice.reducer;
export const { AddItem, RemoveItem } = cartSlice.actions;

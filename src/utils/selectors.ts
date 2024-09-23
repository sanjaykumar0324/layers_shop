import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
//thunk dispatch  me first arg state hai, second extra arg or third arg action ki type h
export const useAppDispatch =()=> useDispatch<ThunkDispatch<RootState,any,any>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectBrands = (state : RootState)=> state.brands.brands;
export const selectBrandLoading = (state:RootState)=> state.brands.loading;
export const selectBrandError =(state:RootState)=>state.brands.error;

export const selectProducts= (state : RootState)=> state.products.products;
export const selectProductLoading= (state:RootState)=> state.products.loading;
export const selectProductError =(state:RootState)=>state.products.error;


export const selectCart =  (state:  RootState)=> state.cart.cart;
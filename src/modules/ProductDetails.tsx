import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { selectProducts, useAppSelector } from '../utils/selectors';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/slices/cartSlice';
import { Product } from '../utils/types/Types';

const ProductDetails : React.FC= () => {

    const[itemCount,setItemCount]=useState(1);
    const dispatch =  useDispatch();
    
    const {productName} =  useParams();
    const productData = useAppSelector(selectProducts)
    const product = productData.find((product) => product.name=== productName)
    console.log(product,"from details.....>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    const handleOnChange=(e:any)=>{
        const value = Math.max(1, Number(e.target.value)); 
        setItemCount(value);    }
   
   const handleAddCart =(product :any)=>{

    
        dispatch(AddItem({product,itemCount}));
        alert("item Added")
   }

  return (
    <div className="bg-[#F8F6F3] min-h-screen flex justify-center">
    <div className="container mx-auto px-4 lg:px-28 grid  grid-cols-1 sm:grid-cols-2">
      <div className="text-white px-6 w-[100%] pt-10">
        <img src={product?.image} className="w-full border border-slate-300" />
      </div>

      <div className="px-6 pt-4 lg:pt-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-black font-bold text-3xl">
            {product?.name}
          </h1>
          <h2 className="text-xl font-bold">
            {product?.price}{" "}
            <span className="font-normal text-lg text-slate-700">
              + Free Shipping
            </span>
          </h2>
          <p>
           {product?.desc}
          </p>
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={itemCount}
              onChange={handleOnChange}
              className="w-12 h-12 text-center bg-white border border-slate-400"
            />
            <button onClick={()=>handleAddCart(product)} className='bg-black text-white p-2'>Add to Cart</button>
          </div>
          <hr className="border-slate-300 mt-5" />
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails
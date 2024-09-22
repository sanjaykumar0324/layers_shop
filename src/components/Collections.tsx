import React, { useEffect, useState } from 'react'
import {   selectProducts, useAppDispatch, useAppSelector } from '../utils/selectors';
import { fetchAllProducts } from '../redux/slices/productSlice';
import { useParams } from 'react-router-dom';
import { Product } from '../utils/types/Types';
import SingleProduct from './SingleProduct';

const Collections:React.FC = () => {
  const [filteredList,setFilteredList] = useState<Product[]>();
  const dispatch = useAppDispatch();
    const {brand} = useParams();


    const productsData = useAppSelector(selectProducts);
   
    useEffect(()=>{
      dispatch(fetchAllProducts())

    },[])
    useEffect(()=>{
      if(productsData.length>0){
      const filterList = productsData.filter((product)=>product.brandName === brand);
      console.log("Rendered collections")
      setFilteredList(filterList)
      }
      
    },[brand,productsData])

    


  return (
    <div>
        <div className=' mx-auto bg-slate-200 pt-10'>
          <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>

          {
            filteredList?.map((product)=>(
            <SingleProduct key={product.id} product={product}/>
            ))
          }
          </div>
        </div>
    </div>
  )
}

export default Collections
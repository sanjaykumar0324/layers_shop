import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { selectProductLoading, selectProducts, useAppDispatch, useAppSelector } from '../utils/selectors';
import { fetchAllProducts } from '../redux/productSlice';

const Collections:React.FC = () => {
  const [filteredList,setFilteredList] = useState([]);
  const dispatch = useAppDispatch();
    const {brand} = useParams();
    const productsData = useAppSelector(selectProducts);
    const productLoading = useAppSelector(selectProductLoading);
    useEffect(()=>{
      dispatch(fetchAllProducts())

    },[])

    


  return (
    <div>
        <div className=' mx-auto bg-slate-200 pt-10'>
          <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>

          {
            productsData.map((product)=>(
              <div key={product.id} className='flex flex-col items-center'> 
              <img  src={product.image} className='w-[250px]'/>
                 <p>{product.name}</p>
              </div>
            ))
          }
          </div>
        </div>
    </div>
  )
}

export default Collections
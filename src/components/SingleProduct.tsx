import React from 'react'
import { Product } from '../utils/types/Types'


interface props{
    product : Product
}

const SingleProduct:React.FC<props> = ({product}) => {
  return (
    <div key={product.id} className='flex flex-col items-center mb-10'> 
    <img  src={product.image} className='w-[250px]'/>
       <p>{product.name}</p>
       <p>{product.price}$</p>
    </div>
  )
}

export default SingleProduct
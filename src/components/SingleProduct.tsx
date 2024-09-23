import React from 'react'
import { Product } from '../utils/types/Types'


interface props{
    product : Product,
    onClick :  React.MouseEventHandler<HTMLDivElement>

}

const SingleProduct:React.FC<props> = ({product,onClick}) => {
  return (
    <div key={product.id} className='flex flex-col items-center justify-center mb-10 bg-white py-10 cursor-pointer' onClick={onClick}> 
    <img  src={product.image} className='w-[250px]'/>
       <p>{product.name}</p>
       <p>{product.price}$</p>
    </div>
  )
}

export default SingleProduct
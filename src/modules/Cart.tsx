import React from 'react';
import { selectCart, useAppSelector, useAppDispatch } from '../utils/selectors';
import { RemoveItem } from '../redux/slices/cartSlice';

const Cart: React.FC = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const handleRemove=(productId :any )=>{
    console.log("from cart",productId)
      dispatch(RemoveItem(productId))
  }
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-semibold">Shopping Cart</h2>
      </div>
      <div className="p-6">
        <ul>
          {cart.map(product => (
            <li key={product.productId} className="flex justify-between items-center py-4 border-b">
              <div className="flex items-center">
                <img src={product.image} alt={product.productName} className="w-24 h-24 rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{product.productName}</h3>
                  <div className=' flex gap-4  items-center'>
                    <button className='px-4 py-2 bg-slate-300'>+</button>
                    <p>Qty : {product.quantity}</p>
                    <button className='px-4 py-2 bg-slate-300'>-</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-4">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => handleRemove(product.productId)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 border-t">
        <div className="flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

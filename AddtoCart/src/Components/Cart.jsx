import React from 'react';

const Cart = ({cart, closeCart, removeFromCart, totalprice}) => {
    
             return (
              <div className='text-black'>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-2/4 h-max ">
        <h2 className="text-2xl font-bold mb-5 text-center">Your Cart</h2>
        
        {cart.length === 0 ? (
          <p className='text-center text-2xl font-semibold mb-14 mt-14'>Your cart is empty.</p>
        ) : (
          <div className="overflow-y-auto h-64 border border-gray-200 rounded-lg p-4">
              <ul>
            {cart.map((item) => (
              <div className='text-center justify-center border border-gray-900 rounded-lg p-2 m-5'>
              <li className="mb-4 flex justify-between text-xs" key={item.id}>
                <div className=''> 
                  <li className=' flex flex-col'>
                  <ul><h3 className=''>{item.title}</h3></ul>
                 <ul><img src={item.image} className='w-20 h-20 ml-16 '/></ul> 
                 <ul><p className='text-xl font-medium mr-14'>-${item.price}</p></ul> 
                  </li>
                </div>
                <button onClick={() => removeFromCart(item)}
                className="bg-black mt-10 text-white h-10 rounded-lg hover:text-red-600"> Remove
                </button>
              </li>
              </div>
            ))}
          </ul>
          </div>
        )}
        <div className='flex items-baseline'>
        <button onClick={closeCart} className= "flex mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-black hover:text-red-800">Close</button>
        <div className='pl-72'>Total Amount : <span className="font-bold text-xl ">${totalprice.toFixed(2)} </span> </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cart;
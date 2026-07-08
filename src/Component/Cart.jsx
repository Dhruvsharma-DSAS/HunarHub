import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Cart = () => {
  const [cart, setCart] = useState(0)

  return (
    <div className='w-full min-h-[60vh] p-8'>
      <div className='text-3xl font-bold ml-[70px] mb-7 text-[#333333]'>Your Cart</div>
      {cart === 0 ? (
        <div className='w-[90%] m-auto bg-[white] rounded-4xl h-[50vh] grid place-items-center text-center content-center gap-4 border border-dashed border-[#DCD4C2] '>
          <div className='m-2 text-3xl'>🛒</div>
          <div className='text-3xl'>Your cart is empty</div>
          <div className='text-[#8C8379]'>Add handmade products or book a service to get started.</div>
          <Link to="/"
            className="bg-[#C2542E] p-3  pl-4 pr-4 rounded-2xl text-[white] ">
            Start Shopping
          </Link>
        </div>


      ) : (
        <>
          <div>Hello</div></>
      )
      }
    </div>
  )
}

export default Cart
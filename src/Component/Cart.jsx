import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, getTotal } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);


  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setOrderPlaced(true);
    }
  };

  if (orderPlaced) {
    return (
      <div className="w-full min-h-[60vh] p-8">
        <div className="w-[90%] m-auto bg-white rounded-3xl h-[50vh] grid place-items-center text-center content-center gap-4 border border-[#DCD4C2]">
          <div className="text-5xl">✅</div>
          <div className="text-3xl font-bold text-[#29241F]">Order Placed!</div>
          <div className="text-[#8C8379]">Thank you for shopping with hunarhub. Your makers will confirm soon.</div>
          <Link to="/" className="bg-[#C2542E] p-3 pl-6 pr-6 rounded-2xl text-white font-bold">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[60vh] p-8">
      <div className="text-3xl font-bold ml-[70px] mb-7 text-[#333333]">Your Cart</div>

      {cartItems.length === 0 ? (
        <div className="w-[90%] m-auto bg-white rounded-3xl h-[50vh] grid place-items-center text-center content-center gap-4 border border-dashed border-[#DCD4C2]">
          <div className="m-2 text-3xl">🛒</div>
          <div className="text-3xl">Your cart is empty</div>
          <div className="text-[#8C8379]">Add handmade products or book a service to get started.</div>
          <Link to="/" className="bg-[#C2542E] p-3 pl-4 pr-4 rounded-2xl text-white">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="w-[90%] m-auto flex gap-6">

          <div className="flex-1 flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.Id} className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-[#EBE3D6]">
                <img src={item.imglink} alt={item.Product} className="w-24 h-24 rounded-xl object-cover" />

                <div className="flex-1">
                  <h3 className="font-bold text-lg text-[#29241F]">{item.Product}</h3>
                  <p className="text-sm text-[#8C8479] mt-1">{item.Maker} · {item.Distance}</p>
                  <p className="text-sm text-[#8C8479]">{item.category}</p>
                </div>

                <div className="flex items-center border border-[#DDD3C2] rounded-xl">
                  <button
                    onClick={() => decreaseQty(item.Id)}
                    className="px-4 py-2 text-lg font-bold hover:bg-gray-100 rounded-l-xl"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 font-bold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.Id)}
                    className="px-4 py-2 text-lg font-bold hover:bg-gray-100 rounded-r-xl"
                  >
                    +
                  </button>
                </div>

                <div className="text-right w-24">
                  <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
                  {item.quantity > 1 && (
                    <p className="text-xs text-[#8C8479]">₹{item.price} each</p>
                  )}
                </div>

                <button
                  onClick={() => removeFromCart(item.Id)}
                  className="text-[#C2542E] font-bold text-sm border border-[#DDD3C2] px-3 py-2 rounded-lg hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="w-[320px] bg-white rounded-2xl p-6 border border-[#EBE3D6] h-fit">
            <h3 className="font-bold text-xl text-[#29241F] mb-4">Order Summary</h3>

            <div className="flex justify-between mb-3">
              <span className="text-[#8C8479]">Items ({cartItems.reduce((s, i) => s + i.quantity, 0)})</span>
              <span className="font-bold">₹{getTotal()}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span className="text-[#8C8479]">Platform fee</span>
              <span className="font-bold text-green-700">₹0</span>
            </div>

            <div className="flex justify-between mb-3">
              <span className="text-[#8C8479]">Delivery</span>
              <span className="font-bold text-green-700">Free</span>
            </div>

            <div className="border-t border-[#EBE3D6] my-4"></div>

            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg">₹{getTotal()}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#C2542E] text-white font-bold py-4 rounded-xl hover:bg-[#A8431F]"
            >
              Place Order
            </button>

            <p className="text-center text-[#8C8479] text-xs mt-3">
              Pay maker directly · Cash or UPI
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
import React, { useState, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import items from '../Data/items'
import { CartContext } from './CartContext'
import { AuthContext } from './AuthContext'

const Productdetail = () => {
  const { id } = useParams();
  const { cartItems, addToCart, increaseQty, decreaseQty } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const product = items.find((item) => item.Id === id);

  let qtyInCart = 0;
  if (cartItems && product) {
    const cartItem = cartItems.find((item) => item.Id === product.Id);
    if (cartItem) {
      qtyInCart = cartItem.quantity;
    }
  }

  if (!product) {
    return <h2 className="text-center py-20">Product not found</h2>;
  }

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-8">



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


        <div>
          <div className="h-[500px] bg-[#F0EDE8] rounded-2xl overflow-hidden">
            {product.imglink && (
              <img
                src={product.imglink}
                alt={product.Product}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="flex gap-3 mt-4">
            <div className="w-28 h-28 bg-[#F0EDE8] rounded-xl overflow-hidden">
              <img src={product.imglink} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 h-28 bg-[#F0EDE8] rounded-xl overflow-hidden">
              <img src={product.imglink} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 h-28 bg-[#F0EDE8] rounded-xl overflow-hidden">
              <img src={product.imglink} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-28 h-28 bg-[#F0EDE8] rounded-xl overflow-hidden">
              <img src={product.imglink} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>


        <div>
          <span className="bg-[#29241F] text-white text-xs font-bold px-3 py-1 rounded">
            {product.Type}
          </span>

          <h1 className="text-4xl font-bold text-[#29241F] mt-4 mb-3">
            {product.Product}
          </h1>

          <p className="mb-5">
            <span className="bg-[#4CAF50] text-white text-sm font-bold px-2 py-1 rounded">
              ★ {product.Rating}
            </span>{" "}
            <span className="text-[#8C8479]">
              {product.TotalNoRating} reviews · {product.Distance} away
            </span>
          </p>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl font-bold text-[#29241F]">₹{product.price}</span>
            {product.DiscountPrice && (
              <span className="text-[#A5A098] text-xl line-through">
                ₹{product.DiscountPrice}
              </span>
            )}
            {product.Discount && (
              <span className="bg-[#F0E4D8] text-[#C2542E] font-bold px-3 py-1 rounded">
                {product.Discount}
              </span>
            )}
          </div>
          <p className="text-[#8C8479] mb-6">
            Inclusive of all taxes · Pay the maker directly
          </p>


          <div className="bg-white border border-[#eee] rounded-2xl p-4 flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-[#C8643C] text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
                {product.Maker[0]}
              </div>
              <div>
                <p className="font-bold text-[#29241F]">{product.Maker}</p>
                <p className="text-[#8C8479] text-sm">
                  {product.category} · Verified maker · {product.Distance}
                </p>
              </div>
            </div>
            <Link to={`/profile/${product.Id}`} className="border border-[#ddd] font-bold px-5 py-2 rounded-xl">
              Visit shop
            </Link>
          </div>


          <div className="flex gap-4 mb-4">
            {qtyInCart > 0 ? (
              <div className="flex-1 flex items-center justify-between border-2 border-[#C8643C] bg-[#F0E4D8] rounded-xl overflow-hidden">
                <button onClick={() => decreaseQty(product.Id)} className="w-1/3 py-3 text-2xl font-bold text-[#C8643C] hover:bg-[#EED5BE] transition-colors">−</button>
                <span className="font-bold text-xl text-[#C8643C]">{qtyInCart}</span>
                <button onClick={() => increaseQty(product.Id)} className="w-1/3 py-3 text-2xl font-bold text-[#C8643C] hover:bg-[#EED5BE] transition-colors">+</button>
              </div>
            ) : (
              <button
                onClick={() => {
                  if (!user) {
                    navigate("/signin");
                    return;
                  }
                  addToCart(product);
                }}
                className="flex-1 font-bold rounded-xl transition-colors bg-[#C8643C] text-white hover:bg-[#b3552f] py-4"
              >
                Add to cart
              </button>
            )}
          </div>

          <Link to={user ? "/cart" : "/signin"}>
            <button className="w-full group flex items-center justify-center gap-2 bg-[#29241F] text-white font-bold py-4 rounded-xl mb-8 hover:bg-black transition-colors">
              <span>Go to cart</span>
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </Link>


          <h3 className="text-xl font-bold text-[#29241F] mb-2">About this product</h3>
          <p className="text-[#5c564e] mb-4">
            {product.Product} by {product.Maker} — handmade with care, sourced
            directly from your local maker.
          </p>

          <div className="flex flex-wrap gap-6 text-[#5c564e]">
            <span>📍 {product.Distance} from you</span>
            <span>🤝 Pay direct (cash/UPI)</span>
            <span>⭐ {product.Rating} rated</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetail
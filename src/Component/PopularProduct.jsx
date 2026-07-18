import React, { useContext } from 'react'
import items from "../Data/items";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext";

const PopularProduct = () => {
  const { addToCart } = useContext(CartContext);
  const popular = items.slice(0, 10);

  const handleAdd = (e, item) => {
    e.preventDefault();
    addToCart(item);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#29241F]">Fresh from local makers</h2>
        <Link to="/category/All categories" className="text-[#C2542E] font-medium">View all →</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {popular.map((item) => (
          <Link
            to={`/product/${item.Id}`}
            key={item.Id}
            className="bg-white border border-[#eee] rounded-xl p-3 shadow-sm block hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="relative h-44 bg-[#F7F6F5] rounded-lg mb-3 overflow-hidden">
              {item.imglink && (
                <img
                  src={item.imglink}
                  alt={item.Product}
                  className="w-full h-full object-cover"
                />
              )}

              {item.Type && (
                <span className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded">
                  {item.Type}
                </span>
              )}


              {item.Discount?.trim() && (
                <span className="absolute bottom-2 left-2 bg-[#C8643C] text-white text-xs font-bold px-2 py-1 rounded">
                  {item.Discount}
                </span>
              )}
            </div>

            <h3 className="font-bold text-sm text-[#29241F] mb-1">
              {item.Product}
            </h3>

            <p className="text-[#8C8479] text-xs mb-2">
              {item.Maker} · {item.Distance}
            </p>

            <p className="text-[#4CAF50] text-xs font-bold mb-2">
              ★ {item.Rating}{" "}
              <span className="text-[#A5A098]">({item.TotalNoRating})</span>
            </p>

            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-[#29241F]">₹{item.price}</span>
                {item.DiscountPrice && (
                  <span className="text-[#A5A098] text-xs line-through ml-1">
                    ₹{item.DiscountPrice}
                  </span>
                )}
              </div>
              <button 
                onClick={(e) => handleAdd(e, item)}
                className="bg-[#29241F] hover:bg-[#C2542E] transition-colors text-white text-sm px-3 py-1 rounded"
              >
                Add
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PopularProduct
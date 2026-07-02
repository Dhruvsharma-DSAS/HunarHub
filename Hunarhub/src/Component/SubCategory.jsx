import React from 'react'
import items from '../Data/items'

const SubCategory = ({ category, subCategory }) => {
  let filtered = [];

  if (!category || category === "All categories") {
    filtered = items;
  } else if (category === "Book a Service") {
    filtered = items.filter((item) => item.Type === "SERVICE");
  } else if (category === "Handmade Products") {
    filtered = items.filter((item) => item.Type === "HANDMADE" || item.Type === "TO ORDER");
  } else {
    filtered = items.filter((item) => item.category === category);
  }

  if (subCategory) {
    filtered = filtered.filter((item) => item.subCategory === subCategory);
  }

  return (
    <div className="bg-[#FAF6EE] p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div key={item.Id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={item.imglink}
                alt={item.Product}
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-lg">
                {item.Type}
              </span>
              <button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full">
                ♡
              </button>
              {item.Discount && (
                <span className="absolute bottom-3 left-3 bg-[#c2542e] text-white text-xs px-3 py-1 rounded-lg">
                  {item.Discount}
                </span>
              )}
            </div>


            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.Product}</h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.Maker} · {item.Distance}
              </p>

              <p className="mt-2">
                <span className="bg-green-700 text-white text-sm px-2 py-1 rounded-md">
                  ★ {item.Rating}
                </span>
                <span className="text-gray-400 text-sm ml-2">
                  ({item.TotalNoRating})
                </span>
              </p>


              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-xl font-bold">₹{item.price}</span>
                  {item.DiscountPrice && (
                    <span className="text-gray-400 line-through text-sm ml-2">
                      ₹{item.DiscountPrice}
                    </span>
                  )}
                </div>
                <button className="bg-black text-white text-sm px-5 py-2 rounded-xl">
                  {item.Type === "HANDMADE" ? "Add" : "Request"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubCategory
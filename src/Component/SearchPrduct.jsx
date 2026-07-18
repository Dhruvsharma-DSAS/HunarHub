import React from 'react'
import { useParams, Link } from 'react-router-dom'
import items from '../Data/items'

const SearchPrduct = () => {
  const { query } = useParams();

  const results = items.filter((item) =>
    item.Product.toLowerCase().includes(query.toLowerCase()) ||
    item.Maker.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  let content;

  if (results.length === 0) {
    content = (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h2 className="text-3xl font-bold text-[#29241F] mb-4">No results found for "{query}"</h2>
        <p className="text-[#8C8479] mb-8">Try searching for a different item, maker, or category.</p>
        <Link to="/" className="bg-[#C2542E] text-white font-bold px-8 py-4 rounded-xl no-underline hover:bg-[#b3552f]">
          ← Back to home
        </Link>
      </div>
    );
  } else {
    content = (
      <div>
        <h2 className="text-3xl font-bold text-[#29241F] mb-8">
          Results for "{query}" <span className="text-[#8C8479] text-xl font-normal ml-2">· {results.length} items</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {results.map((item) => (
            <Link
              to={`/product/${item.Id}`}
              key={item.Id}
              className="bg-white border border-[#eee] rounded-xl p-3 shadow-sm block hover:shadow-md transition-shadow cursor-pointer no-underline"
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
                <button className="bg-[#29241F] text-white text-sm px-3 py-1 rounded">
                  Add
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-10 min-h-screen">
      {content}
    </div>
  )
}

export default SearchPrduct
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import items from '../Data/items'

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const results = items.filter((item) =>
    item.Product.toLowerCase().includes(query.toLowerCase()) ||
    item.Maker.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  let dropdown;

  if (query === "") {
    dropdown = null;
  } else if (results.length === 0) {
    dropdown = (
      <div className="absolute w-full bg-white border border-[#eee] rounded-lg shadow-lg left-0 top-[44px] z-50">
        <p className="p-4 text-[#8C8479]">No results found for "{query}"</p>
      </div>
    );
  } else {
    dropdown = (
      <div className="absolute w-full max-h-[400px] overflow-y-auto bg-white border border-[#eee] rounded-lg shadow-lg left-0 top-[44px] z-50">
        {results.map((item) => (
          <Link
            to={`/product/${item.Id}`}
            key={item.Id}
            onClick={() => setQuery("")}
            className="flex items-center gap-3 p-3 hover:bg-[#F7F3EC] no-underline"
          >
            <div className="w-12 h-12 bg-[#F0EDE8] rounded-lg overflow-hidden shrink-0">
              {item.imglink && (
                <img src={item.imglink} alt="" className="w-full h-full object-cover" />
              )}
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-[#29241F]">{item.Product}</p>
              <p className="text-xs text-[#8C8479]">{item.Maker} · {item.Distance}</p>
            </div>
            <p className="font-bold text-[#29241F]">₹{item.price}</p>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="relative ml-33.5 w-[600px] m-2.5">

      <div className="flex h-[40px] border-[1.5px] border-[#29241F] rounded-lg overflow-hidden items-center bg-white">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-full flex-grow px-3 outline-none border-none"
          placeholder="Search products, services or makers..."
        />
        <button className="bg-[#c2542e] h-full text-center w-[100px] text-white">
          Search
        </button>
      </div>

      {dropdown}

    </div>
  )
}

export default SearchBar


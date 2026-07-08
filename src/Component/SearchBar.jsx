import React from 'react'

const SearchBar = () => {

    


    return (
      
        <div className="flex ml-33.5 w-[600px] h-[40px] m-2.5 border-[1.5px] border-[#29241F] rounded-lg overflow-hidden items-center">

          <input
            type="text"
            className="h-full flex-grow px-3 outline-none border-none"
            placeholder="Search products,services or makers..."
          />

          <button className="bg-[#c2542e] h-full  text-center w-[100px]">
            Search
          </button>
        </div>
    )
}

export default SearchBar
import React from "react";
import { Link } from "react-router-dom";
import crossplane from "../../Image/crossplane.png";
import SearchBar from "./SearchBar";


const place = ["Jaipur 302001", "Pune"];

const totalorder = 0;

const Navbar = () => {
  return (
    <div className="p-2.5 bg-white shadow-sm">
      <nav className="flex justify-around">
        <Link to="/" className="text-4xl font-bold ml-4 m-2.5">
          <span className="text-[#333333]">hunar</span>
          <span className="text-[#C8643C]">hub</span>
        </Link>
        <div className="flex items-center ml-[10px] p-2">
          <img src={crossplane} alt="location" className="w-[45px] h-[45px] object-contain" />
          <div>
            <p className="text-[#8C8479] ml-1.5 text-sm">Deliver to</p>
            <select
              id="place"
              name="place"
              className="bg-transparent font-bold text-black border-none focus:ring-0 cursor-pointer outline-none"
            >
              {place.map((item, id) => (
                <option key={id} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

   <SearchBar/>

        <div className="flex items-center gap-6 ml-auto mr-4">
          <Link to="/signin" className="cursor-pointer">
            <p className="text-[#8C8479] text-xs">Account</p>
            <p className="font-bold">Sign in</p>
          </Link>


          <div className="flex items-center gap-1 cursor-pointer">
            <div className="relative">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-[#C8643C] text-white text-[10px] font-bold px-1.5 rounded-full">
                {totalorder}
              </span>
            </div>

            <Link to="/Cart">
              <span className="font-bold text-lg">Cart</span>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

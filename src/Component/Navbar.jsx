import React, { useContext } from "react";
import { Link } from "react-router-dom";
import crossplane from "../../Image/crossplane.png";
import SearchBar from "./SearchBar";
import { CartContext } from "./CartContext";

const place = [
  "Delhi 110001",
  "Jaipur 302001",
  "Mumbai 400001",
  "Pune 411001",
  "Bengaluru 560001",
  "Hyderabad 500001",
  "Chennai 600001",
  "Kolkata 700001",
  "Ahmedabad 380001",
  "Surat 395003",
  "Lucknow 226001",
  "Kanpur 208001",
  "Nagpur 440001",
  "Indore 452001",
  "Bhopal 462001",
  "Patna 800001",
  "Vadodara 390001",
  "Ludhiana 141001",
  "Agra 282001",
  "Nashik 422001",
  "Varanasi 221001",
  "Amritsar 143001",
  "Ranchi 834001",
  "Coimbatore 641001",
  "Chandigarh 160001",
  "Guwahati 781001",
  "Kochi 682001",
  "Thiruvananthapuram 695001",
  "Bhubaneswar 751001",
  "Dehradun 248001",
  "Raipur 492001",
  "Jodhpur 342001",
  "Udaipur 313001",
  "Kota 324001",
  "Gurugram 122001",
  "Noida 201301",
  "Faridabad 121001",
  "Ghaziabad 201001",
  "Mysuru 570001",
  "Visakhapatnam 530001",
];

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  return (
    <div className="p-2.5 bg-white shadow-sm">
      <nav className="flex justify-around">
        <Link to="/" className="text-4xl font-bold ml-4 m-2.5">
          <span className="text-[#333333]">hunar</span>
          <span className="text-[#C8643C]">hub</span>
        </Link>
        <div className="flex items-center ml-[10px] p-2">
          <img
            src={crossplane}
            alt="location"
            className="w-[45px] h-[45px] object-contain"
          />
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

        <SearchBar />

        <div className="flex items-center gap-6 ml-auto mr-4">
          <Link to="/signin" className="cursor-pointer">
            <p className="text-[#8C8479] text-xs">Account</p>
            <p className="font-bold">Sign in</p>
          </Link>
          <Link to="/order" className="cursor-pointer">
            <p className="text-[#8C8479] text-xs">Return</p>
            <p className="font-bold">& Order</p>
          </Link>
          <div className="flex items-center gap-1 cursor-pointer">
            <div className="relative">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-[#C8643C] text-white text-[10px] font-bold px-1.5 rounded-full">
                {getTotalItems()}
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

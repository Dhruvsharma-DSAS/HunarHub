import React from "react";
import { Link } from "react-router";

const imgurl1 =
  "https://i.pinimg.com/736x/ad/f4/13/adf413b3be5d23a38caa285ae62bd388.jpg";
const imgurl2 =
  "https://i.pinimg.com/1200x/03/c8/24/03c82440d198e4193adbb93c542f97f6.jpg";
const imgurl3 =
  "https://i.pinimg.com/1200x/e7/de/64/e7de64240605d7a815a6450bdcf80a85.jpg";

const Firstpage = () => {
  return (
    <div className="grid grid-cols-12 m-10 gap-4 px-10 py-4 max-w-[1400px] mx-auto h-[550px]">
      <Link 
        to="/category/All categories"
        className="col-span-8 h-full bg-cover bg-center rounded-2xl p-10 flex flex-col justify-end hover:scale-[1.01] hover:shadow-xl transition-all duration-300 relative group overflow-hidden block" 
        style={{ backgroundImage: `url(${imgurl1})` }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 rounded-2xl"></div>
        <div className="rounded-xl w-fit relative z-10">
          <p className="text-red-400 font-bold tracking-widest mb-2 drop-shadow-md text-sm">FESTIVE BAZAAR · LIVE</p>
          <h1 className="text-5xl font-extrabold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg leading-tight">Handmade by people<br/>on your street</h1>
          <p className="text-stone-200 mb-8 max-w-lg text-lg drop-shadow-lg">Buy handmade products and book skilled services — from verified potters, tailors, cobblers and artisans near you.</p>
          <span className="bg-[#9da443] text-black px-8 py-3 rounded-xl font-bold group-hover:bg-[#d6d2a8] transition-colors inline-block">
            Check now
          </span>
        </div>
      </Link>

      <div className="col-span-4 flex flex-col gap-4 h-full">
        <Link
          to="/category/Potter (Kumhar)"
          className="h-full w-full bg-cover bg-center rounded-2xl p-6 flex flex-col justify-end hover:scale-[1.02] hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
          style={{ backgroundImage: `url(${imgurl2})` }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-white font-bold text-xl">Up to 40% off diyas</h2>
            <p className="text-white text-sm group-hover:translate-x-1 transition-transform">Potters near you →</p>
          </div>
        </Link>
        <Link
          to="/category/Tailor"
          className="h-full w-full bg-cover bg-center rounded-2xl p-6 flex flex-col justify-end hover:scale-[1.02] hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
          style={{ backgroundImage: `url(${imgurl3})` }}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-white font-bold text-xl">Book a tailor today </h2>
            <p className="text-white text-sm group-hover:translate-x-1 transition-transform">Stitching & alterations →</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Firstpage;

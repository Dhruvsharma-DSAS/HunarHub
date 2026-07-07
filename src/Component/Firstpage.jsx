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
<div 
        className="col-span-8 h-full bg-cover bg-center rounded-2xl p-10 flex flex-col justify-end" 
        style={{ backgroundImage: `url(${imgurl1})` }}
      >
        <div className="  rounded-xl w-fit ">
          <p className="text-[#c51c1c] font-bold tracking-wider mb-2">FESTIVE BAZAAR · LIVE</p>
          <h1 className="text-4xl font-bold text-[#f4f8e8] mb-4">Handmade by people<br/>on your street</h1>
          <p className="text-white mb-6">Buy handmade products and book skilled services — from verified potters, tailors, cobblers and artisans near you.</p>
          <Link to="/category/All categories" className="bg-[#9da443] text-black px-6 py-2 rounded-lg font-bold hover:bg-[#d6d2a8]">
            Check now
          </Link>
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-4 h-full">
        <div
          className="h-full w-full bg-cover bg-center rounded-2xl p-6 flex flex-col justify-end"
          style={{ backgroundImage: `url(${imgurl2})` }}
        >
          <h2 className="text-white font-bold text-xl">Up to 40% off diyas</h2>
          <p className="text-white text-sm">Potters near you →</p>
        </div>
        <div
          className="h-full w-full bg-cover bg-center rounded-2xl p-6 flex flex-col justify-end"
          style={{ backgroundImage: `url(${imgurl3})` }}
        >
          <h2 className="text-white font-bold text-xl">Book a tailor today </h2>
          <p className="text-white text-sm">Stitching & alterations →</p>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;

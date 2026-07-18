import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import items from '../Data/items';

const occasionList = [
  "Diwali Special",
  "Pooja & Temple",
  "Home & Decor",
  "Gifts under ₹300",
  "Festive Wear",
  "Repairs & Fixes"
];

const OccasionBox = () => {
  const { occName } = useParams();
  const [activeOccasion, setActiveOccasion] = useState(occName || "Diwali Special");

  useEffect(() => {
    if (occName) {
      setActiveOccasion(occName);
    }
  }, [occName]);


  let filtered = [];
  if (activeOccasion === "Diwali Special") {
    filtered = items.filter(item => item.subCategory === "Diyas & Lamps" || item.subCategory === "Idols & Decor");
  } else if (activeOccasion === "Pooja & Temple") {
    filtered = items.filter(item => item.subCategory === "Metal Craft" || item.subCategory === "Pooja Items");
  } else if (activeOccasion === "Home & Decor") {
    filtered = items.filter(item => item.subCategory === "Home Decor" || item.subCategory === "Wood & Bamboo");
  } else if (activeOccasion === "Gifts under ₹300") {
    filtered = items.filter(item => item.price < 300);
  } else if (activeOccasion === "Festive Wear") {
    filtered = items.filter(item => item.category === "Tailor" || item.subCategory === "Textiles & Weaves");
  } else if (activeOccasion === "Repairs & Fixes") {
    filtered = items.filter(item => item.Type === "SERVICE");
  } else {
    filtered = items;
  }

  return (
    <div className="flex p-10 gap-4 bg-[#FAF6EE] min-h-screen">


      <div className="w-[360px] shrink-0 rounded-3xl bg-white shadow-sm p-6 h-fit">
        <div className="text-sm font-semibold tracking-wider text-gray-500 mb-4 uppercase">
          Shop By Occasion
        </div>

        <div className="flex flex-col gap-1">
          {occasionList.map((item, idx) => (
            <button
              key={idx}
              className="w-full text-left px-4 py-3 rounded-xl text-lg transition-colors block"
              style={{
                color: activeOccasion === item ? "#c2542e" : "#1e1e1e",
                backgroundColor: activeOccasion === item ? "#FCF1EA" : "transparent",
                fontWeight: activeOccasion === item ? 600 : 400
              }}
              onClick={() => setActiveOccasion(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>


      <div className="flex-1">
        <div className="bg-[#FAF6EE] p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <Link to={`/product/${item.Id}`} key={item.Id} className="bg-white rounded-2xl overflow-hidden shadow-sm block hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative">
                  <img
                    src={item.imglink}
                    alt={item.Product}
                    className="w-full h-52 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-lg font-bold">
                    {item.Type}
                  </span>
                  {item.Discount && (
                    <span className="absolute bottom-3 left-3 bg-[#c2542e] text-white text-xs font-bold px-3 py-1 rounded-lg">
                      {item.Discount}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-[#29241F]">{item.Product}</h3>

                  <p className="text-sm text-[#8C8479] mt-1">
                    {item.Maker} · {item.Distance}
                  </p>

                  <p className="mt-2 flex items-center">
                    <span className="bg-[#4CAF50] text-white text-sm px-2 py-1 rounded-md font-bold">
                      ★ {item.Rating}
                    </span>
                    <span className="text-[#A5A098] text-sm ml-2 font-medium">
                      ({item.TotalNoRating})
                    </span>
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-xl font-bold text-[#29241F]">₹{item.price}</span>
                      {item.DiscountPrice && (
                        <span className="text-[#A5A098] line-through text-sm ml-2">
                          ₹{item.DiscountPrice}
                        </span>
                      )}
                    </div>
                    <button
                      className="bg-[#29241F] text-white text-sm px-5 py-2 rounded-xl font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                      }}
                    >
                      {item.Type === "HANDMADE" ? "Add" : "Request"}
                    </button>
                  </div>
                </div>
              </Link>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full py-20 text-center text-[#8C8479]">
                No products found for this occasion.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasionBox;

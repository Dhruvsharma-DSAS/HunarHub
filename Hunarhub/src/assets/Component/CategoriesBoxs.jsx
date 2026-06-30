import React, { useState } from "react";
import SubCategory from "./SubCategory";
import { Fragment } from 'react'


const CategoriesBox = ({ cat }) => {
  const [activeCategory, setActiveCategory] = useState(cat);

  const categorySection = [
    { type: "All categories", subType: [] },
    { type: "Potter (Kumhar)", subType: ["Diyas & Lamps", "Pots & Matkas", "Idols & Decor", "Clay Kitchenware"] },
    { type: "Tailor", subType: ["Kurta & Suits", "Alterations", "Blouse & Saree", "Custom Stitching"] },
    { type: "Cobbler", subType: ["Shoe Repair", "Handmade Footwear", "Polish & Care", "Bag Repair"] },
    { type: "Artisan", subType: ["Block-Print", "Textiles", "Cane & Basketry", "Brass & Metal", "Handicraft Decor"] },
    { type: "Small Vendor", subType: ["Handloom & Fabric", "Accessories", "Pooja Essentials", "Home Goods"] }
  ];

  const handleToggle = (type) => {
    if (activeCategory === type) {
      setActiveCategory(null);
    } else {
      setActiveCategory(type);
    }
  };

  return (
    <div className="flex p-10 gap-4 bg-[#FAF6EE]">

      <div className="w-[360px] shrink-0 rounded-3xl bg-white shadow-sm p-6 h-fit">
        <div className="text-sm font-semibold tracking-wider text-gray-500 mb-4">
          CATEGORIES
        </div>

        <div className="flex flex-col gap-1">
          {categorySection.map((item, idx) => (
            <div key={idx}>
              <button
                className="w-full text-left px-4 py-3 rounded-xl text-lg transition-colors"
                style={{
                  color: activeCategory === item.type ? "#c2542e" : "#1e1e1e",
                  backgroundColor: activeCategory === item.type ? "#FCF1EA" : "transparent",
                  fontWeight: activeCategory === item.type ? 600 : 400
                }}
                onClick={() => handleToggle(item.type)}
              >
                {item.type}
              </button>
              {activeCategory === item.type && item.subType.length > 0 && (
                <div className="flex flex-col gap-1 pl-6 py-2">
                  {item.subType.map((sub, subIdx) => (
                    <button
                      key={subIdx}
                      className="text-left text-gray-600 hover:text-[#c2542e] py-1"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <SubCategory category={activeCategory} />
      </div>
    </div>
  );
};

export default CategoriesBox;
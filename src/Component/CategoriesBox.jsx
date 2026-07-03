import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SubCategory from "./SubCategory";
import { Fragment } from 'react'


const CategoriesBox = () => {

  

  const { catName } = useParams();
  const [activeCategory, setActiveCategory] = useState(catName);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  useEffect(() => {
    if (catName) {
      setActiveCategory(catName);
      setActiveSubCategory(null);
    }
  }, [catName]);

  const categorySection = [
    { type: "All categories", subType: [] },
    { type: "Potter (Kumhar)", subType: ["Diyas & Lamps", "Pots & Matkas", "Idols & Decor", "Clay Kitchenware"] },
    { type: "Tailor", subType: ["Custom Stitching", "Tailoring Service", "Readymade Wear"] },
    { type: "Cobbler", subType: ["Footwear", "Shoe Repair", "Leather Goods"] },
    { type: "Artisan", subType: ["Home Decor", "Metal Craft", "Textiles & Weaves", "Wood & Bamboo"] },
    { type: "Small Vendor", subType: ["Accessories", "Pooja Items", "Textiles & Weaves", "Electrical", "Home Food", "Plumbing", "Clock Repair"] },
    { type: "Handmade Products", subType: ["Home Decor", "Textiles & Weaves", "Footwear", "Metal Craft", "Wood & Bamboo"] },
    { type: "Book a Service", subType: ["Plumbing", "Electrical", "Clock Repair", "Tailoring Service", "Shoe Repair"] }
  ];

  const handleToggle = (type) => {
    if (activeCategory === type) {
      setActiveCategory(null);
      setActiveSubCategory(null);
    } else {
      setActiveCategory(type);
      setActiveSubCategory(null);
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
              {activeCategory === item.type && (
                <div className="flex flex-col gap-1 pl-6 py-2">
                  {item.subType.map((sub, subIdx) => (
                    <button
                      key={subIdx}
                      onClick={() => setActiveSubCategory(sub === activeSubCategory ? null : sub)}
                      className={`text-left py-1 ${
                        activeSubCategory === sub
                          ? "text-[#c2542e] font-bold"
                          : "text-gray-600 hover:text-[#c2542e]"
                      }`}
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
        <SubCategory category={activeCategory} subCategory={activeSubCategory} />
      </div>
    </div>
  );
};

export default CategoriesBox;
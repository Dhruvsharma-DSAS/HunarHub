import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SubCategory from "./SubCategory";

const CategoriesBox = () => {
  const { catName } = useParams();
  const [activeCategory, setActiveCategory] = useState(catName);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  
  const [locationFilter, setLocationFilter] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [skillFilter, setSkillFilter] = useState("");

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


  const skillTypes = ["HANDMADE", "SERVICE", "TO ORDER"];

  const handleToggle = (type) => {
    if (activeCategory === type) {
      setActiveCategory(null);
      setActiveSubCategory(null);
    } else {
      setActiveCategory(type);
      setActiveSubCategory(null);
    }
  };


  const clearFilters = () => {
    setLocationFilter("all");
    setMinPrice("");
    setMaxPrice("");
    setSkillFilter("");
  };


  const effectiveCategory = skillFilter ? null : activeCategory;

  return (
    <div className="flex p-10 gap-4 bg-[#FAF6EE]">


      <div className="w-[360px] shrink-0 flex flex-col gap-4">


        <div className="rounded-3xl bg-white shadow-sm p-6 h-fit">
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


        <div className="rounded-3xl bg-white shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-semibold tracking-wider text-gray-500">FILTERS</div>
            <button
              onClick={clearFilters}
              className="text-[#C2542E] text-sm font-bold hover:underline"
            >
              Clear all
            </button>
          </div>


          <div className="mb-5">
            <label className="block text-sm font-bold text-[#29241F] mb-2">📍 Location (distance)</label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full border border-[#DDD3C2] rounded-xl px-4 py-3 bg-white text-sm outline-none focus:border-[#C2542E]"
            >
              <option value="all">All distances</option>
              <option value="1">Within 1 km</option>
              <option value="2">Within 2 km</option>
              <option value="3">Within 3 km</option>
              <option value="5">Within 5 km</option>
              <option value="10">Within 10 km</option>
            </select>
          </div>


          <div className="mb-5">
            <label className="block text-sm font-bold text-[#29241F] mb-2">💰 Price range</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min ₹"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-1/2 border border-[#DDD3C2] rounded-xl px-3 py-3 text-sm outline-none focus:border-[#C2542E]"
              />
              <input
                type="number"
                placeholder="Max ₹"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-1/2 border border-[#DDD3C2] rounded-xl px-3 py-3 text-sm outline-none focus:border-[#C2542E]"
              />
            </div>
          </div>


          <div>
            <label className="block text-sm font-bold text-[#29241F] mb-2">🎯 Skill type</label>
            <div className="flex flex-col gap-2">
              {skillTypes.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSkillFilter(skillFilter === skill ? "" : skill)}
                  className={`text-left px-4 py-2 rounded-xl border text-sm ${
                    skillFilter === skill
                      ? "bg-[#FCF1EA] border-[#C2542E] text-[#C2542E] font-bold"
                      : "border-[#DDD3C2] text-[#29241F] hover:bg-gray-50"
                  }`}
                >
                  {skill === "HANDMADE" && "🏺 Handmade Products"}
                  {skill === "SERVICE" && "🔧 Service Based"}
                  {skill === "TO ORDER" && "📦 Made to Order"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="flex-1">
        <SubCategory
          category={effectiveCategory || activeCategory}
          subCategory={activeSubCategory}
          locationFilter={locationFilter}
          minPrice={minPrice}
          maxPrice={maxPrice}
          skillFilter={skillFilter}
        />
      </div>
    </div>
  );
};

export default CategoriesBox;
import React from 'react'

const categories = [
  { title: "Diwali Special", desc: "Diyas, lamps & idols", icon: "🪔", bg: "bg-orange-700" },
  { title: "Pooja & Temple", desc: "Brass, kits & idols", icon: "🛕", bg: "bg-yellow-700" },
  { title: "Home & Decor", desc: "Baskets, runners, art", icon: "🏠", bg: "bg-emerald-800" },
  { title: "Gifts under ₹300", desc: "Thoughtful & local", icon: "🎁", bg: "bg-amber-800" },
  { title: "Festive Wear", desc: "Kurtas, dupattas, juti", icon: "👗", bg: "bg-rose-900" },
  { title: "Repairs & Fixes", desc: "Shoes, clothes, bags", icon: "🛠️", bg: "bg-slate-700" },
];

const ShopByOccasion = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-10 py-4">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[#C2542E] text-base mb-1">Curated for you</p>
          <h2 className="text-4xl font-bold text-[#29241F]">Shop by occasion</h2>
        </div>
        <a href="#" className="text-[#C2542E] font-medium">Browse all →</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} text-white p-5 rounded-2xl h-52 flex flex-col justify-between shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer`}
          >
            <div className="bg-white/20 p-2 rounded-lg text-2xl w-fit">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopByOccasion
import React from 'react'
import { Link } from 'react-router-dom'

const occasions = [
  {
    title: "Diwali Special",
    desc: "Diyas, lamps & idols",
    icon: "🪔",
    gradient: "linear-gradient(135deg, #C8643C 0%, #8B3A1F 100%)",
    link: "/category/Potter (Kumhar)",
  },
  {
    title: "Pooja & Temple",
    desc: "Brass, kits & idols",
    icon: "🛕",
    gradient: "linear-gradient(135deg, #B8860B 0%, #7A5B0A 100%)",
    link: "/category/Artisan",
  },
  {
    title: "Home & Decor",
    desc: "Baskets, runners, art",
    icon: "🏠",
    gradient: "linear-gradient(135deg, #2E7D5B 0%, #1B4D38 100%)",
    link: "/category/Artisan",
  },
  {
    title: "Gifts under ₹300",
    desc: "Thoughtful & local",
    icon: "🎁",
    gradient: "linear-gradient(135deg, #A0522D 0%, #6B3720 100%)",
    link: "/category/Small Vendor",
  },
  {
    title: "Festive Wear",
    desc: "Kurtas, dupattas, juti",
    icon: "👗",
    gradient: "linear-gradient(135deg, #9B2948 0%, #6B1C33 100%)",
    link: "/category/Tailor",
  },
  {
    title: "Repairs & Fixes",
    desc: "Shoes, clothes, bags",
    icon: "🛠️",
    gradient: "linear-gradient(135deg, #4A5568 0%, #2D3748 100%)",
    link: "/category/Book a Service",
  },
];

const ShopByOccasion = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-10 py-8">

      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-[#C2542E] text-sm font-semibold tracking-wide uppercase mb-1">
            Curated for you
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#29241F]">
            Shop by occasion
          </h2>
        </div>
        <Link
          to="/category/All categories"
          className="text-[#C2542E] font-semibold text-sm hover:underline transition-all"
        >
          Browse all →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {occasions.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{ textDecoration: 'none' }}
          >
  
            <div
              className="h-52 flex flex-col justify-between p-5 relative"
              style={{ background: item.gradient }}
            >
     
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10"
                style={{ background: 'white' }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-5"
                style={{ background: 'white' }}
              />

      
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-2xl w-fit group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                {item.icon}
              </div>


              <div>
                <h3 className="font-bold text-lg text-white mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>
              </div>


              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 text-lg">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShopByOccasion
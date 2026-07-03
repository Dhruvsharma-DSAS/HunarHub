import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  const links = [
    { label: "All", path: "/" },
    { label: "Potter (Kumhar)", path: "/category/Potter (Kumhar)" },
    { label: "Tailor", path: "/category/Tailor" },
    { label: "Cobbler", path: "/category/Cobbler" },
    { label: "Artisan", path: "/category/Artisan" },
    { label: "Small Vendor", path: "/category/Small Vendor" },
    { label: "Handmade Products", path: "/category/Handmade Products" },
    { label: "Book a Service", path: "/category/Book a Service" },
  ];

  return (
    <div className="flex gap-8 px-6 py-2 border-b border-gray-200 justify-around">
      {links.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="text-gray-700 hover:text-[#C8643C] transition-colors duration-200"
         >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default Category
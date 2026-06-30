import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  const links = [
    { label: "All", path: "/" },
    { label: "Potter (Kumhar)", path: "/potter" },
    { label: "Tailor", path: "/tailor" },
    { label: "Cobbler", path: "/cobbler" },
    { label: "Artisan", path: "/artisan" },
    { label: "Small Vendor", path: "/small-vendor" },
    { label: "Handmade Products", path: "/handmade" },
    { label: "Book a Service", path: "/book-service" },
  ];

  return (
    <div className="flex gap-8 px-6 py-2 border-b border-gray-200 justify-around">
      {links.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          cat = {item.label}
          className="text-gray-700 hover:text-[#C8643C] transition-colors duration-200"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default Category
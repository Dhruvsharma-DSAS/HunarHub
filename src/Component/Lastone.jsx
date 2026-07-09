import React from 'react'
import { Link } from 'react-router-dom'

const Lastone = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 bg-white border-t border-[#eee]">
        <div className="flex items-start gap-3 p-6 border-r border-[#eee]">
          <span className="text-3xl">📍</span>
          <div>
            <h3 className="font-bold text-[#29241F]">Local discovery</h3>
            <p className="text-[#8C8479] text-sm">Find makers near you</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-6 border-r border-[#eee]">
          <span className="text-3xl">✅</span>
          <div>
            <h3 className="font-bold text-[#29241F]">Verified makers</h3>
            <p className="text-[#8C8479] text-sm">Admin-approved profiles</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-6 border-r border-[#eee]">
          <span className="text-3xl">🛍️</span>
          <div>
            <h3 className="font-bold text-[#29241F]">Buy or book</h3>
            <p className="text-[#8C8479] text-sm">Products & services in one place</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-6 border-r border-[#eee]">
          <span className="text-3xl">⭐</span>
          <div>
            <h3 className="font-bold text-[#29241F]">Rated & reviewed</h3>
            <p className="text-[#8C8479] text-sm">Real customer feedback</p>
          </div>
        </div>
      </div>

      <footer className="bg-[#29241F] text-white px-10 py-14">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              hunar<span className="text-[#C8843C]">hub</span>
            </h2>
            <p className="text-[#A5A098] leading-relaxed">
              The local market, online. Buy from makers near you — made with हुनर in India.
            </p>
          </div>

          <div>
            <h4 className="text-[#A5A098] font-bold tracking-wider text-sm mb-5">
              CATEGORIES
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/category/Potter (Kumhar)" className="text-white hover:text-[#C8843C] no-underline">
                  Potter (Kumhar)
                </Link>
              </li>
              <li>
                <Link to="/category/Tailor" className="text-white hover:text-[#C8843C] no-underline">
                  Tailor
                </Link>
              </li>
              <li>
                <Link to="/category/Cobbler" className="text-white hover:text-[#C8843C] no-underline">
                  Cobbler
                </Link>
              </li>
              <li>
                <Link to="/category/Artisan" className="text-white hover:text-[#C8843C] no-underline">
                  Artisan
                </Link>
              </li>
              <li>
                <Link to="/category/Small Vendor" className="text-white hover:text-[#C8843C] no-underline">
                  Small Vendor
                </Link>
              </li>
              <li>
                <Link to="/category/Handmade Products" className="text-white hover:text-[#C8843C] no-underline">
                  Handmade Products
                </Link>
              </li>
              <li>
                <Link to="/category/Book a Service" className="text-white hover:text-[#C8843C] no-underline">
                  Book a Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#A5A098] font-bold tracking-wider text-sm mb-5">
              MAKERS
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/sell" className="text-white hover:text-[#C8843C] no-underline">
                  List your skills
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-white hover:text-[#C8843C] no-underline">
                  Maker dashboard
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-white hover:text-[#C8843C] no-underline">
                  Service requests
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-white hover:text-[#C8843C] no-underline">
                  Earnings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#A5A098] font-bold tracking-wider text-sm mb-5">
              COMPANY
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about"  className="text-white hover:text-[#C8843C] no-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white hover:text-[#C8843C] no-underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white hover:text-[#C8843C] no-underline">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white hover:text-[#C8843C] no-underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Lastone
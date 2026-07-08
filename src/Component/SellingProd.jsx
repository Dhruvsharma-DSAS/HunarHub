import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Lastone from './Lastone'

const categories = ["🏺 Potter", "✂️ Tailor", "👞 Cobbler", "🎨 Artisan", "🛍️ Vendor"];

const SellingProd = () => {
  const [selected, setSelected] = useState("🏺 Potter");

  return (
    <div className="bg-[#F7F3EC]">

      <div className="bg-[#f4e8dd] border-b-2 border-[#c4baba] flex justify-between items-center px-10 py-5">
        <Link to="/" className="no-underline">
          <h1 className="text-3xl font-bold text-[#29241F]">
            hunar<span className="text-[#9b560b]">hub</span>{" "}
            <span className="text-[#8C8479] text-base font-normal">for makers</span>
          </h1>
        </Link>
        <div className="flex items-center gap-6"> 
          <Link to="/signin" className="font-bold text-[#29241F] no-underline hover:text-[#C8643C]">Already a maker? Sign in</Link>
          <a href="#maker-signup" className="bg-[#C8643C] text-white font-bold px-6 py-3 rounded-xl no-underline hover:bg-[#b3552f]">
            Start selling
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-[#F0E4D8] text-[#C2542E] font-bold text-sm px-4 py-2 rounded-lg">
            FOR MAKERS
          </span>
          <h1 className="text-6xl font-bold text-[#29241F] mt-6 leading-tight">
            Sell your work to the neighbourhood.{" "}
            <span className="text-[#C2542E]">₹0 platform fee.</span>
          </h1>
          <p className="text-[#5c564e] text-lg mt-6">
            Potters, tailors, cobblers, artisans and small vendors — list what
            you make, take orders from people nearby, and keep every rupee.
          </p>

          <div className="flex items-center gap-5 mt-8">
            <a href="#maker-signup">
              <button  className="bg-[#C8643C] text-white font-bold px-8 py-4 rounded-xl">
              Start selling →
            </button>
              
              </a>
            <p className="text-[#8C8479]">Free to join · Approved in 24 hrs</p>
          </div>

          <div className="flex gap-14 mt-12">
            <div>
              <h2 className="text-3xl font-bold">1,240+</h2>
              <p className="text-[#8C8479]">active makers</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">₹0</h2>
              <p className="text-[#8C8479]">platform fee</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">24 hrs</h2>
              <p className="text-[#8C8479]">to get verified</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://i.pinimg.com/736x/e9/9e/df/e99edf7ba33b5d9862a2dc2c6c4f3a5f.jpg"
            alt="Potter working"
            className="rounded-3xl w-full"
          />
          <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-4 flex items-center gap-4">
            <div className="bg-[#C8643C] text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">
              R
            </div>
            <div>
              <p className="font-bold text-[#29241F]">
                Ramesh Kumhar earned ₹18,400 last month
              </p>
              <p className="text-[#8C8479] text-sm">Potter · Sanganer, Jaipur</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-16 text-center">
        <p className="text-[#C2542E] font-bold tracking-wider">HOW IT WORKS</p>
        <h2 className="text-5xl font-bold text-[#29241F] mt-3 mb-12">
          Selling takes three steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-2xl p-8">
            <span className="bg-[#F0E4D8] text-[#C2542E] font-bold text-xl w-12 h-12 rounded-xl flex items-center justify-center">
              1
            </span>
            <h3 className="text-2xl font-bold mt-6 mb-3">List your skills & products</h3>
            <p className="text-[#5c564e]">
              Add photos, prices and your locality — takes a few minutes, no fees to list.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <span className="bg-[#F0E4D8] text-[#C2542E] font-bold text-xl w-12 h-12 rounded-xl flex items-center justify-center">
              2
            </span>
            <h3 className="text-2xl font-bold mt-6 mb-3">Get orders & service requests</h3>
            <p className="text-[#5c564e]">
              Nearby customers discover you and send orders or booking requests directly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <span className="bg-[#F0E4D8] text-[#C2542E] font-bold text-xl w-12 h-12 rounded-xl flex items-center justify-center">
              3
            </span>
            <h3 className="text-2xl font-bold mt-6 mb-3">Keep every rupee</h3>
            <p className="text-[#5c564e]">
              Confirm, hand over the work, and get paid directly — cash or UPI, no cuts taken.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-10">
        <div className="bg-white rounded-3xl p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#C2542E] font-bold tracking-wider">WHY HUNARHUB</p>
            <h2 className="text-5xl font-bold text-[#29241F] mt-3 mb-10">
              Built for makers, not middlemen
            </h2>

            <div className="flex gap-4 mb-6">
              <span className="bg-[#FFF6E5] text-2xl p-2 rounded-lg h-fit">💰</span>
              <div>
                <h3 className="font-bold text-xl">Zero platform fee</h3>
                <p className="text-[#5c564e]">Every rupee customers pay goes straight to you.</p>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <span className="bg-[#FFECEC] text-2xl p-2 rounded-lg h-fit">📍</span>
              <div>
                <h3 className="font-bold text-xl">Hyperlocal discovery</h3>
                <p className="text-[#5c564e]">Get found by people who live and shop near you.</p>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <span className="bg-[#FFF6E5] text-2xl p-2 rounded-lg h-fit">🤝</span>
              <div>
                <h3 className="font-bold text-xl">Direct payment</h3>
                <p className="text-[#5c564e]">Collect cash or UPI on handover — no waiting on payouts.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="bg-[#E8F5E9] text-2xl p-2 rounded-lg h-fit">✅</span>
              <div>
                <h3 className="font-bold text-xl">Verified badge</h3>
                <p className="text-[#5c564e]">A quick review builds trust with new customers.</p>
              </div>
            </div>
          </div>

          <img
            src="https://i.pinimg.com/736x/7e/4e/f5/7e4ef5d333217b8f639e236eea0a2c7a.jpg"
            alt="Local street"
            className="rounded-3xl w-full"
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-16 text-center">
        <p className="text-[#C2542E] font-bold tracking-wider">REAL MAKERS, REAL INCOME</p>
        <h2 className="text-5xl font-bold text-[#29241F] mt-3 mb-12">
          Makers already earning on hunarhub
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white rounded-2xl p-8">
            <p className="text-[#E0A800] text-xl mb-4">★★★★★</p>
            <p className="text-lg text-[#29241F] mb-6">
              "Third generation on the wheel. hunarhub brought my diyas to homes I could never reach before."
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-[#C8643C] text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">R</div>
              <div>
                <p className="font-bold">Ramesh Kumhar</p>
                <p className="text-[#8C8479] text-sm">Potter · Sanganer</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <p className="text-[#E0A800] text-xl mb-4">★★★★★</p>
            <p className="text-lg text-[#29241F] mb-6">
              "I stitch to your exact fit — now customers across Bani Park find me directly."
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-[#7A7A3A] text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">A</div>
              <div>
                <p className="font-bold">Asha Devi</p>
                <p className="text-[#8C8479] text-sm">Tailor · Bani Park</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <p className="text-[#E0A800] text-xl mb-4">★★★★★</p>
            <p className="text-lg text-[#29241F] mb-6">
              "Old shoes deserve a second life. Orders have doubled since I joined."
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-[#8a6a4a] text-white font-bold w-12 h-12 rounded-full flex items-center justify-center">I</div>
              <div>
                <p className="font-bold">Imtiaz Khan</p>
                <p className="text-[#8C8479] text-sm">Cobbler · Johari Bazaar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="maker-signup" className="max-w-[1400px] mx-auto  px-10 pb-20">
        <div className="bg-[#29241F] rounded-3xl max-w-[800px] mx-auto p-25 text-center">
          <h2 className="text-white text-4xl font-bold">Create your maker account</h2>
          <p className="text-[#A5A098] text-lg mt-3 mb-10">
            Takes under two minutes. No fees, ever.
          </p>

          <div className="text-left">
            <label className="text-white block mb-2">Full name</label>
            <input
              type="text"
              placeholder="e.g. Ramesh Kumhar"
              className="w-full bg-white rounded-xl px-5 py-4 mb-6"
            />

            <label className="text-white block mb-2">Mobile number</label>
            <div className="flex items-center bg-white rounded-xl px-5 py-4 mb-6">
              <input type="text" placeholder="98765 43210" className="w-full outline-none" />
            </div>

            <label className="text-white block mb-3">What do you make or offer?</label>
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-6 py-3 rounded-xl border ${
                    selected === cat
                      ? "bg-[#F0E4D8] text-[#C2542E] border-[#C8643C]"
                      : "text-white border-[#5c564e]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <label className="text-white block mb-2">Area / locality</label>
            <input
              type="text"
              placeholder="e.g. Sanganer, Jaipur"
              className="w-full bg-white rounded-xl px-5 py-4 mb-8"
            />

            <button className="w-full bg-[#C8643C] text-white font-bold text-lg py-4 rounded-xl">
              Create maker account →
            </button>

            <p className="text-[#A5A098] text-center text-sm mt-5">
              By continuing you agree to hunarhub's Maker Terms. Your profile is reviewed and verified within 24 hours.
            </p>
          </div>
        </div>
      </div>
    <Lastone/>
    </div>
  )
}

export default SellingProd
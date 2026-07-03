import React from 'react'

const Sell = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-10 py-6">
      <div className="bg-[#29241F] rounded-3xl px-12 py-10 flex items-center justify-between gap-8">
        <div>
          <p className="text-[#C8843C] font-bold tracking-wider text-sm mb-3">
            FOR MAKERS
          </p>
          <h2 className="text-white text-4xl font-bold mb-4">
            Sell your work to the neighbourhood. ₹0 platform fee.
          </h2>
          <div className="flex flex-wrap gap-8 text-[#A5A098]">
            <span>① List your skills & products</span>
            <span>② Get orders & service requests</span>
            <span>③ Keep every rupee</span>
          </div>
        </div>

        <button className="bg-[#C8643C] text-white text-lg font-bold px-8 py-4 rounded-xl whitespace-nowrap hover:bg-[#b3552f]">
          Start selling →
        </button>
      </div>
    </div>
  )
}

export default Sell
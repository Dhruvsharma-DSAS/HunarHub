import React, { useState } from 'react'
import { customerOrderList, customerRequestList } from '../Data/dashboardData'

const MyOrders = () => {
  const [tab, setTab] = useState("orders");

  return (
    <div className="max-w-[1180px] mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold">My Orders</h1>
      <p className="text-[#8C8479] text-sm mt-1 mb-5">Track your purchases and service requests.</p>

      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setTab("orders")}
          className={`px-5 py-2 rounded-full text-sm font-bold ${
            tab === "orders" ? "bg-[#29241F] text-white" : "text-[#5B5346] hover:bg-[#F3ECE0]"
          }`}
        >
          📦 Orders
        </button>
        <button
          onClick={() => setTab("requests")}
          className={`px-5 py-2 rounded-full text-sm font-bold ${
            tab === "requests" ? "bg-[#29241F] text-white" : "text-[#5B5346] hover:bg-[#F3ECE0]"
          }`}
        >
          📩 Service requests
        </button>
      </div>

      {tab === "orders" && (
        <div className="flex flex-col gap-3">
          {customerOrderList.map((o) => (
            <div key={o.id} className="bg-white border border-[#EBE3D6] rounded-2xl p-4 flex items-center gap-4">
              <img src={o.img} alt="" className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1">
                <p className="font-bold text-sm">{o.item}</p>
                <p className="text-xs text-[#8C8479] mt-1">
                  {o.maker} · {o.id} · {o.date}
                </p>
              </div>
              <span className="font-bold">{o.amount}</span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  o.status === "Delivered"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-orange-50 text-[#C2542E]"
                }`}
              >
                {o.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {tab === "requests" && (
        <div className="flex flex-col gap-3">
          {customerRequestList.map((r) => (
            <div key={r.id} className="bg-white border border-[#EBE3D6] rounded-2xl p-4 flex items-center gap-4">
              <img src={r.img} alt="" className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1">
                <p className="font-bold text-sm">{r.item}</p>
                <p className="text-xs text-[#8C8479] mt-1">
                  {r.maker} · {r.id} · {r.date}
                </p>
              </div>
              <span className="font-bold">{r.amount}</span>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  r.status === "Completed"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-orange-50 text-[#C2542E]"
                }`}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyOrders

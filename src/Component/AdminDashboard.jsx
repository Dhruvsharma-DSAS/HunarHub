import React, { useState } from "react";
import { Link } from "react-router-dom";

const pendingMakers = [
  { id: "m1", name: "Sita Devi", craft: "Tailor", locality: "Bani Park, Jaipur", date: "14 Jul 2026" },
  { id: "m2", name: "Farhan Mochi", craft: "Cobbler", locality: "Johari Bazaar, Jaipur", date: "13 Jul 2026" },
  { id: "m3", name: "Lakshmi Ben", craft: "Potter", locality: "Vaishali Nagar, Jaipur", date: "12 Jul 2026" },
  { id: "m4", name: "Arjun Lohar", craft: "Artisan", locality: "Mansarovar, Jaipur", date: "11 Jul 2026" },
];

const adminOrderList = [
  { id: "HH-8841", item: "Terracotta water pot (matka), 5L", maker: "Ramesh Kumhar", customer: "Vikram Singh", date: "2 Jul 2026", amount: "₹240", status: "Awaiting handover" },
  { id: "HH-8790", item: "Hand-thrown clay diyas, set of 12", maker: "Ramesh Kumhar", customer: "Rohit Gupta", date: "27 Jun 2026", amount: "₹300", status: "Delivered" },
  { id: "HH-8642", item: "Brass puja thali set", maker: "Soni Metalworks", customer: "Anjali Mehta", date: "14 Jun 2026", amount: "₹890", status: "Delivered" },
  { id: "HH-8511", item: "Custom-stitched kurta", maker: "Aslam Tailors", customer: "Sneha Rao", date: "3 Jun 2026", amount: "₹680", status: "Delivered" },
  { id: "SR-201", item: "Leather sandal repair", maker: "Mohan Mochi", customer: "Priya Sharma", date: "5 Jul 2026", amount: "₹140", status: "Awaiting" },
];

const disputeData = [
  { id: "d1", complaint: "Order not delivered within promised time", customer: "Priya Sharma", maker: "Ramesh Kumhar", date: "5 Jul 2026", status: "Open" },
  { id: "d2", complaint: "Product quality not matching photos", customer: "Rohit Gupta", maker: "Devi Kumhar", date: "28 Jun 2026", status: "Open" },
  { id: "d3", complaint: "Overcharged for blouse stitching", customer: "Anjali Mehta", maker: "Geeta Boutique", date: "20 Jun 2026", status: "Resolved" },
  { id: "d4", complaint: "Wrong size delivered", customer: "Vikram Singh", maker: "Aslam Tailors", date: "15 Jun 2026", status: "Resolved" },
];

const initialCategories = ["Potter (Kumhar)", "Tailor", "Cobbler", "Artisan", "Small Vendor", "Handmade Products", "Book a Service"];

const adminNavList = [
  { key: "approvals", label: "Approvals", icon: "✅" },
  { key: "categories", label: "Categories", icon: "📁" },
  { key: "orders", label: "Orders & Requests", icon: "📦" },
  { key: "disputes", label: "Disputes", icon: "⚠️" },
  { key: "analytics", label: "Analytics", icon: "📊" },
];

const analyticsBars = [
  { label: "Feb", h: "45%" },
  { label: "Mar", h: "62%" },
  { label: "Apr", h: "78%" },
  { label: "May", h: "55%" },
  { label: "Jun", h: "85%" },
  { label: "Jul", h: "100%" },
];

const AdminDashboard = () => {
  const [section, setSection] = useState("approvals");
  const [makers, setMakers] = useState(pendingMakers);
  const [categories, setCategories] = useState(initialCategories);
  const [newCategory, setNewCategory] = useState("");
  const [disputes, setDisputes] = useState(disputeData);

  return (
    <div className="min-h-screen bg-[#F7F3EC]">

      <div className="bg-white border-b border-[#EBE3D6] px-10 py-4 flex items-center gap-4">
        <Link to="/" className="text-4xl font-bold text-[#333333] no-underline">
          hunar<span className="text-[#C8643C]">hub</span>
        </Link>
        <span className="text-[#8C8479] font-bold text-sm">Admin panel</span>
        <div className="ml-auto bg-[#29241F] text-white font-bold w-9 h-9 rounded-full flex items-center justify-center">
          A
        </div>
      </div>

      <div className="bg-white border-b border-[#EBE3D6] px-10 py-3 flex gap-2 flex-wrap">
        {adminNavList.map((n) => (
          <button
            key={n.key}
            onClick={() => setSection(n.key)}
            className={`px-4 py-2 rounded-full text-sm font-bold ${
              section === n.key ? "bg-[#29241F] text-white" : "text-[#5B5346] hover:bg-[#F3ECE0]"
            }`}
          >
            {n.icon} {n.label}
          </button>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-10 py-6">

        {section === "approvals" && (
          <div>
            <h1 className="text-2xl font-bold">Pending approvals</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">New maker registrations waiting for review.</p>

            {makers.length === 0 && (
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-8 text-center">
                <p className="text-[#8C8479]">No pending approvals</p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              {makers.map((m) => (
                <div key={m.id} className="bg-white border border-[#EBE3D6] rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C8643C] text-white flex items-center justify-center font-bold text-lg">
                    {m.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">{m.name}</p>
                    <p className="text-xs text-[#8C8479] mt-1">{m.craft} · {m.locality} · Applied {m.date}</p>
                  </div>
                  <button
                    onClick={() => setMakers(makers.filter((x) => x.id !== m.id))}
                    className="border border-[#DDD3C2] rounded-lg px-4 py-2 text-sm font-bold"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => setMakers(makers.filter((x) => x.id !== m.id))}
                    className="bg-[#29241F] text-white rounded-lg px-4 py-2 text-sm font-bold"
                  >
                    Approve
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "categories" && (
          <div>
            <h1 className="text-2xl font-bold">Manage categories</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">Add or remove maker categories.</p>

            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5 mb-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="New category name"
                  className="flex-1 border border-[#DDD3C2] rounded-lg px-4 py-3"
                />
                <button
                  onClick={() => {
                    if (newCategory === "") return;
                    setCategories([...categories, newCategory]);
                    setNewCategory("");
                  }}
                  className="bg-[#C8643C] text-white rounded-lg px-5 py-3 font-bold text-sm"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
              {categories.map((cat, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-t border-[#F1EADD] first:border-t-0">
                  <span className="font-bold text-sm">{cat}</span>
                  <button
                    onClick={() => setCategories(categories.filter((_, i) => i !== index))}
                    className="border border-[#DDD3C2] rounded-lg px-3 py-1 text-xs font-bold text-[#C2542E]"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "orders" && (
          <div>
            <h1 className="text-2xl font-bold">Orders & Requests</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">All orders and service requests across makers.</p>

            <div className="flex flex-col gap-3">
              {adminOrderList.map((o) => (
                <div key={o.id} className="bg-white border border-[#EBE3D6] rounded-2xl p-4 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-sm">{o.item}</p>
                    <p className="text-xs text-[#8C8479] mt-1">
                      {o.maker} → {o.customer} · {o.id} · {o.date}
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
          </div>
        )}

        {section === "disputes" && (
          <div>
            <h1 className="text-2xl font-bold">Disputes</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">Customer complaints and resolution tracker.</p>

            <div className="flex flex-col gap-3">
              {disputes.map((d) => (
                <div key={d.id} className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-bold text-sm">{d.complaint}</p>
                      <p className="text-xs text-[#8C8479] mt-2">
                        Customer: {d.customer} · Maker: {d.maker} · {d.date}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        d.status === "Resolved"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-orange-50 text-[#C2542E]"
                      }`}
                    >
                      {d.status}
                    </span>
                  </div>
                  {d.status === "Open" && (
                    <button
                      onClick={() => setDisputes(disputes.map((x) => x.id === d.id ? { ...x, status: "Resolved" } : x))}
                      className="mt-3 bg-[#29241F] text-white rounded-lg px-4 py-2 text-sm font-bold"
                    >
                      Mark resolved
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "analytics" && (
          <div>
            <h1 className="text-2xl font-bold">Analytics</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">Platform-wide stats and performance.</p>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-5">
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Registered makers</p>
                <p className="text-2xl font-bold mt-2">1,240</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Active customers</p>
                <p className="text-2xl font-bold mt-2">8,560</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Products sold</p>
                <p className="text-2xl font-bold mt-2">18,400</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Avg maker earnings</p>
                <p className="text-2xl font-bold mt-2">₹14,800</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Satisfaction</p>
                <p className="text-2xl font-bold mt-2">4.7 ★</p>
              </div>
            </div>

            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
              <h2 className="font-bold mb-4">Monthly sales volume</h2>
              <div className="flex items-end gap-4 h-[140px]">
                {analyticsBars.map((b) => (
                  <div key={b.label} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full max-w-[38px] rounded-t-md bg-[#C8643C]" style={{ height: b.h }} />
                    <p className="text-xs text-[#8C8479] font-bold mt-2">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
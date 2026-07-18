import React, { useState, useContext, useEffect } from "react";
import { requestList, listingList, orderList, earnBars, paymentList, navList, skillList } from "../Data/dashboardData";
import { AuthContext } from "./AuthContext";
import { useLocation, Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const userName = user?.name || "Karan";
  const userInitial = userName.charAt(0).toUpperCase();

  const location = useLocation();
  const initialSection = location.state?.section || "overview";

  const [section, setSection] = useState(initialSection);
  const [listings, setListings] = useState(listingList);
  const [requests, setRequests] = useState(requestList);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [editingBio, setEditingBio] = useState(false);
  const [bioText, setBioText] = useState("Third-generation potter working the wheel in Sanganer. I make hand-thrown terracotta diyas, matkas and puja items using clay sourced locally and fired the traditional way.");

  useEffect(() => {
    if (location.state?.section) {
      setSection(location.state.section);
    }
  }, [location.state?.section]);

  const togglePause = (id) => {
    setListings(listings.map(l => l.id === id ? { ...l, paused: !l.paused } : l));
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC]">

      <div className="bg-white border-b border-[#EBE3D6] px-10 py-4 flex items-center gap-4">
        <Link to="/" className="text-4xl font-bold text-[#333333] no-underline">
          hunar<span className="text-[#C8643C]">hub</span>
        </Link>
        <span className="text-[#8C8479] font-bold text-sm">Maker studio</span>
        <div className="ml-auto bg-[#C8643C] text-white font-bold w-9 h-9 rounded-full flex items-center justify-center">
          {userInitial}
        </div>
      </div>

      <div className="bg-white border-b border-[#EBE3D6] px-10 py-3 flex gap-2 flex-wrap">
        {navList.map((n) => (
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

        {section === "overview" && (
          <div>
            <div className="bg-[#29241F] rounded-2xl p-8 mb-5">
              <h1 className="text-white text-2xl font-bold">Namaste, {userName} 👋</h1>
              <p className="text-[#C9BFAE] text-sm mt-2">
                New requests are waiting on you — the sooner you respond, the better your response score looks.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">This month</p>
                <p className="text-2xl font-bold mt-2">₹18,400</p>
                <p className="text-xs text-emerald-700 font-bold mt-1">↑ 12% vs last month</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Pending requests</p>
                <p className="text-2xl font-bold mt-2">{requests.length}</p>
                <p className="text-xs text-[#C2542E] font-bold mt-1">Respond within a day</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Active listings</p>
                <p className="text-2xl font-bold mt-2">4</p>
                <p className="text-xs text-[#8C8479] font-bold mt-1">2 paused</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Rating</p>
                <p className="text-2xl font-bold mt-2">4.9 ★</p>
                <p className="text-xs text-[#8C8479] font-bold mt-1">312 ratings</p>
              </div>
            </div>

            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold">Needs a response</h2>
                <button onClick={() => setSection("requests")} className="text-sm font-bold text-[#C2542E]">
                  View all →
                </button>
              </div>
              {requests.length === 0 && (
                 <p className="text-[#8C8479] text-sm mt-4">You're all caught up! No pending requests.</p>
              )}
              {requests.slice(0, 3).map((r) => (
                <div key={r.id} className="flex items-center gap-3 py-3 border-t border-[#F1EADD]">
                  <img src={r.img} alt="" className="w-11 h-11 rounded-lg object-cover" />
                  <div className="flex-1">
                    <p className="font-bold text-sm">{r.item}</p>
                    <p className="text-xs text-[#8C8479]">{r.customer} · {r.time}</p>
                  </div>
                  <span className="font-bold text-sm">{r.amount}</span>
                  <button onClick={() => setRequests(requests.filter(req => req.id !== r.id))} className="w-8 h-8 rounded-lg border border-[#DDD3C2] bg-white hover:bg-gray-50 transition-colors">✕</button>
                  <button onClick={() => setRequests(requests.filter(req => req.id !== r.id))} className="w-8 h-8 rounded-lg bg-[#29241F] text-white hover:bg-black transition-colors">✓</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "profile" && (
          <div>
            <h1 className="text-2xl font-bold">Profile & skills</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">This is what customers see on your maker profile.</p>

            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#C8643C] text-white flex items-center justify-center font-bold text-2xl">
                  {userInitial}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg">
                    {userName} {" "}
                    <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                      ✓ Verified maker
                    </span>
                  </p>
                  <p className="text-sm text-[#8C8479] mt-1">Potter · Sanganer, Jaipur · 14 yrs experience</p>
                </div>
                <button onClick={() => setEditingBio(!editingBio)} className="border border-[#DDD3C2] rounded-lg px-4 py-2 text-sm font-bold">
                  {editingBio ? "Cancel" : "Edit profile"}
                </button>
              </div>
              {editingBio ? (
                <div className="mt-4 border-t border-[#F1EADD] pt-4">
                  <textarea
                    value={bioText}
                    onChange={(e) => setBioText(e.target.value)}
                    rows={3}
                    className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3 mb-3"
                  />
                  <button onClick={() => setEditingBio(false)} className="bg-[#29241F] text-white rounded-lg px-4 py-2 text-sm font-bold">
                    Save
                  </button>
                </div>
              ) : (
                <p className="text-sm text-[#3A352C] mt-4 border-t border-[#F1EADD] pt-4">
                  {bioText}
                </p>
              )}
            </div>

            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold">Skills & categories</h2>
                <button className="text-sm font-bold text-[#C2542E]">+ Add skill</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillList.map((sk) => (
                  <span key={sk} className="bg-[#FBEAE1] text-[#A34A28] text-xs font-bold px-3 py-1 rounded-full">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === "listings" && (
          <div>
            <div className="flex justify-between items-center mb-5">
              <div>
                <h1 className="text-2xl font-bold">Your listings</h1>
                <p className="text-[#8C8479] text-sm mt-1">Products and services customers can order.</p>
              </div>
              <button onClick={() => setShowAddForm(!showAddForm)} className="bg-[#C8643C] text-white rounded-lg px-5 py-3 font-bold text-sm">
                {showAddForm ? "Cancel" : "+ Add listing"}
              </button>
            </div>

            {showAddForm && (
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5 mb-4">
                <h3 className="font-bold mb-3">New listing</h3>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Product title"
                  className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3 mb-3"
                />
                <input
                  type="text"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="Price e.g. ₹250"
                  className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3 mb-3"
                />
                <div className="w-full border-2 border-dashed border-[#DDD3C2] rounded-lg px-4 py-8 mb-4 flex flex-col items-center justify-center bg-gray-50 text-[#8C8479] cursor-pointer hover:bg-gray-100 transition-colors">
                  
                  <span className="text-sm font-bold text-stone-700">Click to upload photo</span>
                  <span className="text-xs mt-1 text-stone-500">PNG, JPG, up to 5MB</span>
                  <input type="file" className="hidden" />
                </div>
                <button
                  onClick={() => {
                    if (newTitle === "" || newPrice === "") return;
                    setListings([...listings, { id: "l" + (listings.length + 1), name: newTitle, price: newPrice, tag: "Handmade", img: "https://loremflickr.com/300/300/handmade,craft?lock=99", paused: false }]);
                    setNewTitle("");
                    setNewPrice("");
                    setShowAddForm(false);
                  }}
                  className="bg-[#29241F] text-white rounded-lg px-5 py-2 text-sm font-bold"
                >
                  Save
                </button>
              </div>
            )}

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {listings.map((l) => (
                <div key={l.id} className="bg-white border border-[#EBE3D6] rounded-2xl overflow-hidden">
                  <div className="relative h-44">
                    <img src={l.img} alt="" className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-white/90 text-xs font-bold px-3 py-1 rounded-full">
                      {l.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-sm">{l.name}</p>
                    <p className="font-bold mt-1">{l.price}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className={`text-xs font-bold ${l.paused ? "text-stone-500" : "text-emerald-700"}`}>
                        ● {l.paused ? "Paused" : "Active"}
                      </span>
                      <button 
                        onClick={() => togglePause(l.id)}
                        className={`border rounded-md px-3 py-1 text-xs font-bold transition-colors ${
                          l.paused 
                            ? "border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100" 
                            : "border-[#DDD3C2] text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        {l.paused ? "Resume" : "Pause"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "requests" && (
          <div>
            <h1 className="text-2xl font-bold">Service requests</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">Accept requests you can fulfil, decline the rest.</p>

            <div className="flex flex-col gap-3">
              {requests.length === 0 && (
                <div className="bg-white border border-[#EBE3D6] rounded-2xl p-8 text-center text-[#8C8479]">
                  No pending service requests at this moment.
                </div>
              )}
              {requests.map((r) => (
                <div key={r.id} className="bg-white border border-[#EBE3D6] rounded-2xl p-4 flex items-center gap-4">
                  <img src={r.img} alt="" className="w-14 h-14 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="font-bold text-sm">{r.item}</p>
                    <p className="text-xs text-[#8C8479] mt-1">
                      {r.customer} · {r.dist} · requested {r.time}
                    </p>
                  </div>
                  <span className="font-bold">{r.amount}</span>
                  <button onClick={() => setRequests(requests.filter(req => req.id !== r.id))} className="border border-[#DDD3C2] rounded-lg px-4 py-2 text-sm font-bold hover:bg-gray-50 transition-colors">
                    Decline
                  </button>
                  <button onClick={() => setRequests(requests.filter(req => req.id !== r.id))} className="bg-[#29241F] text-white rounded-lg px-4 py-2 text-sm font-bold hover:bg-black transition-colors">
                    Accept
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "orders" && (
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">Confirmed orders and service bookings.</p>

            <div className="flex flex-col gap-3">
              {orderList.map((o) => (
                <div key={o.id} className="bg-white border border-[#EBE3D6] rounded-2xl p-4 flex items-center gap-4">
                  <img src={o.img} alt="" className="w-14 h-14 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="font-bold text-sm">{o.item}</p>
                    <p className="text-xs text-[#8C8479] mt-1">
                      {o.customer} · {o.id} · {o.date}
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

        {section === "earnings" && (
          <div>
            <h1 className="text-2xl font-bold">Earnings</h1>
            <p className="text-[#8C8479] text-sm mt-1 mb-5">Paid directly by customers · ₹0 platform fee, always.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <div className="bg-[#29241F] rounded-2xl p-5 text-white">
                <p className="text-xs text-[#B7AC9C] font-bold">This month</p>
                <p className="text-2xl font-bold mt-2">₹18,400</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">All time</p>
                <p className="text-2xl font-bold mt-2">₹2,14,600</p>
              </div>
              <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
                <p className="text-xs text-[#8C8479] font-bold">Platform fee taken</p>
                <p className="text-2xl font-bold mt-2 text-emerald-700">₹0</p>
              </div>
            </div>

            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5 mb-5">
              <h2 className="font-bold mb-4">Last 6 months</h2>
              <div className="flex items-end gap-4 h-[140px]">
                {earnBars.map((b) => (
                  <div key={b.label} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="w-full max-w-[38px] rounded-t-md bg-[#C8643C]" style={{ height: b.h }} />
                    <p className="text-xs text-[#8C8479] font-bold mt-2">{b.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
              <h2 className="font-bold mb-3">Recent payments</h2>
              {paymentList.map((p, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-t border-[#F1EADD]">
                  <div>
                    <p className="font-bold text-sm">{p.item}</p>
                    <p className="text-xs text-[#8C8479] mt-1">
                      {p.customer} · {p.date} · {p.method}
                    </p>
                  </div>
                  <span className="font-bold text-sm">{p.amount}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "availability" && (
          <Availability />
        )}

      </div>
    </div>
  );
};


const Availability = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [vacation, setVacation] = useState(false);
  const [days, setDays] = useState({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: true,
    Sun: false,
  });


  const toggleDay = (day) => {
    setDays({ ...days, [day]: !days[day] });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Availability</h1>
      <p className="text-[#8C8479] text-sm mt-1 mb-5">
        Let customers know when you're available for orders and services.
      </p>


      <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-lg">Overall status</p>
            <p className="text-sm text-[#8C8479] mt-1">
              {isAvailable ? "You are visible to customers" : "You are hidden from search results"}
            </p>
          </div>
          <button
            onClick={() => setIsAvailable(!isAvailable)}
            className={`px-6 py-3 rounded-xl font-bold text-sm ${
              isAvailable
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {isAvailable ? "● Available" : "● Unavailable"}
          </button>
        </div>
      </div>


      <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6 mb-4">
        <h2 className="font-bold text-lg mb-4">Weekly schedule</h2>
        <p className="text-sm text-[#8C8479] mb-4">
          Toggle the days you are available to accept orders.
        </p>

        <div className="flex flex-col gap-3">
          {Object.keys(days).map((day) => (
            <div
              key={day}
              className="flex items-center justify-between py-3 px-4 rounded-xl border border-[#EBE3D6]"
            >
              <span className="font-bold text-[#29241F]">{day}</span>
              <button
                onClick={() => toggleDay(day)}
                className={`w-14 h-7 rounded-full relative transition-colors ${
                  days[day] ? "bg-emerald-500" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${
                    days[day] ? "right-1" : "left-1"
                  }`}
                ></span>
              </button>
            </div>
          ))}
        </div>
      </div>


      <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-lg">🏖️ Vacation mode</p>
            <p className="text-sm text-[#8C8479] mt-1">
              Turn on to pause all orders and hide your profile temporarily.
            </p>
          </div>
          <button
            onClick={() => setVacation(!vacation)}
            className={`w-14 h-7 rounded-full relative transition-colors ${
              vacation ? "bg-[#C2542E]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${
                vacation ? "right-1" : "left-1"
              }`}
            ></span>
          </button>
        </div>
        {vacation && (
          <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-[#7A4C36]">
            ⚠️ Vacation mode is ON. Your profile is hidden and no new orders will come in.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
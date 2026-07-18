import React, { useState } from 'react'
import { useEffect } from 'react';
const channels = [
  { icon: "💬", title: "Chat with us", desc: "Fastest way to reach the support team.", action: "Start chat" },
  { icon: "📞", title: "Call support", desc: "Mon–Sat, 9 AM – 7 PM IST.", action: "+91 141 400 2200" },
  { icon: "✉️", title: "Email us", desc: "For detailed queries or documents.", action: "help@hunarhub.in" },
];

const roles = ["Buyer", "Maker", "Other"];

const subjects = ["Order issue", "Maker account", "Payments", "Report a problem", "General question"];

const ContactUs = () => {
  const [selectedRole, setSelectedRole] = useState("Buyer");
  const [sent, setSent] = useState(false);

  let formContent;

  if (sent) {
    formContent = (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl mx-auto">
          ✓
        </div>
        <h2 className="text-2xl font-bold mt-5">Message sent</h2>
        <p className="text-[#5B5346] text-sm mt-2">
          Thanks for reaching out — our team replies within one business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 border border-[#DDD3C2] rounded-lg px-5 py-2 text-sm font-bold"
        >
          Send another message
        </button>
      </div>
    );
  } else {
    formContent = (
      <div>
        <h2 className="text-2xl font-bold">Send us a message</h2>
        <p className="text-[#8C8479] text-sm mt-1 mb-6">We usually reply within one business day.</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold mb-1">Full name</label>
            <input
              type="text"
              placeholder="e.g. Priya Sharma"
              className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Email address</label>
            <input
              type="text"
              placeholder="you@example.com"
              className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3"
            />
          </div>
        </div>

        <label className="block text-sm font-bold mb-2">I'm reaching out as a</label>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`py-3 rounded-lg border font-bold text-sm ${
                selectedRole === role
                  ? "bg-[#FBEEE7] border-[#C2542E] text-[#A8431F]"
                  : "bg-white border-[#DDD3C2] text-[#29241F]"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        <label className="block text-sm font-bold mb-1">Subject</label>
        <select className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3 mb-4 bg-white">
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <label className="block text-sm font-bold mb-1">Message</label>
        <textarea
          rows={5}
          placeholder="Tell us a bit about what's going on…"
          className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3 mb-5"
        ></textarea>

        <button
          onClick={() => setSent(true)}
          className="w-full bg-[#C2542E] text-white font-bold py-4 rounded-lg hover:bg-[#A8431F]"
        >
          Send message
        </button>
      </div>
    );
  }
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
 

  return (
    <div className="bg-[#FAF6EF] min-h-screen">


      <div className="max-w-[1000px] mx-auto px-6 pt-14 pb-3 text-center">
        <span className="bg-[#FBEAE1] text-[#A8431F] text-xs font-bold uppercase px-3 py-1 rounded">
          Get in touch
        </span>
        <h1 className="text-5xl font-bold mt-4">We're here to help</h1>
        <p className="text-[#5B5346] mt-3 text-lg">
          Questions about an order, a maker profile, or hunarhub itself — reach us directly, no bots in between.
        </p>
      </div>


      <div className="max-w-[1400px] mx-auto px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {channels.map((c) => (
            <div key={c.title} className="bg-white border border-[#EBE3D6] rounded-2xl p-6">
              <span className="w-11 h-11 rounded-xl bg-[#FBEAE1] flex items-center justify-center text-xl">
                {c.icon}
              </span>
              <h3 className="font-bold mt-4">{c.title}</h3>
              <p className="text-sm text-[#5B5346] mt-1">{c.desc}</p>
              <p className="text-sm font-bold text-[#C2542E] mt-3">{c.action} →</p>
            </div>
          ))}
        </div>
      </div>


      <div className="max-w-[1400px] mx-auto px-10 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

        <div className="lg:col-span-2 bg-white border border-[#EBE3D6] rounded-2xl p-8">
          {formContent}
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#29241F] rounded-2xl p-6">
            <p className="text-[#E89A6C] text-xs font-bold uppercase">Support hours</p>
            <p className="text-white font-bold text-lg mt-2">Mon–Sat, 9 AM – 7 PM IST</p>
            <p className="text-[#B7AC9C] text-sm mt-1">
              Sundays & festivals, expect a slightly slower reply — makers deserve the day off too.
            </p>
          </div>

          <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6">
            <h3 className="font-bold mb-4">Reach us directly</h3>
            <div className="mb-3">
              <p className="text-xs text-[#8C8479] font-bold">📞 Phone</p>
              <p className="text-sm font-bold text-[#C2542E]">+91 141 400 2200</p>
            </div>
            <div className="mb-3">
              <p className="text-xs text-[#8C8479] font-bold">✉️ Email</p>
              <p className="text-sm font-bold text-[#C2542E]">help@hunarhub.in</p>
            </div>
            <div>
              <p className="text-xs text-[#8C8479] font-bold">📷 Instagram</p>
              <p className="text-sm font-bold text-[#C2542E]">@hunarhub.in</p>
            </div>
          </div>

          <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6">
            <h3 className="font-bold mb-2">Head office</h3>
            <p className="text-sm text-[#5B5346] leading-relaxed">
              hunarhub Technologies<br />
              C-42, Malviya Nagar<br />
              Jaipur, Rajasthan 302017
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
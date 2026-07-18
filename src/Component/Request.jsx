import React, { useState } from 'react'

const serviceTypes = [
  { label: "Repair", sub: "Fix or restore an item" },
  { label: "Custom order", sub: "Made to your spec" },
  { label: "Alteration", sub: "Resize or adjust" },
  { label: "Something else", sub: "Describe it below" },
];

const handoverOptions = ["📍 I'll pick up", "🚚 Home delivery"];

const Request = () => {
  const [serviceType, setServiceType] = useState("Repair");
  const [details, setDetails] = useState("");
  const [handover, setHandover] = useState("📍 I'll pick up");
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (details === "") {
      return;
    }
    setSent(true);
  };

  let content;

  if (sent) {
    content = (
      <div className="bg-white border border-[#EBE3D6] rounded-2xl p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl mx-auto">
          ✓
        </div>
        <h1 className="text-2xl font-bold mt-5">Request sent to Karan</h1>
        <p className="text-[#5B5346] text-sm mt-2">
          They'll confirm within ~1.2 hrs. You'll get a notification the moment they respond.
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <button className="bg-[#C2542E] text-white font-bold px-5 py-3 rounded-lg">
            View my requests
          </button>
          <button className="border border-[#DDD3C2] font-bold px-5 py-3 rounded-lg">
            Back to shop
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <div>
        <h1 className="text-3xl font-bold">Request a service</h1>
        <p className="text-[#8C8479] text-sm mt-1">
          Tell Karan what you need — they'll confirm price and timing before anything is charged.
        </p>


        <div className="bg-white border border-[#EBE3D6] rounded-xl p-4 flex items-center gap-3 mt-5">
          <div className="w-11 h-11 rounded-full bg-[#C2542E] text-white flex items-center justify-center font-bold">
            K
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm">Karan</p>
            <p className="text-xs text-[#8C8479]">Potter · Sanganer, Jaipur</p>
          </div>
          <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
            ✓ Verified
          </span>
        </div>


        <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6 mt-4">

          <label className="block text-sm font-bold mb-2">What do you need?</label>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {serviceTypes.map((t) => (
              <button
                key={t.label}
                onClick={() => setServiceType(t.label)}
                className={`text-left rounded-xl border p-4 ${
                  serviceType === t.label
                    ? "bg-[#FBEEE7] border-[#C2542E]"
                    : "bg-white border-[#DDD3C2]"
                }`}
              >
                <p className={`font-bold text-sm ${serviceType === t.label ? "text-[#A8431F]" : "text-[#29241F]"}`}>
                  {t.label}
                </p>
                <p className="text-xs text-[#8C8479] mt-1">{t.sub}</p>
              </button>
            ))}
          </div>

          <label className="block text-sm font-bold mb-2">Describe what you'd like</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            placeholder="e.g. Resole a pair of brown leather sandals, size 9. Need it back by next weekend."
            className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3 mb-5"
          ></textarea>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-bold mb-2">Preferred date</label>
              <input
                type="date"
                className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Budget (optional)</label>
              <input
                type="text"
                placeholder="₹ e.g. 300"
                className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3"
              />
            </div>
          </div>

          <label className="block text-sm font-bold mb-2">Handover preference</label>
          <div className="grid grid-cols-2 gap-3">
            {handoverOptions.map((h) => (
              <button
                key={h}
                onClick={() => setHandover(h)}
                className={`py-3 rounded-lg border font-bold text-sm ${
                  handover === h
                    ? "bg-[#FBEEE7] border-[#C2542E] text-[#A8431F]"
                    : "bg-white border-[#DDD3C2] text-[#29241F]"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>


        <div className="bg-[#FBEAE1] border border-[#F3D2BE] rounded-xl p-4 mt-4 text-sm text-[#7A4C36]">
          💰 No charge yet — Karan reviews your request and confirms the final price before you pay.
          Payment happens directly on handover, ₹0 platform fee.
        </div>

        <button
          onClick={submit}
          className="w-full bg-[#C2542E] text-white font-bold py-4 rounded-lg mt-4 hover:bg-[#A8431F]"
        >
          Send request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      <div className="max-w-[760px] mx-auto px-6 py-10">
        {content}
      </div>
    </div>
  )
}

export default Request
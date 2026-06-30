import React from 'react'

const features = [
  { icon: "", title: "Local discovery", desc: "Find makers near you" },
  { icon: "", title: "Verified makers", desc: "Admin-approved profiles" },
  { icon: "", title: "Buy or book", desc: "Products & services in one place" },
  { icon: "", title: "Rated & reviewed", desc: "Real customer feedback" },
];

const footerLinks = [
  { heading: "SHOP", links: ["All categories", "Handmade products", "Book a service", "Top-rated makers"] },
  { heading: "MAKERS", links: ["List your skills", "Maker dashboard", "Service requests", "Earnings"] },
  { heading: "COMPANY", links: ["About", "Contact", "Help & FAQs", "Privacy"] },
];

const Lastone = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 bg-white border-t border-[#eee]">
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-6 border-r border-[#eee]">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <h3 className="font-bold text-[#29241F]">{item.title}</h3>
              <p className="text-[#8C8479] text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
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

          {footerLinks.map((col, index) => (
            <div key={index}>
              <h4 className="text-[#A5A098] font-bold tracking-wider text-sm mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-white hover:text-[#C8843C]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </footer>
    </div>
  )
}

export default Lastone
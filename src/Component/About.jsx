
import React from 'react'
import { Route } from 'react-router'
import { useEffect } from 'react'
import { Link } from 'react-router'
const boxesdetail = [
    {Number : "1240+" , detail : "Verified makers"},
    {Number : "18K+" , detail : "orders placed"},
    {Number : "₹0" , detail : "platform fee, ever"},
    {Number : "13" , detail : `cities `},
]
const rules = [
    { icon: "🤝", title: "Direct, always", desc: "Money moves from customer to maker — cash or UPI, no intermediary holding it." },
    { icon: "📍", title: "Hyperlocal first", desc: "We rank by distance before anything else. Your neighbourhood, not the whole country." },
    { icon: "✅", title: "Verified, not just listed", desc: "Every maker is reviewed before they go live, so trust isn't just a rating number." },
]

const About = () => {
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

    <div className='bg-[#FBF6EF] w-[full] h-[auto] p-11'>
        <div className='m-[auto] leading--1.5 p-23'>
            <div className='bg-[#FBEAE1] w-fit mx-auto p-2 px-4 rounded-2xl text-[#A8441F]'>OUR STORY</div>
            <div className='text-7xl font-extrabold text-[#29241F] leading-tight max-w-4xl mx-auto text-center mt-8'>
                The neighbourhood market, {" "}
                <span className='text-[#C2542E]'>
                    brought online
                </span>.

            </div>
            <p className='max-w-[680px] w-fit px-4 text-center mx-auto font-light mt-2.5 text-[#5B5446] text-2xl'>hunarhub connects potters, tailors, cobblers, artisans and small vendors with the people who live down the street from them — no middlemen, no platform fees, ever.</p>
        </div>
<div className='grid grid-cols-3 grid-rows-[370px_370px] gap-5.5 max-w-[1400px] mx-auto p-9 mt-16'>
    <div className="bg-[url('https://i.pinimg.com/736x/bc/8f/43/bc8f435f8aa28726fa12d5ced1bfde66.jpg')]  bg-cover bg-center [grid-area:1/1/3/3] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-1"></div>
    <div className="bg-[url('https://i.pinimg.com/736x/e8/43/10/e84310cfed009deb2a89eb8fbee1016a.jpg')] bg-cover bg-center [grid-area:1/3/2/4] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1" ></div>
    <div className="bg-[url('https://i.pinimg.com/736x/e8/f2/ba/e8f2bab595a09d482a730fa68422ce8a.jpg')] bg-cover bg-center [grid-area:2/3/3/4] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"></div>
</div>

<div className='flex m-auto p-3 mt-23 justify-between'>
    <div className='w-[600px] p-16'>
        <h5 className='font-medium text-[#C2542E] '>WHY WE EXIST</h5>
        <div className='text-3xl max-w-[508px] py-3 font-bold '>Every town has hidden hunar. We just make it easy to find.</div>
        <p className='text-1xl max-w-[508px] py-5'> 
            Hunar means skill, craft, artistry. Long before apps, your neighbourhood already had a potter, a tailor, a cobbler — people whose work you trusted because you could see it with your own eyes. Big platforms made buying easier but pushed these makers further away, taking a cut of every sale.
        <br />
We built hunarhub to put that trust back within walking distance — discovery without distance, and payment that goes straight to the person who made your order, not through us.
        </p>
    </div>

    <div>

<div className='grid grid-cols-2 gap-8 flex-1 p-16'>
    {boxesdetail.map((item, id) => (
        <div key={id} className='bg-white rounded-3xl px-9 py-10 shadow-sm'>
            <div className='text-5xl font-extrabold text-[#29241F]'>{item.Number}</div>
            <p className='text-[#8C8479] text-xl mt-3'>{item.detail}</p>
        </div>
    ))}
</div>

    </div>

</div>


        <div className='max-w-[1400px] mx-auto mt-24'>
    <h5 className='font-medium text-[#C2542E] text-center tracking-wider'>WHAT WE STAND FOR</h5>
    <h2 className='text-5xl font-extrabold text-[#29241F] text-center mt-4'>The rules we don't break</h2>

    <div className='grid grid-cols-3 gap-8 mt-14'>
        {rules.map((item, id) => (
            <div key={id} className='bg-white rounded-3xl p-9'>
                <div className='bg-[#FBEAE1] w-fit text-3xl p-4 rounded-2xl'>{item.icon}</div>
                <h3 className='text-2xl font-bold text-[#29241F] mt-8'>{item.title}</h3>
                <p className='text-[#5B5446] text-lg leading-relaxed mt-3'>{item.desc}</p>
            </div>
        ))}
    </div>
</div>
<div className='bg-[#29241F] rounded-3xl max-w-[1400px] mx-auto mt-24 px-16 py-20 flex items-center justify-between'>
    <div>
        <h2 className='text-5xl font-extrabold text-white'>Have a skill worth sharing?</h2>
        <p className='text-[#A5A098] text-2xl mt-4'>Join 1,240+ makers already selling directly to their neighbours — ₹0 platform fee, always.</p>
    </div>

    <Link to='/sell' className='bg-[#C2542E] text-white text-xl font-bold px-10 py-5 rounded-2xl whitespace-nowrap hover:bg-[#A8441F]'>
        Start selling →
    </Link>
</div>
    </div>
  )
}

export default About

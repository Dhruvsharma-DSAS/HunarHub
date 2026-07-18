import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const skills = ["Pottery", "Terracotta diyas", "Matkas", "Puja items", "Custom sculpture"];

const gallery = [
  { img: "https://loremflickr.com/400/400/diya,pottery?lock=11", price: "₹150" },
  { img: "https://loremflickr.com/400/400/clay,pot?lock=2", price: "₹240" },
  { img: "https://loremflickr.com/400/400/planter,clay?lock=23", price: "₹280" },
  { img: "https://loremflickr.com/400/400/sculpture,clay?lock=24", price: "From ₹600" },
  { img: "https://loremflickr.com/400/400/wallart,clay?lock=25", price: "₹340" },
  { img: "https://loremflickr.com/400/400/brass,puja?lock=6", price: "₹890" },
];

const baseReviews = [
  { name: "Priya Sharma", date: "2 Jul 2026", stars: "★★★★★", text: "Beautiful diyas, exactly like the photos. Karan even packed extra padding so nothing broke in transit." },
  { name: "Vikram Singh", date: "27 Jun 2026", stars: "★★★★★", text: "Bought a matka for summer — keeps water genuinely cool. Quick handover too." },
  { name: "Anjali Mehta", date: "14 Jun 2026", stars: "★★★★☆", text: "Lovely craftsmanship on the puja thali, slightly smaller than I expected but still worth it." },
  { name: "Rohit Gupta", date: "2 Jun 2026", stars: "★★★★★", text: "Second time ordering from Karan. Consistent quality every time." },
];

const Profile = () => {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [myRating, setMyRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState(baseReviews);

  const submitReview = () => {
    if (myRating === 0 || reviewText === "") {
      return;
    }

    const stars = "★".repeat(myRating) + "☆".repeat(5 - myRating);
    const newReview = { name: "You", date: "Just now", stars: stars, text: reviewText };

    setReviews([newReview, ...reviews]);
    setShowForm(false);
    setMyRating(0);
    setReviewText("");
  };

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      <div className="max-w-[1180px] mx-auto px-6 py-8">


        <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-[#C2542E] text-white flex items-center justify-center font-bold text-3xl">
            K
          </div>
          <div className="flex-1">
            <p className="text-2xl font-bold">
              Karan {" "}
              <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                ✓ Verified maker
              </span>
            </p>
            <p className="text-sm text-[#8C8479] mt-1">
              Potter (Kumhar) · Sanganer, Jaipur · 14 yrs experience
            </p>
            <p className="text-sm mt-2">
              <span className="text-[#E0A21A]">★</span> <b>4.9</b>{" "}
              <span className="text-[#8C8479]">(312 ratings) · 98% response rate</span>
            </p>
          </div>
          <button className="bg-[#C2542E] text-white font-bold px-6 py-3 rounded-xl">
            Message maker
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 items-start">


          <div className="lg:col-span-2 flex flex-col gap-4">


            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-2">About</h2>
              <p className="text-sm text-[#3A352C] leading-relaxed">
                Third-generation potter working the wheel in Sanganer. I make hand-thrown
                terracotta diyas, matkas and puja items using clay sourced locally and fired
                the traditional way — each piece carries the small imperfections that make it handmade.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((sk) => (
                  <span key={sk} className="bg-[#FBEAE1] text-[#A8431F] text-xs font-bold px-3 py-1 rounded-full">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

        
            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4">Product gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {gallery.map((g, index) => (
                  <div key={index} className="relative rounded-xl overflow-hidden">
                    <img src={g.img} alt="" className="w-full h-40 object-cover" />
                    <span className="absolute bottom-2 left-2 bg-white/95 text-xs font-bold px-2 py-1 rounded">
                      {g.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

   
            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Ratings & reviews</h2>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="border border-[#DDD3C2] rounded-lg px-4 py-2 text-sm font-bold"
                >
                  {showForm ? "Cancel" : "+ Write a review"}
                </button>
              </div>

              {showForm && (
                <div className="bg-[#FAF6EF] border border-[#EBE3D6] rounded-xl p-4 mb-4">
                  <p className="text-sm font-bold mb-2">Your rating</p>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        onClick={() => setMyRating(n)}
                        className={`text-3xl ${n <= myRating ? "text-[#E0A21A]" : "text-[#DDD3C2]"}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={3}
                    placeholder="Share how the order or service went…"
                    className="w-full border border-[#DDD3C2] rounded-lg px-4 py-3 bg-white mb-3"
                  ></textarea>
                  <button
                    onClick={submitReview}
                    className="bg-[#C2542E] text-white font-bold px-5 py-2 rounded-lg"
                  >
                    Submit review
                  </button>
                </div>
              )}

              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <p className="text-4xl font-bold">4.9</p>
                  <p className="text-[#E0A21A]">★★★★★</p>
                  <p className="text-xs text-[#8C8479]">{reviews.length + 308} ratings</p>
                </div>
              </div>

              {reviews.map((r, index) => (
                <div key={index} className="py-4 border-t border-[#F1EADD]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#C2542E] text-white flex items-center justify-center font-bold text-sm">
                      {r.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{r.name}</p>
                      <p className="text-xs text-[#8C8479]">{r.date}</p>
                    </div>
                    <span className="text-[#E0A21A] text-sm">{r.stars}</span>
                  </div>
                  <p className="text-sm text-[#3A352C] mt-2">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

 
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-[#EBE3D6] rounded-2xl p-5">
              <h3 className="font-bold mb-3">Details</h3>
              <p className="text-sm mb-2">📍 Sanganer, Jaipur · 3.2 km away</p>
              <p className="text-sm mb-2">🗓️ Usually available Mon–Sat</p>
              <p className="text-sm">💰 ₹0 platform fee · pay maker directly</p>
            </div>

            <Link to={`/request/${id}`} className="block bg-[#29241F] text-white font-bold py-4 rounded-xl text-center">
              Request a custom order →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
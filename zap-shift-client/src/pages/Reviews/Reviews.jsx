import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003d32] mb-4">
            What our customers are sayings
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          </p>
        </div>

        {/* Swiper Slider Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={false} // অটো মুভ বন্ধ
            pagination={{
              el: '.custom-pagination',
              clickable: true,
            }}
            navigation={{
              nextEl: '.review-next-btn',
              prevEl: '.review-prev-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3 },
            }}
            className="review-swiper pb-12" // কার্ডের নিচে একটু জায়গা রাখার জন্য pb-12
          >
            {reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <ReviewCard reviewData={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- কাস্টম কন্ট্রোল সেকশন (কার্ডের একদম নিচে মাঝখানে) --- */}
          <div className="flex items-center justify-center gap-4 mt-8">
            
            {/* Prev Button - সাদা */}
            <button className="review-prev-btn w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-700 cursor-pointer hover:bg-gray-50 border border-gray-100 transition-all z-10">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Pagination Dots - মাঝখানে */}
            <div className="custom-pagination !static !w-auto flex items-center gap-2"></div>

            {/* Next Button - লাইম গ্রিন */}
            <button className="review-next-btn w-12 h-12 bg-[#B4EB4F] rounded-full flex items-center justify-center shadow-lg text-gray-900 cursor-pointer hover:bg-[#a3d645] transition-all z-10">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
          </div>
        </div>
      </div>

      <style>{`
        /* পাশের স্লাইড ব্লার এবং ছোট থাকবে */
        .review-swiper .swiper-slide {
          opacity: 0.3;
          filter: blur(4px);
          transform: scale(0.85);
          transition: all 0.6s ease;
        }

        /* মাঝখানের স্লাইড হাইলাইট */
        .review-swiper .swiper-slide-active {
          opacity: 1;
          filter: blur(0px);
          transform: scale(1.05); 
        }

        /* ডট স্টাইল */
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1 !important;
          opacity: 1 !important;
        }
        
        .custom-pagination .swiper-pagination-bullet-active {
          background: #003d32 !important;
          width: 14px !important;
          border-radius: 10px !important;
        }

        .swiper-button-next, .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default Reviews;
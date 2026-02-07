import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/free-mode";

// পাথ ঠিক করা হয়েছে (../../../ এর বদলে ../../ ব্যবহার করুন)
import amazon from "../../assets/brands/amazon.png";
import amazon_vector from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";

const brandLogos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <div className=" py-12 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-[#003d32] font-bold text-xl md:text-2xl">
            We've helped thousands of sales teams
          </h3>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          loop={true}
          freeMode={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="brand-swiper"
        >
          {brandLogos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="flex justify-center items-center h-16">
                <img
                  src={logo}
                  alt="brand logo"
                  className="max-h-12 w-auto object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .brand-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default Brands;

// Banner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const banners = [
    { id: 1, image: "/images/banners/banner001.jpg", text: "Welcome to Our Shop" },
    // { id: 1, image: "/images/banners/banner1.png", text: "Welcome to Our Shop" },
    // { id: 2, image: "/images/banners/banner02.jpg", text: "New Arrivals This Week" },
    // { id: 3, image: "/images/banners/banner2.png", text: "Big Summer Sale" },
    // { id: 4, image: "/images/WhatsApp Image 2025-07-24 at 15.14.48_b52db62e.jpg", text: "Big Summer Sale" },
    { id: 4, image: "/images/banner3.jpg", text: "Big Summer Sale" },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation ]}
        autoplay={{ delay: 4000, disableOnInteraction: false ,pauseOnMouseEnter: true}}
        pagination={{ clickable: false }}
        navigation={false}
        loop={true}
       
        className="w-[100%]  h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full flex justify-center items-center bg-black">
              {/* Banner Image (No Cropping) */}
              <img
                src={banner.image}
                alt={banner.text}
                className="w-[100%] max-h-[400px] sm:max-h-[500px] object-contain"
              />

              {/* Text Overlay */}
              {/* <h2 className="absolute bottom-5 px-4 py-2 text-lg sm:text-3xl text-white font-bold bg-black bg-opacity-50 rounded-lg">
                {banner.text}
              </h2> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

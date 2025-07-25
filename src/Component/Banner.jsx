// Banner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const banners = [
    { id: 1, image: "/images/banners/quize.jpg", text: "Welcome to Our Shop" },
    { id: 4, image: "/images/banners/banner.jpg", text: "Big Summer Sale" },
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
                className="w-[100%] max-h-[400px] sm:max-h-[500px] object-cover"
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

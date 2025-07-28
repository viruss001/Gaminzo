import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const banners = [
  { id: 1, image: "/images/banners/quize.webp" },
  { id: 2, image: "/images/banners/banner.webp" },
  { id: 3, image: "/images/banners/banner03.webp" },
];

const Banner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperRef.current.autoplay.start();
        } else {
          swiperRef.current.autoplay.stop();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".banner-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full relative group banner-section">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-white/80 !h-2 !w-6 !rounded-sm",
          bulletActiveClass: "!bg-primary !w-8",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        className="w-full h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative flex justify-center items-center bg-black overflow-hidden">
              <img
                src={banner.image}
                alt=""
                loading="lazy"
                className="w-full max-h-[400px] sm:max-h-[500px] object-cover transition-transform duration-700 ease-out transform scale-105 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

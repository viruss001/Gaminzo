import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const banners = [
  { id: 1, image: "/images/banners/quize.webp" },
  { id: 2, image: "/images/banners/banner001.webp" },
  { id: 3, image: "/images/banners/banner03.webp" },
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Banner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) swiperRef.current.autoplay.resume();
        else swiperRef.current.autoplay.pause();
      },
      { threshold: 0.2 }
    );
    const element = document.querySelector(".banner-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full relative banner-section p-[2px] rounded-2xl
                 bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-500
                 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]
                 transition-all duration-500"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !bg-white/40 !h-2.5 !w-6 !rounded-full transition-all duration-500",
            bulletActiveClass: "!bg-white !w-8",
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={1500} // smoother transition
          className="w-full h-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative flex justify-center items-center bg-black overflow-hidden">
                {/* Static image (Ken Burns removed) */}
                <img
                  src={banner.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Caption Animation */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  className="absolute bottom-10 text-white text-3xl font-bold px-6"
                >
                  Your Caption Text
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

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
    <div className="w-full relative banner-section rounded-2xl shadow-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !bg-white/40 !h-2.5 !w-6 !rounded-full transition-all duration-300",
          bulletActiveClass: "!bg-white !w-8",
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
              {/* Ken Burns Effect */}
              <motion.img
                src={banner.image}
                alt=""
                loading="lazy"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 4, ease: "easeOut" }}
                className="w-full max-h-[500px] object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Caption Animation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textVariants}
                  className="text-2xl md:text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                >
                  Modern Banner Title
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={textVariants}
                  transition={{ delay: 0.3 }}
                  className="mt-2 text-sm md:text-lg opacity-90"
                >
                  Add some description or call to action
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

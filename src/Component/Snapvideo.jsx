import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const videoList = [
  { id: 1, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
  { id: 2, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
  { id: 3, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
  { id: 4, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
  { id: 5, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
];

const VideoCarousel = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setActiveIndex(newIndex);

    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === newIndex && userInteracted) {
          video.play();
          video.onended = () =>
            swiper.isEnd ? swiper.slideTo(0) : swiper.slideNext();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  };

  useEffect(() => {
    if (userInteracted) {
      const activeVideo = videoRefs.current[activeIndex];
      activeVideo?.play().catch(() => {});
    }
  }, [userInteracted]);

  return (
    <div
      className={`w-full flex flex-col items-center py-10 px-4 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent ${
          isDark
            ? "bg-gradient-to-r from-emerald-400 to-blue-400"
            : "bg-gradient-to-r from-blue-500 to-emerald-500"
        }`}
      >
        SNAPSHOT OF GAMINZO
      </motion.h2>

      <div className="w-full max-w-6xl relative">
        {!userInteracted && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={() => setUserInteracted(true)}
              className={`font-bold py-3 px-6 rounded-full text-lg shadow-lg transition ${
                isDark
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Click to Play Videos
            </button>
          </div>
        )}

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => handleSlideChange(swiper)}
          className="w-full"
        >
          {videoList.map((vid, index) => (
            <SwiperSlide key={vid.id} className="h-[300px] md:h-[400px]">
              <motion.div
                className={`relative rounded-xl overflow-hidden shadow-lg w-full h-full transition-all duration-300 ${
                  activeIndex === index ? "scale-105" : "scale-95 opacity-70"
                }`}
              >
                {activeIndex === index && (
                  <motion.div
                    className={`absolute inset-0 rounded-xl p-[3px] ${
                      isDark
                        ? "bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500"
                        : "bg-gradient-to-r from-blue-500 via-emerald-400 to-purple-400"
                    }`}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  >
                    <div
                      className={`w-full h-full rounded-xl ${
                        isDark ? "bg-gray-900" : "bg-white"
                      }`}
                    />
                  </motion.div>
                )}

                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={vid.src}
                  className="relative w-full h-full object-cover rounded-xl"
                  playsInline
                  muted={!userInteracted}
                  preload="auto"
                />

                {!userInteracted && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-gray-800"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoCarousel;

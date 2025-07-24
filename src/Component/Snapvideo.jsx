import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";

const videoList = [
  { id: 1, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
  { id: 2, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
  { id: 3, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
  { id: 4, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
  { id: 5, src: "/video/6498520-uhd_2160_3840_25fps.mp4" },
];

const VideoCarousel = () => {
  const swiperRef = useRef(null);
  const headingRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // GSAP heading animation
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );

    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const playActiveVideo = () => {
      const newActiveIndex = swiper.activeIndex;
      setActiveIndex(newActiveIndex);

      // Pause all videos and reset them
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
          video.controls = false;
        }
      });

      // Play the active video
      const activeVideo = videoRefs.current[newActiveIndex];
      if (activeVideo) {
        const playPromise = activeVideo.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(_ => {
              // Autoplay started successfully
              activeVideo.onended = () => {
                if (swiper.isEnd) {
                  swiper.slideTo(0); // Loop back to first video
                } else {
                  swiper.slideNext();
                }
              };
            })
            .catch(error => {
              console.log("Autoplay prevented:", error);
              // Show play button or handle the blocked autoplay
            });
        }
      }
    };

    // Handle user interaction to enable sound
    const handleFirstInteraction = () => {
      setUserInteracted(true);
      if (swiper) {
        playActiveVideo();
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    swiper.on("slideChange", playActiveVideo);
    swiper.on("init", () => {
      // Try to play immediately (may be blocked by browser)
      playActiveVideo();
    });

    // Initialize swiper starting at first video
    swiper.init();

    return () => {
      swiper.off("slideChange", playActiveVideo);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-10 bg-gray-900 px-4">
      {/* Animated Heading */}
      <motion.h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400"
      >
        SNAPSHOT OF GAMINZO
      </motion.h2>

      {/* Swiper Carousel */}
      <div className="w-full max-w-6xl relative">
        {!userInteracted && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button 
              onClick={() => setUserInteracted(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg"
            >
              Click to Play Videos
            </button>
          </div>
        )}
        
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          initialSlide={0} // Start from first video
          className="w-full"
        >
          {videoList.map((vid, index) => (
            <SwiperSlide key={vid.id} className="h-[400px]">
              <div className={`relative bg-gray-800 rounded-xl overflow-hidden shadow-lg w-full h-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'scale-105 opacity-100' 
                  : 'scale-95 opacity-70'
              }`}>
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={vid.src}
                  className="w-full h-full object-cover"
                  playsInline
                  muted={!userInteracted} // Unmute after user interaction
                  preload="auto"
                />
                {!userInteracted && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom navigation buttons */}
        <div className="swiper-button-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 rounded-full p-4 hover:bg-black/80 transition-all"></div>
        <div className="swiper-button-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 rounded-full p-4 hover:bg-black/80 transition-all"></div>
      </div>
    </div>
  );
};

export default VideoCarousel;
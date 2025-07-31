import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const videoList = [
  { id: 1, src: "/video/vdo.mp4", title: "Gameplay Highlights", description: "Watch our top players in action", duration: "0:45" },
  { id: 2, src: "/video/vdo.mp4", title: "Tournament Finals", description: "The most intense matches of the season", duration: "1:12" },
  { id: 3, src: "/video/vdo.mp4", title: "New Features", description: "Discover what's new in our latest update", duration: "0:38" },
  { id: 4, src: "/video/vdo.mp4", title: "Community Moments", description: "Best moments from our gaming community", duration: "0:56" },
  { id: 5, src: "/video/vdo.mp4", title: "Behind the Scenes", description: "How we create the gaming experience", duration: "1:24" }
];

const VideoCarousel = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  const videoRefs = useRef([]);
  const [videoStates, setVideoStates] = useState(
    videoList.map((_, i) => ({ isPlaying: i === 2, isMuted: true, progress: 0 }))
  );
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const playVideo = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.muted = videoStates[i].isMuted;
        video.play().catch(() => console.log("Autoplay blocked"));
      } else {
        video.pause();
      }
    });

    setVideoStates((prev) =>
      prev.map((v, i) => ({
        ...v,
        isPlaying: i === index,
        progress: i === index ? v.progress : 0
      }))
    );
  };

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    setVideoStates((prev) => {
      const updated = [...prev];
      if (video.paused) {
        video.play();
        updated[index].isPlaying = true;
      } else {
        video.pause();
        updated[index].isPlaying = false;
      }
      return updated;
    });
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.muted = !video.muted;
    setVideoStates((prev) => {
      const updated = [...prev];
      updated[index].isMuted = video.muted;
      return updated;
    });
  };

  const updateProgress = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    setVideoStates((prev) => {
      const updated = [...prev];
      if (!isNaN(video.duration)) {
        updated[index].progress = (video.currentTime / video.duration) * 100;
      }
      return updated;
    });
  };

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);
    playVideo(newIndex);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      video.addEventListener("timeupdate", () => updateProgress(index));
    });
  }, []);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(2, 0);
      playVideo(2);
    }
  }, [swiperInstance]);

  return (
    <div className={`w-full flex flex-col items-center py-20 px-4 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="relative max-w-7xl w-full">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          navigation
          effect="coverflow"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
          slidesPerView={1.5}
          centeredSlides
          loop
          initialSlide={2}
          breakpoints={{
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3, spaceBetween: 40 }
          }}
          className="w-full pb-16"
        >
          {videoList.map((video, index) => {
            const { isPlaying, isMuted, progress } = videoStates[index];
            return (
              <SwiperSlide key={video.id} className="h-[400px]">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl w-full h-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={video.src}
                    className="w-full h-full object-cover rounded-2xl"
                    muted={isMuted}
                    playsInline
                    preload="auto"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                    <button
                      onClick={() => togglePlayPause(index)}
                      aria-label="Toggle Play"
                      className={`p-2 rounded-full ${isDark ? "bg-black/60 text-white" : "bg-white/80 text-gray-800"}`}
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button
                      onClick={() => toggleMute(index)}
                      aria-label="Toggle Mute"
                      className={`p-2 rounded-full ${isDark ? "bg-black/60 text-white" : "bg-white/80 text-gray-800"}`}
                    >
                      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>
                    <div className={`flex-1 h-1 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-300"}`}>
                      <div
                        className={`h-full rounded-full ${isDark ? "bg-emerald-400" : "bg-blue-500"}`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{video.duration}</span>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoCarousel;

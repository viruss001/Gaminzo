import React, { useRef, useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const videoList = [
  { id: 1, src: "/video/vdo.mp4", poster: "/images/gameplay-poster.jpg", title: "Gameplay Highlights", description: "Watch our top players in action", duration: "0:45" },
  { id: 2, src: "/video/vdo.mp4", poster: "/images/tournament-poster.jpg", title: "Tournament Finals", description: "The most intense matches of the season", duration: "1:12" },
  { id: 3, src: "/video/vdo.mp4", poster: "/images/features-poster.jpg", title: "New Features", description: "Discover what's new in our latest update", duration: "0:38" },
  { id: 4, src: "/video/vdo.mp4", poster: "/images/community-poster.jpg", title: "Community Moments", description: "Best moments from our gaming community", duration: "0:56" },
  { id: 5, src: "/video/vdo.mp4", poster: "/images/behind-scenes-poster.jpg", title: "Behind the Scenes", description: "How we create the gaming experience", duration: "1:24" }
];

const VideoCarousel = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  const videoRefs = useRef([]);
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const playVideoAtIndex = useCallback(
    (index) => {
      videoRefs.current.forEach((video, i) => {
        if (!video) return;
        if (i === index) {
          video.muted = isMuted;
          video.currentTime = 0;
          video.play().catch(() => console.warn("Autoplay blocked"));
        } else {
          video.pause();
        }
      });
      setIsPlaying(true);
    },
    [isMuted]
  );

  const handleSlideChange = (swiperInstance) => {
    const index = swiperInstance.realIndex;
    setActiveIndex(index);
    setProgress(0);
    playVideoAtIndex(index);
  };

  const togglePlayPause = () => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Update progress bar
  useEffect(() => {
    const video = videoRefs.current[activeIndex];
    if (!video) return;

    const updateProgress = () => {
      if (!isNaN(video.duration)) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => swiper?.slideNext();

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleEnded);
    };
  }, [activeIndex, swiper]);

  // Play center video on mount
  useEffect(() => {
    if (swiper) swiper.slideTo(2, 0);
    playVideoAtIndex(2);
  }, [swiper, playVideoAtIndex]);

  return (
    <div className={`w-full flex flex-col items-center py-20 px-4 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="relative max-w-7xl w-full">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          onSwiper={setSwiper}
          onSlideChange={handleSlideChange}
          navigation
          effect="coverflow"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
          slidesPerView={1.5}
          centeredSlides
          loop
          initialSlide={2}
          breakpoints={{ 640: { slidesPerView: 1.8 }, 768: { slidesPerView: 2.3 }, 1024: { slidesPerView: 3, spaceBetween: 40 } }}
          className="w-full pb-16"
        >
          {videoList.map((video, index) => (
            <SwiperSlide key={video.id} className="h-[400px]">
              <motion.div
                className={`relative rounded-2xl overflow-hidden shadow-xl w-full h-full transition-all duration-300 ${
                  activeIndex === index ? "scale-100" : "scale-90 opacity-80"
                }`}
                whileHover={{ scale: activeIndex === index ? 1.05 : 0.95 }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.src}
                  poster={video.poster}
                  className="w-full h-full object-cover rounded-2xl"
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                />
                {/* Info Overlay */}
                <div className={`absolute top-4 left-4 right-4 p-3 rounded-lg ${isDark ? "bg-black/60 text-white" : "bg-white/80 text-gray-800"}`}>
                  <h3 className="font-bold">{video.title}</h3>
                  <p className="text-sm">{video.description}</p>
                </div>
                {/* Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                  <button onClick={togglePlayPause} aria-label={isPlaying ? "Pause Video" : "Play Video"} className={`p-2 rounded-full ${isDark ? "bg-black/60 text-white" : "bg-white/80 text-gray-800"}`}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button onClick={toggleMute} aria-label={isMuted ? "Unmute Video" : "Mute Video"} className={`p-2 rounded-full ${isDark ? "bg-black/60 text-white" : "bg-white/80 text-gray-800"}`}>
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  <div className={`flex-1 h-1 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-300"}`}>
                    <div className={`h-full rounded-full ${isDark ? "bg-emerald-400" : "bg-blue-500"}`} style={{ width: `${progress}%` }} />
                  </div>
                  <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{video.duration}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoCarousel;

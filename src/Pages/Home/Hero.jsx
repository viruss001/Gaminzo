import React, { useRef } from "react";
import { FaTrophy, FaChartLine, FaCoins } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { motion, useInView } from "framer-motion";

// Feature Cards Data
const features = [
  { icon: <GiCricketBat />, title: "Cricket", color: "from-blue-500 to-emerald-400" },
  { icon: <FaChartLine />, title: "StoxMania", color: "from-yellow-500 to-emerald-400" },
  { icon: <FaTrophy />, title: "Quize Champ", color: "from-purple-500 to-emerald-400" },
  { icon: <FaCoins />, title: "Earn Coins", color: "from-green-500 to-blue-400" },
];

// Icon Float Animation (only on hover)
const iconFloatVariants = {
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
};

// Section Container Animation
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-16 sm:py-28 overflow-hidden `}
    >
      {/* Background Particles (CSS-based, GPU optimized) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          return (
            <div
              key={i}
              className={`absolute rounded-full ${
                isDark ? "bg-emerald-400/30" : "bg-blue-500/30"
              } animate-pulse-slow`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${posX}%`,
                top: `${posY}%`,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 mt-0 md:mt-[-5rem]">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-[#1a418c] to-[#2a964a] text-white rounded-full shadow-md mb-4">
            🏆 Fantasy Cricket 2025
          </span>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Play Smart.
            <br />
            <span
              className={`${
                isDark
                  ? "bg-[yellow]"
                  : "bg-gradient-to-r from-[#1a418c] to-[#2a964a]"
              } bg-clip-text text-transparent`}
            >
              Win Big.
            </span>
          </h1>

          <p
            className={`mt-4 text-base sm:text-lg font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            } max-w-lg`}
          >
            Build your dream team, compete live, and win real cash. Fantasy sports like you've never experienced.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
            <button className="px-6 py-3 rounded-full font-semibold shadow-md w-full sm:w-auto bg-gradient-to-r from-[#1a418c] to-[#2a964a] text-white">
              Download APK
            </button>

            <div className="flex gap-4 items-center justify-center sm:justify-start">
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10 sm:h-12"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10 sm:h-12"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 durations-800 sm:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: "easeOut" }}
              whileHover="hover"
              className="relative w-full group p-[2px] rounded-3xl"
              style={{
                background: `linear-gradient(45deg, ${
                  isDark ? "#1a418c" : "#93c5fd"
                }, ${isDark ? "#2a964a" : "#6ee7b7"})`,
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              <div
                className={`relative z-10 rounded-3xl p-6 sm:p-8 h-full flex flex-col items-center text-center ${
                  isDark
                    ? "bg-gray-800/80 backdrop-blur-md text-white"
                    : "bg-white/90 backdrop-blur-sm text-gray-800"
                }`}
              >
                <motion.div
                  variants={iconFloatVariants}
                  whileHover="hover"
                  className={`w-16 h-16 flex items-center justify-center rounded-full mb-5 bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  {React.cloneElement(feature.icon, { className: "text-2xl text-white" })}
                </motion.div>
                <h4 className="font-semibold text-xl sm:text-2xl">{feature.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;

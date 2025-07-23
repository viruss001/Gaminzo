import React from "react";
import {
  FaTrophy,
  FaChartLine,
  FaDraftingCompass,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaChartLine />,
    title: "Live Stats",
    color: "from-blue-500 to-emerald-400",
  },
  {
    icon: <FaTrophy />,
    title: "Contests",
    color: "from-yellow-500 to-emerald-400",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Smart Drafting",
    color: "from-purple-500 to-emerald-400",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Fast Withdrawals",
    color: "from-green-500 to-blue-400",
  },
];

const iconFloatVariants = {
  float: {
    y: [0, -15, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3 },
  },
};

const Hero = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-20 sm:py-28 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Floating Background Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const delay = Math.random() * 2;
          const duration = 5 + Math.random() * 10;

          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                isDark ? "bg-emerald-400/30" : "bg-blue-500/30"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${posX}%`,
                top: `${posY}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                delay,
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-[#1a418c] to-[#2a964a] text-white rounded-full shadow-md mb-4">
            🏆 Fantasy Cricket 2025
          </span>

          <h1
            className={`text-5xl sm:text-6xl font-extrabold leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Play Smart.
            <br />
            <span className="bg-gradient-to-r from-[#1a418c] to-[#2a964a] bg-clip-text text-transparent">
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
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10 sm:h-12"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
              >
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
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover="hover"
              className="relative w-full group p-[2px] rounded-3xl smooth-perf"
              style={{
                background: `linear-gradient(45deg, ${isDark ? "#1a418c" : "#93c5fd"}, ${
                  isDark ? "#2a964a" : "#6ee7b7"
                })`,
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

              {/* Inner Card */}
              <div
                className={`relative z-10 rounded-3xl p-6 sm:p-8 h-full flex flex-col items-center text-center ${
                  isDark
                    ? "bg-gray-800/80 backdrop-blur-md text-white"
                    : "bg-white/90 backdrop-blur-sm text-gray-800"
                }`}
              >
                <motion.div
                  variants={iconFloatVariants}
                  animate="float"
                  whileHover="hover"
                  className={`w-16 h-16 flex items-center smooth-perf justify-center rounded-full mb-5 bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  {React.cloneElement(feature.icon, {
                    className: "text-2xl text-white",
                  })}
                </motion.div>
                <h4 className="font-semibold text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {feature.title}
                </h4>

                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 ${
                    isDark ? "border-emerald-400/30" : "border-blue-400/30"
                  }`}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

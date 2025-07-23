import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaClipboardCheck,
  FaUsers,
  FaPlug,
  FaGift,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaDownload />,
    title: "Install App",
    description:
      "Download our fantasy app and sign up within seconds to kick off your journey.",
    color: "from-blue-500 to-emerald-400",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Select Match",
    description:
      "Pick your favorite upcoming match and dive into strategic play.",
    color: "from-amber-500 to-emerald-400",
  },
  {
    icon: <FaUsers />,
    title: "Create Dream Team",
    description:
      "Build your ultimate squad from both teams using real-time stats.",
    color: "from-purple-500 to-emerald-400",
  },
  {
    icon: <FaPlug />,
    title: "Join Contests",
    description:
      "Enter thrilling contests and test your skill against top players.",
    color: "from-red-500 to-emerald-400",
  },
  {
    icon: <FaGift />,
    title: "Win Rewards",
    description:
      "Climb the leaderboard and cash out your real-time winnings instantly.",
    color: "from-emerald-500 to-blue-400",
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

const OnboardingSteps = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full py-20 px-4 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background Blur Particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
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

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
            isDark ? "from-emerald-400 to-blue-400" : "from-blue-600 to-emerald-600"
          }`}
        >
          We Think About You
        </h2>
        <p
          className={`mt-4 text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          } max-w-xl mx-auto`}
        >
          Every step of the way!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 place-items-center">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="relative w-80 h-80 rounded-3xl p-[2px] group smooth-perf"
              style={{
                background: `linear-gradient(45deg, ${
                  isDark ? "#1a418c" : "#93c5fd"
                }, ${isDark ? "#2a964a" : "#6ee7b7"})`,
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl smooth-perf bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

              {/* Card */}
              <div
                className={`relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-8 py-10 ${
                  isDark
                    ? "bg-gray-800/80 backdrop-blur-md text-white"
                    : "bg-white/90 backdrop-blur-sm text-gray-800"
                }`}
              >
                {/* Floating Icon */}
                <motion.div
                  variants={iconFloatVariants}
                  animate="float"
                  whileHover="hover"
                  className={`flex items-center justify-center w-20 h-20 mb-6 smooth-perf rounded-full bg-gradient-to-br ${step.color} shadow-lg`}
                >
                  {React.cloneElement(step.icon, {
                    className: "text-3xl text-white",
                  })}
                </motion.div>

                {/* Title */}
                <h3 className="font-bold text-2xl tracking-wide mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>

                {/* Subtle Border Pulse */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 ${
                    isDark ? "border-emerald-400/30" : "border-blue-400/30"
                  }`}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;

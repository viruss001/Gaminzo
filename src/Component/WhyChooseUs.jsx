import React from "react";
import { FaBolt, FaRobot, FaGlobe, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Instant Withdrawals",
    desc: "Cash out your earnings instantly, no delays.",
    icon: <FaBolt />,
    color: "from-yellow-400 to-emerald-400",
  },
  {
    title: "AI Draft Assistant",
    desc: "Smart recommendations powered by real-time stats.",
    icon: <FaRobot />,
    color: "from-pink-500 to-emerald-400",
  },
  {
    title: "Fair Play Certified",
    desc: "Audited and transparent to ensure trust and fairness.",
    icon: <FaLock />,
    color: "from-blue-500 to-emerald-400",
  },
  {
    title: "Global Tournaments",
    desc: "Play with users worldwide & win real cash prizes.",
    icon: <FaGlobe />,
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

const WhyChooseUs = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full py-20 px-4 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background floating particles */}
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

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
            isDark ? "from-emerald-400 to-blue-400" : "from-blue-600 to-emerald-600"
          }`}
        >
          Why Choose Us
        </h2>
        <p
          className={`mt-4 text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          } max-w-xl mx-auto`}
        >
          Experience fantasy sports like never before — smarter, faster, and fairer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 place-items-center">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              custom={idx}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="relative w-72 h-72 rounded-3xl p-[2px] group smooth-perf"
              style={{
                background: `linear-gradient(45deg, ${isDark ? "#1a418c" : "#93c5fd"}, ${
                  isDark ? "#2a964a" : "#6ee7b7"
                })`,
              }}
            >
              {/* Hover glow */}
              <div className=" smooth-perf absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

              {/* Card Content */}
              <div
                className={`relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-6 py-8 ${
                  isDark
                    ? "bg-gray-800/80 backdrop-blur-md text-white"
                    : "bg-white/90 backdrop-blur-sm text-gray-800"
                }`}
              >
                {/* Animated icon */}
                <motion.div
                  variants={iconFloatVariants}
                  animate="float"
                  whileHover="hover"
                  className={`flex items-center justify-center w-16 h-16 mb-4 smooth-perf rounded-full bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  {React.cloneElement(feature.icon, {
                    className: "text-2xl text-white",
                  })}
                </motion.div>

                {/* Title */}
                <h3 className="font-bold text-xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.desc}
                </p>

                {/* Pulse border */}
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

export default WhyChooseUs;

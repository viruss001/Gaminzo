import React from "react";
import {
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaUserSecret,
  FaBan,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Easily Navigable",
    desc: "Seamless interface tailored for gamers to explore quickly.",
    icon: <FaMapMarkerAlt />,
    color: "from-blue-500 to-emerald-400",
  },
  {
    title: "Taking Precautions",
    desc: "Your privacy is our priority. Stay secure while gaming.",
    icon: <FaExclamationTriangle />,
    color: "from-amber-500 to-emerald-400",
  },
  {
    title: "Various Games",
    desc: "Compete in dynamic contests across multiple titles.",
    icon: <FaUserSecret />,
    color: "from-purple-500 to-emerald-400",
  },
  {
    title: "Revoked Bots",
    desc: "Zero tolerance for bots — pure skill-based competition.",
    icon: <FaBan />,
    color: "from-red-500 to-emerald-400",
  },
  {
    title: "Fast Withdrawals",
    desc: "Get your winnings quickly & securely, without hassle.",
    icon: <FaMoneyCheckAlt />,
    color: "from-emerald-500 to-blue-400",
  },
];

// Glowing orb animation
const orbVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: [0.2, 0.4, 0.2],
    scale: [1, 1.2, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "backOut",
    },
  }),
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

// Icon float animation
const iconFloatVariants = {
  float: {
    y: [0, -15, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4 + Math.random() * 3,
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

// Background particles
const Particle = ({ index }) => {
  const size = Math.random() * 6 + 2;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const delay = Math.random() * 2;
  const duration = 5 + Math.random() * 10;

  return (
    <motion.div
      className={`absolute rounded-full bg-blue-500/30 dark:bg-emerald-400/30`}
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
};

const WhatYouFindSection = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`relative w-full min-h-screen py-20 px-4 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 blur-3xl"
          variants={orbVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-blue-500/20 to-emerald-400/20"
          variants={orbVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
      </div>

      {/* Section content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r ${
              isDark
                ? "from-emerald-400 to-blue-400"
                : "from-blue-600 to-emerald-600"
            }`}
          >
            We Got What You Wanna Find
          </h2>
          <motion.p
            className={`mt-4 text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            } max-w-xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Unlock premium gaming experiences built just for you.
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
              className="relative w-80 h-80 smooth-perf rounded-3xl p-[2px] group"
              style={{
                background: `linear-gradient(45deg, ${
                  isDark ? "#1a418c" : "#93c5fd"
                }, ${isDark ? "#2a964a" : "#6ee7b7"})`,
              }}
            >
              {/* Glow border */}
              <div className="absolute inset-0 rounded-3xl smooth-perf bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

              {/* Card body */}
              <div
                className={`relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-8 py-10 ${
                  isDark
                    ? "bg-gray-800/80 backdrop-blur-md text-white"
                    : "bg-white/90 backdrop-blur-sm text-gray-800"
                }`}
              >
                {/* Floating icon */}
                <motion.div
                  variants={iconFloatVariants}
                  animate="float"
                  whileHover="hover"
                  className={`flex items-center justify-center w-20 h-20 mb-6 rounded-full smooth-perf bg-gradient-to-br ${item.color} shadow-lg`}
                >
                  {React.cloneElement(item.icon, {
                    className: "text-3xl text-white",
                  })}
                </motion.div>

                <h3 className="font-bold text-2xl tracking-wide mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {item.title}
                </h3>
                <p
                  className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.desc}
                </p>

                {/* Subtle pulsing border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 ${
                    isDark ? "border-emerald-400/30" : "border-blue-400/30"
                  }`}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
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

export default WhatYouFindSection;

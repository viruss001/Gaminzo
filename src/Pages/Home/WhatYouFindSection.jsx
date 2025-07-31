import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaUserSecret,
  FaBan,
  FaMoneyCheckAlt,
  FaHeadset, // <-- NEW ICON
} from "react-icons/fa";

// ==== FEATURES DATA ====
const features = [
  {
    title: "Easily Navigable",
    desc: "Seamless interface tailored for gamers to explore quickly.",
    icon: <FaMapMarkerAlt />,
    color: "from-blue-500 to-emerald-400",
    glowColor: "59,130,246",
  },
  {
    title: "Taking Precautions",
    desc: "Your privacy is our priority. Stay secure while gaming.",
    icon: <FaExclamationTriangle />,
    color: "from-amber-500 to-emerald-400",
    glowColor: "245,158,11",
  },
  {
    title: "Various Games",
    desc: "Compete in dynamic contests across multiple titles.",
    icon: <FaUserSecret />,
    color: "from-purple-500 to-emerald-400",
    glowColor: "139,92,246",
  },
  {
    title: "Revoked Bots",
    desc: "Zero tolerance for bots — pure skill-based competition.",
    icon: <FaBan />,
    color: "from-red-500 to-emerald-400",
    glowColor: "239,68,68",
  },
  {
    title: "Fast Withdrawals",
    desc: "Get your winnings quickly & securely, without hassle.",
    icon: <FaMoneyCheckAlt />,
    color: "from-emerald-500 to-blue-400",
    glowColor: "16,185,129",
  },
  {
    title: "24/7 Support", // <-- NEW FEATURE
    desc: "Get instant assistance anytime, ensuring a smooth gaming experience.",
    icon: <FaHeadset />,
    color: "from-pink-500 to-blue-400",
    glowColor: "236,72,153",
  },
];

// ==== CARD WITH 3D & GLOW ====
const GlowCard = ({ children, glowColor = "132,0,255", className = "" }) => {
  const cardRef = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    rotateX.set(((posY - midY) / midY) * -20);
    rotateY.set(((posX - midX) / midX) * 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, perspective: 1000 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-300"
        style={{
          background: `radial-gradient(circle, rgba(${glowColor},0.4) 0%, rgba(${glowColor},0.1) 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

const WhatYouFindSection = ({ theme = "dark" }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full py-20 px-4 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
            isDark ? "from-emerald-400 to-blue-400" : "from-blue-600 to-emerald-600"
          }`}
        >
          We Got What You Wanna Find
        </h2>
        <p
          className={`mt-4 text-lg max-w-xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Unlock premium gaming experiences built just for you.
        </p>

        {/* Updated grid for 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 place-items-center">
          {features.map((feature, idx) => (
            <GlowCard
              key={idx}
              glowColor={feature.glowColor}
              className={`w-80 h-80 rounded-3xl p-[2px] group relative ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-6 py-8 ${
                  isDark
                    ? "bg-gray-800/90 text-gray-200"
                    : "bg-white/90 text-gray-800"
                } backdrop-blur-sm`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className={`flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  {React.cloneElement(feature.icon, { className: "text-3xl text-white" })}
                </motion.div>
                <h3
                  className={`font-bold text-2xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r ${
                    isDark
                      ? "from-emerald-400 to-blue-400"
                      : "from-blue-400 to-emerald-400"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {feature.desc}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouFindSection;

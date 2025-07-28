import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaBolt, FaRobot, FaGlobe, FaLock, FaShieldAlt, FaUsers } from "react-icons/fa";

// ==== FEATURES DATA ====
const features = [
  {
    title: "Instant Withdrawals",
    desc: "Cash out your earnings instantly, no delays.",
    icon: <FaBolt />,
    color: "from-yellow-400 to-emerald-400",
    glowColor: "255, 193, 7",
  },
  {
    title: "AI Draft Assistant",
    desc: "Smart recommendations powered by real-time stats.",
    icon: <FaRobot />,
    color: "from-pink-500 to-emerald-400",
    glowColor: "236, 72, 153",
  },
  {
    title: "Fair Play Certified",
    desc: "Audited and transparent to ensure trust and fairness.",
    icon: <FaLock />,
    color: "from-blue-500 to-emerald-400",
    glowColor: "59, 130, 246",
  },
  {
    title: "Global Tournaments",
    desc: "Play with users worldwide & win real cash prizes.",
    icon: <FaGlobe />,
    color: "from-green-500 to-blue-400",
    glowColor: "16, 185, 129",
  },
  {
    title: "Secure Payments",
    desc: "Top-level encryption keeps your funds safe.",
    icon: <FaShieldAlt />,
    color: "from-purple-500 to-indigo-400",
    glowColor: "139, 92, 246",
  },
  {
    title: "Community Events",
    desc: "Join exciting events & grow with a strong community.",
    icon: <FaUsers />,
    color: "from-red-500 to-orange-400",
    glowColor: "239, 68, 68",
  },
];

// ==== CARD COMPONENT WITH 3D MOVEMENT ====
const ParticleCard = ({ children, className = "", glowColor = "132,0,255" }) => {
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
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Hover Glow Effect */}
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

// ==== MAIN STEPS SECTION (NOW WITH THEME) ====
const Steps = ({ theme = "light" }) => {
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
            isDark
              ? "from-emerald-400 to-blue-400"
              : "from-blue-600 to-emerald-600"
          }`}
        >
          Why Choose Us
        </h2>
        <p
          className={`mt-4 text-lg max-w-xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Experience fantasy sports like never before — smarter, faster, and fairer.
        </p>

        {/* === GRID 2 ROWS (3 + 3) === */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-16 place-items-center">
          {features.map((feature, idx) => (
            <ParticleCard
              key={idx}
              className={`w-72 h-72 rounded-3xl p-[2px] group relative ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
              glowColor={feature.glowColor}
            >
              {/* Card Content */}
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
                  className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  {React.cloneElement(feature.icon, { className: "text-2xl text-white" })}
                </motion.div>
                <h3
                  className={`font-bold text-xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r ${
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
            </ParticleCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;

import React, { useMemo } from "react";
import {
  FaLightbulb,
  FaWallet,
  FaBullseye,
  FaUserFriends,
  FaTrophy,
  FaMagic,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Optimized feature data
const useFeatures = () => {
  return useMemo(() => ({
    left: [
      {
        icon: <FaLightbulb />,
        title: "Unique Game Variety",
        desc: "Gaminzo offers a powerful mix of Cricket Fantasy, Quiz Challenges, and Stock Market Games – making it the only all-in-one edutainment fantasy platform.",
        color: "from-blue-500 to-emerald-400",
      },
      {
        icon: <FaWallet />,
        title: "Skill-Based & Legal",
        desc: "All games are 100% skill-based and comply with Indian gaming.",
        color: "from-amber-500 to-emerald-400",
      },
      {
        icon: <FaBullseye />,
        title: "Stock Market Game",
        desc: "Gaminzo gamifies market themes like sectors, industries, and trends — without using real money or stock prices.",
        color: "from-purple-500 to-emerald-400",
      },
    ],
    right: [
      {
        icon: <FaTrophy />,
        title: "Smooth UI & Fast Gameplay",
        desc: "Built with a user-friendly design for fast navigation, instant gameplay, and a fun experience on any smartphone.",
        color: "from-blue-500 to-emerald-400",
      },
      {
        icon: <FaMagic />,
        title: "Real-Time Cricket Fantasy",
        desc: "Create fantasy cricket teams, apply your sports knowledge, and win exciting rewards – just like your favorite fantasy sports platforms.",
        color: "from-amber-500 to-emerald-400",
      },
      {
        icon: <FaUserFriends />,
        title: "Rewarding System",
        desc: "Earn real cash prizes, completion certificates, and bonus points for performance and participation!",
        color: "from-purple-500 to-emerald-400",
      },
    ],
  }), []);
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "backOut" },
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

const iconVariants = {
  float: {
    y: [0, -8, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 },
  },
};

const WhySuper6 = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });
  
  const { left: featuresLeft, right: featuresRight } = useFeatures();

  // Optimized background blurs
  const BackgroundBlurs = () => (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: [0.2, 0.3, 0.2], scale: 1 } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-400/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: [0.2, 0.3, 0.2], scale: 1 } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  );

  // Memoized feature card component
  const FeatureCard = React.memo(({ icon, title, desc, color }) => (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="flex items-start gap-4 p-4 rounded-xl backdrop-blur-sm"
      style={{
        background: isDark
          ? "rgba(31, 41, 55, 0.5)"
          : "rgba(255, 255, 255, 0.7)",
        border: isDark
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        variants={iconVariants}
        animate="float"
        whileHover="hover"
        className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${color} shadow-lg`}
      >
        {React.cloneElement(icon, { className: "text-xl text-white" })}
      </motion.div>
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} mt-1`}>
          {desc}
        </p>
      </div>
    </motion.div>
  ));

  return (
    <section
      ref={ref}
      className={`relative w-full min-h-[80vh] px-4 py-16 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <BackgroundBlurs />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
              isDark ? "from-emerald-400 to-blue-400" : "from-blue-600 to-emerald-600"
            }`}
          >
            Why <span className="text-blue-500">Gaminzo</span> is the Best Fantasy App
          </h2>
          <p
            className={`mt-2 text-base ${
              isDark ? "text-gray-300" : "text-gray-700"
            } max-w-2xl mx-auto`}
          >
            The Gaminzo fantasy app stands out because of its innovative cricket prediction game,
            engaging features, and rewarding system.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Column */}
          <motion.div className="space-y-5">
            {featuresLeft.map((feature, i) => (
              <FeatureCard key={`left-${i}`} {...feature} />
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src="/images/ChatGPT_Image_Jul_24__2025__05_16_24_PM-removebg-preview.webp"
              alt="Character"
              className="max-h-[360px] object-contain"
              loading="lazy"
            />
          </motion.div>

          {/* Right Column */}
          <motion.div className="space-y-5">
            {featuresRight.map((feature, i) => (
              <FeatureCard key={`right-${i}`} {...feature} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(WhySuper6);
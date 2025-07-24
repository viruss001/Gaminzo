import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaClipboardCheck,
  FaUsers,
  FaPlug,
  FaGift,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

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

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "backOut" } },
  hover: { y: -10, transition: { duration: 1 } },
};

const iconFloatVariants = {
  float: {
    y: [0, -15, 0],
    rotate: [0, 5, 0],
    transition: { duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" },
  },
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
};

const OnboardingSteps = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`relative w-full min-h-screen py-20 px-4 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            inView
              ? { opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }
              : {}
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-400/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            inView
              ? { opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }
              : {}
          }
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
            We Think About You
          </h2>
          <motion.p
            className={`mt-4 text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            } max-w-xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Every step of the way!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={cardVariants}
              whileHover="hover"
              className="relative w-80 h-80 group"
              style={{ clipPath: "polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)" }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300 rounded-3xl" />

              {/* Card Content */}
              <div
                className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-8 py-10 ${
                  isDark
                    ? "bg-gray-800/80 backdrop-blur-md border border-white/10 text-white"
                    : "bg-white/90 backdrop-blur-sm border border-gray-200 text-gray-800"
                }`}
              >
                {/* Floating Icon */}
                <motion.div
                  variants={iconFloatVariants}
                  animate="float"
                  whileHover="hover"
                  className={`flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br ${step.color} shadow-lg`}
                >
                  {React.cloneElement(step.icon, { className: "text-3xl text-white" })}
                </motion.div>

                <h3 className="font-bold text-2xl tracking-wide mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {step.title}
                </h3>
                <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OnboardingSteps;

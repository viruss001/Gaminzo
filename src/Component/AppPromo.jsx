import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaAndroid } from "react-icons/fa";

const AppPromo = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const boxBaseClass =
    "relative group p-[2px] rounded-3xl transition-transform duration-300";

  const boxBackground = isDark
    ? "bg-gray-800/80 backdrop-blur-md text-white"
    : "bg-white/90 backdrop-blur-sm text-gray-800";

  const glowGradient = isDark
    ? "bg-gradient-to-r from-[#1a418c] to-[#2a964a]"
    : "bg-gradient-to-r from-[#1a418c] to-[#2a964a]";

  return (
    <section
      className={`relative w-full py-16 px-6 sm:px-12 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <h2 className="text-4xl font-bold leading-snug">
            Get the app <br /> and{" "}
            <span
              className={`${
                isDark
                  ? "bg-[yellow] text-black px-2 rounded-md"
                  : "bg-gradient-to-r from-[#1a418c] to-[#2a964a] bg-clip-text text-transparent"
              }`}
            >
              Win Lakhs
            </span>
          </h2>
          <ul
            className={`mt-6 space-y-3 text-lg font-medium ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>• Play with over 10 Lakhs or create your own contest</li>
            <li>• Invite your friends & collect big rewards</li>
            <li>• Play more, earn & get exciting rewards</li>
          </ul>
          <button className="mt-8 px-8 py-3 rounded-full font-semibold shadow-lg bg-gradient-to-r from-[#1a418c] to-[#2a964a] text-white hover:scale-105 transition">
            Download now
          </button>
        </motion.div>

        {/* Right Boxes */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* QR Code Box */}
          <motion.div whileHover={{ scale: 1.05 }} className={boxBaseClass}>
            <div
              className={`absolute inset-0 rounded-3xl ${glowGradient} opacity-0 group-hover:opacity-100 blur-md transition`}
            />
            <div className={`relative z-10 rounded-3xl p-8 flex flex-col items-center text-center ${boxBackground}`}>
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#FFC107] w-3 h-24 rounded-r-lg" />
              <h3 className="text-xl font-semibold mb-5">Scan QR Code</h3>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://dummyurl.com"
                alt="QR Code"
                className="mx-auto bg-white p-2 rounded-md"
              />
            </div>
          </motion.div>

          {/* Download App Box */}
          <motion.div whileHover={{ scale: 1.05 }} className={boxBaseClass}>
            <div
              className={`absolute inset-0 rounded-3xl ${glowGradient} opacity-0 group-hover:opacity-100 blur-md transition`}
            />
            <div className={`relative z-10 rounded-3xl p-8 flex flex-col items-center text-center ${boxBackground}`}>
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#FFC107] w-3 h-24 rounded-r-lg" />
              <h3 className="text-xl font-semibold mb-5">Download App</h3>
              <div className="flex flex-col gap-4 w-full">
                <a
                  href="#"
                  className={`flex items-center justify-center gap-3 py-3 rounded-md ${
                    isDark
                      ? "bg-gray-900 text-white hover:bg-gray-700"
                      : "bg-black text-white hover:bg-gray-800"
                  } transition`}
                >
                  <FaApple className="text-2xl" />
                  <span className="text-sm">Download on App Store</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center justify-center gap-3 py-3 rounded-md ${
                    isDark
                      ? "bg-gray-900 text-green-400 hover:bg-gray-700"
                      : "bg-black text-green-400 hover:bg-gray-800"
                  } transition`}
                >
                  <FaAndroid className="text-2xl" />
                  <span className="text-sm">Download on Android</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;

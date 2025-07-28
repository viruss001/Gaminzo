import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaAndroid } from "react-icons/fa";

const AppDownload = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <section className="relative w-full py-16 px-6 sm:px-12">
      {/* Outer Gradient Box (Theme Aware) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl p-10
          ${isDark 
            ? "bg-gradient-to-r from-[#0b1f3a] to-[#064c2e]" 
            : "bg-gradient-to-r from-[#1a418c] to-[#2a964a]"}`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg text-white"
          >
            <h2 className="text-4xl font-bold leading-snug">
              Get the app <br /> and{" "}
              <span className="text-yellow-400">Win Lakhs</span>
            </h2>
            <ul className="mt-6 space-y-3 text-lg font-medium text-gray-200">
              <li>• Play with over 10 Lakhs or create your own contest</li>
              <li>• Invite your friends & collect big rewards</li>
              <li>• Play more, earn & get exciting rewards</li>
            </ul>
            <button className="mt-8 px-8 py-3 rounded-full font-semibold shadow-lg bg-[#FFC107] text-gray-900 hover:bg-[#FFB300] transition">
              Download now
            </button>
          </motion.div>

          {/* Right Cards */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* QR Code Box */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl shadow-xl p-8 w-72 text-center bg-gray-900 text-white"
            >
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#FFC107] w-3 h-24 rounded-r-lg" />
              <h3 className="text-xl font-semibold mb-5">Scan QR Code</h3>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://dummyurl.com"
                alt="QR Code"
                className="mx-auto"
              />
            </motion.div>

            {/* Download App Box */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl shadow-xl p-8 w-72 text-center bg-gray-900 text-white"
            >
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#FFC107] w-3 h-24 rounded-r-lg" />
              <h3 className="text-xl font-semibold mb-5">Download App</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 py-3 rounded-md transition bg-black text-white hover:bg-gray-800"
                >
                  <FaApple className="text-2xl" />
                  <span className="text-sm">Download on App Store</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 py-3 rounded-md transition bg-black text-green-400 hover:bg-gray-800"
                >
                  <FaAndroid className="text-2xl" />
                  <span className="text-sm">Download on Android</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AppDownload;

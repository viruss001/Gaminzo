import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaAndroid, FaQrcode, FaTrophy, FaUsers, FaGift } from "react-icons/fa";

const AppDownload = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <section className={`relative w-full mb-7 py-20 md:py-28 px-4 sm:px-6 lg:px-8 `}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Outer Gradient Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-3xl overflow-hidden shadow-2xl p-1
            ${isDark 
              ? "bg-gradient-to-r from-blue-900/80 to-emerald-900/80" 
              : "bg-gradient-to-r from-blue-500/80 to-emerald-500/80"}`}
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 hover:opacity-10 transition-opacity duration-500" />

          {/* Inner Content */}
          <div className={`relative rounded-3xl p-8 md:p-12 ${isDark ? "bg-gray-800/90 backdrop-blur-md" : "bg-white/95 backdrop-blur-sm"}`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-xl"
              >
                <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Get the app and <span className="text-yellow-400">Win Big</span>
                </h2>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <FaTrophy className={`flex-shrink-0 mt-1 text-lg ${isDark ? "text-yellow-400" : "text-yellow-500"}`} />
                    <span className={isDark ? "text-gray-200" : "text-gray-700"}>
                      Compete in contests with prizes up to ₹10 Lakhs or create your own
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaUsers className={`flex-shrink-0 mt-1 text-lg ${isDark ? "text-blue-400" : "text-blue-500"}`} />
                    <span className={isDark ? "text-gray-200" : "text-gray-700"}>
                      Invite friends and earn referral bonuses
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaGift className={`flex-shrink-0 mt-1 text-lg ${isDark ? "text-emerald-400" : "text-emerald-500"}`} />
                    <span className={isDark ? "text-gray-200" : "text-gray-700"}>
                      Exclusive rewards and bonuses for active players
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3 rounded-full font-semibold shadow-lg bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition-all"
                  >
                    Download Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`px-8 py-3 rounded-full font-semibold shadow-lg border-2 ${isDark ? "border-gray-400 text-white hover:bg-gray-700/50" : "border-gray-600 text-gray-800 hover:bg-gray-100"}`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Cards Section */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* QR Code Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className={`relative rounded-2xl shadow-xl p-6 w-64 text-center ${isDark ? "bg-gray-700" : "bg-white"} border-t ${isDark ? "border-gray-600" : "border-gray-200"}`}
                >
                  <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-20 rounded-r-lg ${isDark ? "bg-yellow-400" : "bg-yellow-500"}`} />
                  <div className="flex justify-center mb-4">
                    <FaQrcode className={`text-4xl ${isDark ? "text-blue-400" : "text-blue-500"}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>Scan QR Code</h3>
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://yourapp.com/download&bgcolor=1a1a1a&color=ffffff"
                    alt="QR Code"
                    className="mx-auto w-32 h-32 rounded"
                  />
                  <p className={`mt-3 text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>Scan to download directly</p>
                </motion.div>

                {/* Download Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  className={`relative rounded-2xl shadow-xl p-6 w-64 text-center ${isDark ? "bg-gray-700" : "bg-white"} border-t ${isDark ? "border-gray-600" : "border-gray-200"}`}
                >
                  <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-20 rounded-r-lg ${isDark ? "bg-yellow-400" : "bg-yellow-500"}`} />
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-800"}`}>Download App</h3>
                  <div className="flex flex-col gap-3">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#"
                      className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md transition ${isDark ? "bg-gray-800 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
                    >
                      <FaApple className="text-xl" />
                      <span className="text-sm font-medium">App Store</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#"
                      className={`flex items-center justify-center gap-2 py-2 px-4 rounded-md transition ${isDark ? "bg-gray-800 hover:bg-gray-600 text-green-400" : "bg-gray-100 hover:bg-gray-200 text-green-600"}`}
                    >
                      <FaAndroid className="text-xl" />
                      <span className="text-sm font-medium">Google Play</span>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div 
          className="mt-16 text-center max-w-4xl mx-auto mb-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Join 5 Million+ Happy Users
          </h3>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Rated 4.8/5 on app stores with over 100,000 positive reviews. 
            Trusted by players worldwide for fair play and instant withdrawals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;
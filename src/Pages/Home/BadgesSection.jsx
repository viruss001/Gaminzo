import React from "react";
import { motion } from "framer-motion";

const badges = [
  { title: "MADE IN", main: "100% INDIA" },
  { title: "INSTANT", main: "WITHDRAWALS" },
  { title: "100%", main: "SECURE PAYMENT" },
  { title: "24/7", main: "CUSTOMER SUPPORT" },
];

const BadgesSection = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900";
  const badgeBg = isDark ? "bg-gray-800" : "bg-white";

  return (
    <section className={`py-10 px-4 ${containerBg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`flex flex-col items-center justify-center w-60 h-40 rounded-2xl shadow-md relative overflow-hidden ${badgeBg} transition`}
          >
            {/* Border Gradient */}
            <span className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#1a418c] to-[#2a964a] opacity-0 hover:opacity-100 transition" />

            {/* Content */}
            <div className="z-10 flex flex-col items-center text-center p-4">
              <h4 className="text-lg font-semibold mb-2">{badge.title}</h4>
              <p className="text-xl font-bold">{badge.main}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BadgesSection;

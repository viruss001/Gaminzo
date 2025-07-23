import React from "react";
import { motion } from "framer-motion";

const SnapshotWinzo = ({ theme = "dark" }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full min-h-screen px-6 py-16 flex flex-col justify-center items-center overflow-hidden ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-400/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400"
      >
        SNAPSHOT OF GAMINZO.
      </motion.h2>

      {/* Center Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10"
      >
        <img
          src="/images/image-721@2x-1751984540010.webp"
          alt="WinZO Graphic"
          className="max-w-3xl w-full"
        />
      </motion.div>

      {/* Description Text */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`text-center max-w-4xl text-lg leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Gaminzo offers skill-based games and formats, ensuring fairness and safety.
        As a member of IEIC, Gaminzo guarantees the integrity of all games on the
        platform. Trusted payment partners like PayTM, Google Pay, PhonePe, and
        BHIM are available for secure transactions. Fraudulent play is restricted
        through advanced fraud detection mechanisms.
        <br />
        <br />
        The Gaminzo app is accessible on Android and iOS. Android users can download
        it from the Download Button on this page, while iOS users can find it on
        the Apple App Store.
      </motion.p>
    </section>
  );
};

export default SnapshotWinzo;

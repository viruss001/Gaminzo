import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUserShield, FaChild, FaCheckCircle, FaQuestionCircle, FaBalanceScale, FaEnvelope } from "react-icons/fa";

const ResponsibleGamingPolicy = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`max-w-5xl mx-auto p-6 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
        Play Responsibly Policy
      </h1>

      <div
        className={`rounded-2xl p-8 shadow-xl text-justify backdrop-blur-md border ${
          isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/80 border-gray-200"
        } space-y-12`}
      >
        {/* Intro */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" transition={{ duration: 0.5 }}>
          <h5 className="text-xl font-semibold flex items-center gap-2 mb-3">
            <FaHandsHelping className="text-emerald-400" /> Gaminzo by NextGen Edutainment Private Limited
          </h5>
          <p className="mb-4">
            At Gaminzo, we deeply value the well-being of our users and are committed to promoting
            responsible play. As a skill-based gaming and edutainment platform, we strive to offer an
            enjoyable, fair, and secure experience. Our aim is to encourage healthy gameplay habits and
            prevent any negative impact from excessive or compulsive usage.
          </p>
          <p>
            We take proactive steps to ensure players remain in control of their gaming behaviour and never
            lose sight of the primary purpose of Gaminzo—entertainment, learning, and skill-building.
          </p>
        </motion.section>

        {/* Responsible Gaming Measures */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUserShield className="text-blue-400" /> Our Responsible Gaming Measures
          </h2>
          <p className="mb-3">
            To maintain a safe and transparent environment, we’ve implemented the following preventive policies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <b>🚫 Age Restriction:</b> Users below 18 years of age are strictly prohibited from registering or
              participating in any contests or games on Gaminzo.
            </li>
            <li>
              <b>🛡 Fraud Detection Systems:</b> We use advanced monitoring tools and mobile surveillance
              mechanisms to detect unusual or suspicious gameplay activity.
            </li>
            <li>
              <b>🧩 Fair Play Rules:</b> Gaminzo strictly prevents cheating or teaming up unfairly, ensuring
              everyone has a fair chance to win.
            </li>
            <li>
              <b>🔐 Data Protection:</b> Your privacy is our priority. We use industry-standard encryption and
              security protocols to safeguard your personal and financial information.
            </li>
          </ul>
        </motion.section>

        {/* Minor Protection & Best Practices */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaChild className="text-pink-400" /> Minor Protection & Best Practices
          </h2>
          <p className="mb-3">
            We understand that some players may occasionally find it difficult to manage their gaming habits.
            Recognizing the signs early can prevent larger issues.
          </p>
          <h3 className="text-lg font-semibold mb-2">✔ Best Practices for Responsible Gaming:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Play for fun, learning, and recreation.</li>
            <li>Avoid treating gaming as a way to earn money or solve financial problems.</li>
            <li>Do not chase losses—take a break if things don’t go your way.</li>
            <li>Set a personal entertainment budget and stick to it.</li>
            <li>Monitor your time and spending on the platform.</li>
            <li>Balance your gaming activity with other hobbies and real-life priorities.</li>
          </ul>
        </motion.section>

        {/* Are you playing responsibly */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaCheckCircle className="text-green-400" /> Are You Playing Responsibly?
          </h2>
          <p className="mb-3">These signs may indicate that your gaming is becoming unhealthy—review them carefully:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do I spend more time and money than intended on these games?</li>
            <li>Do I feel the need to play to recover losses?</li>
            <li>Am I neglecting work, family, or personal obligations to play games?</li>
            <li>Do I hide my gaming activity from others?</li>
            <li>Have I experienced stress, anxiety, or mood changes related to gameplay?</li>
            <li>Do I argue with family or friends about my gaming habits?</li>
            <li>Have I borrowed or misused money to continue playing?</li>
            <li>Has gaming negatively impacted my professional or personal life?</li>
            <li>
              If your answer is <b>"yes"</b> to any of these, it's time to re-evaluate your gaming habits.
            </li>
          </ul>
        </motion.section>

        {/* Need Help */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaQuestionCircle className="text-yellow-400" /> Need Help?
          </h2>
          <p>
            We recommend reaching out to support organisations or mental health professionals if gaming starts
            to affect your well-being. Responsible gaming is about control, choice, and balance.
          </p>
        </motion.section>

        {/* Disclaimer */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-red-400" /> Disclaimer
          </h2>
          <p>
            Gaminzo is a skill-based gaming platform that operates in compliance with Indian laws. We do not
            promote gambling in any form. Participation is voluntary and solely the user’s responsibility. All
            winnings are based on skill and fair play.
          </p>
        </motion.section>

        {/* Contact */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show" transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelope className="text-blue-400" /> For Queries & Support
          </h2>
          <p>
            📧 Email:{" "}
            <a href="mailto:support@gaminzo.com" className="text-blue-500 underline">
              support@gaminzo.com
            </a>
            <br />🌐 Website:{" "}
            <a href="https://www.gaminzo.com" className="text-blue-500 underline">
              www.gaminzo.com
            </a>
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ResponsibleGamingPolicy;

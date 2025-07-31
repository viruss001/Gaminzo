import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaCrown,
  FaBan,
  FaUsers,
  FaTrademark,
  FaGavel,
  FaBalanceScale,
  FaEnvelopeOpenText
} from "react-icons/fa";

const IntellectualPropertyPolicy = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div
             className={`container mx-auto  sm:px-0 md:px-0 py-0 ${
               isDark ? " text-white" : " text-gray-900"
             }`}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
          <div
            className={`rounded-2xl  sm:p-6 md:p-8 shadow-xl text-justify backdrop-blur-md border space-y-8 md:space-y-12 ${
              isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/80 border-gray-200"
            }`}
          >
            
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Intellectual Property Policy – Gaminzo
      </h1>
      <p className="text-center mb-10 text-sm opacity-70">
        Effective Date: <strong>11-07-2025</strong>
      </p>

      <div
        className={`rounded-2xl p-2 shadow-xl text-justify backdrop-blur-md border space-y-12 ${
          isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/80 border-gray-200"
        }`}
      >
        {/* 1. Introduction */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBook className="text-blue-500" /> 1. Introduction
          </h2>
          <p>
            This Intellectual Property (IP) Policy governs the use of content, trademarks, logos, design
            elements, software, games, interfaces, and all intellectual property assets associated with
            Gaminzo (“Platform”) operated by NextGen Edutainment Private Limited (“Company”, “We”,
            “Us”, “Our”). By accessing or using the Platform, all users (“You”, “User”, “Participant”)
            agree to comply with this Policy and the applicable laws under the Indian Copyright Act,
            1957, Trademarks Act, 1999, Designs Act, 2000, and The Information Technology Act,
            2000. This Policy is also framed in accordance with responsible skill-based gaming regulations
            under Indian law.
          </p>
        </motion.section>

        {/* 2. Ownership of Intellectual Property */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaCrown className="text-yellow-500" /> 2. Ownership of Intellectual Property
          </h2>
          <p>
            All content on the Platform, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Game formats, interfaces, logic, and algorithms</li>
            <li>Logos, brand names, taglines, and domain names</li>
            <li>Audio, visual, and graphic materials</li>
            <li>Source code, object code, and application architecture</li>
            <li>Promotional content, designs, and user interfaces</li>
          </ul>
          <p>
            are exclusively owned by NextGen Edutainment Private Limited, unless otherwise expressly
            mentioned. These are protected by applicable intellectual property laws in India and international
            jurisdictions.
          </p>
        </motion.section>

        {/* 3. Use of Platform Content */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBan className="text-red-500" /> 3. Use of Platform Content
          </h2>
          <p>
            Users are granted a limited, non-exclusive, non-transferable, revocable license to access and
            use the Platform solely for personal, non-commercial entertainment and skill-based
            participation. You shall not:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Copy, reproduce, republish, modify, distribute, display, or exploit any part of the Platform without prior written consent</li>
            <li>Reverse engineer, decompile, or disassemble any software used on the Platform</li>
            <li>Use our trademarks or trade dress without express written permission</li>
            <li>Misappropriate or misuse content for derivative work or any competing product/service</li>
          </ul>
        </motion.section>

        {/* 4. Third-Party Intellectual Property */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUsers className="text-indigo-500" /> 4. Third-Party Intellectual Property
          </h2>
          <p>
            The Platform may contain references or content related to third parties, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Celebrity names, cricket players, or public figures (used illustratively only)</li>
            <li>Logos, tournaments (e.g., IPL, ICC), or teams that are the property of their respective owners</li>
          </ul>
          <p>
            Gaminzo acknowledges that it holds no rights or affiliations with such third-party intellectual property unless explicitly stated.
            All rights, titles, and interests remain with the respective owners.
          </p>
        </motion.section>

        {/* 5. User-Generated Content */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUsers className="text-pink-500" /> 5. User-Generated Content
          </h2>
          <p>
            If Users upload or submit any content (e.g., profile photos, game submissions, memes, or text), You:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Grant Us a royalty-free, irrevocable, worldwide license to use, reproduce, and display such content</li>
            <li>Confirm that You own or have the necessary rights to such content</li>
            <li>Agree not to submit any infringing, offensive, or unauthorized content</li>
          </ul>
          <p>
            We reserve the right to remove such content if found in violation of this Policy or applicable law.
          </p>
        </motion.section>

        {/* 6. Trademark Notice */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaTrademark className="text-orange-500" /> 6. Trademark Notice
          </h2>
          <p>
            Gaminzo™, its logo, slogans, domain (gaminzo.com), and associated graphics are registered and/or common law trademarks of NextGen Edutainment Private Limited.
            Any unauthorized use of Gaminzo's branding or trademarks will be treated as a legal violation and may attract civil/criminal penalties under the Trademarks Act, 1999.
          </p>
        </motion.section>

        {/* 7. Violation & Enforcement */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-purple-500" /> 7. Violation & Enforcement
          </h2>
          <p>
            We take IP violations seriously. If You believe that Your intellectual property has been used on the Platform without permission, please email a formal complaint to:
          </p>
          <p className="mt-2 font-medium">support@gaminzo.com</p>
          <p className="italic">Subject: “IP Violation Notice – [Your Trademark/Content Name]”</p>
          <p className="mt-4">Include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Clear identification of the copyrighted or trademarked content</li>
            <li>Proof of ownership</li>
            <li>A statement of good faith belief</li>
            <li>Authorized electronic signature</li>
          </ul>
          <p className="mt-2">
            On receipt of a valid complaint, We will investigate and take appropriate remedial action, including content removal or account suspension.
          </p>
        </motion.section>

        {/* 8. Legal Compliance */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-green-500" /> 8. Legal Compliance
          </h2>
          <p>This Policy is governed by the laws of India. We ensure adherence to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Indian Gaming Law applicable to skill-based games</li>
            <li>Bharatiya Nyaya Sanhita, 2023 to avoid any resemblance with gambling/betting</li>
            <li>IT Act, 2000 for digital compliance and safe harbor provisions</li>
          </ul>
          <p>
            We retain the right to modify this Policy at any time to reflect changes in law or business operations.
          </p>
        </motion.section>

        {/* 9. Contact Us */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" /> 9. Contact Us
          </h2>
          <p>
            For any queries regarding IP rights or permissions:
            <br />
            <strong>NextGen Edutainment Private Limited</strong>
            <br />
            [Insert Registered Office Address]
            <br />
            📧 <a href="mailto:support@gaminzo.com" className="text-indigo-500 underline">
              support@gaminzo.com
            </a>
          </p>
          <p className="mt-4 text-sm italic">
            Disclaimer: Gaminzo does not claim any association or affiliation with the BCCI, ICC,
            IPL, or any official sports league/team unless explicitly stated. All third-party trademarks and copyrights
            belong to their respective owners.
          </p>
        </motion.section>
      </div>
      </div>
    </motion.div>
  );
};

export default IntellectualPropertyPolicy;

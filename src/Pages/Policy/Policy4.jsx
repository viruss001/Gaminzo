import React from "react";
import { motion } from "framer-motion";
import {
  FaUnlink,
  FaMapMarkedAlt,
  FaExclamationTriangle,
  FaShieldAlt,
  FaUserShield,
  FaTools,
  FaTimesCircle,
  FaHandshake,
  FaServer,
  FaBalanceScale,
} from "react-icons/fa";

const Disclaimer = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
     <motion.div
      className={`container mx-auto  sm:px-6 md:px-8 py-6 ${
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
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Disclaimer – Gaminzo
        </h1>
        <p className="text-center mb-10 text-sm sm:text-base opacity-70">
          Effective Date: <strong>11-07-2025</strong>
        </p>

        <div
          className={`rounded-2xl p-2
             sm:p-8 shadow-xl text-justify backdrop-blur-md border space-y-8 md:space-y-12 ${
            isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/80 border-gray-200"
          }`}
        >
          {/* 1. No Affiliation Disclaimer */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaUnlink className="text-red-500" /> 1. No Affiliation Disclaimer
            </h2>
            <p className="text-base sm:text-lg">
              Gaminzo is an independent, skill-based gaming and edutainment platform operated by
              NextGen Edutainment Private Limited. Gaminzo is not affiliated with nor claims any
              association with any official sports governing body or organisation, including but not
              limited to the BCCI, ICC, IPL, or any of their franchises, entities, or representatives.
              All proprietary names, images, logos, marks, and copyrights related to tournaments,
              teams, or players are the property of their respective owners and are used for
              identification purposes only.
            </p>
          </motion.section>

          {/* 2. Restricted States */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaMapMarkedAlt className="text-green-500" /> 2. Restricted States
            </h2>
            <p className="text-base sm:text-lg">
              Participation in contests or games offered by Gaminzo is not permitted for residents of
              states where skill-based games are legally restricted or prohibited. This includes, but
              is not limited to, Assam, Andhra Pradesh, Odisha and Telangana, and any other
              jurisdiction where such participation is deemed illegal under applicable laws. It is the
              user’s responsibility to verify local laws before participating.
            </p>
          </motion.section>

          {/* 3. Limitation of Liability */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaExclamationTriangle className="text-yellow-500" /> 3. Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg">
              <li>Deletion, delay, misdelivery, or failure to store any content or communication on the platform</li>
              <li>Server outages, technical disruptions, or network failures</li>
              <li>Errors in game result calculation, prize distribution, or account balances</li>
              <li>Interruption due to force majeure events including natural calamities, war, civil unrest, or acts of government</li>
              <li>Malfunctions caused by external service providers such as hosting, internet, or telecom services</li>
              <li>Download or access of third-party content resulting in device damage or data loss</li>
            </ul>
          </motion.section>

          {/* 4. No Warranty Guarantee */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaShieldAlt className="text-blue-500" /> 4. No Warranty Guarantee
            </h2>
            <p className="text-base sm:text-lg">
              Gaminzo and its services are provided on an "as-is" and "as-available" basis. The
              platform does not guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base sm:text-lg">
              <li>It will meet users’ expectations or requirements</li>
              <li>The services will be uninterrupted, secure, or error-free</li>
              <li>Game outcomes, rankings, or rewards will always be accurate</li>
              <li>Information or materials accessed will be free from harmful components or third-party interference</li>
            </ul>
          </motion.section>

          {/* 5. User Responsibility */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaUserShield className="text-indigo-500" /> 5. User Responsibility
            </h2>
            <p className="text-base sm:text-lg">
              Users access the platform at their own risk and are solely responsible for any damage to
              their devices, software, or data resulting from use. Gaminzo assumes no responsibility for
              any financial or non-financial losses arising from such access.
            </p>
          </motion.section>

          {/* 6. Right to Rectify Errors */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaTools className="text-yellow-500" /> 6. Right to Rectify Errors
            </h2>
            <p className="text-base sm:text-lg">
              In the event of a technical, human, or algorithmic error — including incorrect prize
              allocation or ranking — Gaminzo reserves the right to correct the error by reversing the
              transaction, deducting excess credits, or adjusting the user account accordingly. Users
              will be informed of any such corrective action.
            </p>
          </motion.section>

          {/* 7. Event and Contest Cancellations */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaTimesCircle className="text-red-500" /> 7. Event and Contest Cancellations
            </h2>
            <p className="text-base sm:text-lg">
              If any event, game, or contest on the Gaminzo platform requires regulatory clearance or
              governmental approval, such offerings shall be deemed cancelled if such permission is not
              obtained or is denied. Gaminzo shall not be held liable for such cancellations, and no
              claims, demands, or refunds shall be entertained in such instances.
            </p>
          </motion.section>

          {/* 8. General Indemnity Clause */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaHandshake className="text-green-500" /> 8. General Indemnity Clause
            </h2>
            <p className="text-base sm:text-lg">
              By accessing the Gaminzo platform, the user agrees to indemnify and hold harmless
              Gaminzo and its affiliates against any legal claims, losses, damages, or liabilities arising
              due to misuse, illegal access, or breach of platform terms.
            </p>
          </motion.section>

          {/* 9. No Refunds for Force Major or Maintenance */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaServer className="text-purple-500" /> 9. No Refunds for Force Major or Maintenance
            </h2>
            <p className="text-base sm:text-lg">
              Gaminzo shall not be liable for non-availability or inaccessibility of services due to
              scheduled maintenance, third-party downtimes, cyber-attacks, or unforeseen events. No
              refund will be processed in such cases.
            </p>
          </motion.section>

          {/* 10. Legal Jurisdiction */}
          <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-4">
              <FaBalanceScale className="text-teal-500" /> 10. Legal Jurisdiction
            </h2>
            <p className="text-base sm:text-lg">
              This disclaimer and your use of the Gaminzo platform shall be governed by the laws of
              India. Any disputes shall fall under the exclusive jurisdiction of the courts of{" "}
              <strong>Bangalore, Karnataka</strong>.
            </p>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default Disclaimer;

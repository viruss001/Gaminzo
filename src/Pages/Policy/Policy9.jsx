import React from "react";
import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaIdCard,
  FaUniversity,
  FaCheckCircle,
  FaMoneyBillWave,
  FaBalanceScale,
  FaHandsHelping,
  FaGavel
} from "react-icons/fa";

const WithdrawalPolicy = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div
      className={`container mx-auto sm:px-0 md:px-0 py-0 ${isDark ? "text-white" : "text-gray-900"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`rounded-2xl sm:p-6 md:p-8 shadow-xl text-justify backdrop-blur-md border space-y-8 md:space-y-12 ${
          isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/80 border-gray-200"
        }`}
      >
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Withdrawal Policy – Gaminzo
        </h1>
        <p className="text-center mb-10 text-sm opacity-70">
          This policy outlines the terms for requesting and processing withdrawals on Gaminzo.
        </p>

        {/* 1. Eligibility for Withdrawals */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUserCheck className="text-green-500" /> 1. Eligibility for Withdrawals
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Only users aged 18 years or older can request withdrawals.</li>
            <li>
              Withdrawals are prohibited in states like Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim,
              Telangana, or any other jurisdiction restricting skill gaming by law.
            </li>
            <li>Gaminzo reserves the right to block or restrict withdrawals as per legal requirements.</li>
          </ul>
        </motion.section>

        {/* 2. KYC & Verification Requirements */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaIdCard className="text-yellow-500" /> 2. KYC & Verification Requirements
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Valid PAN Card (matching the bank account name)</li>
            <li>Verified Bank Account</li>
            <li>Verified Mobile Number (OTP-based)</li>
            <li>Initial wallet deposit required before withdrawal eligibility</li>
          </ul>
          <p className="mt-2 text-sm opacity-80">
            Note: Verification is one-time but may be re-initiated for suspicious or flagged accounts.
          </p>
        </motion.section>

        {/* 3. Withdrawal Modes, Limits & Timelines */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUniversity className="text-blue-500" /> 3. Withdrawal Modes, Limits & Timelines
          </h2>
          <h3 className="text-xl font-semibold mt-4">3.1 Instant Withdrawal (IMPS)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Minimum: ₹100 | Maximum/day: ₹25,000</li>
            <li>Eligibility: Verified PAN & Bank</li>
            <li>Processing Time: 2–3 hours (may vary)</li>
            <li>Limit: 1 per day</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">3.2 Bank Transfer (NEFT/RTGS)</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Minimum: ₹100 | Maximum: ₹50,000</li>
            <li>Processing Time: 3–4 hours (up to 72 hrs in special cases)</li>
            <li>Limit: 1 per day</li>
          </ul>
          <p className="mt-2 text-sm opacity-80">
            Gaminzo may process withdrawals in batches and adjust timelines during peak periods.
          </p>
        </motion.section>

        {/* 4. Withdrawal Conditions & Fair Play */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaCheckCircle className="text-purple-500" /> 4. Withdrawal Conditions & Fair Play
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Withdrawals allowed only after KYC & initial deposit.</li>
            <li>Bank name must match PAN card name.</li>
            <li>Bonus money, referral rewards, and promo credits are non-withdrawable.</li>
            <li>Fair Play violations may lead to withdrawal holds or permanent bans.</li>
          </ul>
        </motion.section>

        {/* 5. Tax Deducted at Source */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaMoneyBillWave className="text-green-500" /> 5. Tax Deducted at Source (TDS)
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>30% TDS on net winnings exceeding ₹10,000 in a financial year (Section 194BA, IT Act).</li>
            <li>Net winnings = Total Withdrawals – Total Deposits</li>
            <li>TDS Certificate (Form 16A) provided to users.</li>
          </ul>
        </motion.section>

        {/* 6. Disputes & Payment Partner Hold */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-pink-500" /> 6. Disputes & Payment Partner Hold
          </h2>
          <p>
            In case of disputes or payment gateway issues, withdrawals may be temporarily held until
            resolution to safeguard users and the platform.
          </p>
        </motion.section>

        {/* 7. Support & Resolution */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaHandsHelping className="text-indigo-500" /> 7. Support & Resolution
          </h2>
          <p>
            For withdrawal issues, contact: <strong>support@gaminzo.com</strong>
            <br /> Complaints are addressed within 7 business days (subject to verification).
          </p>
        </motion.section>

        {/* 8. Updates to This Policy */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-red-500" /> 8. Updates to This Policy
          </h2>
          <p>
            Gaminzo may update this policy anytime to remain compliant with regulations. Users will be
            notified via email or in-app messages.
          </p>
        </motion.section>

        {/* 9. Legal Disclaimer */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-orange-500" /> 9. Legal Disclaimer
          </h2>
          <p>
            This policy complies with applicable gaming laws including the Public Gambling Act, 1867, state
            gaming regulations, and Bharatiya Nyaya Sanhita (effective July 2024). Gaminzo offers
            skill-based games and does not support gambling or betting.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default WithdrawalPolicy;
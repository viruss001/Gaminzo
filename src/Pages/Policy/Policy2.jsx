import React from "react";
import { motion } from "framer-motion";
import {
  FaBan,           // for No Refund
  FaMoneyBillWave, // for Failed Transactions
  FaTimesCircle,   // for Cancellation
  FaExchangeAlt,   // for Withdrawal/Transfer
  FaGift,          // for Bonus & Rewards
  FaGavel,         // for Dispute Resolution
  FaBalanceScale,  // for Governing Law
  FaSyncAlt        // for Policy Updates
} from "react-icons/fa";

const RefundCancellationPolicy = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const sectionVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div
      className={`max-w-5xl mx-auto p-6 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 to-red-400 bg-clip-text text-transparent">
        Refund & Cancellation Policy
      </h1>

      <div className={`rounded-2xl p-8 shadow-xl text-justify backdrop-blur-md border ${isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/80 border-gray-200"} space-y-12`}>
        
        {/* Intro */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <p className="mb-4">
            This Refund & Cancellation Policy (“Policy”) governs the terms under which Gaminzo, operated
            by NextGen Edutainment Private Limited (“Company”, “we”, “us”, or “our”), processes
            refunds and contest cancellations on its online skill-based gaming platform (the “Platform”), in
            compliance with applicable Indian laws.
          </p>
        </motion.section>

        {/* 1. No Refund */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBan className="text-red-500" /> 1. No Refund Policy on Completed Contests
          </h2>
          <p className="mb-3">
            Once a user has joined a paid contest and the contest has started or been completed, no refund shall be permissible.
          </p>
          <p className="mb-3 font-semibold">Refunds are NOT permitted under the following conditions:</p>
          <ol className="list-[lower-alpha] pl-6 space-y-2">
            <li>Voluntary Exit after paying the entry fee.</li>
            <li>Losses incurred during gameplay.</li>
            <li>Non-full seat participation where prize distribution is adjusted.</li>
            <li>Prize adjustments if the game does not reach full occupancy.</li>
            <li>User violations, including fraud or unethical conduct.</li>
            <li>User errors (wrong team/category, accidental participation).</li>
            <li>User’s own device or internet issues.</li>
          </ol>
          <p className="mt-3">
            Participation is voluntary, and users are expected to be aware of all rules and risks before entering contests.
          </p>
        </motion.section>

        {/* 2. Failed Transactions */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaMoneyBillWave className="text-green-500" /> 2. Refunds for Failed Transactions
          </h2>
          <p className="mb-3">Refunds may be applicable in the following specific scenarios:</p>
          <ol className="list-[lower-alpha] pl-6 space-y-4">
            <li>
              <h5 className="font-bold">Failed Add Cash Transactions</h5>
              <p>
                If funds are debited but not added to your Gaminzo Wallet, the amount will be refunded within 5–7 working days.
              </p>
            </li>
            <li>
              <h5 className="font-bold">Transaction Error at Gaminzo’s End</h5>
              <p>
                Duplicate or failed transactions due to Gaminzo’s technical error will be verified and refunded within 7–10 working days.
              </p>
              <p className="italic mt-2">Note: Gaminzo is not liable for banking or payment gateway delays.</p>
            </li>
          </ol>
        </motion.section>

        {/* 3. Contest Cancellation */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaTimesCircle className="text-orange-500" /> 3. Cancellation of Contest by Gaminzo
          </h2>
          <p className="mb-3">Gaminzo reserves the right to cancel contests for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Technical system errors or maintenance.</li>
            <li>Insufficient participant entries.</li>
            <li>Legal or regulatory changes.</li>
          </ul>
          <h5 className="font-semibold mt-3">In such cases:</h5>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full entry fee refunded to the user’s Gaminzo Wallet.</li>
            <li>Bonus money restoration depends on validity and terms.</li>
          </ul>
        </motion.section>

        {/* 4. Withdrawals & Transfers */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaExchangeAlt className="text-yellow-500" /> 4. Withdrawal and Transfer Limitations
          </h2>
          <p>
            Once a contest is joined and the entry fee deducted, no withdrawal or cancellation request will be accepted.
          </p>
          <p className="mt-3 font-semibold">Withdrawals of winnings require:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>KYC and PAN Verification</li>
            <li>Bank Account Validation</li>
            <li>Minimum withdrawal thresholds as per policy</li>
          </ul>
          <p className="mt-3">
            Winnings are credited within 3–5 business days upon successful verification and compliance.
          </p>
        </motion.section>

        {/* 5. Bonus & Rewards */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGift className="text-purple-500" /> 5. Bonus Money and Promotional Rewards
          </h2>
          <p className="mb-3">Refunds are not permitted for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bonus Cash or Promotional Credits</li>
            <li>Referral Bonuses or Offers</li>
            <li>Vouchers, Coupons, or Game-specific discounts</li>
          </ul>
          <p>These are non-withdrawable and may carry expiry dates as per promotional campaign rules.</p>
        </motion.section>

        {/* 6. Dispute Resolution */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-blue-500" /> 6. Dispute Resolution
          </h2>
          <p>
            Disputes must be raised within 72 hours of the transaction or event. <br />
            📧 Email:{" "}
            <a href="mailto:help@gaminzo.com" className="text-blue-500 underline">
              help@gaminzo.com
            </a>{" "}
            <br />🕒 Response Time: 48–72 business hours <br />
            Subject: Refund/Cancellation Request – [Your User ID]
          </p>
          <p className="mt-3">Final decisions rest with Gaminzo after investigation.</p>
        </motion.section>

        {/* 7. Governing Law */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-teal-500" /> 7. Governing Law and Jurisdiction
          </h2>
          <p>
            This Policy is governed by the laws of India. Disputes fall under the jurisdiction of{" "}
            <b>Bengaluru, Karnataka</b> courts, unless otherwise mandated by law.
          </p>
        </motion.section>

        {/* 8. Policy Updates */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaSyncAlt className="text-gray-500" /> 8. Policy Updates
          </h2>
          <p>
            Gaminzo may amend, update, or revise this Policy without prior notice. Users are advised to review it
            periodically. Continued use of the platform constitutes acceptance of changes.
          </p>
          <p className="mt-3 font-bold">
            By using Gaminzo, you confirm that you have read, understood, and agreed to abide by this
            Refund & Cancellation Policy.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default RefundCancellationPolicy;

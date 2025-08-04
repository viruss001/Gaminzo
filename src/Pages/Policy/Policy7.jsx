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
       Fair Play Policy
      </h1>
      

      <div
        className={`rounded-2xl p-2 shadow-xl text-justify backdrop-blur-md border space-y-12 ${
          isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/80 border-gray-200"
        }`}
      >
        {/* 1. Introduction */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBook className="text-blue-500" />  1. Introduction
          </h2>
          <p>
          
At Gaminzo, a platform operated by NextGen Edutainment Private Limited, we are committed
to ensuring that all contests and games are conducted in a fair, transparent, and competitive manner.
This Fair Play & Anti-Cheating Policy forms part of our core compliance measures under
applicable Indian laws, including the Information Technology Act, 2000, Indian Contract Act,
1872, and relevant gaming-related guidelines, including those aligned with skill-based gaming
frameworks as accepted under Indian jurisdiction.

          </p>
        </motion.section>

        {/* 2. Objective*/}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaCrown className="text-yellow-500" /> 2. Objective
          </h2>
          <p>
            
          This policy is intended to:
          </p><br />
          <ul className="list-disc pl-6 space-y-1">
            <li>Ensure integrity, fairness, and equal opportunity in all skill-based games offered on the
Gaminzo platform.</li>
            <li>Prevent any form of cheating, manipulation, collusion, or use of unfair means.</li>
            <li>Establish clear guidelines on detection, prevention, and action against players or parties
engaging in malpractice.</li>
           
          </ul>
          
        </motion.section>

        {/* 3. Definitions */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBan className="text-red-500" /> 3. Definitions
          </h2>
          <p>
           To participate on Gaminzo, users must:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><b>Fair Play:</b> Honest participation in games based purely on skill, strategy, and knowledge
without relying on unethical tools or manipulation.</li>
            <li><b>Cheating:</b> Use of any automated tools, software, external assistance, multiple accounts, or
unfair tactics to gain an advantage.</li>
            <li><b>Collusion:</b> When two or more users work together or coordinate to gain an unfair advantage
over other users.
                  </li>
                    <li>
                       <b>Fraudulent Activity:</b> Includes but is not limited to identity fraud, payment fraud,
impersonation, or misuse of referral systems.
                   
                
</li> 
            
          </ul>
        </motion.section>

        {/*4. Prohibited Conduct */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUsers className="text-indigo-500" />4. Prohibited Conduct
          </h2>
          <p>        
          The following actions are strictly prohibited on the Gaminzo platform:         
            <br />

  <ul className="list-disc pl-6 space-y-1">
    <li>Using multiple accounts by a single user.</li>
    <li>Account sharing between users.</li>
    <li>Use of unauthorized third-party tools, bots, or AI to assist in gameplay.</li>
    <li>Manipulating game outcomes through collusion or syndicate behavior.</li>
    <li>Exploiting bugs, system vulnerabilities, or technical loopholes.</li>
    <li>Falsifying user identity or KYC documents.</li>
    <li>Abusing the bonus, referral, or rewards system for financial gain.</li>
    <li>Any other activity that violates the principles of fair competition.</li>
</ul>
 <br /><br /> 
          </p>
          
        </motion.section>

        {/* 5. User-Generated Content */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUsers className="text-pink-500" />5. Detection & Monitoring

          </h2>

          <p>
          To uphold fair play, Gaminzo employs:
          <ul className="list-disc pl-6 space-y-1">
            <li>AI-powered fraud detection systems to flag abnormal behavior.</li>
            <li>Device fingerprinting to identify multiple accounts or unusual login activity.</li>
            <li>Transaction monitoring to detect suspicious financial patterns.</li>
            <li>Real-time gameplay analysis to identify patterns of collusion or cheating.</li>
          </ul>
          <br /><br />
          All user activities are logged and subject to periodic audits by our compliance and legal teams
          </p>
          
          
        </motion.section>

        {/* 6. Trademark Notice */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaTrademark className="text-orange-500" />6. Action Against Violations
          </h2>
          <p>
           If a user is found violating this policy, Gaminzo reserves the right to take one or more of the
following actions:
           
 <ul className="list-disc pl-6 space-y-1">
    <li>Immediate account suspension or termination.</li>
    <li>Forfeiture of winnings, bonuses, and balances.</li>
    <li>Blocking of withdrawals pending investigation.</li>
    <li>Legal action under applicable laws, including reporting to enforcement authorities.</li>
    <li>Permanent ban from the Gaminzo platform.</li>
</ul>
No refunds will be issued in cases where the policy is violated.

         </p>
        </motion.section>

        {/* 7. Violation & Enforcement */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-purple-500" />7. User Responsibility
          </h2>
          <p>
         All users are expected to: <br />
           <ul className="list-disc pl-6 space-y-1">
            <li>Abide by the terms of this policy and all other applicable rules of the platform.</li>
            <li>Play fairly and ethically at all times.</li>
            <li>Report any suspicious activity or known violations to Gaminzo Support.</li>
            <li>Cooperate with internal audits or inquiries when requested.</li>
          </ul>
          </p>

        </motion.section>

        {/* 8. Legal Disclaimer */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-green-500" /> 8. Legal Disclaimer
          </h2>
         
         <p>
          This Fair Play Policy is governed by Indian laws and applicable judicial interpretations.
Participation in any form of cheating or unfair practice is a criminal offence and may lead to
prosecution under Sections of the Bharatiya Nyaya Sanhita (from July 2024) and other penal
laws, in addition to a civil claim for damages by Gaminzo.
         </p>
          
        </motion.section>

        {/* 9. Jurisdiction  */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" /> 9. Jurisdiction
          </h2>
          
          <p>
            Any disputes arising out of this Policy shall be subject to the exclusive jurisdiction of courts located
in [Bangalore, Karnataka].
          </p>
        </motion.section>
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" />10. Policy Updates
          </h2>
         <p>
          Gaminzo reserves the right to update this Fair Play Policy at any time without prior notice.
Continued use of the platform signifies user acceptance of the revised terms.
         </p>
         <p>
          Contact Us: <br />

For any questions related to this policy, write to us at: <br />

📧 support@gaminzo.com
         </p>
          
        </motion.section>
       
      </div></div>
    </motion.div>
  );
};

export default IntellectualPropertyPolicy;

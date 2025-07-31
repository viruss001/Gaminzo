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
      className={`max-w-5xl mx-auto p-6 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        KYC & AML (ANTI-MONEY LAUNDERING) POLICY
      </h1>
      <p className="text-center mb-10 text-sm opacity-70">
       GAMINZO – A Skill-Based Gaming Platform <br />
Operated by NextGen Edutainment Private Limited <br />
Jurisdiction: Bangalore, Karnataka  <br />

      </p>

      <div
        className={`rounded-2xl p-8 shadow-xl text-justify backdrop-blur-md border space-y-12 ${
          isDark ? "bg-gray-800/60 border-gray-700" : "bg-white/80 border-gray-200"
        }`}
      >
        {/* 1. Introduction */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBook className="text-blue-500" /> 1. LEGAL BASIS AND OBJECTIVE
          </h2>
          <p>
            This Know Your Customer (KYC) and Anti-Money Laundering (AML) Policy is adopted in
accordance with applicable Indian laws, including but not limited to: <br />
 <ul className="list-disc pl-6 space-y-1">
    <li>
        The Prevention of Money Laundering Act, 2002 (PMLA) and its allied rules;
    </li>
    <li>
The Information Technology Act, 2000, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011;
    </li>
    <li>
The Income Tax Act, 1961;
    </li>
    <li>
The Reserve Bank of India (RBI) Guidelines for payment aggregators and KYC norms;
    </li>
    <li>
Various State-specific gaming laws that prohibit or regulate online gaming in specific
jurisdictions.
    </li>
</ul>
<br />
This Policy seeks to:<br /><br />
 <ul className="list-disc pl-6 space-y-1">
    <li>
        Prevent the misuse of the platform for money laundering, fraud, identity theft, or financing
of terrorism;
    </li>
    <li>
Ensure legal compliance regarding user identification and transaction transparency;
    </li>
    <li>
Maintain platform integrity through secure and verified player participation.
    </li>
</ul>

          </p>
        </motion.section>

        {/* 2. Ownership of Intellectual Property */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaCrown className="text-yellow-500" /> 2. SCOPE AND APPLICABILITY
          </h2>
          <p>
            
           This Policy applies to:
          </p><br />
          <ul className="list-disc pl-6 space-y-1">
            <li>All users who access, register, and participate in games or contests on Gaminzo;</li>
            <li>All internal systems and personnel responsible for user verification, payments, and
compliance;</li>
            <li>All payment transactions, withdrawals, prize disbursals, and promotional redemptions.</li>
           
          </ul>
          
        </motion.section>

        {/* 3. Use of Platform Content */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBan className="text-red-500" /> 3. USER ELIGIBILITY & PROHIBITED JURISDICTIONS
          </h2>
          <p>
           To participate on Gaminzo, users must:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Be at least 18 years of age;</li>
            <li>Be a resident of India, with a valid government-issued identity;</li>
            <li>Not reside in restricted states where skill gaming is legally disallowed: 
                 <ul className="list-disc pl-6 space-y-1">
                    <li>
                        As of the date of this policy, this includes Assam, Odisha, Telangana, Andhra
Pradesh, Nagaland, and Sikkim, and any other state that prohibits such activities.
                    </li>
                </ul>
</li> 
            
          </ul>
        </motion.section>

        {/* 4. Third-Party Intellectual Property */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUsers className="text-indigo-500" /> 4. KYC REQUIREMENTS
          </h2>
          <p>
            <b>

           4.1 MANDATORY KYC TRIGGERS
            </b> <br />
            <br />

Gaminzo shall require full KYC compliance (including Aadhaar and PAN verification) in the
following scenarios: <br />   <ul className="list-disc pl-6 space-y-1">
    <li>Before adding money to the user wallet or account;</li>
    <li>Before participating in any paid contest or skill game;</li>
    <li>Before initiating any withdrawal request;</li>
    <li>Upon detection of unusual, large, or suspicious transactions;</li>
    <li>During periodic audits or random verification procedures.</li>
</ul>
 <br /><br /> <b>

4.2 Documents Required
 </b><br /><br />
  <ul className="list-disc pl-6 space-y-1">
    <li>Proof of Identity (PoI): Aadhaar, PAN, Voter ID, Passport, or Driving License;</li>
    <li> Proof of Address (PoA): Utility Bill, Bank Statement, Aadhaar (with address), or Passport;</li>
    <li>Bank Account Details: Name, Account Number, IFSC code, supporting document(cancelled cheque or bank statement).</li>
 </ul>
 
<br />
<i>Legal Reference:</i> RBI Master Directions on KYC, UIDAI Guidelines on Aadhaar Usage.
          </p>
          
        </motion.section>

        {/* 5. User-Generated Content */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUsers className="text-pink-500" /> 5. VERIFICATION & VALIDATION
          </h2>
          
          <ul className="list-disc pl-6 space-y-1">
            <li>All documents are verified using RBI-authorized payment aggregators and UIDAI/NSDLcompliant Third party APIs;</li>
            <li>Users may be required to upload a live photo/selfie with ID proof for biometric matching;</li>
            <li>Gaminzo reserves the right to request additional documentation at its sole discretion;</li>
            <li> Users with inconsistent or unverifiable data may have their accounts suspended or
terminated.</li>
          </ul>
          
        </motion.section>

        {/* 6. Trademark Notice */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaTrademark className="text-orange-500" /> 6. AML MEASURES
          </h2>
          <p>
            <b>
               6.1 Monitoring of Financial Transactions  
            </b>
            <br /><br />
Gaminzo shall employ automated and manual processes to detect:
 <ul className="list-disc pl-6 space-y-1">
    <li>Unusual transaction velocity or volumes;</li>
    <li>Use of third-party bank accounts or wallets;</li>
    <li>Patterns indicative of structuring, layering, or integration of funds.</li>
</ul>
<b>

6.2 Reporting Obligations
</b> <br /><br />
 <ul className="list-disc pl-6 space-y-1">
    <li>All Suspicious Transactions as per Section 12 of the PMLA will be reported to the Financial Intelligence Unit - India (FIU-IND);</li>
    <li>Gaminzo will retain KYC/transaction data for a minimum of 8 years as mandated by
law</li>
</ul>
         </p>
        </motion.section>

        {/* 7. Violation & Enforcement */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-purple-500" /> 7. USER DECLARATION & OBLIGATIONS
          </h2>
          <p>
          Each user of Gaminzo agrees to: <br />
           <ul className="list-disc pl-6 space-y-1">
            <li>Furnish true, accurate, current, and complete information as required by this Policy;</li>
            <li>Not use the platform for any unlawful or prohibited purpose;</li>
            <li>Update their KYC documents upon material change or request by the platform;</li>
            <li>Acknowledge that Gaminzo reserves the right to block, withhold, or forfeit winnings in
the event of AML/KYC non-compliance or fraud.</li>
          </ul>
          </p>

        </motion.section>

        {/* 8. Legal Compliance */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-green-500" /> 8. DATA SECURITY & PRIVACY
          </h2>
         
          <ul className="list-disc pl-6 space-y-1">
            <li>All KYC and personal data collected shall be governed by Gaminzo’s Privacy Policy, and
stored using bank-grade encryption;</li>
            <li>Information is shared only with legally authorized entities and as required under applicable
Indian law;</li>
            <li>Gaminzo ensures reasonable security practices in compliance with Section 43A of the IT
Act.</li>
          </ul>
          
        </motion.section>

        {/* 9. Contact Us */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" /> 9. AUDIT, TRAINING & COMPLIANCE OFFICER
          </h2>
          
           <ul className="list-disc pl-6 space-y-1">
            <li> Periodic internal and third-party audits shall be conducted;</li>
            <li>Gaminzo appoints a Designated Compliance Officer responsible for: <br />
             <ul className="list-disc pl-6 space-y-1">
                <li>Ensuring implementation of this Policy;</li>
                <li>Coordinating with legal and enforcement agencies;</li>
                <li>Handling KYC/AML escalations and grievances</li>
            </ul>
            </li>
          </ul>
        </motion.section>
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" /> 10. NON-COMPLIANCE & CONSEQUENCES
          </h2>
          Failure to comply with this policy may result in:
           <ul className="list-disc pl-6 space-y-1">
            <li> Suspension or permanent closure of account;</li>
            <li>Forfeiture of prizes or balances; 
           </li>
                <li>Ensuring implementation of this Policy;</li>
              <li>
                Blacklisting and legal prosecution as per applicable laws.
              </li>
            
            
            </ul>
          
        </motion.section>
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" />11. POLICY REVIEW & AMENDMENTS
          </h2>
          This Policy may be updated from time to time to reflect:
           <ul className="list-disc pl-6 space-y-1">
            <li>Changes in legal and regulatory requirements;
</li>
            <li>Technological or business model changes;
           </li>
                <li>Ensuring implementation of this Policy;</li>
              <li>
               Industry best practices (e.g., as recommended by FIFS or MeitY).
              </li>
            
            
            </ul>
            Users shall be notified of substantial changes through email or platform notifications. Continued use
post-notification shall be deemed acceptance.
          
        </motion.section>
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" />11. POLICY REVIEW & AMENDMENTS
          </h2>
        <p>
            For queries related to this policy or legal concerns, contact: <br /><br />
Compliance Officer – Gaminzo <br />
Email: support@gaminzo.combr

Website: https://www.gaminzo.com
        </p>
          
        </motion.section>
      </div>
    </motion.div>
  );
};

export default IntellectualPropertyPolicy;

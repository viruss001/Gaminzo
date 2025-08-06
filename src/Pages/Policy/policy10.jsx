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

const UpdatesAmendmentsPolicy = ({ theme = "light" }) => {
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
          Updates & Amendments Policy
        </h1>
       

        {/*1. Purpose and Scope*/}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUserCheck className="text-green-500" /> 1. Purpose and Scope
          </h2>
          <p>
            This Updates & Amendments Policy (“Policy”) governs how Gaminzo (owned and operated by
NextGen Edutainment Private Limited) may modify, update, revise, or amend its legal documents,
including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Responsible Gaming Policy</li>
            <li>Refund & Cancellation Policy</li>
            <li>Fair Play Policy</li>
            <li>Contest Rules</li>
            <li>Grievance Redressal Policy</li>
            <li>and any other applicable policies, disclaimers, or terms of use</li>
          </ul>
          This policy is binding on all users who access or use Gaminzo services and content via web, mobile
application, or any other medium.
        </motion.section>

        {/* 2. Right to Amend Policies */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaIdCard className="text-yellow-500" /> 2. Right to Amend Policies
          </h2>
         
          <p className="mt-2 text-sm opacity-80">
           Gaminzo reserves the sole and absolute right to amend, modify, or update any of its policies,
features, or platform rules at its discretion, at any time and without prior individual notice, provided
that such amendments comply with applicable Indian laws and regulatory guidelines (including but
not limited to the Information Technology Act, 2000, the Digital Personal Data Protection Act,
2023, and relevant interpretations under Indian Contract Act, 1872).
          </p>
        </motion.section>

        {/*3. Notification of Changes */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUniversity className="text-blue-500" /> 3. Notification of Changes
          </h2>
          <p>
              We will take commercially reasonable efforts to notify users of material changes via one or more of
the following methods:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li> Notification banners on the platform</li>
            <li>Email to the registered email address</li>
            <li>Push notifications via the Gaminzo mobile app</li>
            <li>Updates posted on the official website: www.gaminzo.com</li>
          </ul>
          <p>
            However, it is your responsibility to regularly review these policies for any updates.
          </p>

          
        </motion.section>

        {/* 4. Effective Date of Amendments */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaCheckCircle className="text-purple-500" />4. Effective Date of Amendments
          </h2>
        <p>
            All amendments will become effective as of the date specified in the revised policy or notice. In
case no specific effective date is mentioned, the change shall be deemed effective immediately upon
publication on the platform or website.
        </p>
        </motion.section>

        {/* 5. Binding Acceptance */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaMoneyBillWave className="text-green-500" />5. Binding Acceptance
          </h2>
          <p>
            Continued access or use of the Gaminzo platform following any changes to the policies constitutes
your deemed acceptance of the updated terms. If you do not agree to the revised terms, you must
immediately discontinue use of the platform and may contact our Grievance Officer to deactivate
your account.
          </p>
        </motion.section>

        {/* 6. Version Control and Archives */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-pink-500" /> 6. Version Control and Archives
          </h2>
          <p>
           Gaminzo maintains version histories of all its published policies. Upon request, users may access
previous versions of a specific policy, subject to reasonable legal and operational limitations.
          </p>
        </motion.section>

        {/* 7. Skill-Based Gaming Clarification */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaHandsHelping className="text-indigo-500" />7. Skill-Based Gaming Clarification
          </h2>
          <p>
           Gaminzo is a 100% skill-based platform, and all games (including fantasy cricket and quiz
contests) are structured to comply with Indian court rulings and central/state regulations that
distinguish games of skill from games of chance.
We do not offer or promote gambling, wagering, or betting in any form, as prohibited under the
Public Gambling Act, 1867 and state-specific gaming laws. Gaminzo contests are intended purely
for entertainment, learning, and skill development.
          </p>
        </motion.section>

        {/* 8. Minor Protection Clause */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-red-500" />8. Minor Protection Clause
          </h2>
          <p>
           Access to Gaminzo is restricted to individuals aged 18 years and above. If you are below 18, you
are not permitted to use this platform or participate in any contests, as per applicable Indian laws.
          </p>
        </motion.section>

        {/* Disclaimer */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-orange-500" /> Disclaimer
          </h2>
          <p>
           Gaminzo is owned and operated by NextGen Edutainment Private Limited, a legally incorporated
Indian company under the Companies Act, 2013. All games and contests offered on this platform,
including fantasy cricket, quiz challenges, and other interactive formats, are structured as games of
skill and do not constitute gambling, betting, or wagering as defined under the Public Gambling
Act, 1867, applicable state laws, or prevailing court rulings. <br />
Participation in Gaminzo contests may involve the use of real money, and by choosing to play,
users voluntarily assume the risk of financial loss. Users are advised to participate responsibly
and within their financial limits. Gaminzo does not guarantee any winnings or returns. Past
performance or rankings do not ensure future success. <br />
Users under the age of 18 are strictly prohibited from participating on the platform. Gaminzo
promotes responsible gaming practices and encourages users to maintain a healthy gaming
routine. If you feel that gaming is affecting your mental health, finances, or daily life, please seek
help immediately and consider self-exclusion options. <br />
Gaminzo reserves the right to modify, update, suspend, or terminate any feature, policy, or contest
format in accordance with legal developments, regulatory guidelines, and internal compliance
standards. <br />
<b>
    Use of this platform constitutes acceptance of all risks and policies, and Gaminzo shall not be
held liable for any direct, indirect, incidental, or consequential loss, including financial loss,
arising out of or related to the use of the platform.
</b> <br />
It is the responsibility of the user to ensure that participation in skill-based games is lawful in their
jurisdiction. If it is prohibited to play such games in your state or region, you are advised not to
access or use this platform.
          </p>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default UpdatesAmendmentsPolicy;
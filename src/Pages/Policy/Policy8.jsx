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

const GrievanceRedressalPolicy = ({ theme = "light" }) => {
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
       Grievance Redressal Policy
      </h1>
      <p className="text-center mb-10 text-sm opacity-70">
        Gaminzo – A Skill-Based Gaming Platform
       <br />

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
          
Gaminzo, operated by NextGen Edutainment Private Limited, is a legally compliant, skill-based
online gaming platform, designed to offer entertainment and knowledge through fantasy games,
quizzes, and skill contests. This Grievance Redressal Policy is established in accordance with the
applicable Indian laws including the Information Technology Act, 2000 (as amended), the Indian
Contract Act, 1872, and the guidelines set forth under the Online Gaming Rules 2023 under the
Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules,
2021, and any other applicable legal provisions.

          </p>
        </motion.section>

        {/* 2. Objective*/}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaCrown className="text-yellow-500" /> 2. Objective
          </h2>
          <p>
            
          This policy outlines the process for addressing user concerns or grievances related to:
          </p><br />
          <ul className="list-disc pl-6 space-y-1">
            <li>Game participation and performance</li>
            <li>Prize distribution or wallet transactions</li>
            <li>KYC/AML procedures</li>
            <li>Suspicious or fraudulent activities</li>
            <li>Platform behavior, technical glitches, or disputes</li>
            <li>Content and communication</li>
           
          </ul>
          <p>
            Gaminzo is committed to ensuring fair play, transparent practices, and timely redressal of user
grievances in accordance with the law.
          </p>
          
        </motion.section>

        {/* 3. Definitions */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBan className="text-red-500" /> 3. Grievance Officer Details
          </h2>
          <p>
           In compliance with the IT Rules, Gaminzo has appointed a Grievance Officer whose contact
details are as follows:
<br /><br />
Name: [ISharban Jha] <br />
Designation: Grievance Redressal Officer <br />
Email: grievance@gaminzo.com <br />
Address: [Saraswati L, 207, jayanivas, Subramanyapura, Bangalore South, Bangalore- 560061,
Karnataka] <br />
Phone: [8250742916] <br />
Working Hours: 10:00 AM – 6:00 PM IST (Monday to Friday, excluding public holidays)
          </p>
          
        </motion.section>

        {/*4. Prohibited Conduct */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUsers className="text-indigo-500" />4. Grievance Lodging Mechanism
          </h2>
          <p>        
         Users may raise a grievance through any of the following channels:        
            <br />

  <ul className="list-disc pl-6 space-y-1">
    <li>Email: Send a detailed complaint to grievance@gaminzo.com</li>
    <li>In-App Helpdesk: Use the support section in the Gaminzo app or website</li>
    <li>Postal Complaint: Send a signed letter to the Grievance Officer's address</li>
    
   
</ul>
Grievance Submission Must Include:
<ul className="list-disc pl-6 space-y-1">
    <li>Full Name of the Complainant</li>
    <li>Registered Email ID / Phone Number</li>
    <li>Description of the issue with relevant evidence (if any)</li>
    <li>Game ID / Transaction ID (if applicable)</li>
    <li>Date of the incident or occurrence</li>
    
   
</ul>
 <br /><br /> 
          </p>
          
        </motion.section>

        {/* 5. User-Generated Content */}
        

        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaUsers className="text-pink-500" />5. Redressal Timelines

          </h2>

          <p>
          To uphold fair play, Gaminzo employs:
          <ul className="list-disc pl-6 space-y-1">
            <li>Acknowledgment: Within 24 hours of receiving the complaint</li>
            <li> Resolution: Within 15 days from the date of receipt, in accordance with Rule 3(i) of the IT
Rules, 2021</li>
            <li>Escalation: If the user is not satisfied, the grievance may be escalated to a higher authority
as per the escalation matrix provided by Gaminzo.</li>
        
          </ul>
         
          </p>
          
          
        </motion.section>

        {/* 6. Trademark Notice */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaTrademark className="text-orange-500" />6. Resolution Process
          </h2>
          <p>
           If a user is found violating this policy, Gaminzo reserves the right to take one or more of the
following actions:
           
 <ul className="list-disc pl-6 space-y-1">
    <li> Preliminary Review: The Grievance Officer will validate the complaint’s legitimacy.</li>
    <li>Investigation: Internal review, technical checks, and any user history will be assessed.</li>
    <li>Decision: A resolution will be communicated to the user, and corrective action, if any, will
be taken.</li>
    <li>Closure: The grievance will be marked as resolved and archived for audit and compliance.</li>
    
</ul>
No refunds will be issued in cases where the policy is violated.

         </p>
        </motion.section>

        {/* 7. Violation & Enforcement */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaGavel className="text-purple-500" />7. Special Provisions
          </h2>
          <p>
        
           <ul className="list-disc pl-6 space-y-1">
            <li>Fair Play Violation: Any user found breaching fair play or anti-cheating rules may have
their account suspended, and winnings forfeited, following a transparent inquiry.</li>
            <li>Data Privacy: Gaminzo ensures that all grievance data is handled with strict confidentiality
and in line with our Privacy Policy and IT Act obligations.</li>
            <li>Restricted Jurisdictions: Users from restricted states such as Assam, Odisha, Telangana,
and others (as updated by law) are not permitted to participate, and grievances from such
jurisdictions may not be entertained.</li>
          </ul>
          </p>

        </motion.section>

        {/* 8. Legal Disclaimer */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaBalanceScale className="text-green-500" /> 8. Records and Audit
          </h2>
         
         <p>
         All grievances and their resolutions shall be documented, stored, and made available for review
during any legal or regulatory audits.
         </p>
          
        </motion.section>

        {/* 9. Jurisdiction  */}
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" /> 9. Policy Review & Amendment
          </h2>
          
          <p>
           This policy is subject to revision and updates in line with applicable laws and regulatory guidelines.
Users will be notified of any material changes through platform updates or emails.
          </p>
        </motion.section>
        <motion.section variants={sectionVariants} initial="hidden" whileInView="show">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <FaEnvelopeOpenText className="text-blue-500" />10. Legal Jurisdiction
          </h2>
         <p>
        All grievances and disputes arising under this policy shall be subject to the laws of India, and courts
of [Bengaluru, Karnataka ] shall have exclusive jurisdiction.
         </p>
         
          
        </motion.section>
       
      </div></div>
    </motion.div>
  );
};

export default GrievanceRedressalPolicy;

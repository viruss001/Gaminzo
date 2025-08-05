import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaShieldAlt, 
  FaLock, 
  FaCreditCard, 
  FaMobileAlt,
  FaCheck,
  FaChevronDown,
  FaLightbulb,
  FaTrophy
} from "react-icons/fa";
import { BsShieldCheck, BsGlobe2 } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";

// Gaminzo theme colors
const theme = {
  primary: {
    light: "#6366f1",  // indigo-500
    dark: "#4f46e5",   // indigo-600
  },
  secondary: {
    light: "#f59e0b",  // amber-500
    dark: "#d97706",    // amber-600
  },
  accent: {
    light: "#10b981",   // emerald-500
    dark: "#059669",    // emerald-600
  }
};

const OrbitalIcons = () => {
  const icons = [
    { Icon: FaShieldAlt, color: "text-indigo-400", bg: "bg-indigo-50" },
    { Icon: FaLock, color: "text-amber-400", bg: "bg-amber-50" },
    { Icon: FaCreditCard, color: "text-emerald-400", bg: "bg-emerald-50" },
    { Icon: BsShieldCheck, color: "text-indigo-400", bg: "bg-indigo-50" },
    { Icon: BsGlobe2, color: "text-amber-400", bg: "bg-amber-50" },
    { Icon: RiCustomerService2Fill, color: "text-emerald-400", bg: "bg-emerald-50" },
  ];

  return (
    <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] flex items-center justify-center mt-4 sm:mt-[1rem]">
      {/* Static center logo */}
      <div className="z-10">
        <img
          src="/images/ChatGPT_Image_Jul_24__2025__05_16_24_PM-removebg-preview.webp"
          alt="Gaminzo Logo"
          className="w-40 h-64 sm:w-50 sm:h-80 object-contain ml-[-5px] mt-1"
        />
      </div>
      
      {/* Rotating icons */}
      <motion.div
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {icons.map(({ Icon, color, bg }, index) => (
          <div
            key={index}
            className={`absolute rounded-full p-2 sm:p-3 ${bg}`}
            style={{
              top: `${50 - 45 * Math.cos((index * 2 * Math.PI) / icons.length)}%`,
              left: `${50 + 45 * Math.sin((index * 2 * Math.PI) / icons.length)}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Icon className={`text-2xl sm:text-3xl ${color}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Accordion = ({ title, content, isOpen, toggle, index }) => (
  <div className="border-b border-slate-100">
    <motion.button
      className={`w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium transition-all ${
        isOpen ? "bg-indigo-50 text-indigo-600" : "hover:bg-slate-50 text-slate-700"
      }`}
      onClick={toggle}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center gap-3">
        <motion.div
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
            isOpen ? "bg-indigo-100" : "bg-slate-100"
          }`}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <FaChevronDown className={`text-xs sm:text-sm ${isOpen ? "text-indigo-500" : "text-slate-500"}`} />
        </motion.div>
        <span className="text-base sm:text-lg">{title}</span>
      </div>
      {index === 1 && (
        <motion.div 
          className="px-2 py-1 text-xs font-bold bg-amber-100 text-amber-600 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          POPULAR
        </motion.div>
      )}
    </motion.button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="p-4 sm:p-5 pt-0 space-y-3 sm:space-y-4 bg-white">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {content}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const TrustFeature = ({ icon, title, description }) => (
  <motion.div 
    className="p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-slate-100"
    whileHover={{ 
      y: -5, 
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
      borderColor: theme.primary.light
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3" style={{ color: theme.primary.dark }}>{icon}</div>
    <h4 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">{title}</h4>
    <p className="text-slate-600 text-xs sm:text-sm">{description}</p>
  </motion.div>
);

const App = () => {
  const [openIndex, setOpenIndex] = useState();

  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const accordionItems = [
    {
      title: "Genuine verified accounts",
      content: (
        <div>
          <h4 className="font-semibold text-slate-700 mb-2 sm:mb-3 text-sm sm:text-base">
            Account Verification
          </h4>
          <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            We ensure only genuine user accounts through mandatory verification
            of mobile numbers, email IDs, and bank details.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <TrustFeature 
              icon={<FaMobileAlt />}
              title="Mobile Verified"
              description="OTP verification for all accounts"
            />
            <TrustFeature 
              icon={<FaCreditCard />}
              title="Bank Verified"
              description="Secure bank account linking"
            />
          </div>
        </div>
      ),
    },
    {
      title: "100% safe & secure payments",
      content: (
        <div>
          <h4 className="font-semibold text-slate-700 mb-2 sm:mb-3 text-sm sm:text-base">Payment Safety</h4>
          <ul className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
            <li className="flex items-start gap-2 sm:gap-3">
              <div className="mt-1" style={{ color: theme.accent.dark }}>
                <FaCheck className="text-xs sm:text-sm" />
              </div>
              <p className="text-slate-600 text-xs sm:text-sm">
                Gaminzo doesn't store any credit/debit card details.
              </p>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <div className="mt-1" style={{ color: theme.accent.dark }}>
                <FaCheck className="text-xs sm:text-sm" />
              </div>
              <p className="text-slate-600 text-xs sm:text-sm">
                Uses <strong className="font-semibold">3-D Secure Authentication</strong> for all transactions.
              </p>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <div className="mt-1" style={{ color: theme.accent.dark }}>
                <FaCheck className="text-xs sm:text-sm" />
              </div>
              <p className="text-slate-600 text-xs sm:text-sm">
                PCI DSS compliant payment gateway integration.
              </p>
            </li>
          </ul>
          <div className="p-3 sm:p-4 rounded-lg border text-xs sm:text-sm" style={{ 
            backgroundColor: `${theme.primary.light}10`,
            borderColor: `${theme.primary.light}30`
          }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaLock className="text-lg sm:text-xl" style={{ color: theme.primary.dark }} />
              <p style={{ color: theme.primary.dark }}>
                <strong>256-bit encryption</strong> for all financial transactions
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Employee restrictions",
      content: (
        <div>
          <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            Gaminzo employees are restricted from participating in paid contests
            to ensure fairness and transparency.
          </p>
          <div className="p-3 sm:p-4 rounded-lg border text-xs sm:text-sm" style={{ 
            backgroundColor: `${theme.secondary.light}10`,
            borderColor: `${theme.secondary.light}30`
          }}>
            <p style={{ color: theme.secondary.dark }}>
              <strong>Strict compliance policies</strong> for all employees with regular audits
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Legality",
      content: (
        <div>
          <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            Gaminzo operates as a skill-based gaming platform and complies with
            all applicable laws in India.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="p-3 rounded-lg border text-xs sm:text-sm" style={{ 
              backgroundColor: `${theme.accent.light}10`,
              borderColor: `${theme.accent.light}30`
            }}>
              <p className="font-medium" style={{ color: theme.accent.dark }}>Legal in India</p>
            </div>
            <div className="p-3 rounded-lg border text-xs sm:text-sm" style={{ 
              backgroundColor: `${theme.accent.light}10`,
              borderColor: `${theme.accent.light}30`
            }}>
              <p className="font-medium" style={{ color: theme.accent.dark }}>Skill-based</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Help and support",
      content: (
        <div>
          <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            Our 24×7 helpdesk is always available to address your queries.
          </p>
          <div className="p-3 sm:p-4 rounded-lg border text-xs sm:text-sm" style={{ 
            backgroundColor: `${theme.primary.light}10`,
            borderColor: `${theme.primary.light}30`
          }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <RiCustomerService2Fill className="text-lg sm:text-xl" style={{ color: theme.primary.dark }} />
              <p style={{ color: theme.primary.dark }}>
                Average response time: <strong>under 15 minutes</strong>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Data security",
      content: (
        <div>
          <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            We use industry-standard encryption and security practices to
            safeguard user data.
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="p-3 rounded-lg border text-xs sm:text-sm" style={{ 
              backgroundColor: `${theme.accent.light}10`,
              borderColor: `${theme.accent.light}30`
            }}>
              <p className="font-medium" style={{ color: theme.accent.dark }}>GDPR Compliant</p>
            </div>
            <div className="p-3 rounded-lg border text-xs sm:text-sm" style={{ 
              backgroundColor: `${theme.accent.light}10`,
              borderColor: `${theme.accent.light}30`
            }}>
              <p className="font-medium" style={{ color: theme.accent.dark }}>ISO 27001</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Actions Against Violators",
      content: (
        <div>
          <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
            Strict action is taken against fraudulent users, including permanent
            account bans.
          </p>
          <div className="p-3 sm:p-4 rounded-lg border text-xs sm:text-sm" style={{ 
            backgroundColor: `${theme.secondary.light}10`,
            borderColor: `${theme.secondary.light}30`
          }}>
            <div className="flex items-center gap-2 sm:gap-3">
              <FaShieldAlt className="text-lg sm:text-xl" style={{ color: theme.secondary.dark }} />
              <p style={{ color: theme.secondary.dark }}>
                <strong>Zero tolerance</strong> policy for any fraudulent activity
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 text-transparent bg-clip-text bg-yellow-500"
          >
            Your Safety is Our Priority
          </h1>
          <p className="text-sm sm:text-lg  max-w-2xl mx-auto">
            We implement the highest security standards to protect your account and transactions
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
          {/* Left Orbital Section - Full width on mobile, half on lg+ */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <OrbitalIcons />
          </motion.div>

          {/* Right Accordion Section - Full width on mobile, half on lg+ */}
          <motion.div 
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              {accordionItems.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndex === index}
                  toggle={() => toggleAccordion(index)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactForm = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <section
      className={`relative w-full py-20 px-4 min-h-screen flex items-center justify-center ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Background Gradient Blobs */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-3xl"
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 blur-3xl"
      />

      <div className="max-w-6xl w-full relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-4 text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Have questions or want to work together? Reach out and we'll respond as soon as possible.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-bold">Our Information</h3>
            <div className="space-y-6">
              {[
                { icon: <FaPhoneAlt />, title: 'Phone', value: '+91 7090708083' },
                { icon: <FaEnvelope />, title: 'Email', value: 'help@gaminzo.com' },
                { icon: <FaMapMarkerAlt />, title: 'Address', value: 'No- 207, Basement Floor, Jayanivas Bharat Housing Society, near Brigade 7 Gardens, Happy Valley Layout, Uttarahalli, Bengaluru, Karnataka 560061' },
              ].map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`p-4 rounded-full ${
                      isDark ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.title}</h4>
                    <p className={isDark ? 'text-gray-300 text-xl' : 'text-gray-600 text-xl'}>{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className={`p-8 rounded-2xl backdrop-blur-lg border ${
              isDark
                ? 'bg-gray-800/60 border-gray-700'
                : 'bg-white/80 border-gray-200 shadow-lg'
            }`}
          >
            <h3 className="text-3xl font-bold mb-6">Send a Message</h3>
            <motion.form variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
              {['name', 'email'].map((field, i) => (
                <motion.div key={i} variants={itemVariants} className="relative">
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    placeholder=" "
                    className={`peer w-full px-4 pt-5 pb-2 rounded-lg border outline-none transition ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-transparent'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-transparent'
                    } focus:ring-2 focus:ring-blue-400`}
                    required
                  />
                  <label
                    htmlFor={field}
                    className={`absolute left-4 top-2 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm ${
                      isDark
                        ? 'text-gray-400 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-400'
                        : 'text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500'
                    }`}
                  >
                    {field === 'name' ? 'Your Name *' : 'Email Address *'}
                  </label>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder=" "
                  className={`peer w-full px-4 pt-5 pb-2 rounded-lg border outline-none transition ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-transparent'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-transparent'
                  } focus:ring-2 focus:ring-blue-400`}
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 top-2 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm ${
                    isDark
                      ? 'text-gray-400 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-400'
                      : 'text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500'
                  }`}
                >
                  Your Message *
                </label>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition text-white bg-gradient-to-r from-blue-500 to-emerald-500 shadow-md hover:shadow-xl"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;

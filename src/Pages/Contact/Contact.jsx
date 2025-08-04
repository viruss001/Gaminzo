import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactForm = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`relative w-full py-16 px-4 min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mt-4 text-lg max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Have questions or want to work together? Reach out and we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold">Our Information</h3>
            <div className="space-y-6">
              {[
                { icon: <FaPhoneAlt />, title: "Phone", value: "+1 (123) 456-7890" },
                { icon: <FaEnvelope />, title: "Email", value: "gaminzo@supoort.com" },
                { icon: <FaMapMarkerAlt />, title: "Address", value: "Banglore" }
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${isDark ? "bg-gray-700 text-blue-400" : "bg-blue-100 text-blue-500"}`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.title}</h4>
                    <p className={isDark ? "text-gray-300" : "text-gray-600"}>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form (UI only) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-2xl ${isDark ? "bg-gray-800" : "bg-white"} shadow-xl`}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={`block mb-2 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition ${
                    isDark 
                      ? "bg-gray-700 text-white placeholder-gray-400 border-gray-600" 
                      : "bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200"
                  } border`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block mb-2 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition ${
                    isDark 
                      ? "bg-gray-700 text-white placeholder-gray-400 border-gray-600" 
                      : "bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200"
                  } border`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block mb-2 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition ${
                    isDark 
                      ? "bg-gray-700 text-white placeholder-gray-400 border-gray-600" 
                      : "bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-200"
                  } border`}
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold transition bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-md hover:shadow-lg"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

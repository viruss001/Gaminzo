import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <footer
      className={`relative pt-16 pb-8 px-4 mt border-t ${
        isDark
          ? "bg-gray-900/95 text-white border-gray-800"
          : "bg-white/95 text-black border-gray-200"
      } transition-colors duration-300`}
    >
      {/* Top Gradient Border */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
          isDark
            ? "from-purple-500 via-pink-500 to-red-500"
            : "from-blue-500 via-pink-700 to-green-400"
        } animate-pulse`}
      />

      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-green-400 mb-2">Gaminzo</h2>
          <p className="text-sm leading-relaxed">
            Super6 brings a revolutionary twist to fantasy cricket with per-over predictions, budget-friendly entry, and huge prize pools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer transition">Home</li>
            <li className="hover:text-green-400 cursor-pointer transition">About Us</li>
            <li className="hover:text-green-400 cursor-pointer transition">Master Skills</li>
            <li className="hover:text-green-400 cursor-pointer transition">Points Table</li>
            <li className="hover:text-green-400 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> support@gaminzo.in
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-400" /> Bengaluru, India
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white hover:scale-105 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white hover:scale-105 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white hover:scale-105 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 text-white hover:scale-105 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t pt-6 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Gaminzo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

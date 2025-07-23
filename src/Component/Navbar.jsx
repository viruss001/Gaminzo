import React, { useState } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Home", "About Us", "Master Skills", "Points Table", "Contact"];

  return (
    <div className="sticky top-0 z-50">
      {/* Container */}
      <div
        className={`relative ${
          isDark
            ? "bg-gray-900"
            : "bg-white shadow-md border-b border-gray-200"
        }`}
      >
        {/* Animated underline */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
            isDark
              ? "from-purple-500 via-pink-500 to-red-500"
              : "from-blue-500 via-pink-700 to-green-400"
          } animate-pulse`}
        />

        {/* Navbar */}
        <header
          className={`${
            isDark ? "bg-gray-900/95 text-white" : "bg-white/95 text-black"
          }`}
        >
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8 h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className={isDark ? "text-green-400" : "text-green-500"}>
                Gaminzo
              </span>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8 font-medium text-l">
              {navLinks.map((item, i) => (
                <li
                  key={i}
                  className={`cursor-pointer transition-colors ${
                    isDark ? "hover:text-green-400" : "hover:text-green-600"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className={`p-2 rounded-full transition ${
                  isDark ? "hover:bg-green-700" : "hover:bg-green-100"
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } transition`}
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121z" />
                  </svg>
                )}
              </button>

              {/* Download Button */}
              <div
                className={`relative p-0.5 rounded-md bg-gradient-to-r ${
                  isDark
                    ? "from-purple-500 via-pink-500 to-red-500"
                    : "from-red-500 via-amber-400 to-pink-500"
                }`}
              >
                <button
                  className={`px-5 py-1.5 rounded-[4px] font-medium text-white text-sm ${
                    isDark
                      ? "bg-gray-900 hover:bg-gray-800"
                      : "bg-red-600 hover:bg-red-700"
                  } transition`}
                >
                  DOWNLOAD
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Dropdown */}
          {mobileOpen && (
            <div className="md:hidden px-4 pb-4">
              <ul className="space-y-2 font-medium text-sm">
                {navLinks.map((item, i) => (
                  <li
                    key={i}
                    className={`cursor-pointer transition-colors ${
                      isDark ? "hover:text-red-400" : "hover:text-red-600"
                    }`}
                  >
                    {item}
                  </li>
                ))}
                <li className="pt-3">
                  {/* Theme Toggle Inside Mobile */}
                  <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full ${
                      isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
                    } transition`}
                  >
                    {isDark ? "🌙 Dark" : "☀️ Light"}
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full mt-2 px-5 py-2 rounded-md text-white font-semibold ${
                      isDark ? "bg-red-600" : "bg-red-500"
                    }`}
                  >
                    DOWNLOAD
                  </button>
                </li>
              </ul>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Navbar;

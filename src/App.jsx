import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Main from "./Pages/Home/Main";
import AboutHome from "./Pages/About/AboutHome";
import Policies from "./Pages/Policy/Policies";
import Contact from "./Pages/Contact/Contact";
import PointTable from "./Pages/pointTable/PointTable";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show button only after scrolling 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!theme) return null;

  return (
    <div
      className={`relative min-h-screen duration-800  ${
        theme === "dark" ? "text-white bg-gray-900" : "text-black bg-gray-50"
      }`}
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            theme === "dark"
              ? "radial-gradient(circle at top, #1f2937, #111827)"
              : "radial-gradient(circle at top, #ffffff, #e5e7eb)",
        }}
      />

      <BrowserRouter>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Main theme={theme} />} />
          <Route path="/about-us" element={<AboutHome theme={theme} />} />
          <Route path="/policy" element={<Policies theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/pointtable" element={<PointTable theme={theme} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer theme={theme} />
      </BrowserRouter>

      {/* Scroll To Top Button */}
      
    </div>
  );
}

export default App;

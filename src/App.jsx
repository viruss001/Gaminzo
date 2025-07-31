import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";  // <-- Added
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Main from "./Pages/Home/Main";
import AboutHome from './Pages/About/AboutHome'
import Policies from "./Pages/Policy/Policies.jsx"
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  const [theme, setTheme] = useState(null);

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

  if (!theme) return null;

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "text-white bg-gray-900" : "text-black bg-gray-50"
      }`}
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background: theme === "dark"
            ? "radial-gradient(circle at top, #1f2937, #111827)"
            : "radial-gradient(circle at top, #ffffff, #e5e7eb)",
        }}
      ></div>

      <BrowserRouter>
        <Navbar theme={theme} toggleTheme={toggleTheme} /> {/* Inside Router */}
        <Routes>
          <Route path="/" element={<Main theme={theme} />} />
          <Route path="/about-us" element={<AboutHome theme={theme} />} />
          <Route path="/policy" element={<Policies theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer theme={theme} />

      </BrowserRouter>
    </div>
  );
}

export default App;

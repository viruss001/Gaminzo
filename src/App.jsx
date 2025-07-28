// App.jsx
import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import WhyChooseUs from "./Component/WhyChooseUs";
import Steps from "./Component/Steps";
import WhatYouFindSection from "./Component/WhatYouFindSection";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";
import SnapshotWinzo from "./Component/SnapshotWinzo";
import Banner from "./Component/Banner";
import "animate.css";
import Snapvideo from "./Component/Snapvideo";
import CounterStats from "./Component/CounterStats";
import AppPromo from "./Component/AppPromo";
import BadgesSection from "./Component/BadgesSection";

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
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 -z-10">
        {/* Place only background images or gradient here */}
      </div>

      {/* Page Sections */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Banner theme={theme} />
      <Hero theme={theme} />
      <WhyChooseUs theme={theme} />
      {/* <BadgesSection theme={theme}/> */}
      <Snapvideo theme={theme} />
      <AppPromo theme={theme} />
      <Feature theme={theme} />
      <CounterStats theme={theme} />
      {/* <WhatYouFindSection theme={theme} /> */}
      <Footer theme={theme} />
    </div>
  );
}

export default App;

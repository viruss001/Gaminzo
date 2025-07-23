// App.jsx
import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import WhyChooseUs from "./Component/WhyChooseUs";
import Steps from "./Component/Steps";
import WhatYouFindSection from "./Component/WhatYouFindSection";
import Feature from "./Component/Feature";
import Footer from "./Component/Footer";

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
    <div className={`relative min-h-screen transition-colors duration-500 ${theme === "dark" ? "text-white" : "text-black"}`}>
      {/* Dynamic Background Image */}
      {/* <div className="absolute inset-0 -z-10">
        <img
          src={
            theme === "dark"
              ? "/ABSTRACT_WALLPAPER_Mesa_de_trabajo_1.jpg"
              : "/images/5143237.jpg"
          }
          alt="background"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* Page Sections */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <WhyChooseUs theme={theme} />
      <Steps theme={theme} />
      <WhatYouFindSection theme={theme} />
      <Feature theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;

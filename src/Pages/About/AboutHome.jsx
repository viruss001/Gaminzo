import React from "react";
import { motion } from "framer-motion";
import WhoWeAre from "./WhoWeAre";
import OurCulture from "./OurCulture";
import AboutFeatures from "./AboutFeatures";

const WelcomeSection = ({theme}) => {
  const isDark = theme === "dark";
  return (
    <>
   
    <div className="relative w-full  flex flex-col items-center px-6 py-20 md:py-32">
      {/* Left Player Image */}
      <motion.img
        src="/images/batsman1.webp" // Replace with your image path
        alt="Left Player"
        className="absolute left-0 top-5 w-44 md:w-64"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Right Player Image */}
      <motion.img
        src="/images/batsman2.webp" // Replace with your image path
        alt="Right Player"
        className="absolute right-10 top-16 w-44 md:w-64"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Main Content */}
      <div className="max-w-4xl text-justify relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-6">
          Welcome to Gaminzo – Powered by NextGen Edutainment Private Ltd
        </h1>
        <p className={`${isDark ? "text-white":"text-gray-700"} text-lg leading-relaxed text-bold`}>
          Gaminzo brings a fresh and exciting twist to fantasy cricket, offering more
          than just team selection. Here, you can choose and rank different categories,
          dive into timed quizzes, and compete with others to earn your spot at the top.
          It is a platform built for everyone, from casual fans to cricket die-hards,
          where every right choice and quick answer adds to your score and your chances
          of winning real prizes. What makes Gaminzo stand out is how it combines fun
          with a bit of healthy competition. You will not only test your cricket knowledge
          but also sharpen your quick-thinking skills as you race against the clock in
          quizzes. The experience is simple, engaging, and packed with opportunities to
          connect with other cricket lovers. With Gaminzo, you are not just a spectator;
          you are part of the action, making smart moves, climbing the leaderboards,
          and enjoying the game like never before.
        </p>
      </div>

      {/* Floating Button */}
      
    </div>
      <WhoWeAre theme = {theme} />
      <OurCulture/>
      <AboutFeatures/>
       </>
  );
};

export default WelcomeSection;

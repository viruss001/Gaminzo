import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SnapshotWinzo = ({ theme = "dark" }) => {
  const isDark = theme === "dark";
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const blurRef1 = useRef(null);
  const blurRef2 = useRef(null);

  useEffect(() => {
    // Set up GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Background blurs animation
    gsap.fromTo(
      [blurRef1.current, blurRef2.current],
      { opacity: 0, scale: 0.8 },
      {
        opacity: 0.3,
        scale: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    // Heading animation
    tl.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );

    // Image animation
    tl.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0, rotation: -5 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.5"
    );

    // Text animation
    tl.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    // Hover effect for image
    gsap.to(imageRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power1.inOut",
      paused: true,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Clean up
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-screen px-6 py-16 flex flex-col justify-center items-center overflow-hidden ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          ref={blurRef1}
          className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-500/20 blur-3xl"
        />
        <motion.div
          ref={blurRef2}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-400/20 blur-3xl"
        />
      </div>

      {/* Animated Heading */}
      <motion.h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400"
      >
        SNAPSHOT OF GAMINZO.
      </motion.h2>

      {/* Center Image */}
      <motion.div
        ref={imageRef}
        className="mb-10 transform transition-transform duration-300 hover:scale-105"
      >
        <img
          src="/images/image-721@2x-1751984540010.webp"
          alt="WinZO Graphic"
          className="max-w-3xl w-full"
        />
      </motion.div>

      {/* Description Text */}
      <motion.p
        ref={textRef}
        className={`text-center max-w-4xl text-lg leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Gaminzo offers skill-based games and formats, ensuring fairness and safety.
        As a member of IEIC, Gaminzo guarantees the integrity of all games on the
        platform. Trusted payment partners like PayTM, Google Pay, PhonePe, and
        BHIM are available for secure transactions. Fraudulent play is restricted
        through advanced fraud detection mechanisms.
        <br />
        <br />
        The Gaminzo app is accessible on Android and iOS. Android users can download
        it from the Download Button on this page, while iOS users can find it on
        the Apple App Store.
      </motion.p>
    </section>
  );
};

export default SnapshotWinzo;
import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { FaGamepad, FaMoneyBillWave, FaCoins, FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// --- constants remain unchanged ---
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const featuresData = [
  {
    title: "One App | Many Games",
    desc: "Fantasy, Quiz & Stocks",
    icon: <FaGamepad />, // Changed to more relevant icon
    color: "from-purple-500 to-pink-500", // Matches your theme
    glowColor: "168, 85, 247", // Purple glow
  },
  {
    title: "Instant Withdrawal",
    desc: "Get your winnings in seconds", // More concise
    icon: <FaMoneyBillWave />, // Better financial icon
    color: "from-green-500 to-emerald-400", // Success color
    glowColor: "16, 185, 129", // Green glow
  },
  {
    title: "Earn Coins",
    desc: "Earn & redeem coins ", // Simplified
    icon: <FaCoins />, // More appropriate icon
    color: "from-amber-500 to-yellow-400", // Coin-like color
    glowColor: "245, 158, 11", // Amber glow
  },
  {
    title: "Gaminzo Pass",
    desc: "Unlock VIP perks and privileges", // More premium phrasing
    icon: <FaCrown />, // VIP crown icon
    color: "from-blue-500 to-indigo-500", // Premium blue
    glowColor: "59, 130, 246", // Blue glow
  },
];

const iconFloatVariants = {
  float: { y: [0, -15, 0], rotate: [0, 5, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
};

// --- ParticleCard remains same except fixed width/height ---
const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement("div");
    el.className = "particle";
    el.style.cssText = `
      position: absolute; width: 4px; height: 4px; border-radius: 50%;
      background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6);
      pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;
    `;
    return el;
  };

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    particlesRef.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => particle.remove(),
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    initializeParticles();

    particlesRef.current.forEach((particle) => {
      const clone = particle.cloneNode(true);
      cardRef.current.appendChild(clone);

      gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
      gsap.to(clone, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        rotation: Math.random() * 360,
        duration: 2 + Math.random() * 2,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(clone, {
        opacity: 0.3,
        duration: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
      if (enableTilt) gsap.to(element, { rotateX: 5, rotateY: 5, duration: 0.3, ease: "power2.out" });
    };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
      if (enableTilt) gsap.to(element, { rotateX: 0, rotateY: 0, duration: 0.3 });
      if (enableMagnetism) gsap.to(element, { x: 0, y: 0, duration: 0.3 });
    };
    const handleMouseMove = (e) => {
      if (!enableTilt && !enableMagnetism) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: "power2.out" });
      }
      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;
        magnetismAnimationRef.current = gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3 });
      }
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={`${className} relative overflow-hidden will-change-transform`} style={style}>
      {children}
    </div>
  );
};

// --- Mobile Detection ---
const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

// --- Main Component ---
const WhyChooseUs = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const isMobile = useMobileDetection();
  const features = useMemo(() => featuresData, []);

  return (
    <section className={`relative w-full py-16 sm:py-20 mt-[-8rem] px-4`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text  text-transparent bg-gradient-to-r ${
            isDark ? "from-emerald-400 to-blue-400" : "from-blue-600 to-emerald-600"
          }`}
        >
          Play the Game. Beat the Quiz.
        </h2>
        <p
          className={`mt-4 text-base sm:text-lg ${isDark ? "text-gray-300" : "text-gray-700"} max-w-xl mx-auto`}
        >
        One App. Multiple Games. Unlimited Wins
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mt-12 sm:mt-16 place-items-center">
          {features.map((feature, idx) => (
            <ParticleCard
              key={idx}
              className="relative w-full max-w-[18rem] aspect-square rounded-3xl p-[2px] feature-card--border-glow"
              style={{
                "--glow-x": "50%",
                "--glow-y": "50%",
                "--glow-intensity": "0",
                "--glow-radius": "200px",
                "--glow-color": feature.glowColor,
              }}
              disableAnimations={isMobile}
              particleCount={8}
              glowColor={feature.glowColor}
              enableTilt={!isMobile}
              clickEffect={!isMobile}
              enableMagnetism={!isMobile}
            >
              <div className="absolute inset-0 rounded-3xltransition-800 bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              <div
                className={`relative z-10 transition-800 rounded-3xl flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 py-6 sm:py-8 ${
                  isDark ? "bg-gray-800/80 backdrop-blur-md text-white" : "bg-white/90 backdrop-blur-sm text-gray-800"
                }`}
              >
                <motion.div
                  variants={iconFloatVariants}
                  animate="float"
                  whileHover="hover"
                  className={`flex items-center justify-center transition-800 w-14 sm:w-16 h-14 sm:h-16 mb-4 rounded-full bg-gradient-to-br ${feature.color} shadow-lg`}
                >
                  {React.cloneElement(feature.icon, { className: "text-xl transition-800 sm:text-2xl text-white" })}
                </motion.div>
                <h3 className="font-bold text-lg sm:text-[1.2rem] tracking-wide mb-2   bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  {feature.title}
                </h3>
                <p className={`text-sm  sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>{feature.desc}</p>
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 ${
                    isDark ? "border-emerald-400/30" : "border-blue-400/30"
                  }`}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </ParticleCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

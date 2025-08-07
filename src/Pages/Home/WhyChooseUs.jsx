import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { FaBolt, FaRobot, FaGlobe, FaLock, FaStar, FaTrophy } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";

const DEFAULT_PARTICLE_COUNT = 20;
const MOBILE_BREAKPOINT = 768;

const featuresData = [
  {
    title: "Instant Withdrawals",
    desc: "Cash out your earnings instantly, no delays.",
    icon: <FaBolt />,
    color: "from-yellow-400 to-emerald-400",
    glowColor: "255, 193, 7",
    secondaryIcon: <FaTrophy className="absolute opacity-20" style={{ fontSize: "4rem" }} />,
  },
  {
    title: "AI Draft Assistant",
    desc: "Smart recommendations powered by real-time stats.",
    icon: <FaRobot />,
    color: "from-pink-500 to-emerald-400",
    glowColor: "236, 72, 153",
    secondaryIcon: <FaStar className="absolute opacity-20" style={{ fontSize: "4rem" }} />,
  },
  {
    title: "Fair Play Certified",
    desc: "Audited and transparent to ensure trust and fairness.",
    icon: <FaLock />,
    color: "from-blue-500 to-emerald-400",
    glowColor: "59, 130, 246",
    secondaryIcon: <FaGlobe className="absolute opacity-20" style={{ fontSize: "4rem" }} />,
  },
  {
    title: "Global Tournaments",
    desc: "Play with users worldwide & win real cash prizes.",
    icon: <FaGlobe />,
    color: "from-green-500 to-blue-400",
    glowColor: "16, 185, 129",
    secondaryIcon: <FaBolt className="absolute opacity-20" style={{ fontSize: "4rem" }} />,
  },
];

const iconFloatVariants = {
  float: {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.3,
    rotate: [0, 15, -15, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = "132, 0, 255",
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
  const controls = useAnimation();

  const createParticleElement = (x, y, color) => {
    const el = document.createElement("div");
    el.className = "particle";
    const size = 4 + Math.random() * 4;
    const blur = 4 + Math.random() * 8;
    el.style.cssText = `
      position: absolute; 
      width: ${size}px; 
      height: ${size}px; 
      border-radius: 50%;
      background: rgba(${color}, ${0.6 + Math.random() * 0.4});
      box-shadow: 0 0 ${blur}px rgba(${color}, 0.8);
      pointer-events: none; 
      z-index: 100; 
      left: ${x}px; 
      top: ${y}px;
      transform: scale(0);
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

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    initializeParticles();

    particlesRef.current.forEach((particle) => {
      const clone = particle.cloneNode(true);
      cardRef.current.appendChild(clone);

      gsap.fromTo(
        clone,
        { scale: 0, opacity: 0 },
        {
          scale: [0, 1.2, 1],
          opacity: [0, 1, 0.8],
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
        }
      );

      gsap.to(clone, {
        x: (Math.random() - 0.5) * 120,
        y: (Math.random() - 0.5) * 120,
        rotation: Math.random() * 360,
        duration: 3 + Math.random() * 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(clone, {
        opacity: [0.8, 0.3],
        duration: 2.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, [initializeParticles]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.in(1.7)",
        onComplete: () => particle.remove(),
      });
    });
    particlesRef.current = [];
  }, []);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      controls.start("hover");
      animateParticles();
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      controls.start("rest");
      clearAllParticles();
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      }
      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!enableTilt && !enableMagnetism) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;
        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.2,
          ease: "power2.out",
        });
      }
      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.1;
        const magnetY = (y - centerY) * 0.1;
        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      }
    };

    const handleClick = () => {
      if (!clickEffect) return;
      gsap.to(element, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, controls]);

  return (
    <motion.div
      ref={cardRef}
      className={`${className} relative overflow-hidden will-change-transform`}
      style={style}
      whileHover="hover"
      variants={cardHoverVariants}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_BREAKPOINT);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const WhyChooseUs = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const isMobile = useMobileDetection();
  const features = useMemo(() => featuresData, []);

  const bgControls = useAnimation();
  useEffect(() => {
    bgControls.start({
      x: [0, 100, 0],
      y: [0, 50, 0],
      transition: {
        duration: 30,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    });
  }, [bgControls]);

  return (
    <section className={`relative w-full py-16 sm:py-24 px-4 overflow-hidden `}>
      <motion.div className="absolute inset-0 overflow-hidden" animate={bgControls}>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${isDark ? "bg-emerald-400" : "bg-blue-400"}`}
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1 + Math.random() * 0.2,
                filter: "blur(40px)",
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 200],
                y: [0, (Math.random() - 0.5) * 200],
                transition: {
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 mb-6"
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg sm:text-xl ${isDark ? "text-gray-300" : "text-gray-700"} max-w-2xl mx-auto mb-12`}
        >
          Experience fantasy sports like never before — smarter, faster, and fairer.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {features.map((feature, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * idx }}>
              <ParticleCard
                className="relative w-full h-full rounded-3xl p-[2px] feature-card--border-glow"
                style={{
                  "--glow-x": "50%",
                  "--glow-y": "50%",
                  "--glow-intensity": "0",
                  "--glow-radius": "200px",
                  "--glow-color": feature.glowColor,
                }}
                disableAnimations={isMobile}
                particleCount={12}
                glowColor={feature.glowColor}
                enableTilt={!isMobile}
                clickEffect={!isMobile}
                enableMagnetism={!isMobile}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                <div
                  className={`relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-6 py-8 ${
                    isDark ? "bg-gray-800/80 backdrop-blur-md text-white" : "bg-white/90 backdrop-blur-sm text-gray-800"
                  }`}
                >
                  {feature.secondaryIcon}
                  <motion.div
                    variants={iconFloatVariants}
                    animate="float"
                    whileHover="hover"
                    className={`flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${feature.color} shadow-lg relative z-20`}
                  >
                    {React.cloneElement(feature.icon, { className: "text-2xl text-white" })}
                  </motion.div>
                  <motion.h3 className="font-bold text-xl tracking-wide mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400" whileHover={{ scale: 1.05 }}>
                    {feature.title}
                  </motion.h3>
                  <motion.p className={`text-base ${isDark ? "text-gray-300" : "text-gray-600"} mb-4`} whileHover={{ scale: 1.02 }}>
                    {feature.desc}
                  </motion.p>
                  <motion.div
                    className={`absolute inset-0 rounded-3xl border-2 ${isDark ? "border-emerald-400/30" : "border-blue-400/30"}`}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      borderWidth: [2, 3, 2],
                    }}
                    transition={{
                      duration: 4 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </ParticleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

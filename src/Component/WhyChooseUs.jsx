import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FaBolt, FaRobot, FaGlobe, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const features = [
  {
    title: "Instant Withdrawals",
    desc: "Cash out your earnings instantly, no delays.",
    icon: <FaBolt />,
    color: "from-yellow-400 to-emerald-400",
    glowColor: "255, 193, 7"
  },
  {
    title: "AI Draft Assistant",
    desc: "Smart recommendations powered by real-time stats.",
    icon: <FaRobot />,
    color: "from-pink-500 to-emerald-400",
    glowColor: "236, 72, 153"
  },
  {
    title: "Fair Play Certified",
    desc: "Audited and transparent to ensure trust and fairness.",
    icon: <FaLock />,
    color: "from-blue-500 to-emerald-400",
    glowColor: "59, 130, 246"
  },
  {
    title: "Global Tournaments",
    desc: "Play with users worldwide & win real cash prizes.",
    icon: <FaGlobe />,
    color: "from-green-500 to-blue-400",
    glowColor: "16, 185, 129"
  }
];

const iconFloatVariants = {
  float: {
    y: [0, -15, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3 },
  },
};

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

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
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
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
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );

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
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
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
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      );
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
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const WhyChooseUs = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const isMobile = useMobileDetection();
  const gridRef = useRef(null);

  return (
    <section
      className={`relative w-full py-20 px-4 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background floating particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          const delay = Math.random() * 2;
          const duration = 5 + Math.random() * 10;

          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                isDark ? "bg-emerald-400/30" : "bg-blue-500/30"
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${posX}%`,
                top: `${posY}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                delay,
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
            isDark ? "from-emerald-400 to-blue-400" : "from-blue-600 to-emerald-600"
          }`}
        >
          Why Choose Us
        </h2>
        <p
          className={`mt-4 text-lg ${
            isDark ? "text-gray-300" : "text-gray-700"
          } max-w-xl mx-auto`}
        >
          Experience fantasy sports like never before — smarter, faster, and fairer.
        </p>

        <style>
          {`
            .feature-card--border-glow::after {
              content: '';
              position: absolute;
              inset: 0;
              padding: 2px;
              background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                  rgba(var(--glow-color), calc(var(--glow-intensity) * 0.8)) 0%,
                  rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4)) 30%,
                  transparent 60%);
              border-radius: inherit;
              mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              mask-composite: subtract;
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              pointer-events: none;
              transition: opacity 0.3s ease;
              z-index: 1;
            }
            
            .feature-card--border-glow:hover::after {
              opacity: 1;
            }
            
            .feature-card--border-glow:hover {
              box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(var(--glow-color), 0.2);
            }
            
            .feature-particle::before {
              content: '';
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: rgba(var(--glow-color), 0.2);
              border-radius: 50%;
              z-index: -1;
            }
          `}
        </style>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 place-items-center" ref={gridRef}>
          {features.map((feature, idx) => {
            const baseClassName = `relative w-72 h-72 rounded-3xl p-[2px] group smooth-perf feature-card--border-glow`;
            const cardStyle = {
              "--glow-x": "50%",
              "--glow-y": "50%",
              "--glow-intensity": "0",
              "--glow-radius": "200px",
              "--glow-color": feature.glowColor,
            };

            return (
              <ParticleCard
                key={idx}
                className={baseClassName}
                style={cardStyle}
                disableAnimations={isMobile}
                particleCount={8}
                glowColor={feature.glowColor}
                enableTilt={!isMobile}
                clickEffect={!isMobile}
                enableMagnetism={!isMobile}
              >
                {/* Hover glow */}
                <div className="smooth-perf absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

                {/* Card Content */}
                <div
                  className={`relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-6 py-8 ${
                    isDark
                      ? "bg-gray-800/80 backdrop-blur-md text-white"
                      : "bg-white/90 backdrop-blur-sm text-gray-800"
                  }`}
                >
                  {/* Animated icon */}
                  <motion.div
                    variants={iconFloatVariants}
                    animate="float"
                    whileHover="hover"
                    className={`flex items-center justify-center w-16 h-16 mb-4 smooth-perf rounded-full bg-gradient-to-br ${feature.color} shadow-lg`}
                  >
                    {React.cloneElement(feature.icon, {
                      className: "text-2xl text-white",
                    })}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-bold text-xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.desc}
                  </p>

                  {/* Pulse border */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl border-2 ${
                      isDark ? "border-emerald-400/30" : "border-blue-400/30"
                    }`}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4 + idx,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </ParticleCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
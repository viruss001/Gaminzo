import React, { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { 
  FaShieldAlt,
  FaUndo,
  FaFileContract,
  FaGamepad,
  FaLightbulb,
  FaIdCard,
  FaBalanceScale,
  FaHandsHelping,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Policy1 from "./Policy1";
import Policy2 from "./Policy2";
import Policy3 from "./Policy3";
import Policy4 from "./Policy4";
import Policy5 from "./Policy5";
import Policy6 from "./Policy6";
import Policy7 from "./Policy7";
import Policy8 from "./Policy8";
import Policy9 from "./Policy9";
import Policy10 from './policy10';

// --- constants ---
const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

// --- Particle Card ---
const ParticleCard = ({
  children,
  className = "",
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  enableMagnetism = false,
  onClick,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const isHoveredRef = useRef(false);
  const particlesInitialized = useRef(false);

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

  const clearParticles = useCallback(() => {
    particlesRef.current.forEach((particle) =>
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => particle.remove(),
      })
    );
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
      gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: "power2.inOut", repeat: -1, yoyo: true });
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (!cardRef.current) return;
    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
      if (enableTilt) gsap.to(element, { rotateX: 5, rotateY: 5, duration: 0.3 });
    };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearParticles();
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
        gsap.to(element, { rotateX, rotateY, duration: 0.1 });
      }
      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;
        gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3 });
      }
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      clearParticles();
    };
  }, [animateParticles, clearParticles, enableTilt, enableMagnetism]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden will-change-transform cursor-pointer`}
      style={style}
      onClick={onClick}
    >
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

// --- Main Policies Page ---
const PoliciesPage = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const isMobile = useMobileDetection();
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCardClick = (policy) => {
    setSelectedPolicy(policy);
    const section = document.getElementById("seehere");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const policiesData = useMemo(
    () => [
  { 
    title: "Privacy Policy", 
    desc: "Learn how we collect, use, store, and protect your personal information on our platform.", 
    icon: <FaShieldAlt />, 
    color: "from-purple-500 to-indigo-400", 
    glowColor: "168, 85, 247", 
    component: <Policy4 /> 
  },
  { 
    title: "Refund & Cancellation", 
    desc: "Understand our fair and transparent process for handling refunds and cancellations.", 
    icon: <FaUndo />, 
    color: "from-pink-500 to-red-400", 
    glowColor: "236, 72, 153", 
    component: <Policy2 /> 
  },
  { 
    title: "Terms & Conditions", 
    desc: "Review the rules, responsibilities, and conditions for using our services.", 
    icon: <FaFileContract />, 
    color: "from-green-500 to-emerald-400", 
    glowColor: "16, 185, 129", 
    component: <Policy3 /> 
  },
  { 
    title: "Responsible Gaming", 
    desc: "Promoting safe, balanced, and responsible gaming practices for a healthy experience.", 
    icon: <FaGamepad />, 
    color: "from-yellow-400 to-orange-400", 
    glowColor: "255, 193, 7", 
    component: <Policy1 /> 
  },
  { 
    title: "Intellectual Property Policy", 
    desc: "Understand how intellectual property rights are protected and respected on our platform.", 
    icon: <FaLightbulb />, 
    color: "from-blue-500 to-cyan-400", 
    glowColor: "59, 130, 246", 
    component: <Policy5 /> 
  },
  { 
    title: "KYC & AML (Anti-Money Laundering) Policy", 
    desc: "Our compliance measures to verify customer identity and prevent money laundering activities.", 
    icon: <FaIdCard />, 
    color: "from-red-500 to-rose-400", 
    glowColor: "239, 68, 68", 
    component: <Policy6 /> 
  },
  { 
    title: "Fair Play Policy", 
    desc: "Ensuring fairness, transparency, and a cheat-free gaming experience for all players.", 
    icon: <FaBalanceScale />, 
    color: "from-teal-500 to-green-400", 
    glowColor: "20, 184, 166", 
    component: <Policy7 /> 
  },
  { 
    title: "Grievance Redressal Policy", 
    desc: "A structured process for addressing and resolving user concerns effectively and efficiently.", 
    icon: <FaHandsHelping />, 
    color: "from-indigo-500 to-blue-400", 
    glowColor: "99, 102, 241", 
    component: <Policy8 /> 
  },
  { 
    title: "Withdrawal Policy", 
    desc: "Clear guidelines for secure, fast, and transparent withdrawal of funds from your account.", 
    icon: <FaMoneyBillWave />, 
    color: "from-emerald-500 to-green-400", 
    glowColor: "16, 185, 129", 
    component: <Policy9 /> 
  },
  { 
    title: "Updates & Amendments Policy", 
    desc: "Stay informed about how and when we make changes to our policies and terms of service.", 
    icon: <FaSyncAlt />,   // <-- changed icon
    color: "from-emerald-500 to-green-400", 
    glowColor: "16, 185, 129", 
    component: <Policy10 /> 
  }
]
,
    []
  );

  // ---- Split items so last row with 2 items is centered
  const fullRows = Math.floor(policiesData.length / 4) * 4;
  const lastRowItems = policiesData.slice(fullRows);

  return (
    <section className={`relative w-full py-16 sm:py-20 mt-[-5rem] px-4 ${isDark ? "bg-gray-900" : "bg-gray-50"}`} id="top">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl mt-5 font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${isDark ? "from-emerald-400 to-blue-400" : "from-blue-600 to-emerald-600"}`}>
          Our Policies
        </h2>
        <p className={`mt-4 text-base sm:text-lg ${isDark ? "text-gray-300" : "text-gray-700"} max-w-xl mx-auto`}>
          Understand our policies that keep your experience safe, fair, and transparent.
        </p>

        {/* Full rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mt-12 sm:mt-16 place-items-center">
          {policiesData.slice(0, fullRows).map((policy, idx) => (
            <ParticleCard
              key={idx}
              onClick={() => handleCardClick(policy)}
              className="relative w-full max-w-[18rem] aspect-square rounded-3xl p-[2px]"
              particleCount={8}
              glowColor={policy.glowColor}
              enableTilt={!isMobile}
              enableMagnetism={!isMobile}
            >
              <div className={`relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-4 py-6 ${isDark ? "bg-gray-800/80 backdrop-blur-md text-white" : "bg-white/90 backdrop-blur-sm text-gray-800"}`}>
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br ${policy.color}`}>
                  {React.cloneElement(policy.icon, { className: "text-2xl text-white" })}
                </motion.div>
                <h3 className="font-bold text-lg sm:text-xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">{policy.title}</h3>
                <p className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>{policy.desc}</p>
              </div>
            </ParticleCard>
          ))}
        </div>

        {/* Last row with center alignment if less than 4 */}
        {lastRowItems.length > 0 && (
          <div className="flex justify-center gap-8 sm:gap-12 mt-12">
            {lastRowItems.map((policy, idx) => (
              <ParticleCard
                key={idx}
                onClick={() => handleCardClick(policy)}
                className="relative w-full max-w-[18rem] aspect-square rounded-3xl p-[2px]"
                particleCount={8}
                glowColor={policy.glowColor}
                enableTilt={!isMobile}
                enableMagnetism={!isMobile}
              >
                <div className={`relative z-10 rounded-3xl flex flex-col items-center justify-center h-full text-center px-4 py-6 ${isDark ? "bg-gray-800/80 backdrop-blur-md text-white" : "bg-white/90 backdrop-blur-sm text-gray-800"}`}>
                  <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-br ${policy.color}`}>
                    {React.cloneElement(policy.icon, { className: "text-2xl text-white" })}
                  </motion.div>
                  <h3 className="font-bold text-lg sm:text-xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">{policy.title}</h3>
                  <p className={`text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>{policy.desc}</p>
                </div>
              </ParticleCard>
            ))}
          </div>
        )}

        <div id="seehere"></div>
        <div className="mt-12">
          {selectedPolicy ? (
            <div className={`rounded-lg ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
              {selectedPolicy.component}
            </div>
          ) : (
            <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>Click on any policy to view details.</p>
          )}
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        Top
      </motion.button>
    </section>
  );
};

export default PoliciesPage;

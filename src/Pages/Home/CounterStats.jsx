import { useEffect, useRef, useMemo } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { FaDownload, FaStar, FaUsers, FaCommentAlt } from "react-icons/fa";

// Enhanced CountUp component with better animations
function CountUp({ to, from = 0, duration = 2, separator = "", className = "", decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { 
    damping: 20, 
    stiffness: 100, 
    mass: 0.5,
    restDelta: 0.001
  });

  useEffect(() => {
    motionValue.set(to);
  }, [to, motionValue]);

  useEffect(() => {
    let raf;
    const unsubscribe = springValue.on("change", (latest) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const formatted = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
          useGrouping: !!separator,
        })
          .format(latest)
          .replace(/,/g, separator || ",");
        if (ref.current) ref.current.textContent = formatted + (suffix ? suffix : "");
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      unsubscribe();
    };
  }, [springValue, separator, decimals, suffix]);

  return (
    <motion.span 
      ref={ref} 
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}

export default function CounterStats({ theme = "light" }) {
  const isDark = theme === "dark";

  const stats = useMemo(
    () => [
      { 
        value: 10, 
        suffix: "M+", 
        label: "Downloads", 
        icon: FaDownload, 
        gradient: "from-blue-500 to-emerald-400", 
        duration: 2.5,
        description: "Trusted by millions worldwide"
      },
      { 
        value: 4.8, 
        suffix: "", 
        label: "User Rating", 
        icon: FaStar, 
        gradient: "from-yellow-400 to-amber-500", 
        duration: 2,
        description: "Rated by our satisfied users"
      },
      { 
        value: 500, 
        suffix: "K+", 
        label: "Active Users", 
        icon: FaUsers, 
        gradient: "from-green-500 to-green-800", 
        duration: 2.5,
        description: "Growing community daily"
      },
      { 
        value: 10, 
        suffix: "K+", 
        label: "Reviews", 
        icon: FaCommentAlt, 
        gradient: "from-rose-500 to-pink-500", 
        duration: 2.5,
        description: "Positive customer feedback"
      },
    ],
    []
  );

  return (
    <section className={`relative w-full py-16 md:py-24 overflow-hidden transition-800`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full  ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative p-[2px] rounded-3xl group"
          style={{
            background: `linear-gradient(45deg, ${isDark ? "#1a418c" : "#93c5fd"}, ${
              isDark ? "#2a964a" : "#6ee7b7"
            })`,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-3xl transition-800 bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

          {/* Inner Content */}
          <div
            className={`relative z-10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 ${
              isDark ? "bg-gray-800/90 backdrop-blur-md" : "bg-white/95 backdrop-blur-sm"
            }`}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={i} 
                  className="flex flex-col items-center text-center w-full md:w-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div 
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-4 bg-gradient-to-br ${stat.gradient} shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-white text-2xl" />
                  </motion.div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    <CountUp 
                      to={stat.value} 
                      duration={stat.duration} 
                      decimals={stat.value % 1 !== 0 ? 1 : 0} 
                      suffix={stat.suffix}
                    />
                  </div>
                  <h3 className={`text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-800"}`}>
                    {stat.label}
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"} max-w-[180px]`}>
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats explanation */}
        <motion.div 
          className="mt-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Trusted by businesses worldwide
          </h2>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Our numbers speak for themselves. Join thousands of satisfied customers who have transformed their businesses with our solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
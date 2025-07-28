import { useEffect, useRef, useMemo } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { FaDownload, FaStar, FaUsers } from "react-icons/fa";

function CountUp({ to, from = 0, duration = 2, separator = "", className = "", decimals = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100, mass: 1 });

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
        if (ref.current) ref.current.textContent = formatted;
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      unsubscribe();
    };
  }, [springValue, separator, decimals]);

  return <span ref={ref} className={className} />;
}

export default function CounterStats({ theme = "light" }) {
  const isDark = theme === "dark";

  const stats = useMemo(
    () => [
      { value: 12500, label: "Downloads", icon: FaDownload, gradient: "from-blue-500 to-emerald-400", duration: 2.5, separator: "," },
      { value: 4.8, label: "User Rating", icon: FaStar, gradient: "from-yellow-400 to-yellow-600", duration: 2, decimals: 1, suffix: "/5" },
      { value: 3500, label: "Active Users", icon: FaUsers, gradient: "from-purple-500 to-pink-400", duration: 2.5, separator: "," },
      { value: 1000, label: "Customer Reviews", icon: FaUsers, gradient: "from-pink-400 to-red-400", duration: 2.5, separator: "," },
    ],
    []
  );

  return (
    <section className={`relative w-100vw py-12 flex justify-center ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <motion.div
        className="relative max-w-7xl w-full mx-auto px-4 p-[2px] rounded-3xl group"
        style={{
          background: `linear-gradient(45deg, ${isDark ? "#1a418c" : "#93c5fd"}, ${
            isDark ? "#2a964a" : "#6ee7b7"
          })`,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />

        {/* Inner Content */}
        <div
          className={`relative z-10 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left ${
            isDark ? "bg-gray-800/80 backdrop-blur-md text-white" : "bg-white/90 backdrop-blur-sm text-gray-800"
          }`}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="flex flex-col items-center sm:items-start gap-2">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                  <Icon className="text-white text-2xl leading-none " />
                </div>
                <div className={`text-3xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  <CountUp to={stat.value} separator={stat.separator} duration={stat.duration} decimals={stat.decimals} />
                  {stat.suffix && <span className="text-xl">{stat.suffix}</span>}
                </div>
                <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>{stat.label}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

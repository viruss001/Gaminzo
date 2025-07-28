import { useEffect, useRef, useMemo } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

function CountUp({ to, from = 0, duration = 2, separator = "", className = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  const decimals = Math.max((from.toString().split(".")[1] || "").length, (to.toString().split(".")[1] || "").length);

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

  // Pre-generate particle positions (no random in render)
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
      })),
    []
  );

  return (
    <section
      className={`relative w-full min-h-[30vh] flex items-center justify-center ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Optimized Particle background */}
      <div className="absolute inset-0 overflow-hidden mt-10">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-40 animate-ping"
            style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* Counters */}
      <div className="flex flex-row flex-wrap gap-x-12 gap-y-4 items-center justify-center max-w-6xl relative z-10">
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent">
            <CountUp to={12500} separator="," duration={2.5} />
          </span>
          <span className="mt-2 text-lg font-medium">Downloads</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent">
            <CountUp to={4.8} duration={2} />
          </span>
          <span className="mt-2 text-lg font-medium">User Rating</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            <CountUp to={3500} separator="," duration={2.5} />
          </span>
          <span className="mt-2 text-lg font-medium">Active Users</span>
        </div>
      </div>
    </section>
  );
}

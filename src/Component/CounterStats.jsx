import { useEffect, useRef, useMemo } from "react";
import { useMotionValue, useSpring } from "framer-motion";

function CountUp({ to, from = 0, duration = 2, separator = "", className = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  const decimals = Math.max(
    (from.toString().split(".")[1] || "").length,
    (to.toString().split(".")[1] || "").length
  );

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
      className={`relative w-full min-h-[30vh] flex items-center ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden mt-10">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-40 animate-ping"
            style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          />
        ))}
      </div>

      {/* Counters aligned start - center - end */}
      <div className="flex w-full max-w-6xl mx-auto relative z-10 
                      flex-col md:flex-row md:justify-between md:items-center gap-y-8 px-6">
        {/* Start */}
        <div className="flex flex-col items-start">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent">
            <CountUp to={12500} separator="," duration={2.5} />
          </span>
          <span className="mt-2 text-lg font-medium">Downloads</span>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent">
            <CountUp to={4.8} duration={2} />
          </span>
          <span className="mt-2 text-lg font-medium">User Rating</span>
        </div>

        {/* End */}
        <div className="flex flex-col items-end">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            <CountUp to={3500} separator="," duration={2.5} />
          </span>
          <span className="mt-2 text-lg font-medium">Active Users</span>
        </div>
      </div>
    </section>
  );
}

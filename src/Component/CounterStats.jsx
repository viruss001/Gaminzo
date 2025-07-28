import { useEffect, useRef, useMemo } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { FaDownload, FaStar, FaUsers } from "react-icons/fa";

function CountUp({ to, from = 0, duration = 2, separator = "", className = "", decimals = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

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
      {
        value: 12500,
        label: "Downloads",
        icon: <FaDownload className="text-blue-500" />,
        gradient: "from-blue-600 to-emerald-500",
        duration: 2.5,
        separator: ",",
      },
      {
        value: 4.8,
        label: "User Rating",
        icon: <FaStar className="text-amber-400" />,
        gradient: "from-amber-500 to-yellow-400",
        duration: 2,
        decimals: 1,
        suffix: "/5",
      },
      {
        value: 3500,
        label: "Active Users",
        icon: <FaUsers className="text-purple-500" />,
        gradient: "from-purple-500 to-pink-500",
        duration: 2.5,
        separator: ",",
      },
    ],
    []
  );

  return (
    <section
      className={`relative w-full py-12 ${
        isDark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Grid layout: mobile → 2 cols, desktop → flex */}
        <div className="md:flex md:justify-between md:items-center grid grid-cols-2 gap-8">
          {/* First two items normal */}
          {stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <div
                  className={`text-4xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  <CountUp
                    to={stat.value}
                    separator={stat.separator}
                    duration={stat.duration}
                    decimals={stat.decimals}
                  />
                  {stat.suffix && <span className="text-xl">{stat.suffix}</span>}
                </div>
                <div
                  className={`text-sm font-medium mt-1 text-center ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}

          {/* Last item: mobile center, desktop normal */}
          <div className="flex flex-col items-center gap-4 col-span-2 md:col-span-1 md:items-center">
            <div className="text-3xl">{stats[2].icon}</div>
            <div>
              <div
                className={`text-4xl font-extrabold bg-gradient-to-r ${stats[2].gradient} bg-clip-text text-transparent`}
              >
                <CountUp
                  to={stats[2].value}
                  separator={stats[2].separator}
                  duration={stats[2].duration}
                  decimals={stats[2].decimals}
                />
              </div>
              <div
                className={`text-sm font-medium mt-1 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stats[2].label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

<section
  className={`relative w-full py-20 px-4 overflow-hidden ${
    isDark ? "bg-gray-900" : "bg-gray-50"
  }`}
>
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover -z-20"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/6915707_Motion_Graphics_Motion_Graphic_3840x2160.mp4" type="video/mp4" />
  </video>

  {/* Color Overlay to keep tint effect */}
  <div
    className={`absolute inset-0 ${
      isDark ? "bg-gray-900/70" : "bg-gray-50/70"
    } -z-10`}
  />

  {/* Existing Background Blur Particles */}
  <div className="absolute inset-0 overflow-hidden -z-10">
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
{/* hello */}
  {/* Your existing content here (NO CHANGE) */}
  <div className="max-w-7xl mx-auto text-center relative z-10">
    {/* Headings, cards, hover effects remain unchanged */}
  </div>
</section>

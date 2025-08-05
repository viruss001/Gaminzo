import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DARK_ICON = "https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif";
const LIGHT_ICON = "https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif";

export default function ThemeToggleButton({ theme, toggleTheme }) {
  const [animating, setAnimating] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    if (animating) {
      const timeout = setTimeout(() => setAnimating(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [animating]);

  const handleToggle = () => {
    setAnimating(true);
    toggleTheme();
  };

  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-800 shadow-lg">
      <AnimatePresence>
        {animating && (
          <motion.div
            className="absolute rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ width: 48, height: 48 }}
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleToggle}
        className="absolute w-full h-full flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={isDark ? "dark" : "light"}
            src={isDark ? DARK_ICON : LIGHT_ICON}
            alt={`${isDark ? "Dark" : "Light"} mode icon`}
            className="w-10 h-10 object-cover"
            initial={{ scale: 0, rotate: isDark ? -90 : 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: isDark ? 90 : -90 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
import { motion, AnimatePresence } from "framer-motion";

const DARK_ICON = "https://media.giphy.com/media/KBbr4hHl9DSahKvInO/giphy.gif";
const LIGHT_ICON = "https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif";

export default function ThemeToggleButton({ theme, toggleTheme, animating }) {
  const isDark = theme === "dark";

  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-gray-800 shadow-lg">
      {/* Animation overlay */}
      <AnimatePresence>
        {animating && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleTheme}
        className="absolute w-full h-full flex items-center justify-center"
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <AnimatePresence mode="wait">
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
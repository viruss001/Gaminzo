import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMedal, FaTrophy, FaSearch, FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } }
};

const PointTable = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "points", direction: "desc" });
  const [expandedTeam, setExpandedTeam] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPoints: 0,
    maxPoints: 20,
    showMedalists: true
  });

  const teams = [
    { 
      rank: 1, 
      name: "Gaminzo Titans", 
      matches: 10, 
      wins: 8, 
      losses: 2, 
      points: 16,
      streak: "W4",
      last5: ["W", "W", "W", "W", "L"],
      logo: "🏆",
      description: "Dominating the league with consistent performances and strategic gameplay."
    },
    { 
      rank: 2, 
      name: "Pixel Warriors", 
      matches: 10, 
      wins: 7, 
      losses: 3, 
      points: 14,
      streak: "W2",
      last5: ["W", "W", "L", "W", "L"],
      logo: "🛡️",
      description: "Strong defensive team known for their comeback victories."
    },
    { 
      rank: 3, 
      name: "Code Crushers", 
      matches: 10, 
      wins: 6, 
      losses: 4, 
      points: 12,
      streak: "L1",
      last5: ["L", "W", "W", "L", "W"],
      logo: "💻",
      description: "Innovative strategies and tech-savvy approach to the game."
    },
    { 
      rank: 4, 
      name: "Debuggers", 
      matches: 10, 
      wins: 5, 
      losses: 5, 
      points: 10,
      streak: "W1",
      last5: ["W", "L", "L", "W", "L"],
      logo: "🐞",
      description: "Methodical team that excels at analyzing opponents' weaknesses."
    },
    { 
      rank: 5, 
      name: "API Avengers", 
      matches: 10, 
      wins: 3, 
      losses: 7, 
      points: 6,
      streak: "L3",
      last5: ["L", "L", "L", "W", "W"],
      logo: "⚡",
      description: "Aggressive playstyle with high-risk, high-reward strategies."
    },
  ];

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedTeams = [...teams].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredTeams = sortedTeams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPoints = team.points >= filters.minPoints && team.points <= filters.maxPoints;
    const matchesMedalFilter = filters.showMedalists ? team.rank <= 3 : true;
    return matchesSearch && matchesPoints && matchesMedalFilter;
  });

  const toggleTeamExpand = (rank) => {
    setExpandedTeam(expandedTeam === rank ? null : rank);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? <FaChevronUp /> : <FaChevronDown />;
  };

  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center py-20 px-4 overflow-hidden ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className={`absolute top-0 left-0 w-full h-full ${
          isDark ? "bg-grid-dark" : "bg-grid-light"
        }`}
      />
      
      {/* Floating trophies */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-20 text-6xl"
      >
        <GiLaurelsTrophy className="text-yellow-400" />
      </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 left-20 text-6xl"
      >
        <FaTrophy className="text-gray-400" />
      </motion.div>

      <div className="relative max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">
            League Standings
          </h2>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Current season performance and statistics
          </p>
        </motion.div>

        {/* Search and filter bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mb-6 p-4 rounded-xl ${
            isDark ? "bg-gray-800" : "bg-white shadow-md"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-lg ${
                  isDark
                    ? "bg-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-100 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isDark
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              <FaFilter /> Filters
            </button>
          </div>

          {/* Expanded filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className={`p-4 rounded-lg ${
                  isDark ? "bg-gray-700" : "bg-gray-100"
                } grid grid-cols-1 md:grid-cols-3 gap-4`}>
                  <div>
                    <label className="block mb-2 font-medium">Points Range</label>
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={filters.minPoints}
                        onChange={(e) => setFilters({...filters, minPoints: parseInt(e.target.value) || 0})}
                        className={`w-full px-3 py-2 rounded-lg ${
                          isDark ? "bg-gray-600" : "bg-white"
                        }`}
                      />
                      <span>to</span>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        value={filters.maxPoints}
                        onChange={(e) => setFilters({...filters, maxPoints: parseInt(e.target.value) || 20})}
                        className={`w-full px-3 py-2 rounded-lg ${
                          isDark ? "bg-gray-600" : "bg-white"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.showMedalists}
                        onChange={(e) => setFilters({...filters, showMedalists: e.target.checked})}
                        className="w-4 h-4"
                      />
                      <span>Show medalists only</span>
                    </label>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => setFilters({
                        minPoints: 0,
                        maxPoints: 20,
                        showMedalists: true
                      })}
                      className={`px-4 py-2 rounded-lg ${
                        isDark ? "text-purple-400 hover:text-purple-300" : "text-blue-500 hover:text-blue-700"
                      }`}
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <div className={`p-4 rounded-xl text-center ${
            isDark ? "bg-gray-800" : "bg-white shadow-sm"
          }`}>
            <div className="text-2xl font-bold text-blue-500">5</div>
            <div>Teams</div>
          </div>
          <div className={`p-4 rounded-xl text-center ${
            isDark ? "bg-gray-800" : "bg-white shadow-sm"
          }`}>
            <div className="text-2xl font-bold text-emerald-500">50</div>
            <div>Matches Played</div>
          </div>
          <div className={`p-4 rounded-xl text-center ${
            isDark ? "bg-gray-800" : "bg-white shadow-sm"
          }`}>
            <div className="text-2xl font-bold text-yellow-500">29</div>
            <div>Total Wins</div>
          </div>
          <div className={`p-4 rounded-xl text-center ${
            isDark ? "bg-gray-800" : "bg-white shadow-sm"
          }`}>
            <div className="text-2xl font-bold text-purple-500">16</div>
            <div>Top Scorer</div>
          </div>
        </motion.div>

        {/* Main table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className={`overflow-hidden rounded-2xl border backdrop-blur-md ${
            isDark
              ? "bg-gray-800/70 border-gray-700"
              : "bg-white/90 border-gray-200 shadow-xl"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`${isDark ? "bg-gray-700" : "bg-gray-100"}`}>
                  {[
                    { key: "rank", label: "Rank" },
                    { key: "name", label: "Team" },
                    { key: "matches", label: "Matches" },
                    { key: "wins", label: "Wins" },
                    { key: "losses", label: "Losses" },
                    { key: "points", label: "Points" },
                    { key: "streak", label: "Streak" },
                    { key: "last5", label: "Last 5" },
                  ].map((header) => (
                    <th
                      key={header.key}
                      className={`p-4 font-semibold cursor-pointer ${
                        sortConfig.key === header.key
                          ? isDark
                            ? "text-purple-400"
                            : "text-blue-600"
                          : ""
                      }`}
                      onClick={() => handleSort(header.key)}
                    >
                      <div className="flex items-center gap-1">
                        {header.label}
                        {getSortIcon(header.key)}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {filteredTeams.map((team, index) => (
                    <React.Fragment key={team.rank}>
                      <motion.tr
                        variants={rowVariants}
                        whileHover="hover"
                        onClick={() => toggleTeamExpand(team.rank)}
                        className={`transition-colors cursor-pointer ${
                          index % 2 === 0
                            ? isDark
                              ? "bg-gray-800/50"
                              : "bg-gray-50"
                            : ""
                        } ${
                          isDark
                            ? "hover:bg-gray-700"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <td className="p-4 font-bold flex items-center gap-2">
                          {team.rank <= 3 && (
                            <FaMedal
                              className={
                                team.rank === 1
                                  ? "text-yellow-400"
                                  : team.rank === 2
                                  ? "text-gray-400"
                                  : "text-orange-400"
                              }
                            />
                          )}
                          {team.rank}
                        </td>
                        <td className="p-4 font-medium flex items-center gap-3">
                          <span className="text-xl">{team.logo}</span>
                          {team.name}
                        </td>
                        <td className="p-4">{team.matches}</td>
                        <td className="p-4">{team.wins}</td>
                        <td className="p-4">{team.losses}</td>
                        <td className="p-4 font-bold">{team.points}</td>
                        <td className="p-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                            team.streak.startsWith("W")
                              ? isDark
                                ? "bg-green-900 text-green-300"
                                : "bg-green-100 text-green-800"
                              : isDark
                                ? "bg-red-900 text-red-300"
                                : "bg-red-100 text-red-800"
                          }`}>
                            {team.streak}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-1">
                            {team.last5.map((result, i) => (
                              <span
                                key={i}
                                className={`w-5 h-5 flex items-center justify-center rounded text-xs ${
                                  result === "W"
                                    ? isDark
                                      ? "bg-green-900 text-green-300"
                                      : "bg-green-100 text-green-800"
                                    : isDark
                                      ? "bg-red-900 text-red-300"
                                      : "bg-red-100 text-red-800"
                                }`}
                              >
                                {result}
                              </span>
                            ))}
                          </div>
                        </td>
                      </motion.tr>

                      {/* Expanded row */}
                      <AnimatePresence>
                        {expandedTeam === team.rank && (
                          <motion.tr
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${
                              isDark ? "bg-gray-700" : "bg-gray-100"
                            }`}
                          >
                            <td colSpan="8" className="p-4">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                  <h4 className="font-bold mb-2">Team Bio</h4>
                                  <p className={`text-sm ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                  }`}>
                                    {team.description}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="font-bold mb-2">Statistics</h4>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span>Win Rate:</span>
                                      <span className="font-medium">
                                        {(team.wins / team.matches * 100).toFixed(1)}%
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span>Points Per Match:</span>
                                      <span className="font-medium">
                                        {(team.points / team.matches).toFixed(1)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-bold mb-2">Recent Form</h4>
                                  <div className="flex gap-2">
                                    {team.last5.map((result, i) => (
                                      <div
                                        key={i}
                                        className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                          result === "W"
                                            ? isDark
                                              ? "bg-green-800 text-green-300"
                                              : "bg-green-100 text-green-800"
                                            : isDark
                                              ? "bg-red-800 text-red-300"
                                              : "bg-red-100 text-red-800"
                                        }`}
                                      >
                                        {result}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </td>
                          </motion.tr>
                        )}
                      </AnimatePresence>
                    </React.Fragment>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-6 p-4 rounded-xl ${
            isDark ? "bg-gray-800" : "bg-white shadow-sm"
          }`}
        >
          <h4 className="font-bold mb-3">Legend</h4>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <FaMedal className="text-yellow-400" />
              <span>1st Place</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMedal className="text-gray-400" />
              <span>2nd Place</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMedal className="text-orange-400" />
              <span>3rd Place</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded ${
                isDark ? "bg-green-900" : "bg-green-100"
              }`}></span>
              <span>Win</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded ${
                isDark ? "bg-red-900" : "bg-red-100"
              }`}></span>
              <span>Loss</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PointTable;
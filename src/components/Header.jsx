import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import octobiwan from "../assets/octobiwan.png";

const style = {
  container: `fixed top-0 left-0 right-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center text-center bg-gray-400 rounded-b-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border dark:border-[#4B5563]`,
  sun: `w-8 h-8 text-yellow-400 focus-none`,
  moon: `w-8 h-8 text-indigo-400 focus-none`,
};

function Header() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <header className={style.container}>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <img src={octobiwan} className="w-8 h-8" alt="octobiwan" />
      </motion.div>

      <motion.button
        type="button"
        onClick={handleThemeSwitch}
        whileTap={{ scale: 0.8 }}
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        {theme === "dark" ? (
          <FaCloudSun className={style.sun} />
        ) : (
          <FaCloudMoon className={style.moon} />
        )}
      </motion.button>
    </header>
  );
}

export default Header;

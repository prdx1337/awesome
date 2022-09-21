import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { motion } from "framer-motion";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  // for dark theme
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(245, 245, 245)",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  // dark theme

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center animate-pulse text-base">
          Loading ...
        </div>
      ) : (
        <>
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          />
          <div className="App bg-white dark:bg-[#111111] relative">
            <Header />
            <Hero />
            <Technologies />
            <Services textEnter={textEnter} textLeave={textLeave} />
            <Projects />
            <Contact />
          </div>
        </>
      )}
    </>
  );
}

export default App;

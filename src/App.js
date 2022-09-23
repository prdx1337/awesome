import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import "./App.css";

const Header = React.lazy(() =>
  import(/* webpackChunkName: "Header" */ "./components/Header")
);
const Hero = React.lazy(() =>
  import(/* webpackChunkName: "Hero" */ "./components/Hero")
);
const Projects = React.lazy(() =>
  import(/* webpackChunkName: "Projects" */ "./components/Projects")
);
const Technologies = React.lazy(() =>
  import(/* webpackChunkName: "Technologies" */ "./components/Technologies")
);
const Contact = React.lazy(() =>
  import(/* webpackChunkName: "Contact" */ "./components/Contact")
);
const Services = React.lazy(() =>
  import(/* webpackChunkName: "Services" */ "./components/Services")
);

function App() {
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

  return (
    <Suspense
      fallback={
        <div className="h-screen flex justify-center items-center animate-pulse text-base">
          Loading ...
        </div>
      }
    >
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
    </Suspense>
  );
}

export default App;

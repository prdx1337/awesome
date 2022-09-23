import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Spline from "@splinetool/react-spline";
import BackgroundSVG from "./BackgroundSVG";

const style = {
  container: `max-w-screen-lg mx-auto py-12`,
  wrapper: `flex flex-wrap gap-4 h-[600px] relative`,
  flexOne: `md:basis-[45%] basis-full flex justify-center items-center relative`,
  txthero: `px-4 z-10 text-gray-black dark:text-white`,
  motion: `font-black text-6xl md:text-8xl cursor-pointer txtshadow tracking-tight leading-none`,
  paragraph: `text-base mt-4 dark:text-[#64FFDA]`,
  flexTwo: `md:basis-[45%] basis-full hidden md:block mx-auto`,
};

function Hero() {
  const [text] = useTypewriter({
    words: [`Web Developer`, "Guy-who-loves-React.js", "Gamer"],
    loop: true,
    delaySpeed: 2000,
  });


  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.flexOne}>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{ once: true }}
            className={style.txthero}
          >
            <h1 className={style.motion}>Luther Sedanto</h1>
            <p className={style.paragraph}>
              <span>{text}</span>
              <Cursor cursorColor="#4B5563" />
            </p>
          </motion.div>
          <BackgroundSVG />
        </div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className={style.flexTwo}
        >
          <Spline scene="https://prod.spline.design/I02DuoS6NB58TCc0/scene.splinecode" />
        </motion.div>
        <p className="absolute bottom-0 right-0 hidden md:block text-gray-400 text-center">
          Press E, S, C, R on keyboard.
        </p>
      </div>
    </div>
  );
}

export default Hero;

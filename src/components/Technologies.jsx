import React from "react";
import {
  SiTailwindcss,
  SiMysql,
  SiFramer,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiFigma,
  SiWebflow,
  SiNextdotjs,
} from "react-icons/si";
import {
  DiNodejs,
  DiGithub,
  DiPhp,
  DiBootstrap,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const style = {
  spantxt: `bg-[#4B5563] text-xs text-[#64FFDA] hidden group-hover:block text-center rounded-md font-bold px-2 absolute cursor-pointer`,
  logo: `w-7 h-7 md:w-10 md:h-12 text-gray-700 dark:text-white duration-200 ease-linear`,
  container: `max-w-screen-lg mx-auto py-12`,
  h1: `dark:text-white md:text-4xl text-2xl font-bold text-gray-900 text-center`,
  border: `rounded-lg border dark:border-[#4B5563] py-4 mt-4`,
  column: `grid grid-cols-3 md:grid-cols-5 mx-8 my-4 place-items-center gap-4`,
  tech: `logo group relative flex items-center justify-center`,
};

const logos = [
  <>
    <span className={style.spantxt}>JAVASCRIPT</span>
    <SiJavascript className={style.logo} alt="Javascript" />
  </>,
  <>
    <span className={style.spantxt}>TYPESCRIPT</span>
    <SiTypescript className={style.logo} alt="Typescript" />
  </>,
  <>
    <span className={style.spantxt}>TAILWINDCSS</span>
    <SiTailwindcss className={style.logo} alt="Tailwindcss" />
  </>,
  <>
    <span className={style.spantxt}>MONGODB</span>
    <SiMongodb className={style.logo} alt="Mongo DB" />
  </>,
  <>
    <span className={style.spantxt}>EXPRESSJS</span>
    <SiExpress className={style.logo} alt="Expressjs" />{" "}
  </>,
  <>
    <span className={style.spantxt}>REACT</span>
    <DiReact className={style.logo} alt="React" />{" "}
  </>,
  <>
    <span className={style.spantxt}>NODEJS</span>
    <DiNodejs className={style.logo} alt="Nodejs" />
  </>,
  <>
    <span className={style.spantxt}>NEXTJS</span>
    <SiNextdotjs className={style.logo} alt="Nextjs" />
  </>,
  <>
    <span className={style.spantxt}>GITHUB</span>
    <DiGithub className={style.logo} alt="Github" />
  </>,
  <>
    <span className={style.spantxt}>PHP</span>
    <DiPhp className={style.logo} alt="PHP" />
  </>,
  <>
    <span className={style.spantxt}>MYSQL</span>
    <SiMysql className={style.logo} alt="MySQL" />
  </>,
  <>
    <span className={style.spantxt}>BOOTSTRAP</span>
    <DiBootstrap className={style.logo} alt="Bootstrap" />
  </>,
  <>
    <span className={style.spantxt}>FRAMERMOTION</span>
    <SiFramer className={style.logo} alt="FramerMotion" />
  </>,
  <>
    <span className={style.spantxt}>FIGMA</span>
    <SiFigma className={style.logo} alt="Figma" />
  </>,
  <>
    <span className={style.spantxt}>WEBFLOW</span>
    <SiWebflow className={style.logo} alt="Webflow" />
  </>,
];

function Technologies() {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>
        {"< "}Technologies{" />"}
      </h1>
      <div className={style.border}>
        <div className={style.column}>
          {logos.map((logo, key) => {
            return (
              <motion.div
                className={style.tech}
                key={key}
                initial={{ opacity: 0, x: key % 2 === 0 ? -50 : 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: key * 0.5,
                }}
              >
                {logo}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;

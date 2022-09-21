import React from "react";
import { motion } from "framer-motion";

const style = {
  container: `max-w-screen-md mx-auto py-12`,
  h1: `dark:text-white md:text-4xl text-2xl font-bold text-gray-900 text-center`,
  h2: `dark:text-white text-base md:text-xl font-bold text-gray-900`,
  paragraph: `dark:text-white/80 text-sm md:text-base text-gray-700`,
  flex: `flex flex-wrap gap-8 text-gray-700 dark:text-white`,
  group: `flex flex-1 md:basis-2/4 basis-full bg-group bg-contain bg-no-repeat bg-center md:h-[300px] h-[200px]`,
  designer: `flex flex-1 md:basis-2/4 basis-full bg-designing bg-contain bg-no-repeat bg-center md:h-[300px] h-[200px]`,
  team: `flex flex-1 md:basis-2/4 basis-full bg-team bg-contain bg-no-repeat bg-center md:h-[300px] h-[200px]`,
  flexFirst: `flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-bl-3xl`,
  flexSecond: `flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-r-3xl`,
  flexThird: `flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-tl-3xl`,
  reverse: `flex flex-wrap-reverse gap-8`,
  hover: `hover:cursor-none md:text-left text-center`,
};

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function Services({ textEnter, textLeave }) {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>
        {"< "}Services{" />"}
      </h1>
      <div className={style.flex}>
        <div className={style.group}></div>
        <div className={style.flexFirst}>
          <div
            className={style.hover}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <FadeInWhenVisible>
              <h2 className={style.h2}>Front-End Development</h2>
              <p className={style.paragraph}>
                Convert your mockups and ui prototypes into a functional and
                working website that creates an interaction and user experience.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>

        <div className={style.reverse}>
          <div className={style.flexSecond}>
            <div
              className={style.hover}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <FadeInWhenVisible>
                <h2 className={style.h2}>Responsive Website</h2>
                <p className={style.paragraph}>
                  Develop a responsive website layout that automatically adjusts
                  and adapts to any device screen size for a better user
                  experience.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
          <div className={style.designer}></div>
        </div>

        <div className={style.team}></div>
        <div className={style.flexThird}>
          <div
            className={style.hover}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <FadeInWhenVisible>
              <h2 className={style.h2}>Team Collaboration</h2>
              <p className={style.paragraph}>
                Can perform as part of a team's activities and has the necessary
                skills to help others to complete a task in the most effective
                and efficient way.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

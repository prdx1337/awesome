import React from "react";
import splashy from "../assets/splashy.png";
import imxt from "../assets/imxt.png";
import tea from "../assets/tea.png";
import netlok from "../assets/netlok.png";
import brms from "../assets/brms.png";
import todos from "../assets/todos.png";
import { motion } from "framer-motion";
import { DiGithub } from "react-icons/di";
import { BiRightArrow } from "react-icons/bi";

const style = {
  container: `max-w-screen-lg mx-auto py-12`,
  h1: `dark:text-white md:text-4xl text-2xl font-bold text-gray-900 text-center`,
  h2: `text-center md:text-xl text-md py-4 font-bold`,
  grid: `grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 place-items-center p-4 mx-auto`,
  card: `rounded-lg border dark:border-[#4B5563] md:w-full w-5/6 mx-auto`,
  badge: `bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold px-2.5 py-0.5 rounded`,
  overflow: `flex flex-row text-white gap-2 items-center overflow-x-auto w-[230px] py-4 scrollbar cursor-grabbing mx-auto`,
  image: `object-fit w-full h-3/5 object-center rounded-t-lg`,
  content: `dark:text-white text-gray-700 w-4/5 mx-auto`,
  paragraph: `text-justify md:text-base text-sm whitespace-normal md:h-32 h-25 overflow-auto scrollbar md:px-6 px-4 dark:text-white/80`,
  span: `dark:text-[#64FFDA] text-red-500`,
  liveandgithub: `flex justify-between py-4`,
  button: `cursor-pointer inline-flex items-center py-2 px-4 md:text-sm text-xs font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out`,
  github: `md:w-10 md:h-10 w-7 h-7 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out`,
};

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial={{
        y: 200,
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
}

const ArrayOfCards = [
  {
    img: tea,
    badge: [
      "PHP",
      "MYSQL",
      "BOOTSTRAP",
      "DATATABLES",
      "CHARTJS",
      "SWEETALERT2",
    ],
    h2: "TEA101",
    paragraph: (
      <>
        <span className={style.span}>
          Development of Supply Chain with Stock Monitoring for TEA101
        </span>
        . This is my capstone project. It includes the following information
        about the passing of the stock information to the admin and then passing
        raw materials like cups, straw and other main ingredients use for
        milktea to other branch if the branch is on critical level.
      </>
    ),
    live: "http://tea101.rf.gd/",
    github: "",
  },
  {
    img: brms,
    badge: ["PHP", "MYSQL", "BOOTSTRAP"],
    h2: "BRMS",
    paragraph: (
      <>
        <span className={style.span}>Book Record Management System</span>.
        Thesis group project for QCU library. I learned the basic crud using PHP
        procedural language and querying from MySQL xampp database.
      </>
    ),
    live: "http://qculibrary.rf.gd/",
    github: "https://github.com/muhay007/brms",
  },
  {
    img: splashy,
    badge: ["REACT", "TAILWINDCSS", "AXIOS", "UNSPLASH_API", "FS_LIGHTBOX"],
    h2: "SPLASHY",
    paragraph:
      "This project uses the Unsplash API to create an image search web app. Helped me understand how http requests, data retrieval, and showing them in the browser.",
    live: "https://splashy-alpha.vercel.app/",
    github: "https://github.com/muhay007/splashy",
  },
  {
    img: imxt,
    badge: ["REACT", "TAILWINDCSS", "AXIOS", "TESSERACT_API"],
    h2: "IMXT",
    paragraph:
      "Simple OCR online application that can image-to-text conversion. You can use this whenever you want to copy text code.",
    live: "https://imxt.vercel.app/",
    github: "https://github.com/muhay007/imxt",
  },
  {
    img: netlok,
    badge: ["REACT", "TAILWINDCSS", "AXIOS", "TMDB_API"],
    h2: "NETLOK",
    paragraph:
      "Movie web app that can view upcoming movies, popular etc., viewdetails, watch trailer. I tried combining 2 most popular which is netflix and loklok theme. I used new version of react-router-dom-v6.",
    live: "https://netlok.vercel.app/",
    github: "https://github.com/muhay007/netlok",
  },
  {
    img: todos,
    badge: ["REACT", "TAILWINDCSS", "FIREBASE"],
    h2: "TODOS",
    paragraph:
      "Simple todo app crud web application using reactjs, tailwind and firebase database. I'm currently exploring and will use firebase for my future projects.",
    live: "https://todos-orcin.vercel.app/",
    github: "https://github.com/muhay007/todos",
  },
];

function Projects() {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>
        {"< "}Projects{" />"}
      </h1>

      <div className={style.grid}>
        {ArrayOfCards.map((cards, i) => {
          const { img, badge, h2, paragraph, live, github } = cards;
          return (
            <FadeInWhenVisible key={i}>
              <div className={style.card}>
                <img src={img} alt="" className={style.image} />
                <div className={style.content}>
                  <div className={style.overflow}>
                    {badge.map((badges, x) => (
                      <span key={x} className={style.badge}>
                        {badges}
                      </span>
                    ))}
                  </div>
                  <h2 className={style.h2}>{h2}</h2>
                  <p className={style.paragraph}>{paragraph}</p>
                  <br />
                  <div className={style.liveandgithub}>
                    <div
                      onClick={() => window.open(live, "_blank")}
                      className={style.button}
                    >
                      LIVE
                      <BiRightArrow className="ml-2" />
                    </div>

                    <DiGithub
                      className={style.github}
                      onClick={() => window.open(github, "_blank")}
                    />
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

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
  card: `rounded-lg border dark:border-[#4B5563] md:w-full w-5/6`,
  badge: `bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`,
  overflow: `flex text-white gap-2 items-center overflow-auto w-full py-4 scrollbar cursor-grabbing`,
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

function Projects() {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>
        {"< "}Projects{" />"}
      </h1>
      <FadeInWhenVisible>
        <div className={style.grid}>
          {/* splashy */}
          <div className={style.card}>
            <img src={splashy} alt="" className={style.image} />
            <div className={style.content}>
              <div className={style.overflow}>
                <span className={style.badge}>REACT</span>
                <span className={style.badge}>TAILWINDCSS</span>
                <span className={style.badge}>AXIOS</span>
                <span className={style.badge}>UNSPLASH_API</span>
                <span className={style.badge}>FS_LIGHTBOX</span>
              </div>
              <h2 className={style.h2}>splashy</h2>
              <p className={style.paragraph}>
                This project uses the Unsplash API to create an image search web
                app. Helped me understand how http requests, data retrieval, and
                showing them in the browser.
              </p>
              <br />
              <div className={style.liveandgithub}>
                <div
                  onClick={() =>
                    window.open("https://splashy-alpha.vercel.app/", "_blank")
                  }
                  className={style.button}
                >
                  LIVE
                  <BiRightArrow className="ml-2" />
                </div>

                <DiGithub
                  className={style.github}
                  onClick={() =>
                    window.open("https://github.com/muhay007/splashy", "_blank")
                  }
                />
              </div>
            </div>
          </div>
          {/* splashy-end */}
          {/* imxt */}
          <div className={style.card}>
            <img src={imxt} alt="" className={style.image} />
            <div className={style.content}>
              <div className={style.overflow}>
                <span className={style.badge}>REACT</span>
                <span className={style.badge}>TAILWINDCSS</span>
                <span className={style.badge}>AXIOS</span>
                <span className={style.badge}>TESSERACT_API</span>
              </div>
              <h2 className={style.h2}>imxt</h2>
              <p className={style.paragraph}>
                Simple OCR online application that can image-to-text conversion.
                You can use this whenever you want to copy text code.
              </p>
              <br />
              <div className={style.liveandgithub}>
                <div
                  onClick={() =>
                    window.open("https://imxt.vercel.app/", "_blank")
                  }
                  className={style.button}
                >
                  LIVE
                  <BiRightArrow className="ml-2" />
                </div>

                <DiGithub
                  className={style.github}
                  onClick={() =>
                    window.open("https://github.com/muhay007/imxt", "_blank")
                  }
                />
              </div>
            </div>
          </div>
          {/* imxt-end */}
          {/* tea101 */}
          <div className={style.card}>
            <img src={tea} alt="" className={style.image} />
            <div className={style.content}>
              <div className={style.overflow}>
                <span className={style.badge}>PHP</span>
                <span className={style.badge}>MYSQL</span>
                <span className={style.badge}>BOOTSTRAP</span>
                <span className={style.badge}>DATATABLES</span>
                <span className={style.badge}>SWEETALERT2</span>
                <span className={style.badge}>CHARTJS</span>
              </div>
              <h2 className={style.h2}>tea101</h2>
              <p className={style.paragraph}>
                <span className={style.span}>
                  Development of Supply Chain with Stock Monitoring for TEA101
                </span>
                . This is my capstone project.
              </p>
              <br />
              <div className={style.liveandgithub}>
                <div
                  onClick={() => window.open("http://tea101.rf.gd/", "_blank")}
                  className={style.button}
                >
                  LIVE
                  <BiRightArrow className="ml-2" />
                </div>

                <DiGithub
                  className={style.github}
                  github
                  onClick={() => window.open("", "_blank")}
                />
              </div>
            </div>
          </div>
          {/* tea101-end */}
          {/* brms */}
          <div className={style.card}>
            <img src={brms} alt="" className={style.image} />
            <div className={style.content}>
              <div className={style.overflow}>
                <span className={style.badge}>PHP</span>
                <span className={style.badge}>MYSQL</span>
                <span className={style.badge}>BOOTSTRAP</span>
                <span className={style.badge}>DATATABLES</span>
              </div>
              <h2 className={style.h2}>brms</h2>
              <p className={style.paragraph}>
                <span className={style.span}>
                  Book Record Management System
                </span>
                . Thesis group project for QCU library. I learned the basic crud
                using PHP procedural language and querying from MySQL xampp
                database.
              </p>
              <br />
              <div className={style.liveandgithub}>
                <div
                  onClick={() =>
                    window.open("http://qculibrary.rf.gd/", "_blank")
                  }
                  className={style.button}
                >
                  LIVE
                  <BiRightArrow className="ml-2" />
                </div>

                <DiGithub
                  className={style.github}
                  onClick={() =>
                    window.open("https://github.com/muhay007/brms", "_blank")
                  }
                />
              </div>
            </div>
          </div>
          {/* brms-end */}
          {/* netlok */}
          <div className={style.card}>
            <img src={netlok} alt="" className={style.image} />
            <div className={style.content}>
              <div className={style.overflow}>
                <span className={style.badge}>REACT</span>
                <span className={style.badge}>TAILWINDCSS</span>
                <span className={style.badge}>AXIOS</span>
                <span className={style.badge}>TMDB_API</span>
                <span className={style.badge}>REACT_PLAYER</span>
              </div>
              <h2 className={style.h2}>netlok</h2>
              <p className={style.paragraph}>
                Movie web app that can view upcoming movies, popular etc., view
                details, watch trailer. I tried combining 2 most popular which
                is netflix and loklok theme. I used new version of
                react-router-dom-v6.
              </p>
              <br />
              <div className={style.liveandgithub}>
                <div
                  onClick={() =>
                    window.open("https://netlok.vercel.app/", "_blank")
                  }
                  className={style.button}
                >
                  LIVE
                  <BiRightArrow className="ml-2" />
                </div>

                <DiGithub
                  className={style.github}
                  onClick={() =>
                    window.open("https://github.com/muhay007/netlok", "_blank")
                  }
                />
              </div>
            </div>
          </div>
          {/* netlok-end */}
          {/* todos */}
          <div className={style.card}>
            <img src={todos} alt="" className={style.image} />
            <div className={style.content}>
              <div className={style.overflow}>
                <span className={style.badge}>REACT</span>
                <span className={style.badge}>TAILWINDCSS</span>
                <span className={style.badge}>FIREBASE</span>
              </div>
              <h2 className={style.h2}>todos</h2>
              <p className={style.paragraph}>
                Simple todo app crud web application using reactjs, tailwind and
                firebase database. I'm currently exploring and will use firebase
                for my future projects.
              </p>
              <br />
              <div className={style.liveandgithub}>
                <div
                  onClick={() =>
                    window.open("https://todos-orcin.vercel.app/", "_blank")
                  }
                  className={style.button}
                >
                  LIVE
                  <BiRightArrow className="ml-2" />
                </div>

                <DiGithub
                  className={style.github}
                  onClick={() =>
                    window.open("https://github.com/muhay007/todos", "_blank")
                  }
                />
              </div>
            </div>
          </div>
          {/* todos-end */}
        </div>
      </FadeInWhenVisible>
    </div>
  );
}

export default Projects;

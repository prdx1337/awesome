import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Form from "./Form";

const style = {
  container: `max-w-screen-lg mx-auto pt-12`,
  h1: `dark:text-white md:text-4xl text-2xl font-bold text-gray-900 text-center`,
  wrap: `flex flex-wrap gap-4 px-4 py-6 text-gray-900 dark:text-white`,
  flex: `md:basis-[40%] basis-full flex flex-1 rounded-lg border dark:border-[#4B5563] items-center justify-center flex-col p-4`,
  button: `text-white mt-4 cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-center bg-[#0A1929] hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out`,
  footer: `flex justify-center items-center gap-4 pb-4 text-slate-900 dark:text-white`,
  icon: `w-6 h-6 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out`,
};

function Contact() {
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.flex}>
          <h1 className={style.h1}>
            My <span className="text-sky-400">inbox</span> is always{" "}
            <span className="text-red-400">Open</span>.{" "}
          </h1>
          <p className="md:text-base text-sm">Feel free to message me.</p>
          <div
            onClick={() => window.open("https://drive.google.com/file/d/1Y3mTmlLWv0utdP7lqHOZZjGy2PIKmRP-/view?usp=sharing", "_blank")}
            className={style.button}
          >
            Resume
          </div>
        </div>
        <div className={style.flex}>
          <Form />
        </div>
      </div>
      <div className={style.footer}>
        <FaFacebook
          className={style.icon}
          onClick={() =>
            window.open("https://facebook.com/lthrsdnto", "_blank")
          }
        />
        <FaGithub
          className={style.icon}
          onClick={() => window.open("https://github.com/muhay007", "_blank")}
        />{" "}
        | <p className="md:text-sm text-xs">Made by 👽 Luther Sedanto</p>
      </div>
    </div>
  );
}

export default Contact;

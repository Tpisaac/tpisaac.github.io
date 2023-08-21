import React from "react";
import { motion as m } from "framer-motion";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import tp001 from "/tp222.png";

function Hero() {
  return (
    <div>
      <section className="min-h-screen py-6 grid items-center dark:bg-gray-900">
        <div>
          <div className="text-center">
            <div className="overflow-hidden">
              <m.h1
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.6,
                  delay: 1,
                  duration: 5,
                }}
                className="pacifico text-red-500 text-5xl lg:text-7xl pb-7"
              >
                Temitope Isaac
              </m.h1>
            </div>
            <div className="overflow-hidden">
              <m.h3
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.6,
                  delay: 1.5,
                  duration: 5,
                }}
                className="text-teal-400 text-2xl py-3 lg:text-3xl roboto"
              >
                Frontend Developer/Designer
              </m.h3>
            </div>
            <p className="px-12 lg:px-40 roboto lg:text-2xl text-gray-800 dark:text-gray-100">
              I'm a passionate and creative frontend developer with a love for
              crafting visually stunning and user-friendly web experiences. This
              is my corner of the internet where I showcase my skills, projects,
              and journey as a{" "}
              <span className="dark:text-yellow-300 text-2xl">Developer</span>.
            </p>
          </div>
          <div className="text-3xl py-3 gap-8 text-gray-600 flex justify-center">
            <a href="https://twitter.com/devtpisaac?s=21" target="_blank">
              <AiFillTwitterCircle className="cursor-pointer dark:hover:text-gray-200" />
            </a>
            <a
              href="http://linkedin.com/in/temitope-ajilore-3a2520270"
              target="_blank"
            >
              <AiFillLinkedin className="cursor-pointer dark:hover:text-gray-200" />
            </a>
            <a href="https://github.com/Tpisaac" target="_blank">
              <AiFillGithub className="cursor-pointer dark:hover:text-gray-200" />
            </a>
          </div>
          <div>
            <div className="relative  bg-gradient-to-b from-red-500 rounded-full w-80 h-80 mx-auto mt-5 overflow-hidden">
              <m.img
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.6,
                  delay: 2,
                  duration: 4,
                }}
                src={tp001}
                className="w-[300px] h-[400px] "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

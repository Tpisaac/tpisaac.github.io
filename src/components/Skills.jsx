import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="-">
      <div className="lg:h-screen pt-10">
        <div className="py-8 lg:ml-20">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 dark:text-gray-50">
            Skills
          </p>
          <p className="py-4 text-2xl roboto dark:text-gray-50">
            //These are the technologies I've worked with
          </p>
        </div>

        <div className="lg:flex gap-10 md:flex lg:justify-center">
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="text-center shadow-lg p-8 rounded-xl my-10 dark:bg-gray-900"
          >
            <div className="flex justify-center"></div>
            <h3 className="text-lg font-medium raleway text-red-500 pt-4 pb-2  dark:hover:text-teal-200">
              Programming Languages
            </h3>
            <p className="py-2 text-teal-500">Creating responsive website</p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              HTML
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              CSS
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              Sass
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              Javascript
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="text-center shadow-lg p-8 rounded-xl my-10"
          >
            <div className="flex justify-center"></div>
            <h3 className="text-lg font-medium pt-4 pb-2 raleway text-red-500 dark:hover:text-teal-200">
              Responsive Designs
            </h3>
            <p className="py-2 text-teal-500">Frameworks/Libraries</p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              jQuery
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              Bootstrap
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              React
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              Tailwind
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            className="text-center shadow-lg p-8 rounded-xl my-10 "
          >
            <div className="flex justify-center"></div>
            <h3 className="text-lg font-medium pt-4 pb-2 raleway text-red-500 dark:hover:text-teal-200">
              Tools & Platforms
            </h3>
            <p className="py-2 text-teal-500">
              Source Control/Animation/Integration
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              Git/Github
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              APIs
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              VScode
            </p>
            <p className="text-gray-800 py-1 roboto dark:text-gray-50 dark:hover:text-gray-100">
              Framer-motion
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

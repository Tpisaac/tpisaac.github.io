import React from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
// import resumeTA from "../../public/resumeTA.pdf";

function Navbar() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 2 }}
    >
      <main className="bg-neutral-100  md:px-10 lg:px-20 dark:bg-gray-900">
        <section>
          <nav className="py-6 mb-2 flex justify-between">
            <ul className="flex gap-4">
              <Link to="/">
                <li className="dancing text-gray-800 justify-start dark:text-yellow-100 text-2xl">
                  Temitope
                </li>
              </Link>
            </ul>
            <ul className="flex items-center">
              <li>
                <m.a
                  whileHover={{
                    scale: 1.3,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "8px 8px 8px rgb(255,255,255)",
                  }}
                  className="bg-black dark:bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-4 py-2 rounded-md ml-6"
                  href="resumeTA.pdf"
                  target="_blank"
                >
                  Resume
                </m.a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </m.div>
  );
}

export default Navbar;

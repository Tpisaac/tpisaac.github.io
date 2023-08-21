import React from "react";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: "0",
        transition: {
          type: "spring",
          duration: 3,
          ease: "easeInOut",
          bounce: 0.2,
        },
      });
    }
    if (!inView) {
      animation.start({ y: "100vw" });
    }
  });

  return (
    <div
      ref={ref}
      className="w-full h-screen py-12 flex justify-center items-center md:justify-start lg:ml-20 p-4 overflow-hidden"
    >
      <form
        action="https://getform.io/f/851bb7f5-cb35-4d83-a4cd-6dcbffb08fbb"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-red-500 dark:text-gray-100 text-gray-900">
            Contact
          </p>
          <p className="dark:text-gray-50 text-xl roboto text-gray-900 py-4">
            //Submit the form below or shoot me an email -{" "}
            <span className="text-2xl dark:text-yellow-300 roboto">
              {" "}
              hello@tpisaac.com
            </span>
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={8}
          placeholder="Message"
        ></textarea>
        <button className="dark:text-white bg-black dark:bg-gray-900 text-gray-50 border-2 dark:hover:bg-teal-500 dark:hover:border-red-600 px-4 py-3 my-8 mx-auto flex items-center">
          <m.p animate={animation}>Let's Collaborate</m.p>
        </button>
      </form>
    </div>
  );
}

export default Contact;

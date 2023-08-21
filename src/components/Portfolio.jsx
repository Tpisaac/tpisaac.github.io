import React from "react";
import ExpandableCard from "./ExpandableCard";
import Cycle from "./Cycle";
import TransitionalPage from "./TransitionalPage";
import RegistrationForm from "./RegistrationForm";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

function Portfolio() {
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
      animation.start({ y: "-100vw" });
    }
  });

  return (
    <section ref={ref} className="">
      <div className="  mb-20 w-[100%] ">
        <div>
          <div className="mt-20 lg:ml-20">
            <p className="text-4xl font-bold inline border-b-4 border-red-500 dark:text-gray-50">
              Portfolio
            </p>
            <p className="py-4 text-2xl roboto dark:text-gray-50">
              //Some of my latest projects
            </p>
          </div>
        </div>
        <div className="overflow-hidden ">
          <m.div
            animate={animation}
            className="items-center lg:ml-20  justify-center  grid grid-cols-1 gap-4 py-10 sm:grid-cols-2S md:grid-cols-2 lg:grid-cols-2"
          >
            <div>
              <ExpandableCard />
            </div>
            <div>
              <Cycle />
            </div>
            <div>
              <TransitionalPage />
            </div>
            <div>
              <RegistrationForm />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

import React from "react";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

function About() {
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
    <section ref={ref}>
      <div className="py-12 h-screen md:h-auto ">
        <p className="text-4xl font-bold inline roboto lg:ml-20 leading-10 mb-16 border-b-4 border-red-500 dark:text-gray-50">
          About
        </p>
        <div className="overflow-hidden py-8">
          <m.p
            animate={animation}
            className="text-md py-2 md:mx-22 lg:ml-20 lg:mx-16 leading-6 roboto lg:text-2xl text-gray-800 dark:text-gray-100"
          >
            I’m a highly motivated individual, driven by passion for technology,
            I engaged in self-directed learning to acquire programming skills. I
            have a keen interest in technology and the power it holds in
            transforming industries. This fascination led to a significant
            career shift as I decided to venture into the field of computer
            programming. While working in the agricultural sector, I became
            increasingly aware of the role technology played in enhancing
            productivity and efficiency. Recognizing the potential for growth
            and innovation in the field of computer programming, I decided to
            embark on a new professional path. I pursued online courses, joined
            coding communities, and dedicated countless hours to learning
            languages/frameworks such as{" "}
            <span className="text-teal-500 text-1xl">
              HTML, CSS, Javascript, Bootstrap, jQueary, React, Sass, Tailwind.
            </span>{" "}
            With continous learning, I hope to fufill my full potential and be
            of good service to humanity.
            <br className="mt-3" />
            When I'm not coding, I'm probably at the gym putting in the work or
            with my wife and kids at the beach having a good time.
          </m.p>
        </div>
      </div>
    </section>
  );
}

export default About;

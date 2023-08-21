import React from "react";

function Footer() {
  return (
    <footer className="pt-9 w-full h-[120px] dark:bg-gray-900 mt-10 ">
      <div>
        <p className="dark:text-white raleway text-center text-gray-900 md:mx-22 lg:ml-20 lg:mx-16 text-xs ">
          Coded in{" "}
          <span className="hover:text-teal-400">
            <a
              className="text-sm"
              href="https://code.visualstudio.com/"
              target="_blank"
            >
              Visual Studio Code
            </a>
          </span>{" "}
          by myself.
          <br /> Built with{" "}
          <span className="hover:text-teal-400">
            <a className="text-sm" href="https://react.dev/" target="_blank">
              React.js
            </a>
          </span>{" "}
          and{" "}
          <span className="hover:text-teal-400">
            <a
              className="text-sm"
              href="https://tailwindcss.com/"
              target="_blank"
            >
              Tailwind CSS
            </a>
          </span>
          ,
          <br /> animated with{" "}
          <span className="hover:text-teal-400">
            <a
              className="text-sm"
              href="https://www.framer.com/"
              target="_blank"
            >
              Framer-motion
            </a>
          </span>
          .{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

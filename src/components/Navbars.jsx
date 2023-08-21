import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import tp2 from "../assets/tp2.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[180px] flex justify-between
     items-center px-4 bg-[#0a192f] "
    >
      <div>
        <img src={tp2} alt="logo image" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex text-white">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hambuger */}
      <div onClick={handleClick} className="md:hidden z-10 text-white">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w[160px] h-[60px] flex justify-between items-center ml-[-74px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w[160px] h-[60px] flex justify-between items-center ml-[-74px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w[160px] h-[60px] flex justify-between items-center ml-[-74px] hover:ml-[-10px] duration-300 bg-#6fc2b0">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w[160px] h-[60px] flex justify-between items-center ml-[-74px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

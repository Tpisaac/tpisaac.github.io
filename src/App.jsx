import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

import { BsFillMoonStarsFill, BsFillBrightnessHighFill } from "react-icons/bs";
import { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-neutral-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <BrowserRouter>
          <Navbar />
          <div
            className="cursor-pointer text-2xl dark:text-yellow-100"
            onClick={() => setDarkMode(!darkMode)}
          >
            {!darkMode ? <BsFillBrightnessHighFill /> : <BsFillMoonStarsFill />}
          </div>

          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;

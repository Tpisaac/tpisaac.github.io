import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;

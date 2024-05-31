import { motion } from "framer-motion";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from "./components/Home/Index";
import Logo from "./components/Home/Logo";
import Navbar from "./components/Home/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";
import Teams from "./components/Teams";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={{options}} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Logo />
        <Navbar />
        <Home  data-scroll-section/>
        <motion.div 
          className="secondary_pages"
          initial={{ display: "none" }}
          animate={{ display: "flex" }}
          transition={{ delay: 6, duration: 0.5 }}
        >
          <Project data-scroll-section/>
          <Services data-scroll-section/>
          <Teams data-scroll-section/>
        </motion.div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;

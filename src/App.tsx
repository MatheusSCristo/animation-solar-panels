import { motion } from "framer-motion";
import About from "./components/About";
import Home from "./components/Home/Index";
import Navbar from "./components/Home/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";

function App() {
  return (
    <main>
      <Navbar/>
      <Home />
      <motion.div className="secondary_pages"
        initial={{ display: "none" }}
        animate={{ display: "flex" }}
        transition={{ delay: 6, duration: 0.5 }}
      >
        <About />
        <Project />
        <Services />
      </motion.div>
    </main>
  );
}

export default App;

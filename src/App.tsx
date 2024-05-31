import { motion } from "framer-motion";
import Home from "./components/Home/Index";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Services from "./components/Services";
import Teams from "./components/Teams";

function App() {

  return (
      <main >
        <Logo />
        <Navbar />
        <Home  />
        <motion.div 
          className="secondary_pages"
          initial={{ display: "none" }}
          animate={{ display: "flex" }}
          transition={{ delay: 6, duration: 0.5 }}
        >
          <Project />
          <Services />
          <Teams />
        </motion.div>
      </main>
  );
}

export default App;

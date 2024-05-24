import { motion } from "framer-motion";
import Image from "./components/Image";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="home">
      <motion.div
        className="container"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        >
        <Navbar/>
        <Logo />
        <Image/>
      </motion.div>
    </div>
  );
}

export default App;

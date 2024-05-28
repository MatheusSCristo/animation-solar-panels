import { motion } from "framer-motion";
import Image from "./Image";
import Logo from "./Logo";
import Navbar from "./Navbar";
import styles from "./style.module.scss";

const Home = () => {

  return (
    <div className={styles.home} id="home">
      <motion.div
        className={styles.container}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Navbar />
        <Logo />
        <Image />
      </motion.div>
    </div>
  );
};

export default Home;

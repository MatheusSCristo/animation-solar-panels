import { motion } from "framer-motion";
import Image from "./Image";
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
        <Image />
      </motion.div>
    </div>
  );
};

export default Home;

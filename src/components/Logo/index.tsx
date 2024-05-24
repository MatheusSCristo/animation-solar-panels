import { motion } from "framer-motion";
import styles from "./style.module.scss";

const Logo = () => {
  return (
    <motion.div
      className={styles.logo}
      animate={{
        display: ["flex", "flex", "flex", "flex", "flex", "flex", "none"],
      }}
      transition={{
        duration: 2,
        delay: 0.7,
        times: [0, 0.2, 0.4, 0.5, 0.7, 0.9, 1],
        ease: "easeOut",
      }}
    >
      <motion.h1
        initial={{ rotateX: "-90deg", y: 50 }}
        animate={{
          rotateX: ["-90deg", 0, 0, 0, "-90deg", "-90deg"],
          y: 0,
        }}
        transition={{
          duration: 2,
          delay: 0.7,
          times: [0, 0.2, 0.4, 0.5, 0.7, 0.9, 1],
          ease: "easeOut",
        }}
      >
        Solars
      </motion.h1>
    </motion.div>
  );
};

export default Logo;

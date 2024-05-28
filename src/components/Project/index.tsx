import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
import styles from "./style.module.scss";

const Project = () => {
  return (
    <div className={styles.container} id="project">
      <div className={styles.text_container}>
        <div className={styles.title_container}>
          <motion.h1
            initial={{ y: "200%", rotateX: "-90deg" }}
            whileInView={{ y: "0", rotateX: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Our Proven Amazing
          </motion.h1>
          <motion.h1
            initial={{ y: "200%", rotateX: "-90deg" }}
            whileInView={{ y: "0", rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            Professional Expertise
          </motion.h1>
        </div>
        <div className={styles.paragraph_container}>
          <motion.p
            initial={{ y: "200%", rotateX: "-90deg" }}
            whileInView={{ y: "0", rotateX: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            We aren't just build, with server and love,
          </motion.p>
          <motion.p
            initial={{ y: "200%", rotateX: "-90deg" }}
            whileInView={{ y: "0", rotateX: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            we also provide the best service for you
          </motion.p>
        </div>
      </div>
        <ImageSlider/>
    </div>
  );
};

export default Project;

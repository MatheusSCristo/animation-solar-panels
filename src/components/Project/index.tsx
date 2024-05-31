import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import ImageSlider from "./ImageSlider";

const Project = () => {
  const ref = useRef(null);
  const inView = useInView(ref,{margin: "-300px"});
  const controller = useAnimationControls();
  useEffect(() => {
    if (inView) {
      controller.start("animate");
    }
  }, [inView]);

  return (
    <div className={styles.container} id="project" ref={ref}>
      <div className={styles.text_container}>
        <div className={styles.title_container}>
          <motion.h1
            animate={controller}
            variants={{ animate: { y: "0", rotateX: 0 } }}
            initial={{ y: "200%", rotateX: "-90deg" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Our Proven Amazing
          </motion.h1>
          <motion.h1
            animate={controller}
            variants={{ animate: { y: "0", rotateX: 0 } }}
            initial={{ y: "200%", rotateX: "-90deg" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            Professional Expertise
          </motion.h1>
        </div>
        <div className={styles.paragraph_container}>
          <motion.p
            animate={controller}
            variants={{ animate: { y: "0", rotateX: 0 } }}
            initial={{ y: "200%", rotateX: "-90deg" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            We aren't just build, with server and love,
          </motion.p>
          <motion.p
            animate={controller}
            variants={{ animate: { y: "0", rotateX: 0 } }}
            initial={{ y: "200%", rotateX: "-90deg" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            we also provide the best service for you
          </motion.p>
        </div>
      </div>
      <ImageSlider controller={controller} />
    </div>
  );
};

export default Project;

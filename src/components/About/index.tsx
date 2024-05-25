import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

const words = ["Sustainable", "Solutions,", "Personalized", "for You."];

const About = () => {
  const ref = useRef(null);
  const onView = useInView(ref);
  const controllers = useAnimationControls();

  useEffect(() => {
    if (onView) {
      controllers.start("visible");
    }
  }, [onView]);

  return (
    <div className={styles.about}>
      <div className={styles.text_container}>
        {words.map((word, index) => (
          <motion.h1
            key={word}
            initial={{ y: "100%", rotateX: "-90deg" }}
            whileInView={{ y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          >
            {word}
          </motion.h1>
        ))}
      </div>
      <motion.div
        ref={ref}
        className={styles.images_container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0, 0, 0, 1] }}
        transition={{ delay: 0.5, duration: 1, times: [0, 0.2, 0.5, 0.7, 1] }}
      >
        <motion.div
          variants={{
            initial: { y: "-300%" },
            visible: { y: ["-300%", "-300%", "-300%", "-50%", "0%", "0%"] },
          }}

          initial="initial"
          animate={controllers}
          transition={{
            delay: 1.4,
            duration: 3,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        >
          <h1>Strategic Expertise</h1>
          <h2>
            Benefit from our teams's wealth of strategic expertise. We craft
            strategies that align with your business objectives.
          </h2>
          <div className={styles.images_block}>
            <motion.img
              initial={{ borderRadius: 0 }}
              whileInView={{ borderRadius: "20px" }}
              transition={{ delay: 1 }}
              src="/images/expertise1.jpg"
              alt="Strategic Expertise image"
            />
            <motion.img
              initial={{ borderRadius: 0 }}
              whileInView={{ borderRadius: "20px" }}
              transition={{ delay: 1 }}
              src="/images/expertise2.jpg"
              alt="Strategic Expertise image"
            />
          </div>
        </motion.div>
        <motion.div
          variants={{
            initial: { y: "-100%" },
            visible: { y: ["-100%", "-100%", "-100%", "100%", "100%", "100%"] },
          }}
          initial="initial"
          animate={controllers}
          transition={{
            delay: 1.4,
            duration: 3,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        >
          <h1>Expert Installation</h1>
          <h2>
            Benefit from our teams's wealth of strategic expertise. We craft
            strategies that align with your business objectives.
          </h2>
          <div className={styles.images_block}>
            <motion.img
              initial={{ borderRadius: 0 }}
              whileInView={{ borderRadius: "20px" }}
              transition={{ delay: 1 }}
              src="/images/panel1.jpg"
              alt="Expertise Installation image"
            />
            <motion.img
              initial={{ borderRadius: 0 }}
              whileInView={{ borderRadius: "20px" }}
              transition={{ delay: 1 }}
              src="/images/panel2.jpg"
              alt="Expertise Installation image"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;

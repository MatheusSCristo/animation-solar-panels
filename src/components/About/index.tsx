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

  const handleImageSelector = (imageNumber: number) => {
    controllers.start(imageNumber === 1 ? "1" : "2");
  };

  return (
    <div className={styles.about} id="about" >
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
        <div>
          <motion.span
            variants={{
              2: { width: "150px", background: "#202020" },
              1: { width: "75px", background: "#bebebe" },
            }}
            initial="1"
            animate={controllers}
            transition={{ duration: 0.5 }}
            onHoverStart={() => handleImageSelector(2)}
            className={styles.image_selector}
          />
          <motion.span
            variants={{
              2: { width: "75px", background: "#bebebe" },
              1: { width: "150px", background: "#202020" },
            }}
            initial="2"
            animate={controllers}
            transition={{ duration: 0.5 }}
            onHoverStart={() => handleImageSelector(1)}
            className={styles.image_selector}
          />
        </div>
      </div>
      <motion.div
        ref={ref}
        className={styles.images_container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0, 0, 0, 1] }}
        transition={{ delay: 0.5, duration: 1, times: [0, 0.2, 0.5, 0.7, 1] }}
      >
        <motion.div
          className={styles.block}
          variants={{
            initial: { y: "-300%" },
            visible: { y: ["-300%", "-300%", "-300%", "-50%", "0%", "0%"] },
            1: {
              y: ["0%", "-150%", "-200%", "-250%", "-300%", "-300%"],
              transition: { duration: 0.8 },
            },
            2: {
              y: ["-300%", "-150%", "-50%", "-25%", "0%", "0%"],
              transition: { duration: 0.8 },
            },
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
              src="/images/expertise1.jpg"
              alt="Strategic Expertise image"
            />
            <motion.img
              src="/images/expertise2.jpg"
              alt="Strategic Expertise image"
            />
          </div>
        </motion.div>
        <motion.div
          className={styles.block}
          variants={{
            initial: { y: "-100%" },
            visible: { y: ["-100%", "-100%", "-100%", "100%", "100%", "100%"] },
            1: {
              y: ["100%", "50%", "-50%", "-75%", "-100%", "-100%"],
              transition: { duration: 0.8 },
            },
            2: {
              y: ["-100%", "-50%", "0%", "75%", "100%", "100%"],
              transition: { duration: 0.8 },
            },
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
              src="/images/panel1.jpg"
              alt="Expertise Installation image"
            />
            <motion.img
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

import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import styles from "./style.module.scss";

const pages = [
  { name: "home", link: "home" },
  { name: "project", link: "project" },
  { name: "services", link: "services" },
  { name: "teams", link: "teams" },
];
const about = ["Our Mission", "Our Vision", "Our Values", "Our Team"];
const testimonials = [
  "Costumer Experiences",
  "Client Reviews",
  "Awards",
  "Certifications",
];

const Teams = () => {
  const ref = useRef(null);
  const inView = useInView(ref,{margin: "-400px"});
  const controller = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controller.start("animate");
    }
  }, [inView]);

  return (
    <div className={styles.container} id="teams">
      <div className={styles.wrapper} ref={ref}>
        <div className={styles.text_container}>
          <motion.h1
            variants={{ animate: { y: 0, rotateX: 0 } }}
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={controller}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          >
            Ready to Embrace a Greener
          </motion.h1>
          <motion.h1
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={controller}
            variants={{ animate: { y: 0, rotateX: 0 } }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          >
            Future? Explor Our Solar
          </motion.h1>
          <motion.h1
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={controller}
            variants={{ animate: { y: 0, rotateX: 0 } }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
          >
            Solutions Now!
          </motion.h1>
          <motion.button
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={controller}
            variants={{ animate: { y: 0, rotateX: 0 } }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeInOut" }}
          >
            Contact Us
          </motion.button>
        </div>
        <motion.div
          className={styles.footer}
          initial={{ y: "100%", opacity: 0 }}
          animate={controller}
          variants={{ animate: { y: 0, opacity: 1 } }}
          viewport={{ root: ref, margin: "400px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        >
          <h1>Solars.</h1>
          <div className={styles.texts}>
            <div className={styles.pages_list}>
              <h2>Pages</h2>
              {pages.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  smooth={true}
                  duration={200}
                  spy={true}
                  offset={-70}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={styles.about_list}>
              <h2>About Us</h2>
              {about.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className={styles.testimonials_list}>
              <h2>Testimonial</h2>
              {testimonials.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Teams;

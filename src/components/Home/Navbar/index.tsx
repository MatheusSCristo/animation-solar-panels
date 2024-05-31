import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styles from "./style.module.scss";

const Navbar = () => {
  const options = [
    { name: "home", link: "home", offset: -100 },
    { name: "project", link: "project", offset: -50 },
    { name: "services", link: "services", offset: -100 },
    { name: "teams", link: "teams", offset: -70 },
  ];

  return (
    <div className={styles.navbar}>
      <Link
        to={"home"}
        smooth={true}
        duration={200}
        spy={true}
        offset={-200}
      >
        <motion.h1
          initial={{ y: "200%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 2.5, ease: "easeIn" }}
        >
          Solars
        </motion.h1>
      </Link>
      <div>
        {options.map((option, index) => (
          <Link
            key={option.name}
            to={option.link}
            smooth={true}
            duration={200}
            spy={true}
            offset={option.offset}
            activeStyle={{ color: "#000000" }}
            style={{ color: "#b9b9b9", transition: "color 0.3s ease-in-out" }}
          >
            <motion.h2
              key={index}
              initial={{ y: "200%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.5,
                delay: 2.8 + index * 0.15,
                ease: "easeInOut",
              }}
            >
              {option.name}
            </motion.h2>
          </Link>
        ))}
      </div>
      <motion.button
        initial={{ y: "200%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2.8 + options.length * 0.2,
          ease: "easeInOut",
        }}
        className={styles.button}
      >
        Contact Us
      </motion.button>
    </div>
  );
};
export default Navbar;

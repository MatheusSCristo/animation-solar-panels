import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styles from "./style.module.scss";

const Navbar = () => {
  const options = [
    { name: "home", link: "home" },
    { name: "About Us", link: "about" },
    { name: "project", link: "project" },
    { name: "services", link: "services" },
    { name: "teams", link: "teams" },
  ];

  const link = "";

  return (
    <div className={styles.navbar}>
      <div>
        <motion.h1
          initial={{ y: "200%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 2.5, ease: "easeIn" }}
        >
          Solars
        </motion.h1>
      </div>
      <div>
        {options.map((option, index) => (
          <Link
            to={option.link}
            smooth={true}
            duration={200}
            spy={true}
            offset={-70}
          >
            <motion.h2
              style={{
                fontWeight: option.link == link ? "bold" : "normal",
                color: option.link == link ? "#000000" : "#b9b9b9",
              }}
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

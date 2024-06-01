import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import styles from "./style.module.scss";

const Navbar = () => {
  const options = [
    { name: "home", link: "home", offset: -200 },
    { name: "project", link: "project", offset: -50 },
    { name: "services", link: "services", offset: -100 },
    { name: "teams", link: "teams", offset: -70 },
  ];
  const [initial, setInitial] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <div className={styles.menu}>
       {!menuIsOpen && <span onClick={() => setMenuIsOpen(true)}>
          <IoMdMenu size={50} />
        </span>}
        {menuIsOpen && (
          <div className={styles.menu_wrapper}>
            <span onClick={()=>setMenuIsOpen(false)}>X</span>
            {options.map((option, index) => (
              <Link
                key={option.name}
                to={option.link}
                smooth={true}
                duration={200}
                spy={true}
                offset={option.offset}
                activeStyle={{ color: "#000000" }}
                style={{
                  color: "#b9b9b9",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                <motion.h2
                  style={{ color: initial && index == 0 ? "#000" : "" }}
                  onClick={() => {
                    if (initial) setInitial(false);
                  }}
                  key={index}
                  initial={{ x: "-200%",rotateX:"-90deg" }}
                  animate={{ x: 0,rotateX:"0deg" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeInOut",
                  }}
                >
                  {option.name}
                </motion.h2>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className={styles.navbar}>
        <Link to={"home"} smooth={true} duration={200} spy={true} offset={-200}>
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
                style={{ color: initial && index == 0 ? "#000" : "" }}
                onClick={() => {
                  if (initial) setInitial(false);
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
    </>
  );
};
export default Navbar;

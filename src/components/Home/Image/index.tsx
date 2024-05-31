import { motion } from "framer-motion";
import styles from "./style.module.scss";

const Image = () => {
  const data = [
    { number: 120, text: "Total Installations" },
    { number: 240, text: "Satisfied Customers" },
    { number: 15, text: "Countries Served" },
  ];

  return (
    <div>
      <div className={styles.image_container}>
        <motion.img
          initial={{ height: "0px" }}
          animate={{ height: "800px", borderRadius: [0, 0, 20, 30] }}
          transition={{
            duration: 0.8,
            delay: 3.4,
            ease: "easeInOut",
            times: [0, 0.5, 0.65, 1],
          }}
          src="/images/bigImage.jpg"
          loading="lazy"
        />
        <div className={styles.text_container}>
          <motion.h1
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 4, ease: "easeInOut" }}
          >
            Transforming Energy,Preserving
          </motion.h1>
          <motion.h1
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 4.3, ease: "easeInOut" }}
          >
            Nature,Our Solar Promise
          </motion.h1>
          <motion.h2
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 4.5, ease: "easeInOut" }}
          >
            Lorem ipsum dolor sit amet. Qui molestiae dignissimos ex maiores
            blanditiis eum dignissimos tempora. Eos quos error eos corporis
          </motion.h2>
          <motion.h2
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 4.9, ease: "easeInOut" }}
          >
            Eum nihil fugiat est dolores commodi eum galisum iste et officiis
            eius.
          </motion.h2>
          <motion.button
            initial={{ y: "100%", rotateX: "-90deg" }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 5, ease: "easeInOut" }}
          >
            Discover
          </motion.button>
        </div>
        <div className={styles.data_container}>
          <div className={styles.numbers}>
            {data.map((item, index) => (
              <div key={item.text}>
                <motion.h3
                  initial={{ y: "100%", rotateX: "-90deg" }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 4.5 + 0.3 * index,
                    ease: "easeInOut",
                  }}
                >
                  {item.number}+
                </motion.h3>
                <motion.h3
                  initial={{ y: "100%", rotateX: "-90deg" }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 4.6 + 0.3 * index,
                    ease: "easeInOut",
                  }}
                >
                  {item.text}
                </motion.h3>
              </div>
            ))}
          </div>
          <div className={styles.citation_container}>
            <motion.h2
              initial={{ y: "100%", rotateX: "-90deg" }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 5.4, ease: "easeInOut" }}
            >
              "Lorem ipsum dolor sit amet. Qui molestiae dignissimos ex maiores"
            </motion.h2>
            <motion.h2
              initial={{ y: "100%", rotateX: "-90deg" }}
              animate={{ y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 5.4, ease: "easeInOut" }}
            >
              Abraham Sa'ad -Founder
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;

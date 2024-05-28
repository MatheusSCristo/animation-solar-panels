import { motion } from "framer-motion";
import styles from "./style.module.scss";

const cards = [
  {
    name: "Alex Johnson",
    occupation: "Founder Bigcraft Residence",
    quote:
      "Attending Solar's green energy workshop was eye-opening. The team's passion for solar innovation is contagious,and they break down complex concepts into easy-to-understand insights.",
  },
  {
    name: "Emily Turner",
    occupation: "Owner of Emily's Family House",
    quote:
      "As a business committed to sustentability,finding the right solar partner was crucial. Solars exceeded our expectations. Their customized solar solutions.",
  },
  {
    name: "Jane Smith",
    occupation: "Sustainable Business Owner",
    quote:
      "Choosing Solars for our solar panel installation was the best decision we made for our home.The team's professionalism and attention to detail were exceptional.",
  },
];

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.h1
          initial={{ y: "100%", rotateX: "-90deg" }}
          whileInView={{ y: "0%", rotateX: "0" }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
        >
          Voices of Confidence
        </motion.h1>
        <motion.h1
          initial={{ y: "100%", rotateX: "-90deg" }}
          whileInView={{ y: "0%", rotateX: "0" }}
          transition={{ duration: 0.4, delay: 0.7, ease: "easeInOut" }}
        >
          What our clients say
        </motion.h1>
        <div className={styles.card_container}>
          {cards.map((card, index) => (
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: [0,0.2,0.4,0.7,1], y: "0%" }}
              viewport={{once:true}}
              transition={{
                duration: 1,
                delay: 0.3 + index * 0.3,
                ease: "easeInOut",
                times:[0,0.3,0.7,0.9,1]
              }}
            >
              <img src={`/images/person${index + 1}.jpg`} alt="Person image" />
              <div className={styles.text_container}>
                <p>"{card.quote}"</p>
                <h2>{card.name}</h2>
                <h3>{card.occupation}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

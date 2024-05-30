import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import styles from "./style.module.scss";

const slides = [
  { id: 3, title: "Colorado - EUA", year: 2019, owner: "Jhon Locke" },
  { id: 4, title: "Sydney - Australia", year: 2024, owner: "Carlos Juan" },
  {
    id: 5,
    title: "Campo Grande - Brazil",
    year: 2022,
    owner: "Pedro Ferreira",
  },
  { id: 3, title: "Colorado - EUA", year: 2019, owner: "Jhon Locke" },
  { id: 4, title: "Sydney - Australia", year: 2024, owner: "Carlos Juan" },
  {
    id: 5,
    title: "Campo Grande - Brazil",
    year: 2022,
    owner: "Pedro Ferreira",
  },
];

const ImageSlider = () => {
  return (
    <motion.div
      initial={{ height: "0" ,borderRadius: "0px" }}
      whileInView={{ height: "600px", borderRadius: "30px" }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
    >
      <Swiper
        className={styles.image_container}
        direction="vertical"
        spaceBetween={100}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {slides.map((item,index) => (
          <motion.div initial={{ height: "0", scaleX: "1.2" }}
          whileInView={{ height: "600px", scaleX: "1.0" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          key={index}>

          <SwiperSlide  className={styles.image_wrapper}>
            <motion.img
              initial={{ borderRadius: "0px",height:index==0?"0px":"100%" }}
              whileInView={{
                borderRadius: "30px",
                height: "100%",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
              src={`/images/panel${item.id}.jpg`}
              />
            <div className={styles.text_container}>
              <h1>{item.title}</h1>
              <div className={styles.subTitle_container}>
                <h2>{item.year}</h2>
                <span />
                <h2>Build by {item.owner}</h2>
              </div>
            </div>
          </SwiperSlide>
          </motion.div>

        ))}
      </Swiper>
    </motion.div>
  );
};

export default ImageSlider;

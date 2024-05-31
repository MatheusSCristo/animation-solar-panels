import { AnimationControls, motion } from "framer-motion";
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
];

const ImageSlider = ({ controller }: { controller: AnimationControls }) => {
  return (
    <motion.div
      initial={{ height: "0px", borderRadius: "0px" }}
      variants={{ animate: { height: "600px", borderRadius: "30px" } }}
      animate={controller}
      transition={{ duration: 1, delay: 0.3, ease: "easeInOut"}}
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
        {slides.map((item, index) => (
          <div
            key={item.id}
          >
            <SwiperSlide className={styles.image_wrapper} key={index}>
              <motion.img
                variants={{ animate: { borderRadius: "30px"}}}
                animate={controller}
                initial={{
                  borderRadius: "0px",
                }}
                transition={{ duration: 0.3, delay: 1, ease: "easeInOut" }}
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
          </div>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ImageSlider;

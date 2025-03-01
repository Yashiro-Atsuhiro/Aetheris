'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // スタイルをインポート
import Image from "next/image";
import styles from "./topstyle.module.css"

const images = [
  { src: '/FVC.png', alt: '「Phantom Echo」Digital Release' },
  { src: '/FVR.png', alt: '「幻想」Digital Release' },
  { src: '/FVL.png', alt: '「紅葉幽城」Digital Release' },
  {src:'/FVS.png', alt: '「山風の囁き」Digital Release '}
];

function ImageSwiper() {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        spaceBetween={40}
        slidesPerView={'auto'}
        loop={true}
        centeredSlides={true}  // スライドを中央に配置
        className={styles.swiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1080}
              className={styles.swiperImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSwiper;
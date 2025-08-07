import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import cBanner01 from "../../assets/img/customer_banner01.jpg";
import cBanner02 from "../../assets/img/customer_banner02.jpg";
import cBanner03 from "../../assets/img/customer_banner03.jpg";

// Swiper 모듈 등록

const slides = [
  {
    img: cBanner01,
    label: "Special Benefit.01",
    text: "주요대학 입시설명회 및 박람회 지원"
  },
  {
    img: cBanner02,
    label: "Special Benefit.02",
    text: "고3 수시 1차, 2차, 정시 집중 클래스"
  },
  {
    img: cBanner03,
    label: "Special Benefit.03",
    text: "TOEIC, TOEIC SPEAKING 집중반"
  }
];

const CustomBanner = () => {
  return (
    <div className="swiper customer-banner">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={2000}
        className="swiper-wrapper"
      >
        {[...slides, ...slides].map((slide, idx) => ( // 기존처럼 2번 반복
          <SwiperSlide
            key={idx}
            className="swiper-slide"
            style={{
              background: `url('${slide.img}') no-repeat center / cover`
            }}
          >
            <a href="">
              <span>{slide.label}</span>
              <p>{slide.text}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomBanner;

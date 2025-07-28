import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../../assets/css/main.css";

// 슬라이드 이미지 배열
const facilityImages = [
  "/src/assets/img/fac_main_img01.jpg",
  "/src/assets/img/fac_main_img02.jpg",
  "/src/assets/img/fac_main_img03.jpg",
  "/src/assets/img/fac_main_img04.jpg",
  "/src/assets/img/fac_main_img05.jpg",
  "/src/assets/img/fac_main_img06.jpg",
  "/src/assets/img/fac_main_img07.jpg",
  "/src/assets/img/fac_main_img08.jpg",
  "/src/assets/img/fac_main_img09.jpg",
  "/src/assets/img/fac_main_img10.jpg",
  "/src/assets/img/fac_main_img11.jpg",
  "/src/assets/img/fac_main_img12.jpg",
  "/src/assets/img/fac_main_img13.jpg",
];

const FacilitySlider = () => {
  const swiperRef = useRef(null);

  const handleInit = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const bg = activeSlide?.querySelector(".bg");
    const isFirstSlide =
      activeSlide?.getAttribute("data-swiper-slide-index") === "0";

    if (isFirstSlide && bg) {
      bg.style.transition = "none";
      bg.style.transitionDelay = "0s";
    }
  };

  const handleSlideChangeStart = (swiper) => {
    const previousIndex = swiper.previousIndex;
    const previousSlide = swiper.slides[previousIndex];
    const bg = previousSlide?.querySelector(".bg");
    const wasFirstSlide =
      previousSlide?.getAttribute("data-swiper-slide-index") === "0";

    if (wasFirstSlide && bg) {
      bg.style.transition = "0.5s";
      bg.style.transitionDelay = "0.4s";
    }
  };

  return (
    <section className="section fac-slider">
      {/* 상단 텍스트 */}
      <div className="title-box sub">
        <h2>Airport Motive</h2>
        <p>
          전세계 주요국가의 도시명으로 된 강의장은 수업외에 스터디룸으로
          사용하실 수 있습니다.
        </p>
      </div>

      {/* 슬라이드 영역 */}
      <div className="cont-box facSwiper">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={10}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { spaceBetween: 10 },
            1024: { spaceBetween: 30 },
          }}
          speed={2000}
          onInit={handleInit}
          onSlideChangeTransitionStart={handleSlideChangeStart}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="swiper-wrapper"
        >
          {facilityImages.map((img, index) => (
            <SwiperSlide key={index} className="swiper-slide slide">
              <img src={img} alt={`facility-${index + 1}`} />
              <div className="bg"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 하단 텍스트 */}
      <div className="title-box main">
        <h2>Airport Motive</h2>
        <p>
          전세계 주요국가의 도시명으로 된 강의장은 수업외에
          <br />
          스터디룸으로 사용하실 수 있습니다.
        </p>
        <ul>
          <li>전 강의실 인포커스 광각 빔 프로젝터</li>
          <li>수강생 인트라넷 전자 출석 시스템</li>
          <li>모험이 아닌 실제 항공기 동체 기내실습실</li>
          <li>시설 내 모든 층에 34인치 실시간 인포메이션 모니터 설치</li>
          <li>항공운항과 입시설명회 및 박람회를 위한 대형 시설</li>
          <li>수강생의 편의를 위한 스카이 라운지와 테라스</li>
        </ul>
      </div>
    </section>
  );
};

export default FacilitySlider;

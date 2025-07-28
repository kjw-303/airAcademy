import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function DualVerticalSwiper() {
  return (
    <div className="h-[500px] flex flex-col justify-between">
      {/* 상단 슬라이드 (위 → 아래) */}
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        slidesPerView={3}          // 동시에 보이는 슬라이드 개수
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,                 // 끊김 없이 연속
          disableOnInteraction: false,
          reverseDirection: false,  // 기본 방향
        }}
        speed={3000}                // 속도 (ms)
        className="h-1/2"
      >
        <SwiperSlide>
            <li class="epilogue">
                <a href="">
                    <em style=""></em>
                    <h5><div>김시아<span>수강생</span></div> 2024학년도 호서대학교 외 1개 대학 <br/>합격을 축하드립니다!</h5>
                </a>
            </li>
        </SwiperSlide>
      </Swiper>

      {/* 하단 슬라이드 (아래 → 위) */}
      <Swiper
        direction="vertical"
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,   // 반대 방향
        }}
        speed={3000}
        className="h-1/2 mt-5"
      >
        <SwiperSlide><img src="/img/banner5.jpg" alt="slide5" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner6.jpg" alt="slide6" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner7.jpg" alt="slide7" /></SwiperSlide>
        <SwiperSlide><img src="/img/banner8.jpg" alt="slide8" /></SwiperSlide>
      </Swiper>
    </div>
  );
}

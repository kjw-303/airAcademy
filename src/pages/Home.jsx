import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import thumBanner from "../assets/img/thum_banner.jpg";

export default function Home() {
  return (
    <div className="">
      <Swiper modules={[Pagination, Autoplay]} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }} pagination={{ clickable: true }} className="">
        <SwiperSlide>
          <img src={thumBanner} className="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thumBanner} className="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

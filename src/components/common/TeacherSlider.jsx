import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "../../assets/css/main.css"; // 기존 CSS 연결
import imgKorean from "../../assets/img/logo/img_logo_korean.png";
import imgCathay from "../../assets/img/logo/img_logo_cathay.png";
import imgEmirates from "../../assets/img/logo/img_logo_emirates.png";

// 강사 데이터 (나중에 API나 JSON으로도 분리 가능)
const teachers = [
  {
    id: "thgn-01",
    name: "양은경",
    job: "강사님",
    description: "대한항공 객실훈련원\n최연소 교육강사 출신\n실무면접관",
    logo: imgKorean,
    logoAlt: "korean air",
  },
  {
    id: "thgn-13",
    name: "이효정",
    job: "강사님",
    description: "케세이퍼시픽항공사\n객실승무원 경력 31년",
    logo: imgCathay,
    logoAlt: "cathay pacific",
  },
  {
    id: "thgn-02",
    name: "신해리",
    job: "강사님",
    description: "대한항공\n아시아나 승무원\n최다 합격생 배출",
    logo: imgKorean,
    logoAlt: "koreann air",
  },
  {
    id: "thgn-12",
    name: "심유란",
    job: "강사님",
    description: "에메레이트항공\n사무장",
    logo: imgEmirates,
    logoAlt: "emirates",
  },
  {
    id: "thgn-03",
    name: "한경주",
    job: "강사님",
    description: "주요대학 항공과\n최다 합격생 배출",
    logo: imgKorean,
    logoAlt: "koreann air",
  },
  {
    id: "thgn-04",
    name: "정은영",
    job: "강사님",
    description: "대한항공 객실승무원\n15년 경력",
    logo: imgKorean,
    logoAlt: "koreann air",
  },
  {
    id: "thgn-15",
    name: "임현선",
    job: "강사님",
    description: "외항사 취업전략과\n실전 1:1피드백\n전문 강사",
    logo: imgEmirates,
    logoAlt: "emirates",
  },
  {
    id: "thgn-05",
    name: "임선경",
    job: "강사님",
    description: "각 항공사 분석 및\n이미지메이킹\n전문 강사",
    logo: imgKorean,
    logoAlt: "koreann air",
  },
  {
    id: "thgn-16",
    name: "장효주",
    job: "강사님",
    description: "영어인터뷰 및\n영어자문읽기\n전문 강사",
    logo: imgKorean,
    logoAlt: "koreann air",
  },
];

const TeacherSlider = () => {
  return (
    <section className="section tch-slider">
      <div className="wrap">
        <div className="title-box">
          <div>
            <h2>Korea Master Class</h2>
            <p className="pc-show">
              엄격한 기준으로 강사진을 선발, 강사의 강의력과 수강생의 만족도로만
              <br />
              평가하며 분야별 전임 강사제도를 도입해 운영하고 있습니다.
            </p>
            <p className="mo-show">
              강사의 강의력과 수강생의 만족도로만 평가하며
              <br />
              분야별 전임 강사제도를 도입해 운영하고 있습니다.
            </p>
          </div>
          <a href="/2025/about/teacher.asp" className="link-btn">
            국가대표급 라인업 보러가기<span className="arrow"></span>
          </a>
        </div>

        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          freeMode={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          allowTouchMove={false}
          modules={[Autoplay]}
          className="classSwiper teacher-list"
          breakpoints={{
            320: { spaceBetween: 10 },
            480: { spaceBetween: 10 },
            640: { spaceBetween: 10 },
            1024: { spaceBetween: 20 },
          }}
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.id} className={`tch-item ${teacher.id}`}>
              <div className="logo korean">
                <img src={teacher.logo} alt={teacher.logoAlt} />
              </div>
              <div className="name">
                <div>{teacher.name}</div>
                <div className="job">{teacher.job}</div>
              </div>
              <div className="discription">
                {teacher.description.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
              {/* 필요 시 상세 커리큘럼도 추가 */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeacherSlider;

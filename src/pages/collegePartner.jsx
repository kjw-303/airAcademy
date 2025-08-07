import React, { useState }  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GNB from "../components/common/Gnb";
import ReviewSlider from "../components/common/ReviewSlider";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

// 각 대학별 설명 컴포넌트 임포트
import PartnerKmu from "../components/university/PartnerKmu";
import PartnerLcb from "../components/university/PartnerLcb";
import PartnerBcu from "../components/university/PartnerBcu";
import PartnerChodang from "../components/university/PartnerChodang";
import PartnerJei from "../components/university/PartnerJei";
import PartnerSeowon from "../components/university/PartnerSeowon";
import PartnerKdu from "../components/university/PartnerKdu";
import PartnerSangji from "../components/university/PartnerSangji";
import PartnerSeoyeong from "../components/university/PartnerSeoyeong";
import PartnerDowon from "../components/university/PartnerDowon";
import PartnerDongseoul from "../components/university/PartnerDongseoul";
import PartnerHowon from "../components/university/PartnerHowon";
import PartnerGangdong from "../components/university/PartnerGangdong";
import PartnerJoongbu from "../components/university/PartnerJoongbu";
import PartnerSehan from "../components/university/PartnerSehan";
import PartnerYeonsung from "../components/university/PartnerYeonsung";
import PartnerDaelim from "../components/university/PartnerDaelim";
import PartnerScau from "../components/university/PartnerScau";

const partners = [
  { key: "kmu",        name: "국민대학교",      className: "logo01", value: "국민대학교",     Component: PartnerKmu },
  { key: "lcb",        name: "lcb",            className: "logo02", value: "lcb",           Component: PartnerLcb },
  { key: "bcu",        name: "bcu",            className: "logo03", value: "bcu",           Component: PartnerBcu },
  { key: "chodang",    name: "초당대학교",      className: "logo04", value: "초당대학교",     Component: PartnerChodang },
  { key: "jei",        name: "인천재능대학교",  className: "logo05", value: "인천재능대학교", Component: PartnerJei },
  { key: "seowon",     name: "서원대학교",      className: "logo06", value: "서원대학교",     Component: PartnerSeowon },
  { key: "kdu",        name: "kdu",            className: "logo07", value: "kdu",           Component: PartnerKdu },
  { key: "sangji",     name: "상지대학교",      className: "logo08", value: "상지대학교",     Component: PartnerSangji },
  { key: "seoyeong",   name: "서영대학교",      className: "logo09", value: "서영대학교",     Component: PartnerSeoyeong },
  { key: "dowon",      name: "두원공과대학교",  className: "logo10", value: "두원공과대학교", Component: PartnerDowon },
  { key: "dongseoul",  name: "동서울대학교",    className: "logo11", value: "동서울대학교",   Component: PartnerDongseoul },
  { key: "howon",      name: "호원대학교",      className: "logo12", value: "호원대학교",     Component: PartnerHowon },
  { key: "gangdong",   name: "강동대학교",      className: "logo13", value: "강동대학교",     Component: PartnerGangdong },
  { key: "joongbu",    name: "중부대학교",      className: "logo14", value: "중부대학교",     Component: PartnerJoongbu },
  { key: "sehan",      name: "세한대학교",      className: "logo15", value: "세한대학교",     Component: PartnerSehan },
  { key: "yeonsung",   name: "연성대학교",      className: "logo16", value: "연성대학교",     Component: PartnerYeonsung },
  { key: "daelim",     name: "대림대학교",      className: "logo17", value: "대림대학교",     Component: PartnerDaelim },
  { key: "scau",       name: "scau",           className: "logo18", value: "scau",          Component: PartnerScau },
];


const CollegePartner = () => {
const [selectedIdx, setSelectedIdx] = useState(0);

  return (
  <div id="wrap" className="sub">
    <GNB isMain={false} />
    <div>
       <div className="academy-main sub-pt">
          <div className="sub-title-area">
            <div className="text01">Industry-Academic Cooperation University</div>
            <h3>산학협력대학</h3>
            <div className="text02">
              코리아항공운항과학원은 다양하고 전문적인 교류를 통해 대한민국 교육산업을<br />
              이끌어 나갈 빛나는 인재들로 거듭날 수 있도록 노력하겠습니다.
            </div>
          </div>
          {/* PC 로고 탭 */}
          <div className="cooperation-logo">
            {partners.map((p, i) => (
              <button
                key={p.key}
                type="button"
                className={`${p.className} univ-btn${selectedIdx === i ? " on" : ""}`}
                data-index={i}
                value={p.name}
                onClick={() => setSelectedIdx(i)}
                aria-label={p.name}
              />
            ))}
          </div>
          {/* 모바일 Swiper 로고 탭 */}
          <div className="cooperation-logo swiper-logo">
            <Swiper
              slidesPerView="auto"
              loop={true}
              className="swiper-wrapper"
              spaceBetween={10}
            >
              {partners.map((p, i) => (
                <SwiperSlide key={p.key} className="swiper-slide">
                  <button
                    type="button"
                    className={`${p.className} univ-btn${selectedIdx === i ? " on" : ""}`}
                    data-index={i}
                    value={p.name}
                    onClick={() => setSelectedIdx(i)}
                    aria-label={p.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* partner 설명 */}
          <ul className="partner-list">
            {partners.map((p, i) => (
              <li key={p.key} style={{ display: selectedIdx === i ? "block" : "none" }}>
                <p.Component />
              </li>
            ))}
          </ul>
        </div>
      </div>

    {/* 수강생 후기 */}
    <div className="sub-review">
      <ReviewSlider />
    </div>

    {/* benefit */}
    {/* <Benefit /> */}

    {/* 강사진 슬라이더 */}
    <TeacherSlider />

    {/* 시설 슬라이더 */}
    <Facility />

    {/* 간편수강료 조회 */}
    <TuitionForm />

    {/* 푸터 */}
    <Footer />
  </div>
 
);
};

export default CollegePartner;

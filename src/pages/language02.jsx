import React from "react";
import GNB from "../components/common/Gnb";
import ReviewSlider from "../components/common/ReviewSlider";

import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

import langImg01 from "/src/assets/img/img_language01.png";
import langImg02 from "/src/assets/img/img_language02.png";
import langImg03 from "/src/assets/img/img_language03.png";

const Language = () => (
  <div id="wrap" className="sub">
    <GNB isMain={false} />

    <div>
      <div className="academy-main sub-pt">
            <div className="sub-title-area">
                <div className="text01">Language Course</div>
                <h3>토익스피킹</h3>
                <div className="text02">이론부터 문제풀이까지 항공운항과 대입 면접에 최적화된 토익 과정을 배울 수 있습니다.<br/>차근차근 토익 700점 완성 기본반부터 다양한 문제풀이, 토익 900점 완성 실전반까지 수준별 수업이 진행됩니다.</div>
                <div className="langs-top">
                    <div className="box">
                        <img src={langImg01} alt="" className="img" />
                        <div>
                            <div className="tit">모집인원</div>
                            <div className="text">15명 내외</div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={langImg02} alt="" className="img" />
                        <div>
                            <div className="tit">수업시간</div>
                            <div className="text">주2회 · 회당 3시간</div>
                        </div>
                    </div>
                    <div className="box">
                        <img src={langImg03} alt="" className="img" />
                        <div>
                            <div className="tit">교육내용</div>
                            <div className="text">토익 기본부터 실전까지</div>
                        </div>
                    </div>
                </div>
            </div>
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

export default Language;

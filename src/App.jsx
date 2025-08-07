import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GNB from "./components/common/Gnb";
import "./App.css";
import MainBanner from "./components/common/MainBanner";
import QuickMenu from "./components/common/QuickMenu";
import Curriculum from "./components/common/Curriculum";
import TeacherSlider from "./components/common/TeacherSlider";
import ReviewSlider from "./components/common/ReviewSlider";
import Facility from "./components/common/Facility";
import Footer from "./components/common/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GNB isLogin={false} isMain={true} activeCampus="gangnam"/>
      <MainBanner/>
      <QuickMenu />
      <section className="section main-review">
        <div className="wrap">
          <div className="counter-box title-box">
            <h3 className="mCounter">
              <span className="counter">1,145</span>
              <div>
                <strong>합격생이 직접 작성한 합격후기</strong>
                코리아항공운항과 입시반 대학합격자 다수 배출!
                <br />
                꿈이 아닌 현실에 한걸음 다가선 당신을 응원합니다.
              </div>
            </h3>
            <a href="/airline_cl" className="link-btn">
              전체 합격후기 보러가기<span className="arrow"></span>
            </a>
          </div>
        </div>
      </section>
      {/* 커리큘럼 */}
      <Curriculum />
      {/* 강사진 슬라이더 */}
      <TeacherSlider />
      {/* 수강생 후기 */}
      <ReviewSlider/>
      {/* 시설 사진 */}
      <div className="main">
      <Facility isMain={true}/>
      </div>
      {/* 푸터 */}
      <Footer/>
    </>
  );
}

export default App;

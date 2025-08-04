import React from "react";
import GNB from "../components/common/Gnb";
import ReviewSlider from "../components/common/ReviewSlider";

import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

import curriImg from "/src/assets/img/img_curri_top03.png";

const Curriculum = () => (
  <div id="wrap" className="sub">
    <GNB isMain={false} />

    <div>
      <div className="academy-main sub-pt">
        <div className="sub-title-area">
          <div className="text01">Regular Curriculum</div>
          <h3>예비 고3 집중반</h3>
          <div className="text02">
            미리 준비를 시작한 학생들은 대학별 지원유형에 따라 합격률을 높일 수 있는 가능성을 대비할 수 있습니다.<br />
            개인분석 및 입시전략을 통해 체계적인 입시면접을 제시하고 최고 수준의 강사진들이 세심하게 잡아 드립니다.
          </div>
        </div>
        <div className="curri-banner">
          <img src={curriImg} alt="Aviation Operations Department Class" />
          <h4>Aviation Operations Department Class</h4>
        </div>
        <div className="curri-info-container">
          <div className="title">
            코리아항공운항과학원은<br />
            <span>대학별 입시전형 트렌드에 맞춘 체계적인 교육</span>을 통해<br />
            <span>메인대학 100%합격을 목표</span>로 하고 있습니다.
          </div>
          <div className="curri-tit">
            <h5>
             항공운항과 <span>입시 기본과정</span>
            </h5>
            <div className="badge">2개월 · 월 4회</div>
          </div>
          <div className="curriculum">
            <ul>
              <li>
                <div className="step">STEP 1</div>
                <div>고1&고2 내신관리 전략 및 대학입시 요강 분석</div>
              </li>
              <li>
                <div className="step">STEP 2</div>
                <div>항공경영과 대학 소개 및 입시분석, 자기분석</div>
              </li>
              <li>
                <div className="step">STEP 3</div>
                <div>스토리텔링을 통한 자기소개, 지원동기 작성 및 첨삭</div>
              </li>
              <li>
                <div className="step">STEP 4</div>
                <div>면접매너 & 이미지메이킹</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="step">STEP 5</div>
                <div>승무원, 지상직 직무이해</div>
              </li>
              <li>
                <div className="step">STEP 6</div>
                <div>보이스 트레이닝</div>
              </li>
              <li>
                <div className="step">STEP 7</div>
                <div>1분 스피치 & 면접답변</div>
              </li>
              <li>
                <div className="step">STEP 8</div>
                <div>
                  모의면접 <span className="badge">영상 촬영</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="curri-tit block">
            <h5>
              항공운항과 <span>입시 심화과정</span>
            </h5>
            <div className="sub">개인별 매원 면접수업 2과목 선택</div>
          </div>
          <div className="curriculum">
            <ul>
              <li>
                <div className="step">CHOICE 1</div>
                <div>기초보강반</div>
              </li>
              <li>
                <div className="step">CHOICE 2</div>
                <div>스토리텔링을 통한 자기소개, 지원동기 작성 및 첨삭</div>
              </li>
              <li>
                <div className="step">CHOICE 3</div>
                <div>면접매너 & 이미지메이킹</div>
              </li>
              <li>
                <div className="step">CHOICE 4</div>
                <div>1분 스피치 & 면접답변</div>
              </li>
              <li>
                <div className="step">CHOICE 5</div>
                <div>영어 인터뷰 & 영어 자문읽기</div>
              </li>
              <li>
                <div className="step">CHOICE 6</div>
                <div>헤어 & 메이크업</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="step">CHOICE 7</div>
                <div>롤플레이</div>
              </li>
              <li>
                <div className="step">CHOICE 8</div>
                <div>보이스 트레이닝</div>
              </li>
              <li>
                <div className="step">CHOICE 9</div>
                <div>모의면접 <span className="badge">영상 촬영</span></div>
              </li>
            </ul>
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

export default Curriculum;

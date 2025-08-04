import React from "react";
import GNB from "../components/common/Gnb";
import ReviewSlider from "../components/common/ReviewSlider";

import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

import curriImg from "/src/assets/img/img_curri_top01.png";

const Curriculum = () => (
  <div id="wrap" className="sub">
    <GNB isMain={false} />

    <div>
      <div className="academy-main sub-pt">
        <div className="sub-title-area">
          <div className="text01">Regular Curriculum</div>
          <h3>항공운항과 대학입시반</h3>
          <div className="text02">
            항공운항과 합격을 위해서는 체계적인 입시전략과 매년 변하는 면접 트렌드 분석이 반드시 필요합니다.<br />
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
              항공과 <span>입시 기본과정</span>
            </h5>
            <div className="badge">2개월 · 월 4회</div>
          </div>
          <div className="curriculum">
            <ul>
              <li>
                <div className="step">STEP 1</div>
                <div>항공운항과 대학소개 및 입시분석/오리엔테이션</div>
              </li>
              <li>
                <div className="step">STEP 2</div>
                <div>자기분석 / 이미지메이킹</div>
              </li>
              <li>
                <div className="step">STEP 3</div>
                <div>면접 이미지메이킹 / 보이스트레이닝</div>
              </li>
              <li>
                <div className="step">STEP 4</div>
                <div>자기분석2</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="step">STEP 5</div>
                <div>보이스메이킹</div>
              </li>
              <li>
                <div className="step">STEP 6</div>
                <div>항공산업 및 사회 이슈 / 모의면접</div>
              </li>
              <li>
                <div className="step">STEP 7</div>
                <div>기출문제 분석 / 모의면접</div>
              </li>
              <li>
                <div className="step">STEP 8</div>
                <div>
                  실전면접 준비 <span className="badge">영상 촬영</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="curri-tit block">
            <h5>
              항공과 <span>입시 심화과정 선택 반복수강</span>
            </h5>
            <div className="sub">부족한 수업, 더 듣고 싶은 수업 선택 심화과정</div>
          </div>
          <div className="curriculum">
            <ul>
              <li>
                <div className="step">CHOICE 1</div>
                <div>이미지메이킹1</div>
              </li>
              <li>
                <div className="step">CHOICE 2</div>
                <div>이미지메이킹2</div>
              </li>
              <li>
                <div className="step">CHOICE 3</div>
                <div>자기소개 &amp; 지원동기 작성 및 스피치</div>
              </li>
              <li>
                <div className="step">CHOICE 4</div>
                <div>인하공전 기출문제 답변 작성</div>
              </li>
              <li>
                <div className="step">CHOICE 5</div>
                <div>한서대 기출문제 답변 작성</div>
              </li>
              <li>
                <div className="step">CHOICE 6</div>
                <div>답변 작성법</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="step">CHOICE 7</div>
                <div>답변 기반 스피치</div>
              </li>
              <li>
                <div className="step">CHOICE 8</div>
                <div>영어지문읽기</div>
              </li>
              <li>
                <div className="step">CHOICE 9</div>
                <div>입시 영어 인터뷰</div>
              </li>
              <li>
                <div className="step">CHOICE 10</div>
                <div>모의면접 피드백</div>
              </li>
              <li>
                <div className="step">CHOICE 11</div>
                <div>헤어 &amp; 메이크업</div>
              </li>
            </ul>
          </div>
          <div className="curri-tit">
            <h5>
              항공과 <span>합격케어시스템</span>
            </h5>
          </div>
          <div className="curriculum">
            <ul>
              <li>
                <div className="step">CARE 1</div>
                <div>
                  코리아리크루팅 <span className="badge">실전면접 레벨테스트</span>
                </div>
              </li>
              <li>
                <div className="step">CARE 2</div>
                <div>
                  항공과 대학교수 직강 <span className="badge">주차별 다양한 대학교 진행</span>
                </div>
              </li>
              <li>
                <div className="step">CARE 3</div>
                <div>
                  합격자와의 소통 <span className="badge">멘토링, 간담회, 파티</span>
                </div>
              </li>
              <li>
                <div className="step">CARE 4</div>
                <div>주요 대학면접 고사 당일 면접지원</div>
              </li>
              <li>
                <div className="step">CARE 5</div>
                <div>항공과 대학교 릴레이특강</div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="step">CARE 6</div>
                <div>
                  고3 수시집중 대비반 <span className="badge">상,중,하 등급별 진행</span>
                </div>
              </li>
              <li>
                <div className="step">CARE 7</div>
                <div>
                  고3 집중스터디 <span className="badge">강사, 멘토, 선배 스터디</span>
                </div>
              </li>
              <li>
                <div className="step">CARE 8</div>
                <div>
                  전문멘토 대학 원서상담 <span className="badge">1:1 집중진행</span>
                </div>
              </li>
              <li>
                <div className="step">CARE 9</div>
                <div>항공과 대학교 대규모 입시박람회</div>
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

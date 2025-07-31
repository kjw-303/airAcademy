import React from 'react';
import GNB from "../components/common/Gnb";
import arrowImg from "../assets/img/img_arrows.png";
import thumImg from "../assets/img/img_academy_thum01.png";
import "../assets/css/sub.css";
import TeacherSlider from "../components/common/TeacherSlider";
import Facility from "../components/common/Facility";
import Footer from "../components/common/Footer";
import TuitionForm from "../components/common/TuitionForm";

export const About = () => {
  return (
    <>
    <div id="wrap" className="sub">
        {/* GNB */}
        <GNB isLogin={false} activeCampus="gangnam" />
        {/* 메인 컨텐츠 */}
        <div className="academy-main">
        <div className="bg-top">
          <h3>
            The First <br /> Dream of Flight
          </h3>
          <div className="bar"></div>
          <div className="text">
            <div>
              코리아교육그룹은 ‘미래를 만드는 꿈의 공방’을 모토로 교육이 곧 미래의
              비전이라는 설립취지에 따라 교육서비스를 핵심사업으로 성장해 가고 있는
              전문 기업입니다. 저희 코리아교육그룹은 10여 년 전 컴퓨터그래픽과 디자인
              교육을 시작으로 온라인 원격교육과 뷰티관련 교육, 게임개발 교육,
              엔터테인먼트 교육, 반려동물 케어 교육, 항공승무원 및 서비스인력
              양성교육 등 다양한 교육서비스의 확장을 통해 전문 인력을 양성해
              왔습니다. 항공서비스 전문인력 양성을 위해 코리아승무원학원을 런칭하고
              교육사업 분야를 넓혀가고 있습니다.
            </div>
            <div className="mt">
              코리아항공운항과학원은 시시각각 변하는 현장의 트렌드를 교육해 반영하고
              선배이자 멘토인 베테랑 강사진과 함께 승무원의 꿈을 이룰 수 있도록 예비
              승무원들과 창공의 꿈에 도전하고 있습니다.
            </div>
            <div className="mt">
              교육서비스의 더 나은 미래를 위해 전 임직원이 함께 움직이는
              코리아교육그룹의 힘찬 발걸음을 성원하고 지켜봐 주시기 바랍니다.
              감사합니다.
            </div>
          </div>
        </div>

        {/* Promises */}
        <div className="contents">
          <div className="info">
            <h3>Promises</h3>
            <ul>
              <li>모든 예비승무원들의 고민을 함께하고, 함께울고 웃으며 언제나 함께합니다.</li>
              <li>
                형식적인수업보다 검증된 정보와 가장 최적화된 우수한 교육프로그램으로
                <br />
                수강생들의 목표를 현실로 만드는것에 최선을 다합니다.
              </li>
              <li>
                수강생들의 1:1 입시담당시스템으로 모든 수강생들의 취업을 책임지고 최선을 다합니다.
              </li>
              <li>
                가장 좋은 교육환경과 커뮤니케이션 시스템에서 수강하실 수 있도록 지원을 아끼지
                않습니다.
              </li>
              <li>최고수준의 강사진은 절대 형식적인 수업은 하지않습니다.</li>
              <li>각 분야의 최고 전문가집단으로 최고수준의 교육서비스를 제공하겠습니다.</li>
              <li>
                항공사 준비생들에게 제2외국어는 필수가 되어가고 있습니다.
                <br />
                영어뿐아니라 중국어와 일본어 회화를 반복교육을 진행하고 있습니다.
              </li>
            </ul>
            <div className="arrow">
              <img src={arrowImg} alt="화살표" />
            </div>
          </div>
          <div className="img"><img src={thumImg} alt="항공운항" /></div>
        </div>
        {/* 강사진 슬라이더 */}
        <TeacherSlider />
        {/* 시설 사진 */}
        <div className="main">
        <Facility isMain={false}/>
        {/* 수강료 조회 */}
        <TuitionForm/>
        </div>
      </div>
    </div>
    {/* 푸터 */}
    <Footer/>
    </>
  )
}
export default About;

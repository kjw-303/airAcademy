import React from "react";
import GNB from "../components/common/Gnb";
import Facility from "../components/common/Facility";
import TeacherSlider from "../components/common/TeacherSlider";
import TuitionForm from "../components/common/TuitionForm";
import Footer from "../components/common/Footer";

const Facilities = () => {
  return (
    <div id="wrap" className="sub facilities">
      <GNB isMain={false} />

      <div>
        <div className="academy-main facilities">
          <div className="bg-top">
            <h3>
              Airport Motive<br />
              Visual Effect
            </h3>
            <div className="bar"></div>
            <div className="text">
              <div className="bold">
                전세계 주요국가 22개 도시명으로 된 강의장은 수업외에<br />
                스터디룸으로 사용되며 인포메이션에서 신청 후 사용하실 수 있습니다.
              </div>
              <div className="mt">
                전 강의실 인포커스 광각 빔 프로젝터<br />
                수강생 인트라넷 전자 출석 시스템<br />
                모험이 아닌 실제 항공기 동체 기내실습실<br />
                시설 내 모든 층에 34인치 실시간 인포메이션 모니터 설치<br />
                항공운항과 입시설명회 및 박람회를 위한 대형 시설<br />
                수강생의 편의를 위한 스카이 라운지와 테라스
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 시설 슬라이더 */}
      <Facility isMain={false}/>

      {/* 강사진 슬라이더 */}
      <TeacherSlider />

      {/* 간편수강료 조회 */}
      <TuitionForm/>

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Facilities;
